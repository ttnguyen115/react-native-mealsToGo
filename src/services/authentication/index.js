import { auth } from "../../lib/firebase";

export const loginRequest = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);
