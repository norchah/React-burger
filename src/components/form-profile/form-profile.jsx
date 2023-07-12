import React, { useEffect } from "react";
import styles from "./form-profile.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../services/slices/Auth-slice";
import { getUser } from "../../services/api/get-user";
import { pushUser } from "../../services/api/push-user";

export function FormProfile() {
  const dispatch = useDispatch();

  const { name, email, password, isChangeUserFields } = useSelector(
    (store) => ({
      name: store.auth.userName,
      email: store.auth.userEmail,
      password: store.auth.userPassword,
      isChangeUserFields: store.auth.isChangeUserFields,
    })
  );

  const onChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    if (field === "name") {
      dispatch(authActions.addUserName(value));
    } else if (field === "email") {
      dispatch(authActions.addUserEmail(value));
    } else if (field === "password") {
      dispatch(authActions.addUserPassword(value));
    }
    dispatch(authActions.setChangeUserFields());
  };

  const onClickCancel = () => {
    dispatch(authActions.cancelChangeUserFields());
  };

  const onClickSave = async () => {
    await dispatch(pushUser({ name, email, password }));
    await dispatch(authActions.cancelChangeUserFields());
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <form className={`${styles.form} mt-6`}>
      <Input
        onChange={onChange}
        value={name}
        name={"name"}
        placeholder="Имя"
        icon={"EditIcon"}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={onChange}
        value={email}
        name={"email"}
        isIcon={true}
        extraClass="mb-6"
        placeholder="Логин"
      />
      <PasswordInput
        onChange={onChange}
        value={password}
        name={"password"}
        icon="EditIcon"
        placeholder="Пароль"
        extraClass="mb-6"
      />
      {isChangeUserFields && (
        <ul className={styles.buttons}>
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            onClick={onClickCancel}
          >
            Отмена
          </Button>
          <Button onClick={onClickSave} htmlType="button">
            Сохранить
          </Button>
        </ul>
      )}
    </form>
  );
}
