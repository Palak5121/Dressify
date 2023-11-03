import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import "../comman.scss";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Signup from "../../src/auth/signup.js";

export default function Login({ setShowLogin, setShowSignup }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUpDetail = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { email: '', password: '' };

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      errors.email = 'Invalid email format';
    }

    if (!formData.password) {
      isValid = false;
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      isValid = false;
      errors.password = 'Password must be at least 8 characters long';
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, perform login.');
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  };

  return (
    <div>
      <div className="user-login">
        <form onSubmit={handleSubmit}>
          <h2>Dressify</h2>
          <h1 className="heading">
            Welcome to India's Largest Online Fashion Store
          </h1>
          <p>Please login to your account</p>

          <label>Email ID</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <p className="error">{formErrors.email}</p>

          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
          </div>
          <p className="error">{formErrors.password}</p>

          <div className="forgot">
            <label>
              <input type="checkbox" /> Keep me signed in
            </label>
            <a href='/forgot-password'>Forgot Password?</a>
          </div>

          <div className='btn_gap'>
            <button className="login">Login</button>
            <button className="signup" onClick={(e) => { setShowLogin(false); setShowSignup(true); handleSignUpDetail(e) }}>
              Signup
            </button>
          </div>
        </form>

        <div className="poster"></div>
      </div>
    </div>
  );
}
