

import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCybIPr1YD17N8eSZwINohVDdyBAbuG8D4",
    authDomain: "cryptocred-60286.firebaseapp.com",
    projectId: "cryptocred-60286",
    storageBucket: "cryptocred-60286.appspot.com",
    messagingSenderId: "70653256571",
    appId: "1:70653256571:web:bd48df93c6a3a7ce1153de"
  };
  
// Initialize Firebase
const app =  initializeApp(firebaseConfig);

export const auth = getAuth(app);