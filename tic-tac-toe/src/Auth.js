import firebase from 'firebase/compat/app';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase';
  
export const register = async({email, password})=>{
    console.log(email,password)
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    console.log(resp.user)
    return resp.user;


}
  
export const login = async({email, password})=>{
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("user")
    console.log(res.user)
    return res.user;
}