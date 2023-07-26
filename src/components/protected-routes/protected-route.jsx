import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ routeForUnAuth = false, element }) {
  const { status, isAuth } = useSelector((store) => ({
    status: store.auth.status,
    isAuth: store.auth.isAuth,
  }));
  const location = useLocation();
  console.log('isAuth', isAuth, 'route', routeForUnAuth)

  if (routeForUnAuth && isAuth) {
      console.log('route for auth and auth')
    const { from } = location.state || { from: { pathname: "/" } };

    return <Navigate to={from} />;
  }

  if (!routeForUnAuth && !isAuth) {
    console.log('route for no auth and no auth')

    return <Navigate to="/login" state={{ from: location }} />;
  }

  return status !== "success" ? element : "Check auth...";
}

export const ForAuthUser = ProtectedRoute;
export const ForUnAuthUser = ({element}) => (
<ProtectedRoute routeForUnAuth={true} element={element}/>
);






