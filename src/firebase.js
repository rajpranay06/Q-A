import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCUPlPt2Pb7NxOUFyE9uMlpmyX0e3hHb9c",
    authDomain: "questionere-c8fba.firebaseapp.com",
    projectId: "questionere-c8fba",
    storageBucket: "questionere-c8fba.appspot.com",
    messagingSenderId: "563752550079",
    appId: "1:563752550079:web:416b03876daf053083900a",
    measurementId: "G-E01XE26S6Q"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;