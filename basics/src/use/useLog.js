import { ref } from "vue";

export function useLog() {
    const message = ref('Hello world')

    function logMessage() {
        console.log(message.value)
    }

    return {
        logMessage
    }
}