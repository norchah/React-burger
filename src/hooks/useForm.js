import useState from "react";

export function useForm(inputValues) {
    console.log(inputValues)
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

// не совсем разобрался как использовать в компонентах с инпутами
