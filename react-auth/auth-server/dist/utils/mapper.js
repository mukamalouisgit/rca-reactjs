"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExists = exports.toPromise = exports.comparePasswords = exports.toUserDto = void 0;
const bcrypt = require("bcrypt");
const toUserDto = (data) => {
    const { id, names, email, is_active, profile_photo, role: { role_id, role_name } } = data;
    let userDto = {
        id,
        names,
        email,
        is_active,
        profile_photo,
        role: { role_id, role_name },
    };
    return userDto;
};
exports.toUserDto = toUserDto;
const comparePasswords = async (userPassword, currentPassword) => {
    return await bcrypt.compare(currentPassword, userPassword);
};
exports.comparePasswords = comparePasswords;
const toPromise = (data) => {
    return new Promise(resolve => { resolve(data); });
};
exports.toPromise = toPromise;
async function isExists(id, repo) {
    try {
        const obj = await repo.findOne({ where: { id: id } });
        if (obj) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}
exports.isExists = isExists;
//# sourceMappingURL=mapper.js.map