// import React from 'react'

import SignInForm from "../components/SignInForm";
import './bg.css';
const SignIn = () => {
  return (
    <>
      <div className="text-2xl flex flex-col gap-1 w-2/3">
        <p className="welcome">Welcome to</p>
        <span className="mocall">MoCal!</span>
        <p className="first">
          Get Your First Month Free.
        </p>
        <p className="first">Sign Up Now!</p>
      </div>
      <SignInForm />
      <div className="ml-48 flex flex-col align-middle justify-center rightText">
        <p className="text-white">
          We shall help you find the perfect time with your clients. Please
          enter your details to start with and we shall fit you right in.
        </p>
      </div>
    </>
  );
};

export default SignIn;
