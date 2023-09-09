<template>
    <div class="container">
        <progress-bar /> <!-- Use "progress" instead of "progess" -->
        <section class="board-section">
            <section class="button-section">
                <search-filter :handleSearch="handleSearch" :dialog="dialog.value" :handleChange="handleChange"
                    :handleChangeFromDate="handleChangeFromDate" :handleChangeToDate="handleChangeToDate" />
                <add-task />
            </section>
        </section>
        <section>
            <main-board :list1="flg ? filteredLists.updatedList1 : appStore.list1"
                :list2="flg ? filteredLists.updatedList2 : appStore.list2"
                :list3="flg ? filteredLists.updatedList3 : appStore.list3" />
        </section>
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar/ProgressBar.vue';
import AddTask from './AddTask/AddTask.vue';
import SearchFilter from './SearchFilter/SearchFilter.vue';
import MainBoard from './MainBoard/MainBoard.vue';
import useAppStore from '@/store/app';
import { filterList } from '../util'
import { ref } from 'vue'
const appStore = useAppStore();
const flg = ref(false);
const dialog = ref(false);
const data = ref('')
const toDate = ref('')
const fromDate = ref('')
let filteredLists = ref([]);
const { list1, list2, list3 } = appStore;

const handleChange = (event) => {
    data.value = event.target.value;
}
const handleChangeToDate = (event) => {
    toDate.value = event.target.value;
}
const handleChangeFromDate = (event) => {
    fromDate.value = event.target.value;
}

const handleSearch = () => {
    filteredLists.value = filterList(data.value, toDate.value, fromDate.value, list1, list2, list3);
    dialog.value = false
    flg.value = true;

}
</script>

<style scoped>
.button-section {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
</style>
