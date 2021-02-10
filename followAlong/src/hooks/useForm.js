import { useState } from "react";

const useForm = () => {
  const [firstName, setFirstName] = useState("");

  const handleChanges = (e) => {
    setFirstName(e.target.value);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFirstName("");
  };

  return [firstName, handleChanges, clearForm];
};

export default useForm;
