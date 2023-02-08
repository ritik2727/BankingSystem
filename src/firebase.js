import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAVu48Kc5Pm7OhKzEg9HT-BdQ0EdXc4R48",
  authDomain: "canada-c457c.firebaseapp.com",
  projectId: "canada-c457c",
  storageBucket: "canada-c457c.appspot.com",
  messagingSenderId: "1055663685378",
  appId: "1:1055663685378:web:b49492b3651e1fe69a0c1b"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };