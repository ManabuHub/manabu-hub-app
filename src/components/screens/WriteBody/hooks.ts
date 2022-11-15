import { useState } from "react";
export const useWriteBody = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  return { title, body, setTitle, setBody };
};
