
<template>
    <div class="task-page">
        <section class="col-1">
            <section class="name">
                <p>Create Task</p>
                <v-btn color="primary" @click="dialog = false">Close</v-btn>
            </section>
            <v-text-field label="Title" v-model="newTask.title"></v-text-field>
            <v-textarea label="Description" v-model="newTask.desc"></v-textarea>
            <v-text-field label="Date" :type="'date'" v-model="newTask.time"></v-text-field>
            <file-upload @data-to-parent="handleDataFromChild" />

            <v-btn @click="addTask">
                Add
            </v-btn>
        </section>
        <section class="col-2">
            <v-select label="Select" v-model="newTask.status" :items="['Pending', 'Processing', 'Done']"></v-select>
            <v-autocomplete label="Autocomplete" v-model="newTask.tag"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-autocomplete>
        </section>

    </div>
</template>
<script setup>
import FileUpload from '../FileUpload/FileUpload.vue';
import { reactive } from 'vue';
import useAppStore from '@/store/app';

const appStore = useAppStore();
const newTask = reactive({
    title: '',
    desc: '',
    file: '',
    status: '',
    tag: '',
    time: ''
})

const addTask = () => {
    const { title, desc, file, status, tag, time } = newTask
    appStore.addTask({ title, desc, file, time, status, tag, id: Date.now() })
};

const handleDataFromChild = (data) => {
    newTask.file = [data]
}

</script>
<style src="./TaskModal.css" scoped></style>