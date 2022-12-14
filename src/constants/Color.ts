export type ColorType = { __brand__: "ColorType" } & string;

type ColorObject = {
  MAIN: ColorType;
  SUB: ColorType;
  BG: ColorType;
  BLACK_30: ColorType;
  BASE: ColorType;
  MEDIUM_BASE: ColorType;
  MEDIUM_GRAY: ColorType;
  TEXT: ColorType;
  WHITE_100: ColorType;
  WHITE_70: ColorType;
  WHITE_30: ColorType;
  BUTTON_TEXT: ColorType;
  LINK_TEXT: ColorType;
  INVALID: ColorType;
  COIN: ColorType;
  COIN_BORDER: ColorType;
  POST_YELLOW: ColorType;
  POST_YELLOW_SUB: ColorType;
  THREAD_PURPLE: ColorType;
  THREAD_PURPLE_SUB: ColorType;
  LIKE_PINK: ColorType;
  LIKE_PINK_SUB: ColorType;
  SAVE_GREEN: ColorType;
  SAVE_GREEN_SUB: ColorType;
  DASH: ColorType;
  USER_PINK: ColorType;
  GRADE_GREEN: ColorType;
  COLLEGE_ORANGE: ColorType;
  DESCRIPTION_PURPLE: ColorType;
};

const Color: ColorObject = {
  MAIN: "#3D71D4" as ColorType,
  SUB: "#7CA3ED" as ColorType,
  BG: "#080808" as ColorType,
  BLACK_30: "rgba(0, 0, 0, 0.3)" as ColorType,
  BASE: "#DEECFF" as ColorType,
  MEDIUM_BASE: "#C1D3FF" as ColorType,
  MEDIUM_GRAY: "#CDCDCD" as ColorType,
  TEXT: "#3E3E3E" as ColorType,
  WHITE_100: "#FFFFFF" as ColorType,
  WHITE_70: "rgba(255, 255, 255, 0.7)" as ColorType,
  WHITE_30: "rgba(255, 255, 255, 0.3)" as ColorType,
  BUTTON_TEXT: "#5B83EB" as ColorType,
  LINK_TEXT: "#5B83EB" as ColorType,
  INVALID: "#F55F5F" as ColorType,
  COIN: "#F4E3A7" as ColorType,
  COIN_BORDER: "#EC9C46" as ColorType,
  POST_YELLOW: "#FFF7AD" as ColorType,
  POST_YELLOW_SUB: "#FF8100" as ColorType,
  THREAD_PURPLE: "#E7E1FF" as ColorType,
  THREAD_PURPLE_SUB: "#3D71D4" as ColorType,
  LIKE_PINK: "#FFE0F0" as ColorType,
  LIKE_PINK_SUB: "#F65353" as ColorType,
  SAVE_GREEN: "#B2EEB1" as ColorType,
  SAVE_GREEN_SUB: "#1FB48F" as ColorType,
  DASH: "#C3B8B8" as ColorType,
  USER_PINK: "#FF9090" as ColorType,
  GRADE_GREEN: "#5CC988" as ColorType,
  COLLEGE_ORANGE: "#FF9120" as ColorType,
  DESCRIPTION_PURPLE: "#BC67FF" as ColorType,
};

export { Color as Color };
