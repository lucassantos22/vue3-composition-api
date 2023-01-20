<template>
    <div class="notes">
        <div class="field">
        <div class="control">
            <textarea
                class="textarea"
                placeholder="Add a new note..."
                v-model="newNote"
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
            @delete="handleDeleteNote"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Note from '@/components/Notes/Note.vue'

const newNote = ref('')
const newNoteRef = ref(null)

const notes = ref([
    {
        id: 'id1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
    },
    {
        id: 'id2',
        content: 'Lorem ipsum dolor sit amet, consectetur'
    }
])

function addNote() {
    const note = {
        id: new Date().getTime().toString(),
        content: newNote.value
    }
    notes.value.unshift(note)
    newNote.value = ''
    newNoteRef.value.focus()
}

function handleDeleteNote(id) {
    notes.value = notes.value.filter(note => note.id !== id)
}

</script>