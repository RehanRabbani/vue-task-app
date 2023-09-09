<template>
    <router-link to="/new-route" class="add-task"> <v-btn color="primary">Add Task</v-btn></router-link>
    <router-view></router-view>
</template>

<style scoped>
.add-task {
    margin-right: 8px;
    ;
}
</style>

