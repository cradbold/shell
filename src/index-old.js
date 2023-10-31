import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes'
// import Shell from './components/shell/Shell';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

// The following line can be included in your src/index.js or App.js file */
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Shell />
      </BrowserRouter> */}
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();