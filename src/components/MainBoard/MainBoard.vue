<template>
  <div class="board-container">
    <section class="pending">
      <h3>Pending</h3>
      <draggable class="list-group" :list="list1" group="people" @change="log" itemKey="name" v-bind="dragOptions">
        <template #item="{ element }">
          <task-item :title="element.title" :id="element.id" :status="element.status" />
        </template>
      </draggable>
    </section>
    <section class="processing">
      <h3>Proceesing</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log" itemKey="name" v-bind="dragOptions">
        <template #item="{ element }">
          <task-item :title="element.title" :id="element.id" :status="element.status" />
        </template>
      </draggable>
    </section>
    <section class="done">
      <h3>Done</h3>
      <draggable class="list-group" :list="list3" group="people" @change="log" itemKey="name" v-bind="dragOptions">
        <template #item="{ element }">
          <task-item :title="element.title" :id="element.id" :status="element.status" />
        </template>
      </draggable>
    </section>
  </div>
</template>

<script setup>
import TaskItem from "../TaskItem/TaskItem.vue";
defineProps(['list1', 'list2', 'list3']);
</script>

<script >
import draggable from "vuedraggable";
export default {
  name: "three-lists",
  display: "Three Lists",
  order: 1,
  components: {
    draggable
  },
  methods: {
    log: function (evt) {
      window.console.log(evt);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 400,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style src="./MainBoard.css" scoped></style>
  