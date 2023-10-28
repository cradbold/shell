import './Shell.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

const router = createBrowserRouter([
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
  }
]);

const Shell = () => {
  return (
    <div className="Shell">
      <RouterProvider router={router} />
    </div>
  );
}

export default Shell;
