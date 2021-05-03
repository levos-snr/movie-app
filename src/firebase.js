import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCrp5f6boL6Su7wXs4m7r8mfQBk_uKf0Q",
  authDomain: "movie-app-ec6dd.firebaseapp.com",
  projectId: "movie-app-ec6dd",
  storageBucket: "movie-app-ec6dd.appspot.com",
  messagingSenderId: "957983258010",
  appId: "1:957983258010:web:d40fa6225afc2ef77f3623",
  measurementId: "G-F2V6ST5X06"
};

const firebaseAdmin = firebase.initializeApp(firebaseConfig);
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
