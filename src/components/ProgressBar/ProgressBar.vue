<script >
 export default {
    data: () => ({
      skill: Math.random()*20,
    }),
  }
</script>

<template>
   <div class="main">
    <div class="progress-container">
      <h1 class="heading">Progress</h1>
      <v-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
    
    </div>
   </div>
  </template>

  <style src="./ProgressBar.css" scoped>

</style>