import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

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