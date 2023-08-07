import React, { useMemo } from "react";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { passwordActions } from "../../services/slices/password-slice";
import { sendEmail } from "../../services/api/send-email";
import { PATH_LOGIN, PATH_RESET_PASSWORD } from "../../utils/paths";

export function ForgotPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, status } = useSelector((store) => ({
    email: store.password.email,
    status: store.password.status,
  }))

  const onChange = (e) => {
    const value = e.target.value;
    dispatch(passwordActions.addEmail(value))
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendEmail({ email }));
    await navigate(PATH_RESET_PASSWORD);
  };

  const buttonText = useMemo(() => {
    return status !== "succes" ? "Проверка email" : "Восстановить";
  }, [status]);

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form className={`${styles.form} mt-6`} onSubmit={onSubmit}>
        <EmailInput
          onChange={onChange}
          placeholder="Укажите e-mail"
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          style={{ justifySelf: "center" }}
          onSubmit={onSubmit}
        >
          <span className="text text_type_main-default">{buttonText}</span>
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
