<template>
    <div class="field">
        <div class="control">
            <textarea
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="textarea"
                placeholder="Add a new note..."
                ref="textareaRef"
            />
        </div>
        </div>

        <div class="field is-grouped is-grouped-right">
        <div class="control">
            <slot name="buttons" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const textareaRef = ref(null)

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

function focusTextArea(){
    textareaRef.value.focus()
}

defineExpose({
    focusTextArea
})

</script>