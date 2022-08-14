import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";

import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  //email and password state
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // handle change
  const handleChange = (e) => {
    let { name, value } = e.target;

    setUserInfo((prevValue) => {
      if (name === "email") {
        return {
          email: value,
          password: prevValue.password,
        };
      } else if (name === "password") {
        return {
          email: prevValue.email,
          password: value,
        };
      }
    });
  };

  //handle login
  const signIn = (e) => {
    e.preventDefault();
    setFormErrors(validate(userInfo));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit === true) {
      setIsLoading(true);
      const { email, password } = userInfo;
      signInWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            navigate("/");
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.log(error.message);
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmit]);

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

  // handle register
  const register = (e) => {
    navigate("/registration");
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
        <h1>Sign-in</h1>

        <form autocomplete="off">
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
            value={userInfo.password}
            onChange={handleChange}
          />
          <p className="form__error">{formErrors.password}</p>

          {!isLoading && (
            <button
              type="submit"
              className="login__signInButton"
              onClick={signIn}
            >
              Sign In
            </button>
          )}
          {isLoading && (
            <button type="submit" className="login__signInButton" disabled>
              <CircularProgress style={{ width: "15px", height: "15px" }} />
              Signing In...
            </button>
          )}
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account{" "}
        </button>
      </div>
    </div>
  );
};
