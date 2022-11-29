import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";
import { Post, PostType } from "../../../domain/types/Post";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { PostRepository } from "../../../repositories/PostRepository";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { nGram } from "n-gram";

export const useSelectedHashtag = (
  navigation: NativeStackNavigationProp<any, any>,
  route: RouteProp<any, any>
) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "高校受験",
    "英語",
  ]);
  const [candidateTags, setCandidateTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const postRepository = useMemo(() => new PostRepository(), []);
  const { userId } = useAuth();

  const { emitAlert } = useAlert();

  useEffect(() => {
    // TODO: DBからよく使われるハッシュタグをフェッチ
    setTitle(route.params?.title);
    setBody(route.params?.body);
    setCandidateTags(["大学受験", "数学"]);
  }, [route.params?.body, route.params?.title]);

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

  const addNewTag = useCallback(() => {
    if (newTag.trim().length === 0) {
      return;
    }
    if (selectedTags.includes(newTag)) {
      emitAlert({
        title: "入力エラー",
        message: "このタグは既に追加されています",
        buttons: [
          {
            text: "分かりました",
            style: AlertButtonStyle.OK,
          },
        ],
      });
      return;
    }
    setCandidateTags((candidates) =>
      candidates.filter((candidate) => candidate !== newTag)
    );
    setSelectedTags((tags) => [...tags, newTag]);

    setNewTag("");
  }, [newTag, selectedTags, emitAlert]);

  const deleteTag = useCallback(
    (tag: string) => {
      const currentTags = selectedTags.slice();
      const targetIndex = currentTags.indexOf(tag);
      currentTags.splice(targetIndex, 1);
      setSelectedTags(currentTags);
    },
    [selectedTags]
  );

  const handleCreatePost = useCallback(
    async (type: PostType) => {
      if (!userId) {
        return;
      }
      const newPost: Post = {
        type,
        authorId: userId,
        title,
        body,
        likeCount: 0,
        saveCount: 0,
        commentCount: 0,
        tags: selectedTags,
        nGrams: nGram(3)(body),
        createdAt: new Date(),
      };
      setIsSubmitting(true);
      await postRepository.create(newPost);
      setIsSubmitting(false);
      navigation.navigate(ScreenName.MAIN);
    },
    [body, navigation, postRepository, selectedTags, title, userId]
  );

  return {
    title,
    body,
    selectedTags,
    candidateTags,
    newTag,
    isSubmitting,
    choiceTag,
    addNewTag,
    deleteTag,
    setNewTag,
    handleCreatePost,
  };
};
