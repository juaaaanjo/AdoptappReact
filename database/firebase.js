import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC8K6B3AlL9yopfeZfhK7BDMPyDdu1XNrM",
    authDomain: "react-adoptapp.firebaseapp.com",
    projectId: "react-adoptapp",
    storageBucket: "react-adoptapp.appspot.com",
    messagingSenderId: "741889216786",
    appId: "1:741889216786:web:9a8d5c79c56f128268e3cb",
    measurementId: "G-7JZCRRK5TX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default {
      firebase,
      db
  }