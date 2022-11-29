import { db } from "../config/firebase";
import {
  collection,
  CollectionReference,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { StoreName } from "./StoreName";
import { Post } from "../domain/types/Post";

export class PostRepository {
  collectionRef: CollectionReference;
  constructor() {
    this.collectionRef = collection(db, StoreName.POSTS);
  }

  async create(post: Post) {
    await addDoc(this.collectionRef, post);
  }

  async getWithTag(tag: string): Promise<Post[]> {
    const posts: Post[] = [];
    const q = query(this.collectionRef, where("tags", "array-contains", tag));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      posts.push(doc.data() as Post);
    });
    return posts;
  }
}
