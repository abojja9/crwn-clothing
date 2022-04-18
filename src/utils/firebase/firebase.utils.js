import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASLvs8B93-PZfak1Y6b_m9QGjNPBTEN2c",
    authDomain: "crwn-clothing-db-8f31b.firebaseapp.com",
    projectId: "crwn-clothing-db-8f31b",
    storageBucket: "crwn-clothing-db-8f31b.appspot.com",
    messagingSenderId: "559846196607",
    appId: "1:559846196607:web:3237642d1e635eaf92c64a"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    console.log("createUserDocumentFromAuth", userAuth, additionalInformation)
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        console.log("userAuth:", userAuth)

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    console.log("createAuthUserWithEmailAndPassword", email, password)
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    console.log("createAuthUserWithEmailAndPassword", email, password)
    return await signInWithEmailAndPassword(auth, email, password)
}