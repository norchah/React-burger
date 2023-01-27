import React from "react";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Login() {
  const [value, setValue] = React.useState("bob@example.com");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <EmailInput
        onChange={onChange}
        value={value}
        name={'email'}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-2"
      />
      <EmailInput
        onChange={onChange}
        value={value}
        name={'email'}
        isIcon={false}
      />
    </form>
  )
}
