import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function PrivateRouter({ children }) {
  let { loading, user } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center ietms-center py-20">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRouter;
