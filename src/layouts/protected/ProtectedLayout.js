import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { NavBar } from "../../components/navbar/NavBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <NavBar
        pages={[
          { label: "Dashboard", path: "dashboard" }
        ]}
        showProfile
      />
      {outlet}
    </div>
  );
};
