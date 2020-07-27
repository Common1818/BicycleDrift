import React from "react";
import "./css/LoginForm.css";

const LoginFormComp = () => {
  return (
    <form class="form form--login" action="">
      <h1 class="form__title">Sign in for BicycleDrift</h1>
      <div class="form__helper">
        <input
          type="text"
          name="user"
          id="user"
          placeholder="User"
          class="form__input"
        />
        <label class="form__label" for="user">
          User
        </label>
      </div>
      <div class="form__helper">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          class="form__input"
        />
        <label class="form__label" for="password">
          Password
        </label>
      </div>
      <button type="submit" class="form__button">
        Login
      </button>
      <p class="form__text">Don't have an account?</p>{" "}
      <label for="toggle" class="form__link">
        Sign up!
      </label>
    </form>
  );
};

export default LoginFormComp;
