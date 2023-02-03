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
  function getNoteContent(id) {
    const { content } = notes.value.find(note => note.id == id)
    return content
  }

  const getNotes = computed(() => notes)

  return { notes, getNotes, addNote, deleteNote, getNoteContent }
})
