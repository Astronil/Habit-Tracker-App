//firebase-config.js

// Import the Firebase SDK
// Import the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJZAM2Zz1mzYZUrmH12tyEYgI9_0kkY4o",
  authDomain: "habit-tracker-ffc35.firebaseapp.com",
  projectId: "habit-tracker-ffc35",
  storageBucket: "habit-tracker-ffc35.firebasestorage.app",
  messagingSenderId: "981579609568",
  appId: "1:981579609568:web:50eadba5a96ae6cdca2785",
  measurementId: "G-822H0EG1HH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const firestore = getFirestore(app);

// Make Firebase auth and database available globally
window.firebase = {
  auth,
  database,
  firestore,
};
