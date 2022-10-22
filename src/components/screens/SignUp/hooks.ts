import { useCallback, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuth } from "../../../providers/AuthProvider/hooks";

export const useSignUp = () => {
  const { setUserId } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const validateInput = useCallback(() => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      return false;
    }
    return true;
  }, []);

  const validateRePassword = useCallback(() => {
    return password === rePassword ? true : false;
  }, []);

  const handleSignup = useCallback(() => {
    const isInputValidate = validateInput();
    const isRePasswordValidate = validateRePassword();
    if (!isInputValidate || !isRePasswordValidate) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserId(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }, []);

  return {
    email,
    password,
    rePassword,
    setEmail,
    setPassword,
    setRePassword,
    handleSignup,
  };
};
