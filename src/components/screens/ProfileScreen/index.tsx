import {
  Box,
  KeyboardAvoidingView,
  ScrollView,
  VStack,
  HStack,
  Icon,
  View,
  Pressable,
  Spacer,
} from "native-base";
import * as React from "react";
import { useState } from "react";
import { Dimensions, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../../constants/Color";
import { FontType } from "../../../constants/Font";
import { CustomText } from "../../atoms/Text";
import {
  ProfileHeader,
  ProfileTab,
  ProfileTabColor,
} from "../../organisms/ProfileHeader";
import { MaterialIcons } from "@expo/vector-icons";

const CurrentCoin = 150;

export const ProfileScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const [currentTab, setCurrentTab] = useState<ProfileTab>(ProfileTab.PROFILE);
  const screenWidth = Dimensions.get("window").width;

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.WHITE_100}
    >
      <ScrollView bg={Color.WHITE_100} flex={1}>
        <Box
          height={8}
          width={48}
          borderRadius={16}
          backgroundColor={Color.COIN}
          borderColor={Color.COIN_BORDER}
          borderWidth={1}
          marginTop={`${insets.top}px`}
          marginLeft={2}
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Icon
            as={<MaterialIcons name={"monetization-on"} />}
            size={4}
            color={Color.COIN_BORDER}
            marginLeft="8px"
            mt="1px"
          />
          <CustomText
            color={Color.TEXT}
            fontType={FontType.SMALL_BOLD}
            style={{ marginLeft: 8 }}
          >
            {CurrentCoin} 今までの合計()
          </CustomText>
        </Box>
        <Box
          height={200}
          marginY="24px"
          backgroundColor={Color.MAIN}
          width={120}
          alignSelf="center"
        />
        <ProfileHeader
          currentTab={currentTab}
          onCurrentTabChange={setCurrentTab}
        />
        <VStack paddingX="24px" backgroundColor={ProfileTabColor[currentTab]}>
          <Pressable
            marginY="18px"
            alignSelf="flex-end"
            display="flex"
            flexDirection="row"
            backgroundColor={Color.WHITE_100}
            paddingX="10px"
            paddingY="3px"
            borderRadius="20px"
            borderWidth="1px"
            borderColor={Color.MAIN}
          >
            <Icon
              as={<MaterialIcons name={"edit"} />}
              size={4}
              color={Color.MAIN}
              mt="3px"
              mr="4px"
            />
            <View>
              <CustomText fontType={FontType.EXSMALL} color={Color.MAIN}>
                プロフィールを編集
              </CustomText>
            </View>
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
                <HStack display="flex" flexDirection="row" space="4px">
                  <Icon
                    as={<MaterialIcons name={"circle"} />}
                    size={4}
                    color={Color.MAIN}
                    mt={1}
                  />
                  <View>
                    <CustomText
                      color={Color.MAIN}
                      fontType={FontType.SMALL_BOLD}
                    >
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
                  <Icon
                    as={<MaterialIcons name={"circle"} />}
                    size={4}
                    color={Color.MAIN}
                    mt={1}
                  />
                  <View>
                    <CustomText
                      color={Color.MAIN}
                      fontType={FontType.SMALL_BOLD}
                    >
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
                  <Icon
                    as={<MaterialIcons name={"circle"} />}
                    size={4}
                    color={Color.MAIN}
                    mt={1}
                  />
                  <View>
                    <CustomText
                      color={Color.MAIN}
                      fontType={FontType.SMALL_BOLD}
                    >
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
                  <Icon
                    as={<MaterialIcons name={"circle"} />}
                    size={4}
                    color={Color.MAIN}
                    mt={1}
                  />
                  <View>
                    <CustomText
                      color={Color.MAIN}
                      fontType={FontType.SMALL_BOLD}
                    >
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
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
