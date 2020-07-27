import React from "react";
import "./css/LoginForm.css";

const SignupFormComp = () => {
  return (
    <form class="form form--register" action="">
      <h1 class="form__title signup">Sign Up For BicycleDrift</h1>
      <div class="form__helper">
        <input
          type="text"
          name="user"
          id="new-user"
          placeholder="User"
          class=" form__input"
        />
        <label class="form__label" for="new-user">
          First Name
        </label>
      </div>
      <div class="form__helper">
        <input
          type="text"
          name="user"
          id="new-user"
          placeholder="User"
          class=" form__input"
        />
        <label class="form__label" for="new-user">
          Last Name
        </label>
      </div>
      <div class="form__helper">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          class="form__input"
        />
        <label class="form__label" for="email">
          Email
        </label>
      </div>
      <div class="form__helper">
        <input
          type="password"
          name="password"
          id="new-user-password"
          placeholder="Password"
          class="form__input"
        />
        <label class="form__label" for="new-user-password">
          Password
        </label>
      </div>
      <div class="form__helper">
        <input
          type="password"
          name="password"
          id="confirm-password"
          Placeholder="Confirm password"
          class="form__input"
        />
        <label class="form__label" for="confirm-password">
          Confirm password
        </label>
      </div>
      <button type="submit" class="form__button">
        Register
      </button>
      <p class="form__text">Already have an account?</p>{" "}
      <label for="toggle" class="form__link">
        Sign in!
      </label>
    </form>
  );
};

export default SignupFormComp;
