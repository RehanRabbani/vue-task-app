<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                    Search And Filter
                </v-btn>
            </template>

            <v-card>
                <v-card-text>
                    <v-text-field variant="outlined" label="Search" @change="handleChange" v-model="search"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="closeModal">Close Dialog</v-btn>
                    <v-btn color="primary" @click="openModal">Search </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script setup>
defineProps(['handleChange'])
import { ref } from 'vue'
// import useAppStore from '@/store/app';

const dialog = ref(false);
console.log(dialog, "dialog")

const search = ref('')
// const appStore = useAppStore();

const openModal = () => {
    dialog.value = true
}

const closeModal = () => {
    dialog.value = false
}


</script>
