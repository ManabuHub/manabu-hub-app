import { useEffect, useMemo, useState } from "react";
import { Post } from "../../../domain/types/Post";
import { PostRepository } from "../../../repositories/PostRepository";

export const useHomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const postRepository = useMemo(() => new PostRepository(), []);

  useEffect(() => {
    (async () => {
      const fetchedPosts = await postRepository.getWithTag("英語");
      setPosts(fetchedPosts);
    })();
  }, []);

  return { posts };
};
