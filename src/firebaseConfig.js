// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs5KP_3zzwnCrbZNva17PaJY1nR7c1xYM",
  authDomain: "atempo-fe8e1.firebaseapp.com",
  projectId: "atempo-fe8e1",
  storageBucket: "atempo-fe8e1.firebasestorage.app",
  messagingSenderId: "17814081936",
  appId: "1:17814081936:web:80bee95e6f06b518bfe315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// esto se lo pongo porque en cart lo importo y me tira error de que no exporta firebaseConfig
//export default firebaseConfig;
// esto se lo pongo porque en itemlistcontainer lo importo y me tira error de que no exporta app
export default app;