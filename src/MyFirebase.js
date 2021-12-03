import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
  const firebaseConfig = {
    apiKey: "AIzaSyBz2KanUmA79k_adJ4J8ENiWW7JeEW6tS4",
    authDomain: "friendship-app-4629f.firebaseapp.com",
    databaseURL: "https://friendship-app-4629f-default-rtdb.firebaseio.com",
    projectId: "friendship-app-4629f",
    storageBucket: "friendship-app-4629f.appspot.com",
    messagingSenderId: "95585760306",
    appId: "1:95585760306:web:570e5b1437e431c67fb82b"
  };
  const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const stateChange = onAuthStateChanged;
  export {db , auth , getAuth }


 





