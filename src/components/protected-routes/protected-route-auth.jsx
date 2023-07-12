import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteAuth({ element }) {
  const { isAuth } = useSelector((store) => ({ isAuth: store.auth.isAuth }));

  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return element;
}
