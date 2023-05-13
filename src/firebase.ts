
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA5MnM_L7ZObOFpvWITwa0U1jOSxfIHb5M',
  authDomain: 'reactjs-firebase-5b238.firebaseapp.com',
  projectId: 'reactjs-firebase-5b238',
  storageBucket: 'reactjs-firebase-5b238.appspot.com',
  messagingSenderId: '691497290940',
  appId: '1:691497290940:web:665abb90db1b92b26b14b9',
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);