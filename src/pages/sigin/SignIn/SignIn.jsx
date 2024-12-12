import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../../App.css";

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!password || password.length < 3 || password.length > 20)
      errors.password = "Password must be between 3 and 20 characters";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const user = { fullName: "John Doe", email };
      setUser(user);
      navigate("/");
    }
  };

  return (
    <main className="sign-in-page">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h1 className="sign-in-form__title" data-test-id="sign-in-title">
          Sign In
        </h1>
        <div className="input">
          <label className="input__heading">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            data-test-id="auth-email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input" data-test-id="input-password">
          <label className="input__heading">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            data-test-id="auth-password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit" className="button" data-test-id="auth-submit">
          Sign In
        </button>
        <p>
          Don't have an account?{" "}
          <a
            href="/sign-up"
            className="sign-in-form__link"
            data-test-id="auth-sign-up-link"
          >
            Sign Up
          </a>
        </p>
      </form>
    </main>
  );
};

export default SignIn;
