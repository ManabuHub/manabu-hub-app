import { useCallback, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { EmailPattern } from "../../../constants/RegEx";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";

export const useSignUp = () => {
  const { setUserId } = useAuth();
  const { emitAlert } = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isConsent, setIsConsent] = useState<boolean>(false);

  const validateInput = useCallback(() => {
    if (!email.match(EmailPattern)) {
      emitAlert({
        title: "入力エラー",
        message: "有効なメールアドレスを入力してください",
        buttons: [
          {
            text: "分かりました",
            onPress: () => {},
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (password.trim().length === 0) {
      emitAlert({
        title: "入力エラー",
        message: "パスワードを入力してください",
        buttons: [
          {
            text: "分かりました",
            onPress: () => {},
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (password !== rePassword) {
      emitAlert({
        title: "入力エラー",
        message: "パスワードが一致しません",
        buttons: [
          {
            text: "分かりました",
            onPress: () => {},
            style: AlertButtonStyle.OK,
          },
        ],
      });
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
    isConsent,
    setEmail,
    setPassword,
    setRePassword,
    setIsConsent,
    handleSignup,
  };
};
