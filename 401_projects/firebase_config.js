// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Your Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDyWpOUpQBuNQVYX4gqtYc2-pXreC4PQ7U",
    authDomain: "loginpage-82c7d.firebaseapp.com",
    projectId: "loginpage-82c7d",
    storageBucket: "loginpage-82c7d.firebasestorage.app",
    messagingSenderId: "472120337676",
    appId: "1:472120337676:web:7b3e80e9ffd8cae15f9529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
