import { createBrowserRouter } from "react-router-dom";
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

export const Router = createBrowserRouter([
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
            <Header />
            <div>Dashboard!</div>
            <Footer />
        </>
        )
    }, {
        path: "/profile",
        element: (
        <>
            <Header />
            <div>Profile!</div>
            <Footer />
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