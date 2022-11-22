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
  fontSize: string;
  fontWeight: "normal" | "bold";
  letterSpacing?: number;
  lineHeight: number;
}

export const FontStyles: { [index in FontType]: FontStyle } = {
  [FontType.EXSMALL]: {
    fontFamily: "NotoSansJP-Regular",
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: 16,
  },
  [FontType.EXSMALL_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: 16,
  },
  [FontType.SMALL]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: "14px",
    fontWeight: "normal",
    letterSpacing: 1,
    lineHeight: 18,
  },
  [FontType.SMALL_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: 18,
  },
  [FontType.MAIN]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: "16px",
    fontWeight: "normal",
    letterSpacing: 2,
    lineHeight: 20,
  },
  [FontType.MAIN_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: 20,
  },
  [FontType.LARGE]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: "18px",
    fontWeight: "normal",
    lineHeight: 22,
  },
  [FontType.LARGE_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: 22,
  },
  [FontType.EXLARGE]: {
    fontFamily: "NotoSansJP-Medium",
    fontSize: "20px",
    fontWeight: "normal",
    lineHeight: 24,
  },
  [FontType.EXLARGE_BOLD]: {
    fontFamily: "NotoSansJP-Bold",
    fontSize: "20px",
    fontWeight: "bold",
    lineHeight: 24,
  },
  [FontType.TITLE]: {
    fontFamily: "NotoSansJP",
    fontSize: "30px",
    fontWeight: "bold",
    lineHeight: 34,
  },
};
