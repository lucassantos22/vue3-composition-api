import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  async function getAllNotes() {
    onSnapshot(collection(db, "notes"), (querySnapshot) => {
      let notesList = []
      querySnapshot.forEach((note) => {
        notesList.push({
          id: note.id,
          content: note.data().content
        });
      })
      notes.value = notesList
    })
  }
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

  return { notes, getNotes, totalNotesCount, totalCharactersCount, getAllNotes, addNote, updateNote, deleteNote, getNoteContent }
})
