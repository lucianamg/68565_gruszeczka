import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAs5KP_3zzwnCrbZNva17PaJY1nR7c1xYM",
  authDomain: "atempo-fe8e1.firebaseapp.com",
  projectId: "atempo-fe8e1",
  storageBucket: "atempo-fe8e1.firebasestorage.app",
  messagingSenderId: "17814081936",
  appId: "1:17814081936:web:80bee95e6f06b518bfe315"
};
const app = initializeApp(firebaseConfig);
export default app;