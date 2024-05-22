// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSZbgQ8zsixK4e9U4VWjojGociKYELV40",
  authDomain: "stride1-67cd4.firebaseapp.com",
  projectId: "stride1-67cd4",
  storageBucket: "stride1-67cd4.appspot.com",
  messagingSenderId: "227843300887",
  appId: "1:227843300887:web:df46ef575032b9e24bc652",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
