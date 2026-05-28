import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY || "AIzaSyBd4y78WIGAVVkLcKdy_vetN9wgOBj7n1I",
  authDomain: process.env.AUTH_DOMAIN || "lets-chat-8faf9.firebaseapp.com",
  projectId: process.env.PROJECT_ID || "lets-chat-8faf9",
  storageBucket: process.env.STORAGE_BUCKET || "lets-chat-8faf9.firebasestorage.app",
  messagingSenderId: process.env.MESSAGING_SENDER_ID || "829026683175",
  appId: process.env.APP_ID || "1:829026683175:web:b6d63c6ac8cf9410948102"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence() });
const db = initializeFirestore(app, { localCache: persistentLocalCache() });
const storage = getStorage(app);

export { auth, db, storage };