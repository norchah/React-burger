import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

export default function ProtectedRouteNoAuth({ element }) {
  const { isAuth, status } = useSelector((store) => ({
    isAuth: store.auth.isAuth,
    status: store.auth.status,
  }));
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return status === "succes" ? element : "Check auth..";
}
