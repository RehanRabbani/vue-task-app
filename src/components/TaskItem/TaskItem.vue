<template >
    <div class="task-container">
        <section class="task-header">
            <h5> {{ title }} </h5>
            <span>
                edit
                <v-btn @click="handleDelete(id, status)">
                    delete
                </v-btn>

            </span>
        </section>
        <section>
            <p>Task</p>
            <p>description</p>
            <p>Estimated Time</p>
            <p>Attachements</p>
        </section>
    </div>
</template>

<script setup>
defineProps(['title', "id", "status"])
import useAppStore from '@/store/app';

const appStore = useAppStore();


const handleDelete = (id, status) => {
    appStore.deleteTask(id, status);
}
</script>

<style scoped>
.task-header {
    width: 228px;
    background-color: aquamarine;

}

.task-container {
    width: 230px;
    background-color: azure;
    border: 1px solid;
}
</style>