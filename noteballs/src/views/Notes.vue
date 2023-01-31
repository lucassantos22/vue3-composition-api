<template>
    <div class="notes">
        <AddEditNote
            v-model="newNote"
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
        <Note
            v-for="note in notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

import { useNotesStore } from '@/stores/notes'

const storeNotes = useNotesStore()
const notes = storeNotes.getNotes

const newNote = ref('')
const newNoteRef = ref(null)

function addNote() {
    const note = {
        id: new Date().getTime().toString(),
        content: newNote.value
    }
    storeNotes.addNote(note)
    newNote.value = ''
    newNoteRef.value.focus()
}

</script>