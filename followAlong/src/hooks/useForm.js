import { useState } from "react";

const useForm = () => {
  const [firstName, setFirstName] = useState("");

  return [firstName, setFirstName];
};

export default useForm;
