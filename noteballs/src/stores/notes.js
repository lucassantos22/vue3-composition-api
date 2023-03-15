import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, addDoc, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'

import { db } from '@/js/firebase'
import { useAuthStore } from '@/stores/auth'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const notesLoaded = ref(false)
  let notesCollection

  async function init() {
    const storeAuth = useAuthStore()
    notesCollection = collection(db, 'users', storeAuth.user.id, 'notes')
    await getAllNotes()
  }
  async function getAllNotes() {
    const q = query(notesCollection, orderBy('date', 'desc'));
    onSnapshot(q, (querySnapshot) => {
      let notesList = []
      querySnapshot.forEach((note) => {
        notesList.push({
          id: note.id,
          content: note.data().content,
          date: note.data().date
        });
      })
      notesLoaded.value = true
      notes.value = notesList
    })
  }
  function clearNotes() {
    notes.value = []
  }
  async function addNote(content) {
    await addDoc(notesCollection, {
      content: content,
      date: new Date().getTime().toString()
    });
  }
  async function updateNote(id, content) {
    await updateDoc(doc(notesCollection, id), {
      content
    });
  }
  async function deleteNote(id){
    await deleteDoc(doc(notesCollection, id));
  }
  function getNoteContent(id) {
    const { content } = notes.value.find(note => note.id == id)
    return content
  }

  const getNotes = computed(() => notes)
  const getNotesLoaded = computed(() => notesLoaded)
  const totalNotesCount = computed(() => notes.value.length)
  const totalCharactersCount = computed(() => {
    let count = 0
    notes.value.forEach(note => {
      count += note.content.length
    })
    return count
  })

  return { init, notes, getNotes, getNotesLoaded, totalNotesCount, totalCharactersCount, getAllNotes, clearNotes, addNote, updateNote, deleteNote, getNoteContent }
})
