import React, { useEffect } from "react";
import styles from "./registration.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../services/slices/Auth-slice";
import { useNavigate } from "react-router-dom";
import { registration } from "../../services/api/registration";
import { PATH_LOGIN } from "../../utils/paths";
import { useForm } from '../../hooks/useForm';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const {values, handleChange, setValues} = useForm({});


  const { name, email, password, status } = useSelector((store) => ({
    email: store.auth.userEmail,
    password: store.auth.userPassword,
    name: store.auth.userName,
    status: store.auth.status,
  }));
  const onChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    if (field === "email") {
      dispatch(authActions.addUserEmail(value));
    } else if (field === "password") {
      dispatch(authActions.addUserPassword(value));
    } else if (field === "name") {
      dispatch(authActions.addUserName(value));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registration({ email, password, name }));
  };

  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        Регистрация
      </h2>
      <form type="submit" className={styles.form} onSubmit={onSubmit}>
        <EmailInput
          onChange={onChange}
          value={email}
          name={"email"}
          isIcon={false}
          extraClass="mb-6 mt-6"
        />
        <PasswordInput
          onChange={onChange}
          value={password}
          name={"password"}
          extraClass="mb-6"
        />
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChange}
          value={name}
          name={"name"}
          size={"default"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          onSubmit={onSubmit}
        >
          <span className="text text_type_main-default">
            {status !== "loading" ? "Зарегистрироваться" : "loading"}
          </span>
        </Button>
        <p
          className={`${styles.paragraph} text text_type_main-default text_color_inactive mt-4 mt-20`}
        >
          Забыли пароль?{" "}
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
