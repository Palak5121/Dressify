import React from 'react';
import '../comman.scss';

export default function NewPassword() {
  return (
    <div className='main-bg'>
      <div className='center-content'>
        <section className='new-password-section'>
          <h2>Create New Password</h2>
          <p>
            Please enter your new password below to reset your account password.
          </p>
          <div>
            <input
              type='password'
              placeholder='New Password'
              autoComplete='new-password'
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Confirm New Password'
              autoComplete='new-password'
            />
          </div>
          <div>
            <button>RESET PASSWORD</button>
          </div>
        </section>
      </div>
    </div>
  );
}
