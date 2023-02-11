<template>
  <div>
    <button @click="toOnline">Online</button>
    <button @click="toOffline">Offline</button>
  </div>
</template>

<script setup lang="ts">
import router from '../router';

  const toOnline = () => {
    router.push('/online')
  }

  const toOffline = () => {
    router.push('/offline')
  }
</script>