// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCsPYh48RQ0_QHTfWKqkgEES26xykABBNM',
  authDomain: 'crown-clothing-kishore.firebaseapp.com',
  projectId: 'crown-clothing-kishore',
  storageBucket: 'crown-clothing-kishore.appspot.com',
  messagingSenderId: '731492198018',
  appId: '1:731492198018:web:07a4335548c2155275369b',
  measurementId: 'G-0KX7GGR07H',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  // const userDocRef = doc(db, 'users', userAuth.uid);
  // console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('error creating the user', err.message);
    }
  }

  return userDocRef;
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
