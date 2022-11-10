import { useCallback, useEffect, useState } from "react";

export const useSelectedHashtag = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "高校受験",
    "英語",
  ]);
  const [candidateTags, setCandidateTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");

  useEffect(() => {
    // TODO: DBからよく使われるハッシュタグをフェッチ
    setCandidateTags(["大学受験", "数学"]);
  }, []);

  const choiceTag = useCallback(
    (tag: string) => {
      if (selectedTags.includes(tag)) {
        // TODO: 何らかのエラーハンドリング
        return;
      }
      setCandidateTags((candidates) =>
        candidates.filter((candidate) => candidate !== tag)
      );
      setSelectedTags((tags) => [...tags, tag]);
    },
    [selectedTags]
  );

  const addNewTag = useCallback(
    (tag: string) => {
      if (tag.trim().length === 0) {
        // TODO: 何らかのエラーハンドリング
        return;
      }
      if (selectedTags.includes(tag)) {
        // TODO: 何らかのエラーハンドリング
        return;
      }
      setCandidateTags((candidates) =>
        candidates.filter((candidate) => candidate !== tag)
      );
      setSelectedTags((tags) => [...tags, tag]);

      setNewTag("");
    },
    [selectedTags]
  );

  const deleteTag = useCallback(
    (tag: string) => {
      const currentTags = selectedTags.slice();
      const targetIndex = currentTags.indexOf(tag);
      currentTags.splice(targetIndex, 1);
      setSelectedTags(currentTags);
    },
    [selectedTags]
  );

  return {
    selectedTags,
    candidateTags,
    newTag,
    choiceTag,
    addNewTag,
    deleteTag,
    setNewTag,
  };
};
