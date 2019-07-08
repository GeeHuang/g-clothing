import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDI47RHznnTLrotzxIR_35ywdgnlS7WygE",
    authDomain: "g-clothing.firebaseapp.com",
    databaseURL: "https://g-clothing.firebaseio.com",
    projectId: "g-clothing",
    storageBucket: "",
    messagingSenderId: "418426639361",
    appId: "1:418426639361:web:28692ccd09863913"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;