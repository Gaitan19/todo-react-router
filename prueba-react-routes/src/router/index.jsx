import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const Login = lazy(() => import('../components/pages/Login'));
const SignUp = lazy(() => import('../components/pages/SignUp'));
const Home = lazy(() => import('../components/pages/Home'));
const NotFound = lazy(() => import('../components/pages/NotFound'))
// import Home from "../components/pages/Home";
// import Login from "../components/pages/Login";
// import SignUp from "../components/pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/", element: <Suspense fallback={<LoadingSpinner />}><Home /></Suspense>, errorElement: <NotFound />
    },
    {
        path: "/Login", element: <Suspense fallback={<LoadingSpinner/>}> < Login/> </Suspense> , errorElement: <NotFound />
    },
    {
        path: "/SignUp", element: <Suspense fallback={<LoadingSpinner/>}> <SignUp /> </Suspense> , errorElement: <NotFound />
    }

])