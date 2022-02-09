import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyDtCJNCjobqYdcprHnuIs8db9UXDbzaHqM",
    authDomain: "fir-445cd.firebaseapp.com",
    projectId: "fir-445cd",
    storageBucket: "fir-445cd.appspot.com",
    messagingSenderId: "4177973496",
    appId: "1:4177973496:web:a051ce307bd57079cd2b0d",
    measurementId: "G-T0F7D9XPL2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };