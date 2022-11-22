import * as React from "react";
import { Color } from "../../../constants/Color";
import { Pressable, View, VStack, Box, HStack } from "native-base";
import { CustomText } from "../../atoms/Text";
import { FontType } from "../../../constants/Font";
import { Dimensions } from "react-native";
import { ProfileTab, ProfileTabColor } from "../ProfileTabbar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenName } from "../../../constants/ScreenName";
import { useBriefProfile } from "./hooks";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";
import { IconName } from "../../../constants/IconName";

export interface BriefProfileProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const BriefProfile: React.FC<BriefProfileProps> = ({ navigation }) => {
  const { handleEditPress, handleSignOut } = useBriefProfile(navigation);
  const screenWidth = Dimensions.get("window").width;

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
                size="16px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  名前
                </CustomText>
              </View>
            </HStack>
          </Box>
          <Box
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
          ></Box>
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
                name={IconName.CIRCLE}
                size="16px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  学年
                </CustomText>
              </View>
            </HStack>
          </Box>
          <Box
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
          ></Box>
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
                name={IconName.CIRCLE}
                size="16px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  学校
                </CustomText>
              </View>
            </HStack>
          </Box>
          <Box
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
          ></Box>
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
                name={IconName.CIRCLE}
                size="16px"
                color={Color.MAIN}
              />
              <View>
                <CustomText color={Color.MAIN} fontType={FontType.SMALL_BOLD}>
                  志望校
                </CustomText>
              </View>
            </HStack>
          </Box>
          <Box
            backgroundColor={Color.WHITE_100}
            width={`${screenWidth - 156}px`}
            height="40px"
            borderRightRadius="12px"
            borderWidth="1px"
            borderColor={Color.MEDIUM_BASE}
          ></Box>
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
