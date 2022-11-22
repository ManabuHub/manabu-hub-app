import { db } from "../config/firebase";
import { collection, CollectionReference, addDoc } from "firebase/firestore";
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
}
