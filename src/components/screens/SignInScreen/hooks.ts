import { useCallback, useMemo, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { EmailPattern } from "../../../constants/RegEx";

export const useSignIn = () => {
  const { setUserId } = useAuth();
  const { emitAlert } = useAlert();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const isFilled = useMemo(
    () => email.trim().length !== 0 && password.trim().length !== 0,
    [email, password]
  );

  // useCallbackは、パフォーマンス改善のために使用しています（これを使わないと、画面が再レンダリングされたとき=自分か子のStateが変更されたときに、関数も毎回定義され直されます）
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
    return true;
  }, [email, password, emitAlert]);

  const handleSigninError = useCallback(
    (error: any) => {
      const title =
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/too-many-requests"
          ? "エラー"
          : "システムエラー";
      const message =
        error.code === "auth/user-not-found"
          ? "このメールアドレスは登録されていません。"
          : error.code === "auth/wrong-password"
          ? "パスワードが間違っています。"
          : error.code === "auth/too-many-requests"
          ? "ログインに一定数失敗しました。時間を置いてから、再度お試しください。"
          : "登録に失敗しました。再度お試しください。";
      emitAlert({
        title,
        message,
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
    },
    [emitAlert]
  );

  const handleSignin = useCallback(() => {
    const isValidate = validateInput();
    if (!isValidate) {
      return;
    }
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserId(user.uid);
      })
      .catch((error) => {
        handleSigninError(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }, [email, password, setUserId, handleSigninError, validateInput]);

  return {
    email,
    password,
    isFilled,
    isSubmitting,
    setEmail,
    setPassword,
    handleSignin,
  };
};
