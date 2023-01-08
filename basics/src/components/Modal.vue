<template>
    <div>
        <h3>{{ props.title }}</h3>
        <h1>
            <slot name="img"></slot>
        </h1>
        <slot></slot>
        <button @click="showAlert">Show alert</button>
        <pre>Username is @{{ userData.username }}</pre>
    </div>
</template>

<script setup>

import { inject } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: 'Default title'
    }
})

const userData = inject('userData')

const emit = defineEmits(['showAlert'])

function showAlert() {
    emit('showAlert')
}

</script>