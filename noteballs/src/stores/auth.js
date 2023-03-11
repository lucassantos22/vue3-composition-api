import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'

import { auth } from '../js/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref({})

  const isLogged = computed(() => !!user.value.id)

  function init(){
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        // User is signed in, see docs for a list of available properties
        const uid = userData.uid;
        user.value.id = uid
        user.value.email = userData.email
        this.router.push('/')
        console.log('Logged in')
        return
      }
      // User is signed out
      user.value = {}
      this.router.replace('/auth')
      console.log('Logged out')
    });
  }
  function registerUser({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log (userCredential.user)
    })
    .catch((error) => {
      alert(error.message)
    });
  }

  function loginUser({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
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

  return { user, isLogged, init, registerUser, loginUser, logoutUser }
})
