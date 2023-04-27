<script setup lang="ts">
import {ref} from 'vue';
import vanilla from '@/scripts/vanilla';

import TheWelcome from '@/components/TheWelcome.vue';

const count = ref(0);
count.value = vanilla(2);
</script>

<template>
  <main>
    <TheWelcome :count="count" />
  </main>
</template>
