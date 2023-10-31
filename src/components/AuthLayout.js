import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { AuthProvider } from "../hooks/useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();
  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<Spinner animation='border' />}>
      <Await
        resolve={userPromise}
        errorElement={<Alert variant="danger">Something went wrong!</Alert>}
        children={(user) => (<AuthProvider userData={user}>{outlet}</AuthProvider>)}
      />
    </Suspense>
  );
};
