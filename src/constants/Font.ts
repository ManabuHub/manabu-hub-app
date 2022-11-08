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
  letterSpacing?: number;
  lineHeight?: number;
}

export const FontStyles: { [index in FontType]: FontStyle } = {
  [FontType.EXSMALL]: {
    fontFamily: "NotoSansJP-Regular",
    fontSize: 12,
    fontWeight: "normal",
  },
  [FontType.EXSMALL_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: 12,
    fontWeight: "bold",
  },
  [FontType.SMALL]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: 14,
    fontWeight: "normal",
    letterSpacing: 1,
  },
  [FontType.SMALL_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: 14,
    fontWeight: "bold",
  },
  [FontType.MAIN]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: 16,
    fontWeight: "normal",
    letterSpacing: 2,
    lineHeight: 20,
  },
  [FontType.MAIN_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: 16,
    fontWeight: "bold",
  },
  [FontType.LARGE]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: 18,
    fontWeight: "normal",
  },
  [FontType.LARGE_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: 18,
    fontWeight: "bold",
  },
  [FontType.EXLARGE]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: 20,
    fontWeight: "normal",
  },
  [FontType.EXLARGE_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  [FontType.TITLE]: {
    fontFamily: "NotoSansJP",
    fontSize: 30,
    fontWeight: "bold",
  },
};
