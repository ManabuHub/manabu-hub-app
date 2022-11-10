import * as React from "react";
import { useState, useCallback } from "react";
import { ReactNode } from "react";
import { Text, View } from "native-base";
import { Color, ColorType } from "../../../constants/Color";
import { FontType, FontStyles } from "../../../constants/Font";
import {
  Linking,
  NativeSyntheticEvent,
  TextLayoutEventData,
} from "react-native";
import DashedLine from "react-native-dashed-line";

interface TextProps {
  fontType?: FontType;
  color?: ColorType;
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: Object;
  lineLimit?: number;
  underline?: boolean;
}

const CustomText: React.FC<TextProps> = ({
  fontType = FontType.MAIN,
  color = Color.WHITE_100,
  children,
  style = {},
  lineLimit,
  underline = false,
}) => {
  const [numberOfLines, setNumberOfLines] = useState<number>(0);

  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      setNumberOfLines(e.nativeEvent.lines.length);
    },
    []
  );

  return (
    <View flex={1} position="relative">
      <Text
        style={{
          color: color,
          ...FontStyles[fontType],
          ...style,
          display: "flex",
        }}
        numberOfLines={lineLimit ?? undefined}
        ellipsizeMode="tail"
        onTextLayout={onTextLayout}
        lineHeight={underline ? "21px" : undefined}
      >
        {children}
      </Text>
      {underline &&
        [...Array(numberOfLines).keys()].map((num) => (
          <>
            <View position="absolute" top={`${21 + num * 21}px`} width="100%">
              <DashedLine
                dashLength={2}
                dashThickness={1}
                dashColor={Color.DASH}
              />
            </View>
          </>
        ))}
    </View>
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
