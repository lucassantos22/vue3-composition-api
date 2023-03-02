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
            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const register = ref(false)
const formTitle = computed(() => {
    if (register.value) return 'Register'
    return 'Login'
})
</script>

<style>
.auth-form {
    max-width: 400px;
    margin: 0 auto;
}
</style>