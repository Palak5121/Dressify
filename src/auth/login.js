import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import "../comman.scss";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Signup from "../../src/auth/signup.js";

export default function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleSignUpDetail = (e) => {
    e.preventDefault();
    handleShowSignup();
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
    }

    if (!formData.password) {
      isValid = false;
      errors.password = 'Password is required';
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, perform login.');
    } else {
    }
  };

  return (
    <div>
      {showLogin && (
        <Modal show={showLogin} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Login/>
        </Modal>
      )}

      {showSignup && (
        <Modal show={showSignup} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>
          <Signup />
        </Modal>
      )}

      <div className="mytra-login">
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
            <a href='/forgot-password'>Forget Password?</a>
          </div>

          <div className='btn_gap'>
            <button className="login">Login</button>
            <button className="signup" onClick={handleSignUpDetail}>
              Signup
            </button>
          </div>
        </form>

        <div className="poster"></div>
      </div>
    </div>
  );
}
