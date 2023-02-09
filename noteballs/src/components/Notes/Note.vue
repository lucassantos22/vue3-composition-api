<template>
    <div
        class="card mb-4"
    >
        <div class="card-content">
            <div class="content">
            {{ note.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ noteLength }} {{ charactersLabel }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`edit/${note.id}`"
                href="#"
                class="card-footer-item"
            >
                Edit
            </RouterLink>
            <a
                href="#"
                class="card-footer-item"
                @click.prevent="modals.deleteNote = true"
            >
                Delete
            </a>
        </footer>
        <ModalDeleteNote
            v-if="modals.deleteNote"
        />
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

import ModalDeleteNote from '@/components/Notes/ModelDeleteNote.vue'
import { useNotesStore } from '@/stores/notes'

const storeNotes = useNotesStore()

const modals = reactive({
    deleteNote: false
})

const noteLength = computed(() => props.note.content.length)
const charactersLabel = computed(() => props.note.content.length > 1 ? 'characters' : 'character')

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

</script>