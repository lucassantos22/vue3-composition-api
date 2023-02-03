<template>
    <div class="edit-notes">
        <AddEditNote
            v-model="noteContent"
            ref="addEditNoteRef"
            placeholder="Edit note"
        >
            <template #buttons>
                <RouterLink
                    to="/"
                    class="button is-link is-light"
                >
                    Cancel
                </RouterLink>
                <button
                    class="button is-link is-success"
                    :disabled="!noteContent"
                >
                    Save note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>

import { ref } from 'vue'

import AddEditNote from '@/components/Notes/AddEditNote.vue'

const noteContent = ref('')

</script>