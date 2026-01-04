import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/icon/login/google.png";
import facebookIcon from "../assets/icon/login/facebook.png";
import "../styles/login.css";

function LoginPage() {
    const [userNameOrEmail, setUserNameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!userNameOrEmail || !password) {
            alert("Please enter username/email and password");
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        const input = userNameOrEmail.trim().toLowerCase();

        if (
            storedUser &&
            (input === storedUser.username.toLowerCase() ||
                input === storedUser.email.toLowerCase()) &&
            password === storedUser.password
        ) {
            localStorage.setItem(
                "user",
                JSON.stringify({ ...storedUser, isLogin: true })
            );

            navigate("/account");
        } else {
            alert("Username or password is incorrect!");
        }
    };

    return (
        <div className="login-page">
            <div className="login-name">
                <h1>LOGIN</h1>
            </div>

            <div className="login-form">
                <div className="input-group">
                    <span className="input-icon">
                        <i className="fa fa-user"></i>
                    </span>
                    <input
                        type="text"
                        placeholder="Enter your username/email"
                        value={userNameOrEmail}
                        onChange={(e) => setUserNameOrEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <span className="input-icon">
                        <i className="fa fa-lock"></i>
                    </span>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            <div className="login-bnt">
                <button className="login-btn-main" onClick={handleLogin}>
                    Log In
                </button>

                <h3>OR</h3>

                <button className="social-btn google">
                    <img src={googleIcon} alt="Google" className="social-icon" />
                    Continue with Google
                </button>

                <button className="social-btn facebook">
                    <img src={facebookIcon} alt="Facebook" className="social-icon" />
                    Continue with Facebook
                </button>
            </div>

            <div className="login-register">
                <span>Don’t have an account? </span>
                <span
                    className="register-link"
                    onClick={() => navigate("/signup")}
                    style={{ cursor: "pointer", color: "#2f80ed" }}
                >
                    Sign up
                </span>
            </div>
        </div>
    );
}

export default LoginPage;
