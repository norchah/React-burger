import React from "react";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { passwordActions } from "../../services/slices/password-slice";
import { resetPassword } from "../../services/api/reset-password";
import { PATH_FORGOT_PASSWORD, PATH_LOGIN } from "../../utils/paths";

export function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { password, token, isSentEmail } = useSelector((store) => ({
    password: store.password.password,
    token: store.password.token,
    isSentEmail: store.password.isSentEmail,
  }));

  const onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "password") {
      dispatch(passwordActions.addNewPassword(value));
    } else if (field === "token") {
      dispatch(passwordActions.addToken(value));
    }
  };

  if (!isSentEmail) {
    return <Navigate to={PATH_FORGOT_PASSWORD} />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(resetPassword({ password, token }));
    await navigate(PATH_LOGIN);
  };

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form className={`${styles.form} mt-6`} onSubmit={onSubmit}>
        <PasswordInput
          onChange={onChange}
          placeholder="Введите новый пароль"
          value={password}
          name={"password"}
          extraClass="mb-6"
        />
        <Input
          onChange={onChange}
          placeholder="Введите код из письма"
          value={token}
          name={"token"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit "
          type="primary"
          size="large"
          style={{ justifySelf: "center" }}
          onSubmit={onSubmit}
        >
          <span className="text text_type_main-default">Сохранить</span>
        </Button>
        <p
          className={`${styles.paragraph} text text_type_main-default text_color_inactive mt-20`}
        >
          Вспомнили пароль?{" "}
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            style={{ margin: "0", padding: "0" }}
            onClick={() => navigate(PATH_LOGIN)}
          >
            Войти
          </Button>
        </p>
      </form>
    </section>
  );
}
