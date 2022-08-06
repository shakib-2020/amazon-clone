import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import "./Login.css";

export const Registration = () => {
  const navigateTo = useNavigate();
  // states
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  //handle Change
  const handleChange = (e) => {
    let { name, value } = e.target;

    setUserInfo((prevValue) => {
      if (name === "userName") {
        return {
          userName: value,
          email: prevValue.email,
          password: prevValue.password,
        };
      } else if (name === "email") {
        return {
          userName: prevValue.userName,
          email: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          userName: prevValue.userName,
          email: prevValue.email,
          password: value,
        };
      }
    });
  };
  // handle register

  const register = (e) => {
    e.preventDefault();

    setFormErrors(validate(userInfo));
    setIsSubmit(true);

    if (isSubmit === true) {
    } else {
      const { email, password } = userInfo;

      //auth to firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigateTo("/");
          }
        })
        .catch((error) => console.log(error.message));
    }
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.userName) {
      errors.userName = `Username is required!`;
    }
    if (!values.email) {
      errors.email = `Email is required!`;
    } else if (!regex.test(values.email)) {
      errors.email = `This is not a valid email format!`;
    }
    if (!values.password) {
      errors.password = `Password is required`;
    } else if (values.password.length < 6) {
      errors.password = `Password must be more than 6 characters`;
    } else if (values.password.length > 10) {
      errors.password = `Password cannot exceed more than 10 characters`;
    }
    return errors;
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Create account</h1>

        <form>
          <h5>Your Name</h5>
          <input
            name="userName"
            type="text"
            placeholder="First and last name"
            value={userInfo.userName}
            onChange={handleChange}
          />
          <p className="form__error">{formErrors.userName}</p>
          <h5>E-mail</h5>
          <input
            name="email"
            type="text"
            value={userInfo.email}
            onChange={handleChange}
          />
          <p className="form__error">{formErrors.email}</p>
          <h5>Password</h5>
          <input
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={userInfo.password}
            onChange={handleChange}
          />
          <p className="form__error">{formErrors.password}</p>
          <button
            type="submit"
            className="login__signInButton"
            onClick={register}
          >
            Sign Up
          </button>
          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
          <br></br>
          <br></br>
          <h5>
            Already have an account?<Link to="/login">Sign In</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};
