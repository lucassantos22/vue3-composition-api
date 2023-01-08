<template>
    <div>
        <h3>{{ props.title }}</h3>
        <h1>
            <slot name="img"></slot>
        </h1>
        <slot></slot>
        <button @click="showAlert">Show alert</button>
    </div>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        default: 'Default title'
    }
})

const emit = defineEmits(['showAlert'])

function showAlert() {
    emit('showAlert')
}

</script>