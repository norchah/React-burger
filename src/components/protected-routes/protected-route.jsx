import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ onlyUnAuth = false, element }) {
  const { status, isAuth } = useSelector((store) => ({
    status: store.auth.status,
    isAuth: store.auth.isAuth,
  }));
  const location = useLocation();

  if (onlyUnAuth && isAuth) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return status !== "success" ? element : "Check auth...";
}

export const ForAuthUser = ProtectedRoute;
export const ForUnAuthUser = ({ element }) => (
  <ProtectedRoute onlyUnAuth={true} element={element} />
);
