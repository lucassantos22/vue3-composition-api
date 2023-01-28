<template>
    <div class="notes">
        <div class="field">
        <div class="control">
            <textarea
                class="textarea"
                placeholder="Add a new note..."
                v-model.trim="newNote"
                ref="newNoteRef"
            />
        </div>
        </div>

        <div class="field is-grouped is-grouped-right">
        <div class="control">
            <button
                @click="addNote"
                :disabled="!newNote"
                class="button is-link is-success"
            >
                Add New Note
            </button>
        </div>
        </div>
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