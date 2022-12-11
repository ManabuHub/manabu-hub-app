import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ScreenName } from "../../../constants/ScreenName";
import { Post, PostType } from "../../../domain/types/Post";
import { useAuth } from "../../../providers/AuthProvider/hooks";
import { PostRepository } from "../../../repositories/PostRepository";
import { AlertButtonStyle, useAlert } from "../../../utils/useAlert";
import { DisplayMode } from ".";

export const useSearch = () => {
  const [displayMode, setDisplayMode] = useState(DisplayMode.RANK);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchWord, setSearchWord] = useState<string>("");

  const unFocus = () => {
    if (searching) {
      // setDisplayMode(DisplayMode.RESULT);
      return;
    } else {
      setDisplayMode(DisplayMode.RANK);
    }
  };
  const search = () => {
    setSearching(true);
    setDisplayMode(DisplayMode.RESULT);
  };
  const gotoRank = () => {
    setSearching(false);
    setSearchWord("");
    setDisplayMode(DisplayMode.RANK);
  };

  return {
    displayMode,
    setDisplayMode,
    searchWord,
    setSearchWord,
    search,
    unFocus,
    gotoRank,
  };
};
