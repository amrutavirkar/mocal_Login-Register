import React, { useState } from "react";
import logo from "../assets/MocalLogo.png";
import google from "../assets/Image150.png";
import micro from "../assets/Image151.png";
const SignInForm = () => {
  const [screen, setScreen] = useState(0);
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const FormScreen1 = () => {
    const validateForm = () => {
      const errors = {};
  
      // Validate email
      if (!email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email address';
      }else {
        errors.email = '';
      }
    
      setErrors(errors);
  
      return Object.keys(errors).length === 0; // Return true if there are no errors
    };
    const handleSubmit = (e) => {
      e.preventDefault();
              
      if (validateForm()) {
        setScreen(1);
        // Form is valid, perform started logic here
        console.log('Successfuly Get started!');
      }
    };
    return (
      <form className="register-form p-4 md:p-5 lg:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-y-3  justify-center">
            <img className="w-fit justify-self-center my-8" src={logo} />
            <div className="grid gap-y-8">
        <div className="form-group">
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-96"
          placeholder="enter email address "
        />
        {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit"
          className="flex w-fit justify-self-center bg-purple-400 items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition ">
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
            </div>
            </form>
    );
  };
  const FormScreen3 = () => {
    const validateForm = () => {
      const errors = {};
      if (country.trim() === '') {
        errors.country = 'Country is required';
      }else {
        errors.country = '';
      }
  
      if (city.trim() === '') {
        errors.city = 'City is required';
      }else {
        errors.city = '';
      }
  
      if (companyName.trim() === '') {
        errors.companyName = 'Company name is required';
      }else {
        errors.companyName = '';
      }
  
      if (companyUrl.trim() === '') {
        errors.companyUrl = 'Company URL is required';
      } else if (!/^https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/\S*)?$/.test(companyUrl)) {
        errors.companyUrl = 'Invalid company URL';
      }else {
        errors.companyUrl = '';
      }
      setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
            
    if (validateForm()) {
      // setScreen(1);
      // Form is valid, perform stared logic here
      console.log('Form Register Successfuly!');
    }
  };
    return (
      <>
      <form className=" register-form p-4 md:p-5 lg:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-y-3  justify-center">
            <img className="w-fit justify-self-center my-8" src={logo} />
        <div className="grid gap-y-8 ">
          <div className="flex flex-row justify-evenly gap-12">
            <div className="form-group">
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="company name"
            />
            {errors.companyName && <span className="error">{errors.companyName}</span>}            
            </div>
            <div className="form-group">
            <input type="text" value={companyUrl} onChange={(e) => setCompanyUrl(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="company website "
            />
            {errors.companyUrl && <span className="error">{errors.companyUrl}</span>}
            </div>
            
          </div>
          <div className="flex flex-row justify-evenly gap-12">
            <div className="form-group">
            <select name="" value={country} onChange={(e) => setCountry(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-black bg-white outline-none transition placeholder:text-black w-48"
            >
              <option value="">Select Country</option>
              <option value="in">India</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
            </select>
            {errors.country && <span className="error">{errors.country}</span>}
            </div>
            <div className="form-group">
            <select name="" value={city} onChange={(e) => setCity(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 text-black bg-white outline-none transition placeholder:text-black w-48"
            >
              <option value="">Select City</option>
          {country === 'in' && (
            <>
              <option value="newyork">Pune</option>
              <option value="losangeles">Mumbai</option>
            </>
          )}
          {country === 'canada' && (
            <>
              <option value="toronto">Toronto</option>
              <option value="vancouver">Vancouver</option>
            </>
          )}
          {country === 'uk' && (
            <>
              <option value="london">London</option>
              <option value="manchester">Manchester</option>
            </>
          )}
            </select>
            {errors.city && <span className="error">{errors.city}</span>}
            </div>
          </div>

          <button type="submit" className="mt-48 flex w-fit justify-self-center items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition ">
            Register
          </button>
        </div>
        <div className="flex  justify-center mt-8 gap-x-2 rounded-md  text-black transition ">
              By creating a MoCak account,
              <a
              href="/"
              className="flex  justify-center mt-8 gap-x-2 rounded-md  text-black transition "
            >you agree to
              <a href="/" className="text-blue-500"
              >
                MoCal’s Terms
              </a>
              and 
              <a href="/" className="text-blue-500">Privacy Policy</a>
              </a>
            </div>
        </div>
        </form>
      </>
    );
  };

  const FormScreen2 = () => {
    const validateForm = () => {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const errors = {};
  
      if (firstName.trim() === '') {
        errors.firstName = 'First name is required';
      }else {
        errors.firstName = '';
      }
  
      if (lastName.trim() === '') {
        errors.lastName = 'Last name is required';
      }else {
        errors.lastName = '';
      }
  
      if (phone.trim() === '') {
        errors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(phone)) {
        errors.phone = 'Phone number is invalid';
      }else {
        errors.phone = '';
      }
  
      if (email.trim() === '') {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
      }else {
        errors.email = '';
      }
      
      if (!password) {
        errors.password = 'Password is required';
      } else if (!passwordRegex.test(password)) {
        errors.password = 'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.';
      } else {
        errors.password = '';
      }
  
      if (confirmPassword.trim() === '') {
        errors.confirmPassword = 'Confirm password is required';
      } else if (confirmPassword !== password) {
        errors.confirmPassword = 'Passwords do not match';
      }else {
        errors.confirmPassword = '';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
      e.preventDefault();
              
      if (validateForm()) {
        setScreen(2);
        // Form is valid, perform stared logic here
        console.log('Continue!');
      }
    };

    return (
      <>
      <form className="register-form p-4 md:p-5 lg:p-6" onSubmit={handleSubmit}>
          <div className="grid gap-y-3  justify-center">
            <img className="w-fit justify-self-center my-8" src={logo} />
        <div className="grid gap-y-8 ">
          <div className="flex flex-row justify-evenly gap-12">
            <div className="form-group">
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="first name"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div className="form-group">
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="last name "
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>
          <div className="flex flex-row justify-evenly gap-12">
            <div className="form-group">
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="phone"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="email "
            />
            {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="flex flex-row justify-evenly gap-12">
            <div className="form-group">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
              className="focus:border-purple-400 rounded-md border py-3 px-4 outline-none transition placeholder:text-slate-400 w-48"
              placeholder="confirm password"
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
          </div>
          <ul className="flex flex-col">
            <li className="text-red-500 mt-2">
              Use a few words, avoid common phrases
            </li>
            <li className="text-red-500 mt-2">
              No need for symbols,digits,uppercase
            </li>
          </ul>
          <button type="submit"
            className="mt-48 flex w-fit justify-self-center items-center justify-center gap-x-2 rounded-md border py-3 px-4 text-white transition ">
            Continue
          </button>
        </div>
        </div>
        </form>
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

            {array[screen]}
  
      </div>
    </div>
  );
};

export default SignInForm;
