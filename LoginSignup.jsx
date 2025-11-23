import React from 'react'
import "./Login.css";

export const LoginSignup = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email Address"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />

        <button className="continue-btn">Continue</button>

        <p className="signup-text">
          Create an account?{" "}
          <a href="#" className="click-here">
            Click here
          </a>
        </p>

        <label className="terms">
          <input type="checkbox" /> By continuing, I agree to the terms of use &
          privacy policy.
        </label>
      </div>
    </div>

  );
}
export default LoginSignup