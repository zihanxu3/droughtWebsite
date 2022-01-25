// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
// import firebase from 'firebase'
import "firebase/auth"
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYwDDNCJvfKo5KFoAmCcD5d00GqUuo-bE",
  authDomain: "droughtproject-25e61.firebaseapp.com",
  projectId: "droughtproject-25e61",
  storageBucket: "droughtproject-25e61.appspot.com",
  messagingSenderId: "845930865448",
  appId: "1:845930865448:web:0f72f90e359ccb5d7ba61d",
  measurementId: "G-136V9J4LTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const writeUserData = async (content, state, name="anonymous") => {
    const db = getDatabase();
    var newPostKey = push(ref(db, 'users')).key;
    try {
        await set(ref(db, 'users/' + newPostKey), {
            username: name,
            content: content,
            state : state
        });
    } catch (error) {
        console.error("Error adding data from firebase", error);
    }
}