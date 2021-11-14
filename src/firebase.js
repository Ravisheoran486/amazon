// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD54bxzC2Lit0fILWhXV4qqfMFrpfNBpI8",
    authDomain: "clone-324d6.firebaseapp.com",
    projectId: "clone-324d6",
    storageBucket: "clone-324d6.appspot.com",
    messagingSenderId: "1066378673449",
    appId: "1:1066378673449:web:005cb98c2096bac9908b38",
    measurementId: "G-Z4FB2XVTL4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };