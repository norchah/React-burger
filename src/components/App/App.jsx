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
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const { modalIngredient, modalOrder, status, ingredientDetails } =
    useSelector((store) => ({
      status: store.ingredients.status,
      modalIngredient: store.modal.modalIngredient,
      modalOrder: store.modal.modalOrder,
      ingredientDetails: store.ingredientDetails.ingredientDetails,
    }));

  // const handleClose = () => {
  //   console.log('close')
  //   navigate(-1);
  // }

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
      <AppHeader />
      <Routes location={background || location}>
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
        <Route
          path="/ingredients/:ingredientId"
          element={<IngredientDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredients/:ingredientId"
            element={
              <Modal
                active={modalIngredient}
                title={"Детали ингредиента"}
                onClose={() => console.log("check")}
              >
                {isEmpty(ingredientDetails) && <IngredientDetails />}
              </Modal>
            }
          />
        </Routes>
      )}
      <Modal active={modalOrder}>
        <OrderDetails />
      </Modal>
    </div>
  );
}

export default App;
