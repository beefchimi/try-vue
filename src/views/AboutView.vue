<script setup lang="ts">
import { ref } from 'vue';
import { things } from '@/scripts';

const stored = ref('');
const captured = things('Hello');

stored.value = captured;
</script>

<template>
  <div class="about">
    <h1>This is an about page.</h1>
    <p>{{ stored }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
