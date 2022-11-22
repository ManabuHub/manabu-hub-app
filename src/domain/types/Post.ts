export enum PostType {
  ASK = "ask",
  TELL = "tell",
}

export interface Post {
  type: PostType;
  authorId: string;
  title: string;
  body: string;
  likes: string[]; // いいねをつけたユーザーのidの配列
  hashTags: string[]; // ハッシュタグ(#を含まない)の配列
  createdAt: Date;
  comments: Comment[];
}

export interface Comment {
  authorId: string;
  body: string;
  likes: string[]; // いいねをつけたユーザーのidの配列
  createdAt: Date;
  comments: Comment[];
}
