// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5lB4mnLTxoqeuXmBXJiTznc74Tu3-LVg",
  authDomain: "miniblog-project-ff11a.firebaseapp.com",
  projectId: "miniblog-project-ff11a",
  storageBucket: "miniblog-project-ff11a.appspot.com",
  messagingSenderId: "840612944465",
  appId: "1:840612944465:web:1212c2eca1e7dfa62f7670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize the db
const db = getFirestore(app)

export {db}