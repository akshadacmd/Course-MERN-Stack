import React from 'react';
import './css/Login.css';
import instaImg from '../../assets/insta-img.png';
import instaLogo from '../../assets/insta-logo.png';

const Login = () => {
    return (
        <div className="insta-container">
            <div className="insta-left">
                <img src={instaImg} alt="Instagram Preview" />
            </div>
            <div className="insta-right">
                <div className="login-box">
                    <img className="logo" src={instaLogo} alt="Instagram Logo" />
                    <form>
                        <input type="text" placeholder="Phone number, username, or email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Log In</button>
                    </form>
                    <div className="divider">OR</div>
                    <a href="/login" className="fb-login">Log in with Facebook</a>
                    <a href="/forgot-password" className="forgot">Forgot password?</a>
                </div>
                <div className="signup-box">
                    <p>Don't have an account? <a href="/register">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

