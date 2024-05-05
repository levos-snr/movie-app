import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

/// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF9JShmZyST1DGa3uDE5ibqnkk4tl0tCw",
  authDomain: "movie-app-2-488fc.firebaseapp.com",
  projectId: "movie-app-2-488fc",
  storageBucket: "movie-app-2-488fc.appspot.com",
  messagingSenderId: "915283911698",
  appId: "1:915283911698:web:2e4da8ec94013a714ae4cb",
  measurementId: "G-RE4YVHDM53",
};

//  initialize the firebase App
const firebaseAdmin = firebase.initializeApp(firebaseConfig);

//  db & auth
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
