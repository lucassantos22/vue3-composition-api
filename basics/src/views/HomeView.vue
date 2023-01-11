<template>
  <div class="home">
  <h3 ref="counterTitleRef"> {{ counterTitle }}: </h3>
    <div>
      <button class="btn" @click="decreaseCounter($event)">-</button>
      <span class="counter"> {{ counter }} </span>
      <button class="btn"  @click="increaseCounter">+</button>
    </div>
  {{ oddEven }}
  <input type="text"  placeholder="Type something..." v-model="text" v-autofocus/>
  {{ text }}
  <h4> Object </h4>
  {{ counterData.count }}
  <input type="text"  placeholder="Counter data title" v-model="counterData.title" />
  {{ counterData.title }}
  <Modal title="My Modal Title!" @showAlert="showAlert">
    <template v-slot:img>Imagem</template>
    <p>Modal Content!!!</p>
  </Modal>
  <hr />
  <h1>Store Counter</h1>
    <div>
        <button class="btn" @click="counterStore.increment">+</button>
        <p class="counter"> Count: {{ counterStore.count }} </p>
        <p>Double count: {{ counterStore.doubleCount }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue'
import { useLog } from '@/use/useLog';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus'
import Modal from '@/components/Modal.vue'

const { logMessage } = useLog()
const counterStore = useCounterStore()

const counter = ref(0)
const counterTitle = ref('Counter Title')
const text = ref('')

const counterTitleRef = ref(null)

const counterData = reactive({
  count: 0,
  title: 'My counter'
})

watch(counter, (newCount, oldCount) => {
  newCount === 10 && alert('10!!!')
})

watch(() => counterData.count, (newCount, oldCount) => {
  newCount === 5 && alert('5!!!')
})

const oddEven = computed(() => {
  if (counter.value % 2 == 0) return 'even'
  return 'odd'
})

async function increaseCounter() {
  counter.value++
  await nextTick()
  alert('Increased!')
}

function decreaseCounter(e) {
  console.log(e)
  counter.value--
}

function showAlert() {
  alert('Alert!!!')
}

onBeforeMount(() => {
  logMessage()
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
  console.log(counterTitleRef.value.offsetWidth)
  onMounted()
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onActivated(() => {
  console.log('onActivated')
})

onDeactivated(() => {
  console.log('onDeactivated')
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})

onUpdated(() => {
  console.log('onUpdated')
})

</script>
