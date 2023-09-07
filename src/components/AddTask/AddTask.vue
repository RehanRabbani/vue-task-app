<template>
    <router-link to="/new-route"> <v-btn color="primary" @click="dialog = false">Add Task</v-btn></router-link>
    <router-view></router-view>
    <!-- <task-modal name="AddTask" /> -->
</template>


<script setup>

// import TaskModal from '../TaskModal/TaskModal.vue';


</script>

