import { RouteProps } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/register-page/RegisterPage";
import LoginPage from "../pages/login-page/LoginPage";

export enum routesPath {
    HOME = '/',
    REGISTER = '/register',
    LOGIN = '/login'
}

export const routerConfig: RouteProps[] = [
    {
        path: routesPath.HOME,
        element: <HomePage />
    },
    {
        path: routesPath.REGISTER,
        element: <RegisterPage />
    },
    {
        path: routesPath.LOGIN,
        element: <LoginPage />
    }
]