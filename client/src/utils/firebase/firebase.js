import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = { // TODO: env
    apiKey: "AIzaSyBeM7jh--3LTCuXUnVR6F3-I61EYFgoVW0",
    appId: "1:480412026660:web:ae9100d07d85613543d5b1",
    authDomain: "react-clothing-store-257318.firebaseapp.com",
    databaseURL: "https://react-clothing-store-257318.firebaseio.com",
    measurementId: "G-EC7X6GBKPS",
    messagingSenderId: "480412026660",
    projectId: "react-clothing-store-257318",
    storageBucket: "react-clothing-store-257318.appspot.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export function signInWithGoogle () {
    return auth.signInWithPopup(googleProvider);
}

export function addCollectionAndDocuments (collectionKey, objectsToAdd = []) {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();

    objectsToAdd.forEach(object => {
        const newDocumentRef = collectionRef.doc();
        batch.set(newDocumentRef, object);
    });

    return batch.commit();
}

export function convertCollectionsSnapshotToMap (collections) {
    const transformedCollections = collections.docs.map(doc => {
        const { items, title } = doc.data();

        return {
            id: doc.id,
            items,
            routeName: encodeURI(title.toLowerCase()),
            title
        };
    });

    return transformedCollections.reduce((accumulator, collection) => {
        const collectionTitle = collection.title.toLowerCase();
        accumulator[collectionTitle] = collection;
        return accumulator;
    }, {});
}

export async function createUserProfileDocument (userAuth, additionalData) {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
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
}

export function getCurrentUser () {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
}

export default firebase;
