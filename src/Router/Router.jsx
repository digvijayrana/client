import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login /> // Set the landing page to Login
      }
    ]
  },
  {
    path: "/home",
    element: <Home /> // Set the login page to Home
  }
]);
