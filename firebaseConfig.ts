import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Analytics is conditionally imported because it relies on the browser/window object
// which can cause issues during server-side rendering or React Native environments without proper checks.
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAmx3Psu8LwyBMwEg43EkaY9BzHKfL04gs",
  authDomain: "bjj-buddy-d4c80.firebaseapp.com",
  projectId: "bjj-buddy-d4c80",
  storageBucket: "bjj-buddy-d4c80.firebasestorage.app",
  messagingSenderId: "29192037682",
  appId: "1:29192037682:web:3e27d2c1fa53f898dbe32b",
  measurementId: "G-BX269ELLTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);

// Conditionally initialize analytics (only runs on web/supported environments)
let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { analytics };
