import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";
import { AccountType } from "../../../domain/types/User";

export const useSelectAccountTypeScreen = (
  navigation: NativeStackNavigationProp<any, any>
) => {
  const [accountType, setAccountType] = useState<AccountType>(
    AccountType.MENTEE
  );

  const handleNext = useCallback(() => {
    navigation.navigate(ScreenName.MAIN, {
      screen: ScreenName.PROFILE,
      params: {
        screen: ScreenName.PROFILE_EDIT,
        params: {
          accountType,
        },
      },
    });
  }, [accountType, navigation]);

  return { accountType, setAccountType, handleNext };
};
