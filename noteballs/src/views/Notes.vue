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
        <Note
            v-for="note in notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'

import { useNotesStore } from '@/stores/notes'

const storeNotes = useNotesStore()
const notes = storeNotes.getNotes

const newNote = ref('')
const addEditNoteRef = ref(null)

function addNote() {
    const note = {
        id: new Date().getTime().toString(),
        content: newNote.value
    }
    storeNotes.addNote(note)
    newNote.value = ''
    addEditNoteRef.value.focusTextArea()
}

watch(newNote, (newValue) => {
    if (newValue.length === 100) {
        alert('Only 100 characters allowed')
    }
})

</script>