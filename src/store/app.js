// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    list1: [
      { title: "a", desc: "", file: "", status: "", tag: "", id: 1 },
      { title: "b", desc: "", file: "", status: "", tag: "", id: 2 },
      { title: "c", desc: "", file: "", status: "", tag: "", id: 3 },
      { title: "d", desc: "", file: "", status: "", tag: "", id: 4 },
    ],
    list2: [
      { title: "e", desc: "", file: "", status: "", tag: "", id: 5 },
      { title: "f", desc: "", file: "", status: "", tag: "", id: 6 },
      { title: "g", desc: "", file: "", status: "", tag: "", id: 7 },
    ],
    list3: [
      { title: "h", desc: "", file: "", status: "", tag: "", id: 8 },
      { title: "i", desc: "", file: "", status: "", tag: "", id: 9 },
      { title: "j", desc: "", file: "", status: "", tag: "", id: 10 },
    ],
  }),
  actions: {
    addTask(newTask) {
      console.log(newTask, "new");
      this.list1.push(newTask);
    },
  },
});

export default useAppStore;
