import { Color, ColorType } from "./Color";

export enum ButtonColorScheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DISABLED = "disabled",
}

interface ButtonStyle {
  bgColor: ColorType;
  borderColor: ColorType;
  itemColor: ColorType;
}

export const ButtonStyles: { [index in ButtonColorScheme]: ButtonStyle } = {
  [ButtonColorScheme.PRIMARY]: {
    bgColor: Color.MAIN,
    borderColor: Color.WHITE_100,
    itemColor: Color.WHITE_100,
  },
  [ButtonColorScheme.SECONDARY]: {
    bgColor: Color.WHITE_100,
    borderColor: Color.MAIN,
    itemColor: Color.MAIN,
  },
  [ButtonColorScheme.DISABLED]: {
    bgColor: Color.MEDIUM_GRAY,
    borderColor: Color.MEDIUM_GRAY,
    itemColor: Color.WHITE_100,
  },
};
