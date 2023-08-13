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
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/login";
import Registration from "../pages/registration";
import Profile from "../pages/profile";
import { ForgotPassword } from "../pages/forgot-password";
import { ResetPassword } from "../pages/reset-password";
import { NotFound } from "../pages/not-found";
import {
  ForAuthUser,
  ForUnAuthUser,
} from "../protected-routes/protected-route";
import Feed from "../pages/feed";
import { Logout } from "../pages/logout";
import { ProfileOrderList } from "../pages/order-list";
import { getUser } from "../../services/api/get-user";
import {
  PATH_PROFILE,
  PATH_ORDER_LIST,
  PATH_LOGIN,
  PATH_LOGOUT,
  PATH_REGISTRATION,
  PATH_FORGOT_PASSWORD,
  PATH_RESET_PASSWORD,
  PATH_INGREDIENT_ID,
  PATH_FEED,
  PATH_FEED_ID,
  PATH_ORDER_LIST_ID,
} from "../../utils/paths";
import { WSActions } from "../../services/slices/Ws-slice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  const { modalIngredient, modalOrder, status, ingredientDetails } =
    useSelector((store) => ({
      status: store.ingredients.status,
      modalIngredient: store.modal.modalIngredient,
      modalOrder: store.modal.modalOrder,
      ingredientDetails: store.ingredientDetails.ingredientDetails,
    }));

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUser());
    const wsFeed = new WebSocket("wss://norma.nomoreparties.space/orders/all");
    wsFeed.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(WSActions.addDataFeed(data));
    };
    const wsOrderlist = new WebSocket(`wss://norma.nomoreparties.space/orders?token=${localStorage.getItem("accessToken")}`);
    wsOrderlist.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(WSActions.addDataOrderList(data))
    }
  }, []);

  const app = useMemo(() => {
    return status !== "succes" ? (
      "loading..."
    ) : (
      <div className={stylesApp.app}>
        <AppHeader />
        <Routes location={background || location}>
          <Route path="/" element={<Main />} />
          <Route
            path={PATH_PROFILE}
            element={<ForAuthUser element={<Profile />} />}
          />
          <Route
            path={PATH_ORDER_LIST}
            element={<ForAuthUser element={<ProfileOrderList />} />}
          />
          <Route
            path={PATH_ORDER_LIST_ID}
            element={<ForAuthUser element={<ProfileOrderList />} />}
          />
          <Route
            path={PATH_LOGOUT}
            element={<ForAuthUser element={<Logout />} />}
          />

          <Route
            path={PATH_LOGIN}
            element={<ForUnAuthUser element={<Login />} />}
          />
          <Route path={PATH_FEED} element={<Feed />} />
          <Route
            path={PATH_FEED_ID}
            element={<ForUnAuthUser element={<Login />} />}
          />
          <Route
            path={PATH_REGISTRATION}
            element={<ForUnAuthUser element={<Registration />} />}
          />
          <Route
            path={PATH_FORGOT_PASSWORD}
            element={
              <ForUnAuthUser
                routeForUnAuth={true}
                element={<ForgotPassword />}
              />
            }
          />
          <Route path={PATH_RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={PATH_INGREDIENT_ID} element={<IngredientDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path={PATH_INGREDIENT_ID}
              element={
                <Modal active={modalIngredient} title={"Детали ингредиента"}>
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
  });

  return status && app;
}

export default App;
