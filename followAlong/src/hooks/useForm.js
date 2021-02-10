import { useState } from "react";

const useForm = (initialValues) => {
  // we could call "useLocalStorage()";
  // composition - component/logic(hook)
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
