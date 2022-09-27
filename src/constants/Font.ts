export enum FontType {
  EXSMALL = "exsmall_normal",
  EXSMALL_BOLD = "exsmall_bold",
  SMALL = "small_normal",
  SMALL_BOLD = "exsmall_bold",
  MAIN = "main_normal",
  MAIN_BOLD = "main_bold",
  LARGE = "large_normal",
  LARGE_BOLD = "large_bold",
  EXLARGE = "exlarge_normal",
  EXLARGE_BOLD = "exlarge_bold",
  TITLE = "title",
}

interface FontStyle {
  fontFamily: string;
  fontSize: number;
  fontWeight: "normal" | "bold";
}

export const FontStyles: { [index in FontType]: FontStyle } = {
  [FontType.EXSMALL]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 12,
    fontWeight: "normal",
  },
  [FontType.EXSMALL_BOLD]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 12,
    fontWeight: "bold",
  },
  [FontType.SMALL]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 14,
    fontWeight: "normal",
  },
  [FontType.SMALL_BOLD]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 14,
    fontWeight: "bold",
  },
  [FontType.MAIN]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 16,
    fontWeight: "normal",
  },
  [FontType.MAIN_BOLD]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 16,
    fontWeight: "bold",
  },
  [FontType.LARGE]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 18,
    fontWeight: "normal",
  },
  [FontType.LARGE_BOLD]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 18,
    fontWeight: "bold",
  },
  [FontType.EXLARGE]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 20,
    fontWeight: "normal",
  },
  [FontType.EXLARGE_BOLD]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 20,
    fontWeight: "bold",
  },
  [FontType.TITLE]: {
    fontFamily: "Noto-Sans-JP",
    fontSize: 30,
    fontWeight: "bold",
  },
};
