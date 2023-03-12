<template>
    <div class="notes">
        <AddEditNote
            ref="addEditNoteRef"
            v-model="newNote"
            placeholder="Add new note"
        >
            <template #buttons>
                <button
                @click="addNote"
                :disabled="!newNote"
                class="button is-link is-success"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>
        <progress v-if="!notesLoaded" class="progress is-large is-success" max="100" />
        <Note
            v-else
            v-for="note in notes"
            :key="note.id"
            :note="note"
        />
        <div v-if="!notes.length && notesLoaded" class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
            No notes here yet
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

import { useNotesStore } from '@/stores/notes'

const storeNotes = useNotesStore()
const notes = storeNotes.getNotes
const notesLoaded = storeNotes.getNotesLoaded

const newNote = ref('')
const addEditNoteRef = ref(null)

function addNote() {
    storeNotes.addNote(newNote.value)
    newNote.value = ''
    addEditNoteRef.value.focusTextArea()
}

watch(newNote, (newValue) => {
    if (newValue.length === 100) {
        alert('Only 100 characters allowed')
    }
})

</script>