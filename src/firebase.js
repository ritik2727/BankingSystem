import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCu8Jtau_rOL-qpTkQChJxYKu4pzefQuww",
  authDomain: "banking-79d73.firebaseapp.com",
  projectId: "banking-79d73",
  storageBucket: "banking-79d73.appspot.com",
  messagingSenderId: "228012058702",
  appId: "1:228012058702:web:6fdb9298fd533b8c4fbb1f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };