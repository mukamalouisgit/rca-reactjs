import React, { Component } from 'react';
import './style.css'

export class Footer extends Component {
    render() {
        return (
            <div className="fixed-footer">
                <p>Copyright &copy; 2023 RCA</p>
            </div>
        )
    }
}

export default Footer;