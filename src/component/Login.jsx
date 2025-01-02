import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!email) {
      formIsValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors.email = 'Email is invalid';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      formIsValid = false;
      errors.password = 'Password must be at least 6 characters';
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate login success
      alert('Login Successful!');
      navigate('/home');
    } else {
      alert('Please fix the errors');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Branding: Logo and Name */}
        <div className="logo">
           <h1 style={{fontWeight:"bold"}}>Lucky-Store</h1>
          <h2>Welcome Back!</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <small className="error">{errors.password}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            <NavLink to={"/"} >
            Login
            </NavLink>
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        {/* Social Login Options (optional) */}
        <div className="social-login">
          <button className="btn btn-google">Login with Google</button>
          <button className="btn btn-facebook" >Login with Facebook</button>
        </div>

        <div className="signup-link">
          <small>
            Don't have an account? <a href="/signup">Sign Up</a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
