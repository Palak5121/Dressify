import React from 'react'
import "../comman.scss"

export default function Login() {
  return (
    <div className="mytra-login">
      <form>
        <h2>Fashion & Beauty</h2>

        <h1 className="heading">
          Welcome to India's Largest Online Fashion Store
        </h1>
        <p>Please login to your account</p>

        <label>Email ID</label>
        <input type="text" />

        <label>Password</label>
        <input type="password" />

        <div className="forgot">
          <label>
            <input type="checkbox" /> Keep me signed in
          </label>

          <a>Forget Password?</a>
        </div>

        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </form>

      <div className="poster">
        {/* You can add content or image here */}
      </div>
    </div>
  );
}
