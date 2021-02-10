import { useState } from "react";

const useForm = () => {
  const [firstName, setFirstName] = useState("");

  const handleChanges = (e) => {
    setFirstName(e.target.value);
  };

  return [firstName, setFirstName];
};

export default useForm;
