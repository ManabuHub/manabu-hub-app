import * as React from "react";
import { Text } from "react-native";
import { Color, ColorType } from "../../../constants/Color";
import { FontType, FontStyles } from "../../../constants/Font";

interface TextProps {
  fontType?: FontType;
  color?: ColorType;
  children: React.ReactNode;
}

const CustomText: React.FC<TextProps> = ({
  fontType = FontType.MAIN,
  color = Color.WHITE_100,
  children,
}) => {
  return (
    <Text style={{ color: color, ...FontStyles[fontType] }}>{children}</Text>
  );
};

const memoizedCustomText = React.memo(CustomText);
export { memoizedCustomText as CustomText };
