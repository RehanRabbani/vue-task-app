<template >
    <div class="container">
        <progress-bar/>
        <section class="board-section">
            <section class="button-section">
                <search-filter/>
                <add-task/>
                
            </section>
        </section>
        <section>
            <main-board/>
        </section>
    </div>
   
</template>
s
<script setup>
import ProgressBar from './ProgressBar/ProgressBar.vue';
import AddTask from './AddTask/AddTask.vue';
import SearchFilter from './SearchFilter/SearchFilter.vue';
import MainBoard from './MainBoard/MainBoard.vue'
</script>

<style scoped>
.button-section {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

</style>