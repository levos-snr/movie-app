import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaXpMsnI95NqN5Z4VG5dMkEafiJxnZ54g",
  authDomain: "movie--webapp.firebaseapp.com",
  databaseURL: "https://movie--webapp-default-rtdb.firebaseio.com",
  projectId: "movie--webapp",
  storageBucket: "movie--webapp.appspot.com",
  messagingSenderId: "527511147143",
  appId: "1:527511147143:web:aa1ba8dc702c902a151e22",
  measurementId: "G-FT7N89RX8D"
};

//  initialize the firebase App
const firebaseAdmin = firebase.initializeApp(firebaseConfig);



//  db & auth
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, db, provider };
