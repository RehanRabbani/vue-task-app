<template>
    <div class="container">
        <progress-bar /> <!-- Use "progress" instead of "progess" -->
        <section class="board-section">
            <section class="button-section">
                <search-filter :handleChange="handleChange" :dialog="dialog.value" />
                <add-task />
            </section>
        </section>
        <section>
            <main-board :list1="!flg ? appStore.list1 : filteredLists.updatedList1"
                :list2="!flg ? appStore.list2 : filteredLists.updatedList2"
                :list3="!flg ? appStore.list3 : filteredLists.updatedList3" />
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
let filteredLists = ref([]);
const { list1, list2, list3 } = appStore;

const handleChange = (event) => {
    filteredLists.value = filterList(event.target.value, list1, list2, list3);
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
