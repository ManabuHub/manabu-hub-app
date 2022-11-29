import * as React from "react";
import { Color } from "../../../constants/Color";
import { Pressable, View, VStack, Box, HStack } from "native-base";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { Dimensions } from "react-native";
import { ProfileTab, ProfileTabColor } from "../ProfileTabbar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useBriefProfile } from "./hooks";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { AccountType } from "../../../domain/types/User";
import {
  MenteeGradeLabel,
  MentorGradeLabel,
} from "../../screens/ProfileEditScreen";
import {
  MenteeGrade,
  MentorGrade,
} from "../../screens/ProfileEditScreen/hooks";

export interface BriefProfileProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const BriefProfile: React.FC<BriefProfileProps> = ({ navigation }) => {
  const { handleEditPress, handleSignOut } = useBriefProfile(navigation);
  const screenWidth = Dimensions.get("window").width;
  const { user } = useAuth();

  return (
    <VStack
      paddingX="24px"
      backgroundColor={ProfileTabColor[ProfileTab.PROFILE]}
    >
      <Pressable
        marginY="18px"
        alignSelf="flex-end"
        display="flex"
        flexDirection="row"
        alignItems="center"
        backgroundColor={Color.WHITE_100}
        paddingX="10px"
        paddingY="3px"
        borderRadius="20px"
        borderWidth="1px"
        borderColor={Color.MAIN}
        onPress={handleEditPress}
      >
        <Box mr="4px">
          <CustomMaterialIcon
            name={IconName.EDIT}
            size="16px"
            color={Color.MAIN}
          />
        </Box>
        <CustomText fontType={FontType.EXSMALL} color={Color.MAIN}>
          プロフィールを編集
        </CustomText>
      </Pressable>
      <VStack space="10px">
        <Box display="flex" flexDirection="row" shadow={1}>
          <Box
            backgroundColor={Color.MEDIUM_BASE}
            width="108px"
            height="40px"
            borderLeftRadius="12px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <HStack
              display="flex"
              flexDirection="row"
              space="4px"
              alignItems="center"
            >
              <CustomMaterialIcon
                name={IconName.CIRCLE}
                size="18px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  名前
                </CustomText>
              </View>
            </HStack>
          </Box>
          <HStack
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
            alignItems="center"
            paddingLeft="8px"
          >
            <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
              {user?.userName}
            </CustomText>
          </HStack>
        </Box>
        <Box display="flex" flexDirection="row" shadow={1}>
          <Box
            backgroundColor={Color.MEDIUM_BASE}
            width="108px"
            height="40px"
            borderLeftRadius="12px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <HStack display="flex" flexDirection="row" space="4px">
              <CustomMaterialIcon
                name={IconName.BOOK}
                size="18px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  学年
                </CustomText>
              </View>
            </HStack>
          </Box>
          <HStack
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
            alignItems="center"
            paddingLeft="8px"
          >
            <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
              {user?.type === AccountType.MENTEE
                ? MenteeGradeLabel[user?.grade as MenteeGrade]
                : MentorGradeLabel[user?.grade as MentorGrade]}
            </CustomText>
          </HStack>
        </Box>
        <Box display="flex" flexDirection="row" shadow={1}>
          <Box
            backgroundColor={Color.MEDIUM_BASE}
            width="108px"
            height="40px"
            borderLeftRadius="12px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <HStack display="flex" flexDirection="row" space="4px">
              <CustomMaterialIcon
                name={IconName.APARTMENT}
                size="18px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  {user?.type === AccountType.MENTEE ? "学校" : "大学"}
                </CustomText>
              </View>
            </HStack>
          </Box>
          <HStack
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
            alignItems="center"
            paddingLeft="8px"
          >
            <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
              {user?.type === AccountType.MENTEE
                ? user?.currentSchoolArea
                : user?.college}
            </CustomText>
          </HStack>
        </Box>
        <Box display="flex" flexDirection="row" shadow={1}>
          <Box
            backgroundColor={Color.MEDIUM_BASE}
            width="108px"
            height="40px"
            borderLeftRadius="12px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <HStack display="flex" flexDirection="row" space="4px">
              <CustomMaterialIcon
                name={IconName.FLAG}
                size="18px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  {user?.type === AccountType.MENTEE ? "志望校" : "出身校"}
                </CustomText>
              </View>
            </HStack>
          </Box>
          <HStack
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
            alignItems="center"
            paddingLeft="8px"
          >
            <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
              {user?.type === AccountType.MENTEE
                ? user?.schoolOfChoice
                : user?.formerSchoolArea}
            </CustomText>
          </HStack>
        </Box>
        <Box display="flex" flexDirection="row" shadow={1}>
          <Box
            backgroundColor={Color.MEDIUM_BASE}
            width="108px"
            height="120px"
            borderLeftRadius="12px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <HStack display="flex" flexDirection="row" space="4px">
              <CustomMaterialIcon
                name={IconName.DESCRIPTION}
                size="18px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  自己紹介
                </CustomText>
              </View>
            </HStack>
          </Box>
          <HStack
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="120px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
            alignItems="center"
            paddingLeft="8px"
          >
            <CustomText color={Color.TEXT} fontType={FontType.SMALL}>
              {user?.description}
            </CustomText>
          </HStack>
        </Box>
        <Box
          shadow={1}
          backgroundColor={Color.WHITE_100}
          height="120px"
          width="100%"
          borderWidth="1px"
          borderColor={Color.MEDIUM_BASE}
          borderRadius="12px"
          marginBottom="24px"
        ></Box>
        <Pressable onPress={handleSignOut}>
          <CustomText color={Color.TEXT}>サインアウト</CustomText>
        </Pressable>
      </VStack>
    </VStack>
  );
};
