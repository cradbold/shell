import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { NavBar } from "../../navbar/NavBar";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/auth/dashboard" replace />;
  }

  return (
    <div>
      <NavBar
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" }
        ]}
      />
      {outlet}
    </div>
  );
};
