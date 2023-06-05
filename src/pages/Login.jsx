// import React from "react";

import Form from "../components/Form";

const Login = () => {

  return (
    <>
      <div className="text-2xl ml-48 pt-20 flex flex-col gap-2 w-2/3">
        <p className="text-gray-300 text-3xl">Welcome to</p>
        <span className="text-6xl font-bold text-yellow-400">MoCal!</span>
        <p className="text-2xl font-semibold text-white ">
          Get Your First Month Free
        </p>
        <p className="text-2xl font-semibold text-white ">Sign Up Now!</p>
      </div>
      <Form />
      <div className="text-2xl ml-48 pt-20 flex flex-col gap-2 w-3/4 align-middle justify-center">
        <p className="text-lg text-white pr-20">
          We shall help you find the perfect time with your clients. Please enter
          your details to start with and we shall fit you right in.
        </p>
      </div>
    </>
  );
};

export default Login;
