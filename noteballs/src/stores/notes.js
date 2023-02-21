import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { collection, onSnapshot, setDoc, doc, deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { db } from '@/js/firebase'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  async function getAllNotes() {
    const q = query(collection(db, 'notes'), orderBy('id', 'desc'));
    onSnapshot(q, (querySnapshot) => {
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
  async function addNote(note) {
    await setDoc(doc(db, "notes", note.id), {
      content: note.content,
      id: note.id
    });
  }
  async function updateNote(id, content) {
    await updateDoc(doc(db, "notes", id), {
      content
    });
  }
  async function deleteNote(id){
    await deleteDoc(doc(db, "notes", id));
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
