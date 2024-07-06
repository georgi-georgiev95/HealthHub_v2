import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: "healthhub-ddadd.firebaseapp.com",
    projectId: "healthhub-ddadd",
    storageBucket: "healthhub-ddadd.appspot.com",
    messagingSenderId: "649780624951",
    appId: "1:649780624951:web:fdb16d327a06ba39b589b2",
    measurementId: "G-47M3SK3XC9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const firebaseAuth = {
    register: (email, password) => createUserWithEmailAndPassword(auth, email, password),
    login: (email, password) => signInWithEmailAndPassword(auth, email, password),
    logout: () => signOut(auth),
    onAuthStateChanged: (callback) => onAuthStateChanged(auth, callback),
    currentUser: () => auth.currentUser,
    db: () => db
};

export { firebaseAuth };
