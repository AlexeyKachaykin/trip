import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../../App.css";

const SignUp = ({ setUser }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!fullName) errors.fullName = "Full name is required";
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
      const user = { fullName, email };
      setUser(user);
      navigate("/");
    }
  };

  return (
    <main className="sign-up-page">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h1 className="sign-up-form__title" data-test-id="sign-up-title">
          Sign Up
        </h1>
        <div className="input">
          <label className="input__heading">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            data-test-id="auth-full-name"
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="input" data-test-id="input-email">
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
        <div className="input">
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
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <a
            href="/sign-in"
            className="sign-up-form__link"
            data-test-id="auth-sign-in-link"
          >
            Sign In
          </a>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
