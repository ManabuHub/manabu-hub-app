import { useState } from "react";

export const useSelectedHashtag = () => {
  const [selectedTags, setSelectedTags] = useState([
    // {tagName:"research",isSelected:true},{tagName:"research",isSelected:true},
    { tagName: "あ", isSelected: true },
  ]);
  const [notSelectedTags, setNotSelectedTags] = useState([
    { tagName: "い", isSelected: false },
    { tagName: "う", isSelected: false },
    { tagName: "え", isSelected: false },
    { tagName: "お", isSelected: false },
    { tagName: "就活", isSelected: false },
    { tagName: "研究", isSelected: false },
    { tagName: "研究生活", isSelected: false },
    { tagName: "修士1年", isSelected: false },
    { tagName: "修士2年", isSelected: false },
    { tagName: "東京大学大学院", isSelected: false },
    { tagName: "工学系研究科", isSelected: false },
    { tagName: "物理工学専攻", isSelected: false },
  ]);
  const [written, setWritten] = useState<string>("");
  return {
    selectedTags,
    setSelectedTags,
    notSelectedTags,
    setNotSelectedTags,
    written,
    setWritten,
  };
};
