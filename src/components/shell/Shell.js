import './Shell.scss';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from 'react-auth';
// import Header from '../header/Header';
// import Main from '../main/Main';
// import Footer from '../footer/Footer';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Main />
//         <Footer />
//       </>
//     )
//   }, {
//     path: "/dashboard",
//     element: (
//       <>
//         <Header />
//         <div>Dashboard!</div>
//         <Footer />
//       </>
//     )
//   }, {
//     path: "/profile",
//     element: (
//       <>
//         <Header />
//         <div>Profile!</div>
//         <Footer />
//       </>
//     )
//   }
// ]);

const Shell = () => {
  const { isAuthenticated, user, login, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>You are currently logged in.</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please login</h1>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  // return (
  //   <div className="Shell">
  //     <RouterProvider router={router} />
  //   </div>
  // );
}

export default Shell;
