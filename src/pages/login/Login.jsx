import React from "react";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import "./login.css";
import { axiosInstance } from "../../config";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <span>Email</span>
                <input
                    className="loginInput"
                    type="text"
                    placeholder="Enter your email..."
                    ref={userRef}
                />
                <span>Password</span>
                <input
                    className="loginInput"
                    type="password"
                    placeholder="Enter your password..."
                    ref={passwordRef}
                />
                <button
                    className="loginButton"
                    type="submit"
                    disabled={isFetching}
                >
                    Login
                </button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">
                    Register
                </Link>
            </button>
        </div>
    );
}
