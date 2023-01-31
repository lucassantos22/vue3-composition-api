<template>
    <div class="field">
        <div class="control">
            <textarea
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                class="textarea"
                placeholder="Add a new note..."
                ref="newNoteRef"
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

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

</script>