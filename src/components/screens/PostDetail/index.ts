import * as React from "react";
import { useState, useEffect } from "react";
import { Post } from "../../../domain/types/Post";

export const PostDetailScreen: React.FC = () => {
  const [postData, setPostData] = useState<Post>({
    authorId: "",
    title: "",
    body: "",
    likes: [],
    hashTags: [],
    createdAt: new Date(), //Dateの初期値は何にすべきなのか
    comments: [],
  });

  useEffect(() => {
    //データを取ってくる関数 型注釈てきとーです
    const fetchData = async (): Promise<Post | any> => {};

    const postData = await fetchData();
    setPostData(postData);
  }, []);

  //型エラーが起きています
  return <></>;
};
