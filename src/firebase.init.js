import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUUqYy3iaPiwltuW7qOPxDC7Sgsy8lnAk",
  authDomain: "red-onion-a16e4.firebaseapp.com",
  projectId: "red-onion-a16e4",
  storageBucket: "red-onion-a16e4.appspot.com",
  messagingSenderId: "500595149412",
  appId: "1:500595149412:web:db262e8b0e9bd2b198ed71"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;