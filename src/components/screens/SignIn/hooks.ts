import { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useAuth } from "../../../providers/AuthProvider/hooks";

export const useSignIn = () => {
  const { setUserId } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // useCallbackは、パフォーマンス改善のために使用しています（これを使わないと、画面が再レンダリングされたとき=自分か子のStateが変更されたときに、関数も毎回定義され直されます）
  const validateInput = useCallback(() => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      return false;
    }
    return true;
  }, []);

  const handleSignin = useCallback(() => {
    const isValidate = validateInput();
    if (!isValidate) {
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Global Stateを設定
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
    setEmail,
    setPassword,
    handleSignin,
  };
};
