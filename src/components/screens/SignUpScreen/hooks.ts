import { useCallback, useState, useMemo } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { EmailPattern } from "../../../constants/RegEx";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { UserRepository } from "../../../repositories/UserRepository";
import { AccountType } from "../../../domain/types/User";

const RequiredPasswordLength = 8;

export const useSignUp = () => {
  const { setUser } = useAuth();
  const { emitAlert } = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordLengthEnough, setIsPasswordLengthEnough] =
    useState<boolean>(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [rePassword, setRePassword] = useState("");
  const [isConsent, setIsConsent] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const userRepository = useMemo(() => new UserRepository(), []);

  const isFilled = useMemo(
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

  const onPasswordChange = useCallback(
    (pass: string) => {
      setIsPasswordLengthEnough(validateChars(pass));
      setIsPasswordValid(validateMultipleChars(pass));
      setPassword(pass);
    },
    [validateChars, validateMultipleChars]
  );

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
  }, [password, rePassword]);

  const createUser = useCallback(
    async (id: string, email: string) => {
      const initialUser = {
        id,
        email,
        isProfileFilled: false,
        userName: "",
        type: AccountType.MENTEE,
        grade: null,
        currentSchoolArea: null,
        schoolOfChoice: null,
        college: null,
        formerSchoolArea: null,
        description: "",
        followingTags: [],
        userNameNGrams: [],
        settings: {
          blockedUserIds: [],
          isNotificationOn: true,
        },
      };
      await userRepository.create(initialUser);
      setUser(initialUser);
    },
    [userRepository, setUser]
  );

  const signUp = useCallback(
    async (email: string, password: string) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          createUser(user.uid, email);
        })
        .catch((error) => {
          console.error(error);
          const title =
            error.code === "auth/email-already-in-use"
              ? "エラー"
              : "システムエラー";
          const message =
            error.code === "auth/email-already-in-use"
              ? "このメールアドレスは既に登録されています"
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
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [createUser, emitAlert]
  );

  const handleSignup = useCallback(() => {
    const isInputValidate = validateInput();
    const isRePasswordValidate = validateRePassword();
    if (!isInputValidate || !isRePasswordValidate) {
      return;
    }
    setIsSubmitting(true);
    signUp(email, password);
  }, [email, password, validateInput, validateRePassword, signUp]);

  return {
    email,
    password,
    isPasswordLengthEnough,
    isPasswordValid,
    rePassword,
    isConsent,
    isFilled,
    isSubmitting,
    setEmail,
    onPasswordChange,
    setRePassword,
    setIsConsent,
    handleSignup,
  };
};
