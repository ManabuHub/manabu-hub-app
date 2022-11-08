import { db } from "../config/firebase";
import {
  collection,
  CollectionReference,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { User } from "../types/User";
import { StoreName } from "./StoreName";

export class UserRepository {
  collectionRef: CollectionReference;
  constructor() {
    this.collectionRef = collection(db, StoreName.USERS);
  }

  async create(user: User) {
    await setDoc(doc(this.collectionRef, user.id), user);
  }

  async getById(userId: string): Promise<User> {
    const snap = await getDoc(doc(this.collectionRef, userId));
    if (!snap.exists()) {
      throw new Error();
    } else {
      return snap.data() as User;
    }
  }
}
