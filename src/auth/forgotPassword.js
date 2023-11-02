import React from 'react';
import '../comman.scss';

export default function ForgotPassword() {
  return (
    <div className='main-bg'>
      <div className='center-content'>
        <section className='forgot-section'>
          <h2>Reset Password</h2>
          <p>
            Enter your email or mobile number, 
            and we’ll send a link to your email to reset your password.
          </p>
          <div>
            <input autoComplete='new-password' type='text' placeholder='Email or Mobile number' />
          </div>

          <div>
            <button>SEND LINK</button>
          </div>
          <p>
            <span>Unable to reset the password?</span>
            <a href=''>Get help</a>
          </p>
        </section>
      </div>
    </div>
  );
}
