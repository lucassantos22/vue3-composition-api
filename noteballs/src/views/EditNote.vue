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
                    @click="handleSaveClicked"
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
import { useRoute, useRouter } from 'vue-router'

import { useNotesStore } from '@/stores/notes'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

const storeNotes = useNotesStore()

const route = useRoute()
const router = useRouter()

const noteContent = ref(storeNotes.getNoteContent(route.params.id))

function handleSaveClicked() {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}

</script>