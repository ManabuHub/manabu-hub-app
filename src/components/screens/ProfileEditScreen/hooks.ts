import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { getTextLength } from "../../../utils/getTextLength";
import { RouteProp } from "@react-navigation/native";
import { AccountType, User } from "../../../domain/types/User";

export const useProfileEdit = (
  route: RouteProp<any, any>,
  navigation: NativeStackNavigationProp<any, any>
) => {
  const { emitAlert } = useAlert();
  const [userName, setUserName] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [mentORGrade, setMentORGrade] = useState<string>("");
  const [mentEEGrade, setMentEEGrade] = useState<string>("");
  const [schoolChoice, setSchoolChoice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const user = route.params?.user as User;
  const type = user.type;

  // useCallbackは、パフォーマンス改善のために使用しています（これを使わないと、画面が再レンダリングされたとき=自分か子のStateが変更されたときに、関数も毎回定義され直されます）
  const validateInput = useCallback(() => {
    //未入力のアラート
    if (getTextLength(userName) == 0) {
      emitAlert({
        title: "ユーザー名を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (
      (type == AccountType.MENTOR && mentORGrade == "") ||
      (type == AccountType.MENTEE && mentEEGrade == "")
    ) {
      emitAlert({
        title: "学年を選択してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (type == AccountType.MENTOR && college == "") {
      emitAlert({
        title: "大学を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }

    if (type == AccountType.MENTOR && schoolChoice == "") {
      emitAlert({
        title: "出身校を選択してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (type == AccountType.MENTEE && schoolChoice == "") {
      emitAlert({
        title: "学校を選択してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (type == AccountType.MENTEE && college == "") {
      emitAlert({
        title: "志望校を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (description == "") {
      emitAlert({
        title: "自己紹介を入力してください",
        message: "",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    //長すぎるときのアラート
    if (getTextLength(userName) > 15) {
      emitAlert({
        title: "ユーザー名が長すぎます！",
        message: "全角15字(半角30字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (type == AccountType.MENTOR && getTextLength(college) > 60) {
      emitAlert({
        title: "大学が長すぎます！",
        message: "全角60字(半角120字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (type == AccountType.MENTEE && getTextLength(college) > 60) {
      emitAlert({
        title: "志望校が長すぎます！",
        message: "全角60字(半角120字)までです",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return false;
    }
    if (getTextLength(description) > 500) {
      emitAlert({
        title: "自己紹介が長すぎます！",
        message: "全角500字(半角1000字)までです",
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
  }, [userName, college, mentORGrade, mentEEGrade, schoolChoice, emitAlert]);

  const saveProfile = useCallback(() => {
    const isValidate = validateInput();
    if (!isValidate) {
      return;
    }
    navigation.navigate(ScreenName.MAIN, {
      screen: ScreenName.PROFILE,
      params: { screen: ScreenName.PROFILE_MAIN },
    });
  }, [navigation, validateInput]);

  useEffect(() => {}, []);

  return {
    type,
    userName,
    college,
    mentORGrade,
    mentEEGrade,
    schoolChoice,
    description,
    isSubmitting,
    setUserName,
    setCollege,
    setMentORGrade,
    setMentEEGrade,
    setSchoolChoice,
    setDescription,
    saveProfile,
  };
};
