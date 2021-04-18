import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCjGx7kkZ833vDgz1QAi91dNhjFAgMbJbw",
  authDomain: "cyber-schools.firebaseapp.com",
  projectId: "cyber-schools",
  storageBucket: "cyber-schools.appspot.com",
  messagingSenderId: "796965611501",
  appId: "1:796965611501:web:82742f5fb22fb0885d29e4"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();