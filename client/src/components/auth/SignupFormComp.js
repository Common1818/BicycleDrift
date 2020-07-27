import React from "react";
import "./css/LoginForm.css";

const SignupFormComp = () => {
  return (
    <form className="form form--register" action="">
      <h1 className="form__title signup">Sign Up For BicycleDrift</h1>
      <div className="form__helper">
        <input
          type="text"
          name="user"
          id="new-user"
          placeholder="User"
          className=" form__input"
        />
        <label className="form__label" htmlFor="new-user">
          First Name
        </label>
      </div>
      <div className="form__helper">
        <input
          type="text"
          name="user"
          id="new-user"
          placeholder="User"
          className=" form__input"
        />
        <label className="form__label" htmlFor="new-user">
          Last Name
        </label>
      </div>
      <div className="form__helper">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="form__input"
        />
        <label className="form__label" htmlFor="email">
          Email
        </label>
      </div>
      <div className="form__helper">
        <input
          type="password"
          name="password"
          id="new-user-password"
          placeholder="Password"
          className="form__input"
        />
        <label className="form__label" htmlFor="new-user-password">
          Password
        </label>
      </div>
      <div className="form__helper">
        <input
          type="password"
          name="password"
          id="confirm-password"
          placeholder="Confirm password"
          className="form__input"
        />
        <label className="form__label" htmlFor="confirm-password">
          Confirm password
        </label>
      </div>
      <button type="submit" className="form__button">
        Register
      </button>
      <p className="form__text">Already have an account?</p>{" "}
      <label htmlFor="toggle" className="form__link">
        Sign in!
      </label>
    </form>
  );
};

export default SignupFormComp;
