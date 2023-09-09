<template >
    <div class="task-container">
        <section class="task-header">
            <h5> {{ title }} </h5>
            <span class="header-buttons">
                <router-link :to="{ name: 'rehan', params: { taskId: id, status } }" class="view-details-link">
                    View Details
                </router-link>
                <v-btn @click="handleDelete(id, status)" class="v-btn ">
                    delete
                </v-btn>

            </span>
        </section>
        <section>
            <p class="task-info">Task :{{ title }}</p>
            <p class="task-info">description :{{ desc }} </p>
            <p class="task-info">Estimated Time:{{ time }}</p>
            <p class="task-info">Attachements:{{ file?.length }}</p>
        </section>
    </div>
</template>

<script setup>
defineProps(['title', "id", "status", "desc", "time", "file",])
import useAppStore from '@/store/app';

const appStore = useAppStore();


const handleDelete = (id, status) => {
    appStore.deleteTask(id, status);
}
</script>

<style scoped src="./TaskItem.css"></style>