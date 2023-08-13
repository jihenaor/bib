import React from 'react';

function LoginForm() {
  return (
    <div className="login-form-container">
    <div id="close-login-btn" className="fas fa-times" />
    <form action="">
      <h3>sign in</h3>
      <span>username</span>
      <input
        type="email"
        name=""
        className="box"
        placeholder="enter your email"
        id=""
      />
      <span>password</span>
      <input
        type="password"
        name=""
        className="box"
        placeholder="enter your password"
        id=""
      />
      <div className="checkbox">
        <input type="checkbox" name="" id="remember-me" />
        <label htmlFor="remember-me"> remember me</label>
      </div>
      <input type="submit" defaultValue="sign in" className="btn" />
      <p>
        forget password ? <a href="#">click here</a>
      </p>
      <p>
        don't have an account ? <a href="#">create one</a>
      </p>
    </form>
  </div>
  );
}

export default LoginForm;
