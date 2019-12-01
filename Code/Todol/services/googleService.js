import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase';
import {clientConfig} from "../config";

function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData;
    for (let i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()) {
        return true;
      }
    }
  }
  return false;
}

function onSignIn(googleUser) {
  const unsubscribe = firebase
    .auth()
    .onAuthStateChanged(firebaseUser => {
      unsubscribe();
      if (!isUserEqual(googleUser, firebaseUser)) {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .catch(error => {

          })
      } else {

      }
    });
}

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
      androidClientId: clientConfig.androidClientId,
      iosClientId: clientConfig.iosClientId,
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result);
      return result.accessToken;
    } else {
      return {cancelled: true};
    }
  } catch (e) {
    return {error: true};
  }
}

export const googleService = {
  signInWithGoogleAsync,
};
