import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues({
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return [values, handleChanges, clearForm];
};

export default useForm;
