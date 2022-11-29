import {
  KeyboardAvoidingView,
  ScrollView,
  VStack,
  HStack,
  Pressable,
  Box,
  Select,
  CheckIcon,
} from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../../constants/Color";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { ProfileInput } from "../../molecules/ProfileInput";
import {
  MenteeGrade,
  MenteeGradeList,
  MentorGrade,
  MentorGradeList,
  useProfileEdit,
} from "./hooks";
import { CapsuleButton } from "../../molecules/CapsuleButton";
import { IconName } from "../../../constants/IconName";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { AccountType } from "../../../domain/types/User";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { Prefectures } from "../../../constants/Prefectures";

export interface ProfileEditScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const MenteeGradeLabel = {
  [MenteeGrade.GRADE_1]: "高校1年生",
  [MenteeGrade.GRADE_2]: "高校2年生",
  [MenteeGrade.GRADE_3]: "高校3年生",
  [MenteeGrade.PREPARE]: "浪人生",
  [MenteeGrade.BELOW]: "中学生以下",
};

const MentorGradeLabel = {
  [MentorGrade.GRADE_1]: "大学1年生",
  [MentorGrade.GRADE_2]: "大学2年生",
  [MentorGrade.GRADE_3]: "大学3年生",
  [MentorGrade.GRADE_4]: "大学4年生",
};

export const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({
  navigation,
}) => {
  const { user } = useAuth();
  const {
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
                  navigation.navigate(ScreenName.MAIN, {
                    screen: ScreenName.PROFILE,
                    params: { screen: ScreenName.PROFILE_MAIN },
                  });
                }}
              >
                <CustomMaterialIcon
                  size="28px"
                  color={Color.MAIN}
                  name={IconName.ARROW_BACK}
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
              <CustomMaterialIcon
                name={IconName.EDIT}
                size="16px"
                color={Color.TEXT}
              />
            </HStack>
          </HStack>
          <VStack space="16px" marginX="36px" marginTop="16px">
            <ProfileInput
              value={userName}
              iconName={IconName.CIRCLE}
              iconColor={Color.MAIN}
              label="ユーザー名"
              placeholder="manabu1111"
              onChange={setUserName}
            />
            <HStack alignItems="center" space="6px" flexDirection="row">
              <CustomMaterialIcon
                name={IconName.CONTACT}
                size="16px"
                color={Color.MAIN}
              />
              <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                学年
              </CustomText>
            </HStack>
            {user?.type === AccountType.MENTOR ? (
              <Select
                selectedValue={mentorGrade}
                placeholder="学年を選択"
                onValueChange={onMentorGradeChange}
                borderRadius="10px"
                backgroundColor={Color.WHITE_100}
                borderWidth="0px"
                height="40px"
                shadow={2}
                placeholderTextColor={Color.MEDIUM_GRAY}
                fontWeight={600}
                marginTop="-8px"
              >
                {MentorGradeList.map((grade) => (
                  <Select.Item
                    key={grade}
                    label={MentorGradeLabel[grade]}
                    value={grade}
                  />
                ))}
              </Select>
            ) : (
              <Select
                selectedValue={menteeGrade}
                placeholder="学年を選択"
                onValueChange={onMenteeGradeChange}
                borderRadius="10px"
                backgroundColor={Color.WHITE_100}
                borderWidth="0px"
                height="40px"
                shadow={2}
                placeholderTextColor={Color.MEDIUM_GRAY}
                fontWeight={600}
                marginTop="-8px"
              >
                {MenteeGradeList.map((grade) => (
                  <Select.Item
                    key={grade}
                    label={MenteeGradeLabel[grade]}
                    value={grade}
                  />
                ))}
              </Select>
            )}

            {user?.type == AccountType.MENTEE && (
              <>
                <HStack alignItems="center" space="6px" flexDirection="row">
                  <CustomMaterialIcon
                    name={IconName.SCHOOL}
                    size="16px"
                    color={Color.MAIN}
                  />
                  <CustomText fontType={FontType.SMALL_BOLD} color={Color.TEXT}>
                    学校(都道府県)
                  </CustomText>
                </HStack>
                <Select
                  selectedValue={currentSchoolArea}
                  placeholder="通っている学校の都道府県を選択"
                  onValueChange={setCurrentSchoolArea}
                  borderRadius="10px"
                  backgroundColor={Color.WHITE_100}
                  borderWidth="0px"
                  height="40px"
                  shadow={2}
                  placeholderTextColor={Color.MEDIUM_GRAY}
                  fontWeight={600}
                  marginTop="-8px"
                >
                  {Prefectures.map((prefecture) => (
                    <Select.Item
                      key={prefecture}
                      label={prefecture}
                      value={prefecture}
                    />
                  ))}
                </Select>
              </>
            )}
            {user?.type == AccountType.MENTEE && (
              <ProfileInput
                value={schoolOfChoice}
                iconName={IconName.FLAG}
                iconColor={Color.MAIN}
                label="志望校"
                placeholder="大学・学部"
                onChange={setSchoolOfChoice}
              />
            )}
            {user?.type == AccountType.MENTOR && (
              <ProfileInput
                value={college}
                iconName={IconName.SCHOOL}
                iconColor={Color.MAIN}
                label="大学"
                placeholder="大学・学部"
                onChange={setCollege}
              />
            )}
            {user?.type == AccountType.MENTOR && (
              <ProfileInput
                value={formerSchoolArea}
                iconName={IconName.FLAG}
                iconColor={Color.MAIN}
                label="出身校"
                placeholder="都道府県・公立/私立"
                onChange={setFormerSchoolArea}
              />
            )}
            <ProfileInput
              value={description}
              iconName={IconName.ACCESSIBILITY}
              iconColor={Color.MAIN}
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
