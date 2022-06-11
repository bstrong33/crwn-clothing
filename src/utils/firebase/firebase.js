import { initializeApp } from 'firebase/app';
import { 
    getAuth,  
    signInWithPopup, 
    GoogleAuthProvider ,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCpBl6OcKiyRy4ccXRrH_m0tSwyBKPdXg",
    authDomain: "crwn-clothing-db-17819.firebaseapp.com",
    projectId: "crwn-clothing-db-17819",
    storageBucket: "crwn-clothing-db-17819.appspot.com",
    messagingSenderId: "963362789149",
    appId: "1:963362789149:web:fe82095456e9c3b15a33f4"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection
      
    // if user data exists
    // return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}