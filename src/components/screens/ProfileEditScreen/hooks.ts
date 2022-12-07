import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { getTextLength } from "../../../utils/getTextLength";
import { AccountType } from "../../../domain/types/User";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { RouteProp } from "@react-navigation/native";
import { UserRepository } from "../../../repositories/UserRepository";

export enum MenteeGrade {
  GRADE_1 = "grade-1",
  GRADE_2 = "grade-2",
  GRADE_3 = "grade-3",
  PREPARE = "prepare", // 浪人に対応する英語がない...
  BELOW = "below",
}

export enum MentorGrade {
  GRADE_1 = "grade-1",
  GRADE_2 = "grade-2",
  GRADE_3 = "grade-3",
  GRADE_4 = "grade-4",
}

export const MenteeGradeList = [
  MenteeGrade.GRADE_1,
  MenteeGrade.GRADE_2,
  MenteeGrade.GRADE_3,
  MenteeGrade.PREPARE,
  MenteeGrade.BELOW,
];

export const MentorGradeList = [
  MentorGrade.GRADE_1,
  MentorGrade.GRADE_2,
  MentorGrade.GRADE_3,
  MentorGrade.GRADE_4,
];

export const useProfileEdit = (
  route: RouteProp<any, any>,
  navigation: NativeStackNavigationProp<any, any>
) => {
  const { user, setUser } = useAuth();
  const { emitAlert } = useAlert();
  const [userName, setUserName] = useState<string>("");
  const [mentorGrade, setMentorGrade] = useState<MentorGrade>();
  const [menteeGrade, setMenteeGrade] = useState<MenteeGrade>();
  const [currentSchoolArea, setCurrentSchoolArea] = useState<string>("");
  const [schoolOfChoice, setSchoolOfChoice] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [formerSchoolArea, setFormerSchoolArea] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const userRepository = useMemo(() => new UserRepository(), []);

  const accountType = useMemo(
    () => (user?.isProfileFilled ? user?.type : route.params?.accountType),
    [route.params?.accountType, user?.isProfileFilled, user?.type]
  );

  // useCallbackは、パフォーマンス改善のために使用しています（これを使わないと、画面が再レンダリングされたとき=自分か子のStateが変更されたときに、関数も毎回定義され直されます）
  const validateInput = useCallback(() => {
    if (getTextLength(userName) === 0) {
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

    if (mentorGrade == null && menteeGrade == null) {
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

    if (accountType === AccountType.MENTEE && schoolOfChoice === "") {
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

    if (accountType == AccountType.MENTEE && college == "") {
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
    if (accountType == AccountType.MENTEE && getTextLength(college) > 60) {
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

    if (accountType === AccountType.MENTOR && college == "") {
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

    if (accountType == AccountType.MENTOR && getTextLength(college) > 60) {
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

    if (accountType == AccountType.MENTOR && formerSchoolArea == "") {
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
  }, [
    accountType,
    userName,
    mentorGrade,
    menteeGrade,
    schoolOfChoice,
    college,
    formerSchoolArea,
    description,
    emitAlert,
  ]);

  const onMentorGradeChange = useCallback((grade: string) => {
    Object.values(MentorGrade).forEach((refGrade) => {
      if (grade === refGrade) {
        setMentorGrade(refGrade as any);
      }
    });
  }, []);

  const onMenteeGradeChange = useCallback((grade: string) => {
    Object.values(MenteeGrade).forEach((refGrade) => {
      if (grade === refGrade) {
        setMenteeGrade(refGrade as any);
      }
    });
  }, []);

  const saveProfile = useCallback(async () => {
    if (!user) {
      return;
    }
    const isValidate = validateInput();
    if (!isValidate) {
      return;
    }
    const newUser = {
      id: user.id,
      email: user.email,
      type: accountType,
      isProfileFilled: true,
      userName,
      grade:
        accountType === AccountType.MENTEE
          ? (menteeGrade as MenteeGrade)
          : (mentorGrade as MentorGrade),
      currentSchoolArea: currentSchoolArea !== "" ? currentSchoolArea : null,
      schoolOfChoice: schoolOfChoice !== "" ? schoolOfChoice : null,
      college: college !== "" ? college : null,
      formerSchoolArea: formerSchoolArea !== "" ? formerSchoolArea : null,
      description,
      followingTags: [],
    };
    setIsSubmitting(true);
    await userRepository.replace(newUser);
    setUser(newUser);
    setIsSubmitting(false);
    navigation.navigate(ScreenName.MAIN, {
      screen: ScreenName.PROFILE,
      params: { screen: ScreenName.PROFILE_MAIN },
    });
  }, [
    user,

    accountType,
    userName,
    menteeGrade,
    mentorGrade,
    currentSchoolArea,
    schoolOfChoice,
    college,
    formerSchoolArea,
    description,
    userRepository,
    validateInput,
    setUser,
    navigation,
  ]);

  useEffect(() => {
    if (!user) return;
    if (!user?.isProfileFilled) return;
    setUserName(user.userName as string);
    if (user.type === AccountType.MENTEE) {
      setMenteeGrade(user.grade as MenteeGrade);
      setCurrentSchoolArea(user.currentSchoolArea as string);
      setSchoolOfChoice(user.schoolOfChoice as string);
    } else {
      setMentorGrade(user.grade as MentorGrade);
      setCollege(user.college as string);
      setFormerSchoolArea(user.formerSchoolArea as string);
    }
    setDescription(user.description);
  }, [user]);

  return {
    accountType,
    userName,
    mentorGrade,
    menteeGrade,
    currentSchoolArea,
    schoolOfChoice,
    college,
    formerSchoolArea,
    description,
    isSubmitting,
    setUserName,
    onMentorGradeChange,
    onMenteeGradeChange,
    setCurrentSchoolArea,
    setSchoolOfChoice,
    setCollege,
    setFormerSchoolArea,
    setDescription,
    saveProfile,
  };
};
