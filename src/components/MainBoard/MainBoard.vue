<template>
   <div class="board-container">
    <section class="pending">
<h3>Pending</h3>
<div class="col-3">
      
        <draggable
          class="list-group"
          :list="list1"
          group="people"
          @change="log"
          itemKey="name"
          v-bind="dragOptions"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
    </section>
    <section class="processing ">
<h3>Proceesing</h3>
<div class="col-3">
      
        <draggable
          class="list-group"
          :list="list2"
          group="people"
          @change="log"
          itemKey="name"
          v-bind="dragOptions"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
    </section>
    <section class="done">
<h3>Done</h3>
<div class="col-3">
      
        <draggable
          class="list-group"
          :list="list3"
          group="people"
          @change="log"
          itemKey="name"
          v-bind="dragOptions"
        >
          <template #item="{ element, index }">
            <div class="list-group-item">{{ element.name }} {{ index }}</div>
          </template>
        </draggable>
      </div>
    </section>
   </div>
  </template>
  <script>
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
          { name: "John", id: 1 },
          { name: "Joao", id: 2 },
          { name: "Jean", id: 3 },
          { name: "Gerard", id: 4 }
        ],
        list2: [
          { name: "Juan", id: 5 },
          { name: "Edgard", id: 6 },
          { name: "Johnson", id: 7 }
        ],
        list3: [
          { name: "rehan", id: 8 },
          { name: "hage", id: 9 },
          { name: "hafeez", id: 10 }
        ]
      };
    },
    methods: {
     
      log: function(evt) {
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
    }}
  };
  </script>

<style src="./MainBoard.css" scoped>
</style>
  