import React, { useState } from 'react';
import './SignUpForm.css';
import Logo from '../../Resources/logo2.png';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const SignUpForm = () => {
    const [signIn, setSignIn] = useState("sign_up");
    const [SignUpUser, setSignUpUser] = useState({
        isSignIn: false,
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [SignInUser, setSignInUser] = useState({
        email: "",
        password: ""
    })
    const signUpHandler = () => {
        setSignIn("sign_in")
    }
    const signInHandler = () => {
        setSignIn("sign_up")
    }
    const SignUpBlur = (e) => {
        const GetUserInfo = {
            ...SignUpUser
        }
        GetUserInfo[e.target.name] = e.target.value
        setSignUpUser(GetUserInfo)
    }
    const SignInBlur = (e) => {
        const GetUserInfo = {
            ...SignInUser
        }
        GetUserInfo[e.target.name] = e.target.value
        setSignInUser(GetUserInfo)
    }
    const SignUpButtonHandler = () => {
        let ConfirmPassword = document.getElementById('confirmPassword')
        if (SignUpUser.password !== SignUpUser.confirmPassword) {
            ConfirmPassword.setCustomValidity('Password not match')
        } else {
            ConfirmPassword.setCustomValidity('')
        }
    }
    const SignUpSubmit = (e) => {
        console.log(SignUpUser)
        const AuthUser = Auth()
        AuthUser.CreatNewAccount(SignUpUser, setSignUpUser)
        e.target.reset()
        e.preventDefault()
    }
    const SignInSubmit = (e) => {
        console.log(SignInUser)
        const AuthUserSignIn = Auth()
        AuthUserSignIn.SignInUserAuth(SignInUser, setSignInUser)
        e.target.reset()
        e.preventDefault()
    }
    return (
        <>
            <section className='signUp_main_container' >
                <div className="signUp_sub_container">
                    <div className="signUp_logo">
                        <Link to='/'>
                            <img src={Logo} alt="Logo"/>
                        </Link>
                    </div>
                        {
                            signIn === "sign_up" ?
                            <>
                                <form onSubmit={SignUpSubmit}>
                                    <input placeholder='Name' className="form-control form_style" type="text" name="name" onBlur={SignUpBlur} required/>
                                    <input placeholder='Email' className="form-control form_style" type="email" name="email" onBlur={SignUpBlur} required/>
                                    <input placeholder='Password' className="form-control form_style" type="password" name="password" id="password" onBlur={SignUpBlur} minLength="6" required/>
                                    <input placeholder='Confirm Password' className="form-control form_style" type="password" name="confirmPassword" id="confirmPassword" onBlur={SignUpBlur} minLength="6" required/>
                                    {
                                        SignUpUser.error && <p className='error_massage'>{SignUpUser.error}</p>
                                    }
                                    <button onClick={SignUpButtonHandler} className='form_submit' type="submit">Sign up</button>
                                </form>
                            </> :
                            <>
                                <form onSubmit={SignInSubmit}>
                                    <input placeholder='Email' className="form-control form_style" type="email" name="email" onBlur={SignInBlur} required/>
                                    <input placeholder='Password' className="form-control form_style" type="password" name="password" onBlur={SignInBlur} minLength="6" required/>
                                    {
                                        SignInUser.error && <p className="error_massage">{SignInUser.error}</p>
                                    }
                                    <button className='form_submit' type="submit">Sign in</button>
                                </form>
                            </>
                        }
                    {
                        signIn === "sign_up" ?
                        <p onClick={signUpHandler} className='account_type_selector'>Already have an account</p> :
                        <p onClick={signInHandler} className='account_type_selector'>Create a new account</p>
                    }
                </div>
            </section>
        </>
    );
};

export default SignUpForm;