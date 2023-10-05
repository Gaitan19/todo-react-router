import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = lazy(() => import('../components/pages/Login'));
const SignUp = lazy(() => import('../components/pages/SignUp'));
const Home = lazy(() => import('../components/pages/Home'));
const NotFound = lazy(()=> import('../components/pages/NotFound'))
// import Home from "../components/pages/Home";
// import Login from "../components/pages/Login";
// import SignUp from "../components/pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/", element: <Home />, errorElement: <NotFound/>
    },
    {
        path: "/Login", element: < Login/>, errorElement: <NotFound/>
    },
    {
        path: "/SignUp", element: <SignUp />, errorElement: <NotFound/>
    }

])