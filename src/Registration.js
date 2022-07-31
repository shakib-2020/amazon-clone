import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

import "./Login.css";

export const Registration = () => {
  const navigateTo = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });
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

    const { email, password } = userInfo;

    //auth to firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigateTo("/");
        }
      })
      .catch((error) => alert(error.message));
    //some fancy firebase shittttt.......
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
          <h5>E-mail</h5>
          <input
            name="email"
            type="text"
            value={userInfo.email}
            onChange={handleChange}
          />

          <h5>Password</h5>
          <input
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={userInfo.password}
            onChange={handleChange}
          />
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
          <h5>Already have an account? Sign In</h5>
        </form>
      </div>
    </div>
  );
};
