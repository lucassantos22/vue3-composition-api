<script setup>
</script>

<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    id: {{ $route.params.id }}
    <div>
      <button @click="showPostId">Show post id</button>
    </div>
    <p>
      <RouterLink to="/posts">Back to posts list</RouterLink>
    </p>
    <div>
      <button @click="backToPosts">Back do posts list</button>
    </div>
  </div>
</template>

<script setup>

import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function showPostId() {
  alert(`ID: ${route.params.id}`)
}

function backToPosts() {
  router.push({ name: 'home' })
}

</script>