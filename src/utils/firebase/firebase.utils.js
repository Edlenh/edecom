import { initializeApp } from 'firebase/app'
import {
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import{
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDE30o3oWa95U4Js8PkAc5GFnW-DPi-WFU",
    authDomain: "edecom-db.firebaseapp.com",
    projectId: "edecom-db",
    storageBucket: "edecom-db.appspot.com",
    messagingSenderId: "939318346948",
    appId: "1:939318346948:web:2c7fb69be1ded18f113591"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

  export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid );
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    if(!userSnapshot.exists()){
        const {displayName, email} =userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error Creating User', error.message)
            
        }
    }
    return userDocRef;
}