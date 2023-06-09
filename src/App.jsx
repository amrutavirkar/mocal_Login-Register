// import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return (
    <div className="flex">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
