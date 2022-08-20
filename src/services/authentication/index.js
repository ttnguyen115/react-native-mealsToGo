import { auth } from "../../lib/firebase";

export const loginRequest = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const registerRequest = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
