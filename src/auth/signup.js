import React, { useState } from 'react';
import "../comman.scss";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Signup from "../../src/auth/signup.js";

export default function Login({setShowLogin,setShowSignup}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      fullName: '',
      email: '',
      mobileNo: '',
      password: '',
    };

    if (!formData.fullName) {
      isValid = false;
      errors.fullName = 'Full Name is required';
    }

    if (!formData.email) {
      isValid = false;
      errors.email = 'Email ID is required';
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      errors.email = 'Invalid email format';
    }

    if (!formData.mobileNo) {
      isValid = false;
      errors.mobileNo = 'Mobile No is required';
    } else if (!isValidMobileNumber(formData.mobileNo)) {
      isValid = false;
      errors.mobileNo = 'Invalid mobile number format';
    }

    if (!formData.password) {
      isValid = false;
      errors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      isValid = false;
      errors.password = 'Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidMobileNumber = (mobileNo) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobileNo);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid, perform signup.');
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
          <p>Please sign up for a new account</p>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
          <p className="error">{formErrors.fullName}</p>

          <label>Email ID</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          <p className="error">{formErrors.email}</p>

          <label>Mobile No</label>
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleInputChange}
            placeholder="Enter your mobile number"
          />
          <p className="error">{formErrors.mobileNo}</p>

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
          <p className="error">{formErrors.password}</p>

          <div className='btn_gap'>
            <button className="login">Signup</button>
            <button className="signup" onClick={()=>{setShowLogin(true);setShowSignup(false)}}>Login</button>
          </div>
        </form>

        <div className="signup_poster">
          {/* You can add content or an image here */}
        </div>
      </div>
    </div>
  );
}
