
<template>
    <div class="task-page">
        <section class="col-1">
            <section class="task-creation">
                <h1 class="jira-heading">Create Task</h1>
                <v-btn color="primary" @click="closePage" class="jira-button">Close</v-btn>
            </section>
            <div class="jira-form-field">
                <v-text-field label="Title" v-model="newTask.title"></v-text-field>
            </div>
            <div class="jira-form-field">
                <v-textarea label="Description" v-model="newTask.desc"></v-textarea>
            </div>
            <div class="jira-form-field">
                <v-text-field label="Date" :type="'date'" v-model="newTask.time"></v-text-field>
            </div>
            <div class="jira-form-field">
                <file-upload @data-to-parent="handleDataFromChild" />
            </div>
            <div class="jira-buttons">
                <v-btn class="jira-button" @click="addTask" v-if="newTask.status !== ''">
                    Add
                </v-btn>
            </div>
        </section>
        <section class="col-2">
            <v-select label="Select" v-model="newTask.status" :items="['Pending', 'Processing', 'Done']"
                :rules="statusRules"></v-select>
            <v-autocomplete label="Tag" v-model="newTask.tag"
                :items="['release 3', 'release 2', 'release 3']"></v-autocomplete>
        </section>

    </div>
</template>
<script setup>
import FileUpload from '../FileUpload/FileUpload.vue';
import { reactive, ref } from 'vue';
import useAppStore from '@/store/app';
import { useRouter } from 'vue-router';
const router = useRouter();
const appStore = useAppStore();
const newTask = reactive({
    title: '',
    desc: '',
    file: '',
    status: '',
    tag: '',
    time: ''
})

const statusRules = ref([
    v => !!v || 'Status is required',
]);

const addTask = () => {
    const { title, desc, file, status, tag, time } = newTask
    appStore.addTask({ title, desc, file, time, status, tag, id: Date.now() })
    router.push({ name: 'Home' });
};

const handleDataFromChild = (data) => {
    newTask.file = [data]
};

const closePage = () => {
    router.push({ name: 'Home' });
};

</script>
<style src="./TaskAddPage.css" scoped></style>