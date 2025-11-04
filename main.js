// Import Firebase libraries directly from CDN (Vercel & browser compatible)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy, 
  onSnapshot 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🔹 আপনার Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMzEPaEARavTZKqICyQZEhUp_dkJQZAAM",
  authDomain: "public-chat-r.firebaseapp.com",
  projectId: "public-chat-r",
  storageBucket: "public-chat-r.firebasestorage.app",
  messagingSenderId: "1088578203941",
  appId: "1:1088578203941:web:276e2ce4af630e418eaacc"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔹 Firestore collection
const messagesRef = collection(db, "messages");

// HTML elements
const msgBox = document.getEl
