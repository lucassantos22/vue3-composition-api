<template>
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Delete Note?</p>
            <button class="delete" aria-label="close" @click="emit('closeDeleteModal')"></button>
        </header>
        <section class="modal-card-body">
            Are you sure you want to delete this permanently?
        </section>
        <footer class="modal-card-foot is-justify-content-end">
            <button class="button" @click="emit('closeDeleteModal')">Cancel</button>
            <button class="button is-danger" @click="emit('handleDeleteNoteModal')">Delete</button>
        </footer>
    </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['closeDeleteModal', 'handleDeleteNoteModal'])

</script>