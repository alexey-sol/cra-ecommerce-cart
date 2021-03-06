import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(getConfig(process.env));

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

function getConfig (env) {
    return {
        apiKey: env.REACT_APP_FIREBASE_API_KEY,
        appId: env.REACT_APP_FIREBASE_APP_ID,
        authDomain: env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: env.REACT_APP_FIREBASE_DATABASE_URL,
        measurementId: env.REACT_APP_FIREBASE_MEASUREMENT_ID,
        messagingSenderId: env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        projectId: env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: env.REACT_APP_FIREBASE_STORAGE_BUCKET
    };
}

export default firebase;
