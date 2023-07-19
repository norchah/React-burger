import React, { useEffect } from "react";
import styles from "./login.module.css";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { authActions } from "../../services/slices/Auth-slice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authorization } from "../../services/api/authorization";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { email, password, isAuth } = useSelector((store) => ({
    email: store.auth.userEmail,
    password: store.auth.userPassword,
    isAuth: store.auth.isAuth,
  }));
  const fromPage = location.state?.from?.pathname || "/";

  const onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "email") {
      dispatch(authActions.addUserEmail(value));
    } else if (field === "password") {
      dispatch(authActions.addUserPassword(value));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(authorization({ email, password }));
  };

  useEffect(() => {
    if (isAuth) {
      navigate(fromPage);
    }
  }, [isAuth]);

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text text_type_main-medium`}>Вход</h2>
      <form className={`${styles.form} mt-6`} onSubmit={onSubmit}>
        <EmailInput
          onChange={onChange}
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChange}
          value={password}
          name={"password"}
          extraClass="mb-6"
        />
        <Button
          htmlType="Submit"
          type="primary"
          size="large"
          onSubmit={onSubmit}
        >
          <span className="text text_type_main-default">Войти</span>
        </Button>
        <p
          className={`${styles.paragraph} text text_type_main-default text_color_inactive mt-20`}
        >
          Вы — новый пользователь?{" "}
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            style={{ margin: "0", padding: "0" }}
            onClick={() => navigate("/registration")}
          >
            Зарегистрироваться
          </Button>
        </p>
        <p
          className={`${styles.paragraph} text text_type_main-default text_color_inactive mt-4`}
        >
          Забыли пароль?{" "}
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            style={{ margin: "0", padding: "0" }}
            onClick={() => navigate("/forgotPassword")}
          >
            Восстановить пароль
          </Button>
        </p>
      </form>
    </section>
  );
}
