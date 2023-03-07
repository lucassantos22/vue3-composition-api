import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../js/firebase'

export const useAuthStore = defineStore('auth', () => {
  function registerUser({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert(userCredential.user)
    })
    .catch((error) => {
      alert(error.message)
    });
  }

  return { registerUser }
})
