import * as firebase from "firebase";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfRL4DVDaqj0Wy8ijA4ymReaT-2tw5nSA",
  authDomain: "loan-tracker-2243d.firebaseapp.com",
  databaseURL: "https://loan-tracker-2243d-default-rtdb.firebaseio.com",
  projectId: "loan-tracker-2243d",
  storageBucket: "loan-tracker-2243d.appspot.com",
  messagingSenderId: "974725218957",
  appId: "1:974725218957:web:12a890151ebc86b78918c4",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
