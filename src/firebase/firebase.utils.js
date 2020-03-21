import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBmYHGLjcHn4d9_lMOemPEVxTVvLTErmiA",
  authDomain: "crown-db-3c51d.firebaseapp.com",
  databaseURL: "https://crown-db-3c51d.firebaseio.com",
  projectId: "crown-db-3c51d",
  storageBucket: "crown-db-3c51d.appspot.com",
  messagingSenderId: "1022235380816",
  appId: "1:1022235380816:web:ca5d3f50d4b5f9144ad555",
  measurementId: "G-F3P266NLBF"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;