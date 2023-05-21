import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../components/ErrorPage";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/all-toys',
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: '/category/:id',
          element: <ToyDetails></ToyDetails>
        }
      ]
    },
  ]);

export default router;