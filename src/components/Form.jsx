// import React from 'react'
import logo from "../assets/MocalLogo.png";
import google from "../assets/Image150.png";
import micro from "../assets/Image151.png";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center px-4 text-sm font-medium w-full">
      <div className="w-full rounded-2xl bg-white shadow">
        <form className="p-4 md:p-5 lg:p-6">
          <div className="grid gap-y-3  justify-center">
            <img className="w-fit justify-self-center my-8" src={logo} />

            <div className="grid gap-y-5">
              <input
                className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400"
                placeholder="enter email address "
              />
              <input
                className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400"
                placeholder="enter password"
              />
              <a
                href="/"
                className="flex  items-start justify-start gap-x-2 rounded-md  text-blue-500 transition "
              >
                Forgot Password ?
              </a>
              <button className="flex w-fit justify-self-center bg-purple-400 items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition ">
              <a
                className="text-blue-500"
                onClick={(e) => {
                    e.preventDefault();
                  navigate("/signin");
                }}
              >LOG IN
              </a>
              </button>
            </div>
            <div className="my-3 flex items-center px-3">
              <hr className="w-full border-purple-500" />
              <span className="mx-3 text-purple-500">OR</span>
              <hr className="w-full border-purple-500" />
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <button className="flex items-center justify-center gap-x-2 rounded-3xl border border-slate-600 py-3 px-8 text-gray-500 transition hover:text-purple-400">
                <img src={micro} />
                Sign in with Microsoft
              </button>
              <button className="flex items-center justify-center gap-x-2 rounded-3xl border border-slate-600 py-3 px-8 text-gray-500 transition hover:text-purple-400">
                <img src={google} />
                Sign in with Google
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
  );
};

export default Form;
