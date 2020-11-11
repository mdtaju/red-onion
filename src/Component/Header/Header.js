import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../Resources/logo2.png";
import Auth, { AuthChange } from '../SignUpForm/Auth';
import "./Header.css"

const Header = (props) => {
    const UserAuthChange = AuthChange()
    const AuthState = Auth()
    return (
        <>
           <nav className="container navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav_item_block d-flex align-items-center">
                            <Link className="nav-link" to="/placeorder">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                </svg>
                                <sup className="badge badge-pill badge-danger cart_counter">{props.FoodItems}</sup>
                            </Link>
                        </li>
                        <li className="nav-item nav_item_hide d-flex align-items-center">
                            <Link className="nav-link" to="/placeorder">Shop<sup className="badge badge-pill badge-danger cart_counter">{props.FoodItems}</sup></Link>
                        </li>
                        {
                            UserAuthChange !== null ?
                            <>
                                <li className="nav-item nav_item_block d-flex align-items-center">
                                    <button onClick={AuthState.SignOutUser} className="main_btn rounded-pill">Sign out</button>
                                </li>
                                <li className="nav-item nav_item_hide d-flex align-items-center">
                                    <button onClick={AuthState.SignOutUser} className="nav-link">Sign out</button>
                                </li>
                            </> :
                            <>
                                <li className="nav-item d-flex align-items-center">
                                    <Link className="nav-link" to="/signup">Login</Link>
                                </li>
                                <li className="nav-item nav_item_block d-flex align-items-center">
                                    <Link className="nav-link" to="/signup">
                                        <button className="main_btn rounded-pill">Sign up</button>
                                    </Link>
                                </li>
                                <li className="nav-item nav_item_hide d-flex align-items-center">
                                    <Link className="nav-link" to="/signup">Sign up</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;