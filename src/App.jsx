// import React from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";

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
    <div className="h-screen bg-[url('./assets/main.jpg')] bg-no-repeat bg-center bg-cover flex">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
