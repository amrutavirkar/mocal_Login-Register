import React, { useState } from "react";
import logo from "../assets/MocalLogo.png";
import google from "../assets/Image150.png";
import micro from "../assets/Image151.png";
const SignInForm = () => {
  const [screen, setScreen] = useState(0);

  const FormScreen1 = () => {
    return (
      <div className="grid gap-y-8">
        <input
          className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-96"
          placeholder="enter email address "
        />

        <button
          className="flex w-fit justify-self-center bg-purple-400 items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition "
          onClick={(e) => {
            e.preventDefault();
            setScreen(1);
          }}
        >
          GET STARTED
        </button>
        <div className="my-3 flex items-center px-3">
          <hr className="w-full border-purple-500" />
          <span className="mx-3 text-purple-500">OR</span>
          <hr className="w-full border-purple-500" />
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <button className="flex items-center justify-center gap-x-2 rounded-3xl border border-slate-600 py-3 px-8 text-gray-500 transition hover:text-purple-400">
            <img src={micro} />
            Sign in with Microsoft
          </button>
          <button className="flex items-center justify-center gap-x-2 rounded-3xl border border-slate-600 py-3 px-8 text-gray-500 transition hover:text-purple-400">
            <img src={google} />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  };
  const FormScreen3 = () => {
    return (
      <>
        <div className="grid gap-y-8 ">
          <div className="flex flex-row justify-evenly gap-12">
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="company name"
            />
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="company website "
            />
          </div>
          <div className="flex flex-row justify-evenly gap-12">
            <select
              name=""
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-black bg-white outline-none transition placeholder:text-black w-48"
            >
              <option value="">country</option>
            </select>
            <select
              name=""
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-black bg-white outline-none transition placeholder:text-black w-48"
            >
              <option value="">city</option>
            </select>
          </div>

          <button className="mt-48 flex w-fit justify-self-center bg-purple-400 items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition ">
            Register
          </button>
        </div>
      </>
    );
  };

  const FormScreen2 = () => {
    return (
      <>
        <div className="grid gap-y-8 ">
          <div className="flex flex-row justify-evenly gap-12">
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="first name"
            />
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="last name "
            />
          </div>
          <div className="flex flex-row justify-evenly gap-12">
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="phone"
            />
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="email "
            />
          </div>
          <div className="flex flex-row justify-evenly gap-12">
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="password"
            />
            <input
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-slate-200 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="confirm password"
            />
          </div>
          <ul className="flex flex-col">
            <li className="text-red-500 mt-2">
              Use a few words, avoid common phrases
            </li>
            <li className="text-red-500 mt-2">
              No need for symbols,digits,uppercase
            </li>
          </ul>
          <button
            className="mt-48 flex w-fit justify-self-center bg-purple-400 items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition "
            onClick={(e) => {
              e.preventDefault();
              setScreen(2);
            }}
          >
            Continue
          </button>
        </div>
      </>
    );
  };

  let array = [
    <FormScreen1 key={""} />,
    <FormScreen2 key={""} />,
    <FormScreen3 key={""} />,
  ];
  return (
    <div className="grid place-items-center px-4 text-sm font-medium w-full">
      <div className="w-full rounded-2xl bg-white shadow">
        <form className="p-4 md:p-5 lg:p-6">
          <div className="grid gap-y-3  justify-center">
            <img className="w-fit justify-self-center my-8" src={logo} />
            {array[screen]}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
