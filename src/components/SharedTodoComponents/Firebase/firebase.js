import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyB6Tyhn9qpf0yEF4o3CLJ-SMjoHiUsM11E",
    authDomain: "temaoppgave-8.firebaseapp.com",
    projectId: "temaoppgave-8",
    storageBucket: "temaoppgave-8.appspot.com",
    messagingSenderId: "844701114627",
    appId: "1:844701114627:web:4fddc390c00aa66837c936"
});

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const functions = firebase.functions();

export default firebase;