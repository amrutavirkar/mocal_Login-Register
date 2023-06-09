// import React from 'react'
import logo from "../assets/MocalLogo.png";
import google from "../assets/Image150.png";
import micro from "../assets/Image151.png";
import { useNavigate } from "react-router-dom";
import './Form.css';
import React, { useState } from 'react';
const Form = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errors = {};

    // Validate email
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }else {
      errors.email = '';
    }

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      errors.password = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.';
    } else {
      errors.password = '';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0; // Return true if there are no errors
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // history.push('/signin');      // Form is valid, perform login logic here
      console.log('Login successful!');
    }
  };
  const navigate = useNavigate();
  return (
    <div className="container grid place-items-center px-1 text-sm font-medium w-full">
      <div className="row justify-content-center w-full rounded-2xl bg-white shadow logDiv">
        <div className="col-md-8">
        <form className=" login-form" onSubmit={handleSubmit}>
          <div className="grid gap-y-2  justify-center">
            <img className="w-fit justify-self-center my-1" src={logo} />

            <div className="grid gap-y-5">
              <div className="form-group">
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="form-control focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400"
                  placeholder="enter email address "
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  className="form-control focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400"
                  placeholder="enter password"
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <a
                href="/"
                className="flex  items-start justify-start gap-x-2 rounded-md  text-blue-500 transition "
              >
                Forgot Password?
              </a>
              <button type="submit" disabled={!validateForm} className="flex w-fit justify-self-center items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition ">
              LOG IN
              </button>
            </div>
            <div className="my-3 flex items-center px-3">
              <hr className="w-full border-purple-500" />
              <span className="mx-3 text-purple-500">OR</span>
              <hr className="w-full border-purple-500" />
            </div>
            <div className="flex flex-row gap-2 mt-6">
              <button className="google flex items-center justify-center gap-x-1 rounded-3xl border border-slate-600 text-gray-500 transition hover:text-purple-400">
                <img src={google} />
                Sign in with Google
              </button>
              <button className="micro flex items-center justify-center gap-x-1 rounded-3xl border border-slate-600 text-gray-500 transition hover:text-purple-400">
                <img src={micro} />
                Sign in with Microsoft
              </button>
            </div>
            <a
              href="/"
              className="flex  justify-center mt-8 gap-x-2 rounded-md  text-black transition "
            >
              New User ?
              <a
                className="text-blue-500"
                onClick={(e) => {
                    e.preventDefault();
                  navigate("/signin");
                }}
              >
                Register
              </a>
            </a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
