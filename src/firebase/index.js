import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
 
const firebaseConfig = {
    apiKey: "AIzaSyAK44euyCtZTfbyhA04PLqy9zrX_PDI76Q",
    authDomain: "climatewebapp-6aa47.firebaseapp.com",
    projectId: "climatewebapp-6aa47",
    storageBucket: "climatewebapp-6aa47.appspot.com",
    messagingSenderId: "433221992901",
    appId: "1:433221992901:web:5ec6d55a6eb8bbb3c00bac",
    measurementId: "G-HJ9BFJC2TL"
};
 
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)

export { signInWithEmailAndPassword, auth, signOut, onAuthStateChanged }; // Export references for use in other files