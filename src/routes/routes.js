import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
        <>
            <Header />
            <Main />
            <Footer />
        </>
        )
    }, {
        path: "/dashboard",
        element: (
        <>
            <ProtectedRoute>
                <Header />
                <div>Dashboard!</div>
                <Footer />
            </ProtectedRoute>
        </>
        )
    }, {
        path: "/profile",
        element: (
        <>
            <ProtectedRoute>
                <Header />
                <div>Profile!</div>
                <Footer />
            </ProtectedRoute>
        </>
        )
    }, {
        path: "/register",
        element: (
        <>
            <div>Register!</div>
        </>
        )
    }, {
        path: "/login",
        element: (
        <>
            <div>Login!</div>
        </>
        )
    }
]);
