<template>
    <div class="container">
        <progress-bar /> <!-- Use "progress" instead of "progess" -->
        <section class="board-section">
            <section class="button-section">
                <search-filter />
                <add-task />
            </section>
        </section>
        <section>
            <main-board :list1="appStore.list1" :list2="appStore.list2" :list3="appStore.list3" />
        </section>
    </div>
</template>

<script setup>
import ProgressBar from './ProgressBar/ProgressBar.vue';
import AddTask from './AddTask/AddTask.vue';
import SearchFilter from './SearchFilter/SearchFilter.vue';
import MainBoard from './MainBoard/MainBoard.vue';
import useAppStore from '@/store/app';
const appStore = useAppStore();

</script>

<style scoped>
.button-section {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
</style>
