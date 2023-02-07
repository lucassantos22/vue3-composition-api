<template>
    <div class="field">
        <div class="control">
            <textarea
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="textarea"
                :placeholder="placeholder"
                ref="textareaRef"
                v-autofocus
                maxlength="100"
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

import { vAutofocus } from '@/directives/vAutofocus'

const textareaRef = ref(null)

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    }
})

function focusTextArea(){
    textareaRef.value.focus()
}

defineExpose({
    focusTextArea
})

</script>