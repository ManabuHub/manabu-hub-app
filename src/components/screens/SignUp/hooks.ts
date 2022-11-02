import { useCallback, useState, useMemo } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { EmailPattern } from "../../../constants/RegEx";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";

const RequiredPasswordLength = 8;

export const useSignUp = () => {
  const { setUserId } = useAuth();
  const { emitAlert } = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordLengthEnough, setIsPasswordLengthEnough] =
    useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [rePassword, setRePassword] = useState("");
  const [isConsent, setIsConsent] = useState<boolean>(false);

  const isValidate = useMemo(
    () => isPasswordLengthEnough && isPasswordValid && isConsent,
    [isPasswordLengthEnough, isPasswordValid, isConsent]
  );

  const validateChars = useCallback((pass: string): boolean => {
    if (pass.length < RequiredPasswordLength) {
      return false;
    }
    if (/[^0-9a-zA-Z]/.test(pass)) {
      return false;
    }
    return true;
  }, []);

  const validateMultipleChars = useCallback((pass: string): boolean => {
    let count = 0;
    count += /\d/.test(pass) ? 1 : 0;
    count += /[a-z]/.test(pass) ? 1 : 0;
    count += /[A-Z]/.test(pass) ? 1 : 0;
    if (count >= 2) {
      return true;
    }
    return false;
  }, []);

  const onPasswordChange = useCallback((pass: string) => {
    setIsPasswordLengthEnough(validateChars(pass));
    setIsPasswordValid(validateMultipleChars(pass));
    setPassword(pass);
  }, []);

  const validateInput = useCallback(() => {
    if (!email.match(EmailPattern)) {
      emitAlert({
        title: "入力エラー",
        message: "有効なメールアドレスを入力してください",
        buttons: [
          {
            text: "分かりました",
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
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    return true;
  }, [email, emitAlert, password, rePassword]);

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
    isPasswordLengthEnough,
    isPasswordValid,
    rePassword,
    isConsent,
    isValidate,
    setEmail,
    onPasswordChange,
    setRePassword,
    setIsConsent,
    handleSignup,
  };
};
