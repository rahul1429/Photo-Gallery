import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDh3RzrVwMFHOTKjk_ylra9-nRzFu7UOEY",
    authDomain: "photogaal-5b503.firebaseapp.com",
    projectId: "photogaal-5b503",
    storageBucket: "photogaal-5b503.appspot.com",
    messagingSenderId: "344139531204",
    appId: "1:344139531204:web:cde5c7cc19783061861a91"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, projectStorage, timestamp }