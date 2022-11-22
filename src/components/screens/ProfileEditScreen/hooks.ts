import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";

export const useProfileEdit = (
  navigation: NativeStackNavigationProp<any, any>
) => {
  const [userName, setUserName] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [schoolChoice, setSchoolChoice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const saveProfile = useCallback(() => {
    navigation.navigate(ScreenName.MAIN, {
      screen: ScreenName.PROFILE,
      params: { screen: ScreenName.PROFILE_MAIN },
    });
  }, [navigation]);

  return {
    userName,
    school,
    grade,
    schoolChoice,
    description,
    isSubmitting,
    setUserName,
    setSchool,
    setGrade,
    setSchoolChoice,
    setDescription,
    saveProfile,
  };
};
