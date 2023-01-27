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
            <a href="#" class="card-footer-item">Edit</a>
            <a
                href="#"
                class="card-footer-item"
                @click.prevent="storeNotes.deleteNote(note.id)"
            >
                Delete
            </a>
        </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNotesStore } from '@/stores/notes'

const storeNotes = useNotesStore()

const noteLength = computed(() => props.note.content.length)
const charactersLabel = computed(() => props.note.content.length > 1 ? 'characters' : 'character')

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
})

</script>