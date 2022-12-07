export enum PostType {
  ASK = "ask",
  TELL = "tell",
}

export interface Post {
  type: PostType;
  authorId: string;
  title: string;
  body: string;
  likeCount: number;
  saveCount: number;
  commentCount: number;
  tags: string[];
  nGrams: string[];
  createdAt: Date;
}

export interface Comment {
  authorId: string;
  body: string;
  likes: string[]; // いいねをつけたユーザーのidの配列
  createdAt: Date;
  comments: Comment[];
}
