import { useState } from "react";

const useForm = (initialValues) => {
  // we could call "useLocalStorage()";
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, clearForm];
};

export default useForm;
