<template>
    <div class="auth">
        <div class="tabs is-centered">
        <ul>
            <li :class="{'is-active': !register}">
                <a @click.prevent="register=false">Login</a>
            </li>
            <li :class="{'is-active': register}">
                <a @click.prevent="register=true">Register</a>
            </li>
        </ul>
        </div>

        <div class="card auth-form">
            <div class="card-content">
                <div class="content">
                    <div class="title has-text-centered mb-2">
                        {{ formTitle }}
                    </div>
                </div>

                <form
                    @submit.prevent="onSubmit"
                >
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="credentials.email">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input" type="password" placeholder="Enter a password" v-model="credentials.password">
                        </div>
                    </div>

                    <div class="field is-grouped is-grouped-right">
                        <p class="control">
                            <button class="button is-primary">
                                {{ formTitle }}
                            </button>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

import { useAuthStore } from '../stores/auth'

const storeAuth = useAuthStore()

const register = ref(false)
const credentials = reactive({
    email: '',
    password: ''
})

const formTitle = computed(() => {
    if (register.value) return 'Register'
    return 'Login'
})

function onSubmit() {
    if (!credentials.email || !credentials.password) {
        alert('Please enter a valid email and password')
        return
    }
    if (register.value) {
        storeAuth.registerUser(credentials)
        console.log('Registered!')
        return
    }
    console.log('Logged!')
}

</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>