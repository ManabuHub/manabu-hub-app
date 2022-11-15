import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import Constants from "expo-constants";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: Constants.manifest?.extra?.firebaseApiKey,
  authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
  projectId: Constants.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants.manifest?.extra?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
  appId: Constants.manifest?.extra?.firebaseAppId,
  measurementId: Constants.manifest?.extra?.measurementId,
});

export default app;
export const db = getFirestore(app);
export const auth = getAuth(app);
