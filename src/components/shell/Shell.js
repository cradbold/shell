import { useRoutes } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
import './Shell.scss';
import { ProtectedRoute } from "../../routes/ProtectedRoute";
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';
// import { Router } from '../../routes';

const Shell = () => {
  const routes = useRoutes([{
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

  return routes;
  // return (
  //   <div className="Shell">
  //       <RouterProvider router={Router} />
  //   </div>
  // );
};

export default Shell;
