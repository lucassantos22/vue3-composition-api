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
  function updateNote(id, content) {
    const note = notes.value.find(note => note.id == id)
    note.content = content
  }
  function deleteNote(id){
    notes.value = notes.value.filter(note => note.id !== id)
  }
  function getNoteContent(id) {
    const { content } = notes.value.find(note => note.id == id)
    return content
  }

  const getNotes = computed(() => notes)
  const totalNotesCount = computed(() => notes.value.length)
  const totalCharactersCount = computed(() => {
    let count = 0
    notes.value.forEach(note => {
      count += note.content.length
    })
    return count
  })

  return { notes, getNotes, totalNotesCount, totalCharactersCount, addNote, updateNote, deleteNote, getNoteContent }
})
