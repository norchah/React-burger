import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRouteAuth({ element }) {
  const { isAuth, status } = useSelector((store) => ({
    isAuth: store.auth.isAuth,
    status: store.auth.status,
  }));
  const location = useLocation();

  if (isAuth) {
    const { from } = location.state || { from: { pathname: "/" } };

    return <Navigate to={from} />;
  }

  return status !== "success" ? element : "Check auth...";
}
