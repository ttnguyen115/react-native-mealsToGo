import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAOeio-tY0c1q8fcu3s8CeEgto1ZVpRck",
  authDomain: "rn-mealstogo.firebaseapp.com",
  projectId: "rn-mealstogo",
  storageBucket: "rn-mealstogo.appspot.com",
  messagingSenderId: "816313266374",
  appId: "1:816313266374:web:f7e3c73c5d83d0da8ae7c7",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
