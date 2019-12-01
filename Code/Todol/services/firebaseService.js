import * as firebase from 'firebase';
import {firebaseConfig} from '../config';

firebase.initializeApp(firebaseConfig);

function handleAuthStateChange(listener) {
  firebase.auth().onAuthStateChanged(listener);
}

export const firebaseService = {
  handleAuthStateChange,
}
