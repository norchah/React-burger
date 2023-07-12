import React, { useEffect, useMemo } from "react";
import stylesApp from "./app.module.css";
import AppHeader from "../App-header/AppHeader.jsx";
import Main from "../App-main/main.jsx";
import Modal from "../modal/modal";
import IngredientDetails from "../modal-ingredient-details/ingridient-details";
import OrderDetails from "../modal-order-details/order-details";
import { isEmpty } from "../../utils/data.js";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/api/get-ingredients";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Registration from "../pages/registration";
import Profile from "../pages/profile";
import { ForgotPassword } from "../pages/forgot-password";
import { ResetPassword } from "../pages/reset-password";
import { NotFound } from "../pages/not-found";
import ProtectedRouteNoAuth from "../protected-routes/protected-route-no-auth";
import ProtectedRouteAuth from "../protected-routes/protected-route-auth";
import { Logout } from "../pages/logout";
import { OrderList } from "../pages/order-list";
import { getUser } from "../../services/api/get-user";
import { accessTokenFromStorage } from "../../services/api/utils";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((store) => store.ingredients.status);
  const ingredientDetails = useSelector(
    (store) => store.ingredientDetails.ingredientDetails
  );
  const { modalIngredient, modalOrder } = useSelector((store) => ({
    modalIngredient: store.modal.modalIngredient,
    modalOrder: store.modal.modalOrder,
  }));

  useEffect(() => {
    dispatch(getIngredients());
    if (accessTokenFromStorage) {
      dispatch(getUser());
    }
  }, []);

  const main = useMemo(() => {
    return status !== "succes" ? "loading..." : <Main />;
  }, [status]);

  return (
    <div className={stylesApp.app}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={main} />
          <Route
            path="/profile"
            element={<ProtectedRouteNoAuth element={<Profile />} />}
          />
          <Route
            path="/profile/orderList"
            element={<ProtectedRouteNoAuth element={<OrderList />} />}
          />
          <Route
            path="/profile/logout"
            element={<ProtectedRouteNoAuth element={<Logout />} />}
          />

          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={<ProtectedRouteAuth element={<Registration />} />}
          />
          <Route
            path="/forgotPassword"
            element={<ProtectedRouteAuth element={<ForgotPassword />} />}
          />
          <Route path="/resetPassword" element={<ResetPassword />} />
          {/* TODO: reset protect */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Modal active={modalIngredient} title={"Детали ингредиента"}>
          {isEmpty(ingredientDetails) && <IngredientDetails />}
        </Modal>
        <Modal active={modalOrder}>
          <OrderDetails />
        </Modal>
      </Router>
    </div>
  );
}

export default App;
