<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-2">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useAuthStore } from '@/stores/auth'
import NavBar from '@/components/Layout/NavBar.vue'

const storeAuth = useAuthStore()

onMounted(() => {
  storeAuth.init()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>