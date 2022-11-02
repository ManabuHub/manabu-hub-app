import * as React from "react";
import { ReactNode } from "react";
import { Text, Box, View } from "native-base";
import { Color, ColorType } from "../../../constants/Color";
import { FontType, FontStyles } from "../../../constants/Font";
import { Linking } from "react-native";

interface TextProps {
  fontType?: FontType;
  color?: ColorType;
  children: ReactNode;
  style?: Object;
}

const CustomText: React.FC<TextProps> = ({
  fontType = FontType.MAIN,
  color = Color.WHITE_100,
  children,
  style = {},
}) => {
  return (
    <Text
      flex={1}
      flexWrap="wrap"
      style={{
        color: color,
        ...FontStyles[fontType],
        ...style,
        display: "flex",
      }}
    >
      {children}
    </Text>
  );
};

const memoizedCustomText = React.memo(CustomText);
export { memoizedCustomText as CustomText };

interface LinkSpanProps {
  url: string;
  children: ReactNode;
}

const LinkSpan: React.FC<LinkSpanProps> = ({ url, children }) => {
  return (
    <Text
      onPress={() => {
        Linking.openURL(url);
      }}
      color={Color.LINK_TEXT}
      underline
    >
      {children}
    </Text>
  );
};

const memoizedLinkSpan = React.memo(LinkSpan);
export { memoizedLinkSpan as LinkSpan };
