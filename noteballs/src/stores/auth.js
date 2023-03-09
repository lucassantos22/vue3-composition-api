import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { auth } from '../js/firebase'

export const useAuthStore = defineStore('auth', () => {
  function registerUser({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert (userCredential.user)
    })
    .catch((error) => {
      alert(error.message)
    });
  }

  function loginUser({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert(userCredential.user);
      }
    ).catch((error) => {
      alert(error.message)
    });
  }

  function logoutUser() {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      alert(error.message)
    });
  }

  return { registerUser, loginUser, logoutUser }
})
