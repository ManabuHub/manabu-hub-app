import * as React from "react";
import { Pressable, Text } from "native-base";
import {
  ButtonColorScheme,
  ButtonStyles,
} from "../../../constants/ButtonColorScheme";
import { FontType } from "../../../constants/Font";
import { IconName } from "../../../constants/IconName";

interface CapsuleButtonProps {
  text: string;
  fontType?: FontType;
  icon?: IconName;
  colorScheme?: ButtonColorScheme;
  iconSize?: number;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress: () => void;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  text,
  colorScheme = ButtonColorScheme.PRIMARY,
  isDisabled = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      width={154}
      height={44}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={22}
      borderWidth={1}
      borderColor={ButtonStyles[colorScheme].borderColor}
      backgroundColor={ButtonStyles[colorScheme].bgColor}
      shadow={3}
      disabled={isDisabled}
    >
      <Text
        fontFamily="body"
        fontWeight={700}
        color={ButtonStyles[colorScheme].itemColor}
        fontSize="xl"
      >
        {text}
      </Text>
    </Pressable>
  );
};

const memoizedCapsuleButton = React.memo(CapsuleButton);
export { memoizedCapsuleButton as CapsuleButton };
