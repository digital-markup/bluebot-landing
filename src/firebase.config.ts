import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBN3Ck0-lDb7Oz5OCNoKzXiaFVl_DjZqlA",
    authDomain: "bluebot-d8efc.firebaseapp.com",
    projectId: "bluebot-d8efc",
    storageBucket: "bluebot-d8efc.firebasestorage.app",
    messagingSenderId: "492948629315",
    appId: "1:492948629315:web:91e4cb5e78ab29431531f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);