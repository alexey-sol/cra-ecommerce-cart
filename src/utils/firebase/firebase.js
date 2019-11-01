import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBeM7jh--3LTCuXUnVR6F3-I61EYFgoVW0",
  appId: "1:480412026660:web:ae9100d07d85613543d5b1",
  authDomain: "react-clothing-store-257318.firebaseapp.com",
  databaseURL: "https://react-clothing-store-257318.firebaseio.com",
  measurementId: "G-EC7X6GBKPS",
  messagingSenderId: "480412026660",
  projectId: "react-clothing-store-257318",
  storageBucket: "react-clothing-store-257318.appspot.com"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
