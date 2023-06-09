// import React from "react";

import Form from "../components/Form";
import './bg.css';
const Login = () => {

  return (
    <>
      <div className="flex flex-col gap-1 w-2/3">
        <p className="welcome">Welcome to</p>
        <span className="mocall">MoCal!</span>
        <p className="first">
          Get Your First Month Free.
        </p>
        <p className="first">Sign Up Now!</p>
      </div>
      <Form />
      <div className="ml-48 flex flex-col align-middle justify-center rightText">
        <p className="text-white">
          We shall help you find the perfect time with your clients. Please enter
          your details to start with and we shall fit you right in.
        </p>
      </div>
    </>
  );
};

export default Login;
