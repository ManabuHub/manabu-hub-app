import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";
import * as React from "react";
import { Color, ColorType } from "../../../constants/Color";
import { IconName } from "../../../constants/IconName";

interface CustomMaterialIconProps {
  name: IconName;
  size: string;
  color?: ColorType;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: Object;
}

const CustomMaterialIcon: React.FC<CustomMaterialIconProps> = ({
  name,
  size,
  color = Color.TEXT,
  style,
}) => {
  return (
    <Icon
      as={<MaterialIcons name={name as any} />}
      size={size}
      color={color}
      style={style}
    />
  );
};

const memoizedCustomMaterialIcon = React.memo(CustomMaterialIcon);
export { memoizedCustomMaterialIcon as CustomMaterialIcon };
