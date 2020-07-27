import React from "react";
import "./css/LoginForm.css";
import LoginFormComp from "./LoginFormComp";
import SignupFormComp from "./SignupFormComp";

const LoginSignupForm = () => {
  return (
    <div class="loginForm">
      <div class=" container">
        <div class="box">
          <input type="checkbox" id="toggle" class="box__toggle" hidden></input>
          <img
            src="https://source.unsplash.com/zv3ckJKftC4/"
            alt="Login and SignUp form"
            class="box__image"
          ></img>

          <LoginFormComp />
          <SignupFormComp />
        </div>
      </div>
    </div>
  );
};

export default LoginSignupForm;
