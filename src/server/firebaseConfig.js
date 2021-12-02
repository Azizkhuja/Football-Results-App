import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg85xaq2Bwi77HBt5domDaW7Rg0G7M7q4",
  authDomain: "football-results-f4c8e.firebaseapp.com",
  projectId: "football-results-f4c8e",
  storageBucket: "football-results-f4c8e.appspot.com",
  messagingSenderId: "340989808064",
  appId: "1:340989808064:web:e0edd38c84e1a74e2b8c25",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
