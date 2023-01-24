import firebase from 'firebase/compat/app';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
  
export const register = async({email, password})=>{
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    return resp.user;
}
  
export const login = async({email, password})=>{
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
}