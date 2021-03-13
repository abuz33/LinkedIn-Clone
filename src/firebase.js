import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS3_61m7ZL5TOsgtN0Qb8L3iKWACGxCeE",
  authDomain: "linkedin-clone-524db.firebaseapp.com",
  projectId: "linkedin-clone-524db",
  storageBucket: "linkedin-clone-524db.appspot.com",
  messagingSenderId: "1067758173896",
  appId: "1:1067758173896:web:b5bad38df16765c653effd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
