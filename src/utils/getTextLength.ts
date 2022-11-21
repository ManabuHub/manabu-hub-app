import { FullWidthPattern } from "../constants/RegEx";

export const getTextLength = (text: string) => {
  const length = [...text].reduce(
    (accumulator, char) => accumulator + (char.match(FullWidthPattern) ? 1 : 2),
    0
  );
  return length;
};
