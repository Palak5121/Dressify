import React, { useState } from 'react';
import '../comman.scss';

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    emailOrMobile: '',
  });

  const [formErrors, setFormErrors] = useState({
    emailOrMobile: '',
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
    const errors = { emailOrMobile: '' };

    if (!formData.emailOrMobile) {
      isValid = false;
      errors.emailOrMobile = 'Email or mobile number is required';
    } else if (!isValidEmailOrMobile(formData.emailOrMobile)) {
      isValid = false;
      errors.emailOrMobile = 'Invalid email or mobile number format';
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmailOrMobile = (value) => {
    const mobileNumberPattern = /^[0-9]{10}$/;

    // Regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return mobileNumberPattern.test(value) || emailPattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      //proceed to send the reset link
      console.log('Form is valid, send reset link.');
    } else {
      //displaying error messages according to appropriate action
      console.log('Form is invalid. Please correct the errors.');
    }
  };

  return (
    <div className='main-bg'>
      <div className='center-content'>
        <section className='forgot-section'>
          <h2>Reset Password</h2>
          <p>
            Enter your email or mobile number,
            and we’ll send a link to your email to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                autoComplete='new-password'
                type='text'
                name='emailOrMobile'
                value={formData.emailOrMobile}
                onChange={handleInputChange}
                placeholder='Email or Mobile number'
              />
              <p className="error">{formErrors.emailOrMobile}</p>
            </div>

            <div>
              <button>SEND LINK</button>
            </div>
          </form>
          <p>
            <span>Unable to reset the password?</span>
            <a href=''>Get help</a>
          </p>
        </section>
      </div>
    </div>
  );
}
