import React from "react";
import "./css/LoginForm.css";
import LoginFormComp from "./LoginFormComp";
import SignupFormComp from "./SignupFormComp";
import { connect } from "react-redux";
import Bike from "./images/Bike.png";
import Loader from "../layout/Loader";

const LoginSignupForm = ({ auth }) => {
  const { loading } = auth;
  console.log(loading);
  return (
    <div className="loginForm">
      {loading ? (
        <Loader />
      ) : (
        <div className=" container">
          <div className="box">
            <input
              type="checkbox"
              id="toggle"
              className="box__toggle"
              hidden
            ></input>
            <img
              src={Bike}
              alt="Login and SignUp form"
              className="box__image"
            ></img>
            <SignupFormComp />
            <LoginFormComp />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LoginSignupForm);
