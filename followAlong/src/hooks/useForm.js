import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState("");

  const handleChanges = (e) => {
    setValue(e.target.value);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setValue("");
  };

  return [value, handleChanges, clearForm];
};

export default useForm;
