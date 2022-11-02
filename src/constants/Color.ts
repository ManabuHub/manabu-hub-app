export type ColorType = { __brand__: "ColorType" } & string;

type ColorObject = {
  MAIN: ColorType;
  BG: ColorType;
  BLACK_30: ColorType;
  BASE: ColorType;
  MEDIUM_GRAY: ColorType;
  TEXT: ColorType;
  WHITE_100: ColorType;
  WHITE_70: ColorType;
  WHITE_30: ColorType;
  BUTTON_TEXT: ColorType;
  LINK_TEXT: ColorType;
  INVALID: ColorType;
};

const Color: ColorObject = {
  MAIN: "#3D71D4" as ColorType,
  BG: "#080808" as ColorType,
  BLACK_30: "rgba(0, 0, 0, 0.3)" as ColorType,
  BASE: "#DEECFF" as ColorType,
  MEDIUM_GRAY: "#CDCDCD" as ColorType,
  TEXT: "#3E3E3E" as ColorType,
  WHITE_100: "#FFFFFF" as ColorType,
  WHITE_70: "rgba(255, 255, 255, 0.7)" as ColorType,
  WHITE_30: "rgba(255, 255, 255, 0.3)" as ColorType,
  BUTTON_TEXT: "#5B83EB" as ColorType,
  LINK_TEXT: "#5B83EB" as ColorType,
  INVALID: "#F55F5F" as ColorType,
};

export { Color as Color };
