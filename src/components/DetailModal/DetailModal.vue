<!-- TaskDetailModal.vue -->

<template>
    <div class="text-center">
        <v-dialog v-model="showModal" width="800">
            <v-card>
                <v-text-field label="Title" v-model="formData.title"></v-text-field>
                <v-textarea label="Desc" v-model="formData.desc"></v-textarea>
                <v-select label="Select" v-model="formData.status" :items="['Pending', 'Processing', 'Done']"></v-select>
                <v-autocomplete label="Autocomplete" v-model="formData.tag"
                    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-autocomplete>


                <v-card-actions>
                    <v-btn color="primary" @click="closeModal">Close Dialog</v-btn>
                    <v-btn color="primary" @click="update(formData.id, formData)">Update</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
<script setup>

import { ref, watchEffect, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { statusListMap } from '@/util';
import useAppStore from '@/store/app';

const route = useRoute();
const router = useRouter();
const showModal = ref(false);
const taskId = ref(null);
const appStore = useAppStore();

const taskDetail = reactive({

})
const formData = ref({})


watchEffect(() => {

    const routeParams = route.params;
    const status = routeParams.status;
    const item = statusListMap[status]
    const getDetail = appStore[item]?.find(task => task.id == routeParams.taskId);
    taskDetail.value = getDetail;
    formData.value = { ...getDetail };
    if (routeParams.taskId !== undefined) {
        taskId.value = routeParams.taskId;
        showModal.value = true;
    }
});

const closeModal = () => {
    showModal.value = false;
    taskId.value = null;
    router.push({ name: 'Home' });
};

const update = (taskId, formData) => {
    console.log(taskId, formData, "formData")

    appStore.updateTask(taskId, formData);
    router.push({ name: 'Home' });
}
</script>
  