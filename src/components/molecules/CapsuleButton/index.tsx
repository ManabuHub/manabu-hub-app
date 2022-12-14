import * as React from "react";
import { ReactNode } from "react";
import { HStack, Pressable, Text } from "native-base";
import {
  ButtonColorScheme,
  ButtonStyles,
} from "../../../constants/ButtonColorScheme";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";
import { ActivityIndicator } from "react-native";

interface CapsuleButtonProps {
  text: string;
  fontType?: FontType;
  icon?: IconName;
  colorScheme?: ButtonColorScheme;
  iconSize?: number;
  isLoading?: boolean;
  disabled?: boolean;
  rightIcon?: ReactNode;
  onPress: () => void;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  text,
  colorScheme = ButtonColorScheme.PRIMARY,
  disabled = false,
  isLoading = false,
  rightIcon,
  onPress,
}) => {
  const scheme = disabled ? ButtonColorScheme.DISABLED : colorScheme;

  return (
    <Pressable
      onPress={onPress}
      width="154px"
      height="44px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={22}
      borderWidth={1}
      borderColor={ButtonStyles[scheme].borderColor}
      backgroundColor={ButtonStyles[scheme].bgColor}
      shadow={3}
      disabled={disabled}
      paddingX="24px"
    >
      {isLoading ? (
        <ActivityIndicator size="small" />
      ) : (
        <HStack
          alignItems="center"
          justifyContent={rightIcon ? "space-between" : "center"}
          width="100%"
          position="relative"
        >
          <Text
            fontFamily="body"
            fontWeight={700}
            color={ButtonStyles[scheme].itemColor}
            fontSize="xl"
          >
            {text}
          </Text>
          {rightIcon && rightIcon}
        </HStack>
      )}
    </Pressable>
  );
};

const memoizedCapsuleButton = React.memo(CapsuleButton);
export { memoizedCapsuleButton as CapsuleButton };
