import React from "react";
import "./css/LoginForm.css";

const LoginFormComp = () => {
  return (
    <form className="form form--login" action="">
      <h1 className="form__title">Sign in for BicycleDrift</h1>
      <div className="form__helper">
        <input
          type="text"
          name="user"
          id="user"
          placeholder="User"
          className="form__input"
        />
        <label className="form__label" htmlFor="user">
          User
        </label>
      </div>
      <div className="form__helper">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="htmlForm__input"
        />
        <label className="htmlForm__label" htmlFor="password">
          Password
        </label>
      </div>
      <button type="submit" className="htmlForm__button">
        Login
      </button>
      <p className="form__text">Don't have an account?</p>{" "}
      <label htmlFor="toggle" className="form__link">
        Sign up!
      </label>
    </form>
  );
};

export default LoginFormComp;
