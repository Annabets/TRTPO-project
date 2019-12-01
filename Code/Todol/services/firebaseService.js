import * as firebase from 'firebase';
import {firebaseConfig} from '../config';

firebase.initializeApp(firebaseConfig);

function handleAuthStateChange(listener) {
  firebase.auth().onAuthStateChanged(listener);
}

function signOut() {
  return firebase.auth().signOut().catch(error => {
    return Promise.reject(error.message)
  });
}

export const firebaseService = {
  handleAuthStateChange,
  signOut,
};
