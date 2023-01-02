<template>
  <div class="home">
  <h3> {{ counterTitle }}: </h3>
    <div>
      <button class="btn" @click="decreaseCounter($event)">-</button>
      <span class="counter"> {{ counter }} </span>
      <button class="btn"  @click="increaseCounter">+</button>
    </div>
  </div>
  {{ oddEven }}
  <input type="text"  placeholder="Type something..." v-model="text" v-autofocus/>
  {{ text }}
  <h4> Object </h4>
  {{ counterData.count }}
  <input type="text"  placeholder="Counter data title" v-model="counterData.title" />
  {{ counterData.title }}
</template>

<script setup>
import { ref, reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onBeforeUpdate, onUpdated } from 'vue'
import { vAutofocus } from '../directives/vAutofocus'

const counter = ref(0)
const counterTitle = ref('Counter Title')
const text = ref('')

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

function increaseCounter() {
  counter.value++
}

function decreaseCounter(e) {
  console.log(e)
  counter.value--
}

onBeforeMount(() => {
  console.log('onBeforeMount')
})

onMounted(() => {
  console.log('onMounted')
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
