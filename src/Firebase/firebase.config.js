// Import the functions needed from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjuWkWovm-_fKzJIsyFyiNE4jP7cmp3HE",
  authDomain: "react-dream-home-2f36b.firebaseapp.com",
  projectId: "react-dream-home-2f36b",
  storageBucket: "react-dream-home-2f36b.appspot.com",
  messagingSenderId: "589116804247",
  appId: "1:589116804247:web:1077cec4543acf13c22dd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;