import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7RD7ITaHoJ7vI4AaMK0zCpsixPcDCkN8",
    authDomain: "discord-clone-1.firebaseapp.com",
    databaseURL: "https://discord-clone-1.firebaseio.com",
    projectId: "discord-clone-1",
    storageBucket: "discord-clone-1.appspot.com",
    messagingSenderId: "754469586866",
    appId: "1:754469586866:web:a61043e267fb2c63f406ab",
    measurementId: "G-5WWZ7R5GHW"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
