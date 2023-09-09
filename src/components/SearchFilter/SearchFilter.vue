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
                    <v-text-field variant="outlined" label="Search" v-model="search" @change="handleChange"></v-text-field>
                </v-card-text>

                <v-card-text>
                    <v-text-field label="From" :type="'date'" v-model="from" @change="handleChangeFromDate"></v-text-field>
                    <v-text-field label="To" :type="'date'" v-model="to" @change="handleChangeToDate"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="closeModal">Close Dialog</v-btn>
                    <v-btn color="primary" @click="handleSearch">Search </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script setup>
defineProps(['handleSearch', 'handleChange', 'handleChangeToDate', 'handleChangeFromDate'])
import { ref } from 'vue'


const dialog = ref(false);

const search = ref('')
const from = ref('')
const to = ref('')


const closeModal = () => {
    dialog.value = false
}

</script>

<style scoped>
.text-center {
    margin-right: 8px;
    ;
}
</style>
