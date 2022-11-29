import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logo from "../../Icons/bani-logo.svg";
import Eye from "../../Icons/eye-icon.svg";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    email: "",
    phone_number: "",
  });
 
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
    localStorage.getItem(data);
    setIsLogin(true);
    if (!isLogin) {
      navigate("/dashboard");
    }
  };
  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="login__logo">
          <img alt="bani-logo" src={Logo} />
        </div>
        <div className="login__details">
          <h3 className="login__details_heading">Log in to your account</h3>
          <h6 className="login__details_text">
            Don’t have an account? <span>Get Started</span>
          </h6>
          <form className="login__details_form" onSubmit={handleSubmit} >
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <input placeholder="E.g: victor.onazi@getbani.co" type="email" />
            </div>
            <div className="inputGroup password-wrapper">
              <div className="label-password">
                <label htmlFor="password">Password</label>
                <span>Forgot password?</span>
              </div>

              <input
                placeholder="E.g: victor.onazi@getbani.co"
                type="password"
              />
              <button data-passwordlock="isLocked" className="password_btn">
                <img alt="eye-icon" src={Eye} />
              </button>
            </div>
            <button type="submit" class="btn-login">
              Log in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
