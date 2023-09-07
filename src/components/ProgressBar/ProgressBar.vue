
<template>
  <div class="main">
    <div class="progress-container">
      <h1 class="heading">Progress {{ progress?.toFixed(0) }}%</h1>
      <v-progress-linear :model-value="progress" :height="25" bg-color="success"></v-progress-linear>
    </div>
  </div>
</template>

<script setup >
defineProps(['skill'])
import useAppStore from '@/store/app';
import { computed } from 'vue';

const appStore = useAppStore();
const progress = computed(() => appStore.skill.done);
</script>


<style src="./ProgressBar.css" scoped></style>