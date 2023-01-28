import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
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
  function addNote(note) {
    notes.value.unshift(note)
  }
  function editNote() {
    
  }
  function deleteNote(id){
    notes.value = notes.value.filter(note => note.id !== id)
  }

  const getNotes = computed(() => notes)

  return { notes, getNotes, addNote, deleteNote }
})
