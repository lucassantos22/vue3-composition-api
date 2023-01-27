import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const count = ref(0)
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

  return { count, addNote, notes }
})
