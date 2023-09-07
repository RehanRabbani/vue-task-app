<template>
  <div class="board-container">
    <section class="pending">
      <h3>Pending</h3>

      <draggable class="list-group" :list="list1" group="people" @change="log" itemKey="name" v-bind="dragOptions">
        <template #item="{ element }">
          <task-item :title="element.name" />
        </template>
      </draggable>

    </section>
    <section class="processing ">
      <h3>Proceesing</h3>
      <draggable class="list-group" :list="list2" group="people" @change="log" itemKey="name" v-bind="dragOptions">
        <template #item="{ element }">
          <task-item :title="element.name" />
        </template>
      </draggable>

    </section>
    <section class="done">
      <h3>Done</h3>
      <draggable class="list-group" :list="list3" group="people" @change="log" itemKey="name" v-bind="dragOptions">
        <template #item="{ element }">
          <task-item :title="element.name" />
        </template>
      </draggable>
    </section>
  </div>
</template>
<script setup>
import TaskItem from "../TaskItem/TaskItem.vue";
</script>

<script >
import draggable from "vuedraggable";


export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        { name: "a", id: 1 },
        { name: "b", id: 2 },
        { name: "c", id: 3 },
        { name: "d", id: 4 }
      ],
      list2: [
        { name: "e", id: 5 },
        { name: "f", id: 6 },
        { name: "g", id: 7 }
      ],
      list3: [
        { name: "rehan", id: 8 },
        { name: "hage", id: 9 },
        { name: "hafeez", id: 10 }
      ]
    };
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
  