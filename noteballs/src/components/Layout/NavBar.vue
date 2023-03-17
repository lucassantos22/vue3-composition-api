<template>
    <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

        <div class="navbar-item is-size-5 is-family-monospace">
            Noteballs
        </div>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div
            v-if="storeAuth.isLogged"
            class="navbar-start"
        >
            <button class="button is-small is-info mt-3 ml-3" @click="storeAuth.logoutUser">
                Logout {{ storeAuth.user.email }}
            </button>
        </div>
        <div
            v-if="storeAuth.isLogged"
            class="navbar-end"
        >
            <RouterLink to="/" class="navbar-item" active-class="is-active">
                Notes
            </RouterLink>
            <RouterLink to="/stats" class="navbar-item" active-class="is-active">
                Stats
            </RouterLink>
        </div>
    </div>
    </nav>
</template>

<script setup>
import { useAuthStore } from '../../stores/auth'

const storeAuth = useAuthStore()

</script>