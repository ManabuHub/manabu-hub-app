import { MaterialIcons } from "@expo/vector-icons";
import * as React from "react";
import { Color, ColorType } from "../../../constants/Color";
import { IconName } from "../../../constants/IconName";

interface IconProps {
  iconName: IconName;
  size?: number;
  color?: ColorType;
}

export const Icon: React.FC<IconProps> = React.memo(
  ({ iconName, size = 16, color = Color.WHITE_100 }) => (
    <MaterialIcons name={iconName} size={size} color={color}></MaterialIcons>
  )
);
