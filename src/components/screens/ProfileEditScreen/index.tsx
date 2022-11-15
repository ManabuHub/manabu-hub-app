import {
  KeyboardAvoidingView,
  ScrollView,
  VStack,
  HStack,
  Pressable,
  Icon,
  Box,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../../constants/Color";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { ProfileInput } from "../../molecules/ProfileInput";
import { useProfileEdit } from "./hooks";
import { CapsuleButton } from "../../molecules/CapsuleButton";

export interface ProfileEditScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({
  navigation,
}) => {
  const {
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
  } = useProfileEdit(navigation);
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.BASE}
    >
      <ScrollView bg={Color.BASE} flex={1}>
        <VStack marginTop={`${insets.top}px`}>
          <HStack marginY="10px" position="relative">
            <Box position="absolute" left="16px" top="-2px" zIndex={100}>
              <Pressable
                position="relative"
                onPress={() => {
                  navigation.navigate(ScreenName.PROFILE, {
                    screen: ScreenName.PROFILE_MAIN,
                  });
                }}
              >
                <Icon
                  as={<MaterialIcons name={"arrow-back"} />}
                  size="28px"
                  color={Color.MAIN}
                />
              </Pressable>
            </Box>
            <HStack
              w="100%"
              alignItems="center"
              justifyContent="center"
              space="8px"
              zIndex={1}
            >
              <Box>
                <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                  プロフィール編集
                </CustomText>
              </Box>
              <Icon
                as={<MaterialIcons name={"edit"} />}
                size="16px"
                color={Color.TEXT}
              />
            </HStack>
          </HStack>
          <VStack space="16px" marginX="36px" marginTop="16px">
            <ProfileInput
              value={userName}
              iconName="circle"
              iconColor={Color.USER_PINK}
              label="ユーザー名"
              placeholder="manabu1111"
              onChange={setUserName}
            />
            <ProfileInput
              value={grade}
              iconName="import-contacts"
              iconColor={Color.GRADE_GREEN}
              label="学年"
              placeholder="大学1年生"
              onChange={setGrade}
            />
            <ProfileInput
              value={schoolChoice}
              iconName="flag"
              iconColor={Color.COLLEGE_ORANGE}
              label="志望校"
              placeholder="大学・学部"
              onChange={setSchoolChoice}
            />
            <ProfileInput
              value={school}
              iconName="school"
              iconColor={Color.COLLEGE_ORANGE}
              label="大学"
              placeholder="大学・学部"
              onChange={setSchool}
            />
            <ProfileInput
              value={description}
              iconName="accessibility"
              iconColor={Color.DESCRIPTION_PURPLE}
              label="自己紹介"
              placeholder="どのような情報を提供したいか（得意教科、大学のサークル活動など）"
              onChange={setDescription}
              isTextarea
            />
          </VStack>
          <Box alignSelf="center" marginTop="24px">
            <CapsuleButton
              text="保存"
              onPress={saveProfile}
              isLoading={isSubmitting}
            />
          </Box>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
