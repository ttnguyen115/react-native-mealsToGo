import { auth } from "../../lib/firebase";

const loginRequest = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};
