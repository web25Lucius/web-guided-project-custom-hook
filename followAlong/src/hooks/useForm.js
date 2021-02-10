import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChanges = (e) => {
    setValues(e.target.value);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValues("");
  };

  return [values, handleChanges, clearForm];
};

export default useForm;
