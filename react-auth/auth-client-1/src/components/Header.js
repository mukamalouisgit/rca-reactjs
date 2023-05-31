import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Header = ({ user }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/signin");
    };


    return (
        <div>
            { /** Fixed navbar */}

            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-primary fixed-top bg-primary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/"><i className="bi bi-egg-fried"></i> Preparation</Link>
                            <button className="navbar-toggler  text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon text-white"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About us</Link>
                                    </li>
                                </ul>
                                <div className="navbar-text text-center px-5 d-flex">
                                    {user ? (
                                        <>
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item">

                                                    <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" className="rounded-circle"
                                                        width="35" height="35" alt='Profile' />
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdown" role="button"
                                                        data-bs-toggle="dropdown" aria-expanded="false">
                                                        {user.names}
                                                    </Link>
                                                    <ul className="dropdown-menu text-success" aria-labelledby="navbarDropdown">
                                                        <li className="nav-item">
                                                            <Link className="dropdown-item text-muted" to="/signup">New account</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="dropdown-item text-muted" to="/profile">Your profile</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link className="dropdown-item text-muted" to="/reset-password">Reset password</Link>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li className="nav-item">
                                                            <button className="btn btn-link text-decoration-none dropdown-item text-muted" onClick={handleSignOut}>Logout</button>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </>
                                    ) : (
                                        <>
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item">
                                                    <button className="btn btn-outline-warning border-white" onClick={handleSignOut}>Sign In</button>
                                                </li>
                                            </ul>
                                        </>)}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

    )
}
export default Header;