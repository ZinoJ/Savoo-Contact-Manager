import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import { getFirestore } from '@firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyDnijLpdq3x5QSDL2EQMlSUzYBH2vFS4IE",
   authDomain: "contacts-48438.firebaseapp.com",
   projectId: "contacts-48438",
   storageBucket: "contacts-48438.appspot.com",
   messagingSenderId: "925513848147",
   appId: "1:925513848147:web:13a415c958cfb70d543da6"
 };

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export const auth = getAuth();

export default db