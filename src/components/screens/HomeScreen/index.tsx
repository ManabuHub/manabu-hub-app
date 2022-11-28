import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  HStack,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  VStack,
} from "native-base";
import * as React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Color } from "../../../constants/Color";
import { IconName } from "../../../constants/IconName";
import { ScreenName } from "../../../constants/ScreenName";
import { CustomMaterialIcon } from "../../atoms/MaterialIcon";

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      bg={Color.BASE}
    >
      <ScrollView bg={Color.BASE} flex={1}>
        <VStack marginTop={`${insets.top}px`}>
          <HStack position="relative">
            <Pressable
              position="absolute"
              right="30px"
              top="8px"
              onPress={() => {
                navigation.navigate(ScreenName.SETTING);
              }}
            >
              <CustomMaterialIcon
                name={IconName.SETTING}
                size="24px"
                color={Color.MAIN}
              />
            </Pressable>
          </HStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
