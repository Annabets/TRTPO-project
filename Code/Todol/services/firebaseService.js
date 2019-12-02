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

function signInWithEmailAndPassword(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      switch (error.code) {
        case 'auth/user-not-found':
          return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
              return Promise.reject(error.message);
            });
        case 'auth/invalid-email':
          return Promise.reject('email address is not valid');
        case 'auth/wrong-password':
          return Promise.reject('wrong password');
        default:
          return Promise.reject(error.message);
      }
    });
}

function loadData(clbk) {
  firebase
    .database()
    .ref('users/' + firebase.auth().currentUser.uid)
    .once('value', function (snapshot) {
      const data = snapshot.val();
      clbk(data ? data.tasks : []);
  })
    .catch(() => {

    })
}

function syncData(tasks) {
  firebase
    .database()
    .ref(`users/${firebase.auth().currentUser.uid}`)
    .set({
      tasks: tasks
    })
    .then(() => {

    })
    .catch(() => {

    })
}

export const firebaseService = {
  handleAuthStateChange,
  signOut,
  signInWithEmailAndPassword,
  loadData,
  syncData,
};
