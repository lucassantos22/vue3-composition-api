<template>
  <NavBar />
  <div class="container is-max-desktop px-2 py-2">
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useNotesStore } from '@/stores/notes'
import NavBar from '@/components/Layout/NavBar.vue'

const storeNotes = useNotesStore()

onMounted(() => {
  storeNotes.getAllNotes()
})

</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>