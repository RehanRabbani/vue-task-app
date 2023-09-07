// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    list1: [
      { title: "a", desc: "", file: "", status: "Pending", tag: "", id: 1 },
      { title: "b", desc: "", file: "", status: "Pending", tag: "", id: 2 },
      { title: "c", desc: "", file: "", status: "Pending", tag: "", id: 3 },
      { title: "d", desc: "", file: "", status: "Pending", tag: "", id: 4 },
    ],
    list2: [
      { title: "e", desc: "", file: "", status: "Processing", tag: "", id: 5 },
      { title: "f", desc: "", file: "", status: "Processing", tag: "", id: 6 },
      { title: "g", desc: "", file: "", status: "Processing", tag: "", id: 7 },
    ],
    list3: [
      { title: "h", desc: "", file: "", status: "Done", tag: "", id: 8 },
      { title: "i", desc: "", file: "", status: "Done", tag: "", id: 9 },
      { title: "j", desc: "", file: "", status: "Done", tag: "", id: 10 },
    ],
  }),
  getters: {
    skill() {
      const pendingTaskCount = this.list1.length;
      const processingTaskCount = this.list2.length;
      const doneTaskCount = this.list3.length;
      const totalTaskCount =
        pendingTaskCount + processingTaskCount + doneTaskCount;

      const donePercentage = (doneTaskCount / totalTaskCount) * 100;

      return {
        done: donePercentage,
      };
    },
  },
  actions: {
    addTask(newTask) {
      const { status } = newTask;
      const statusToListMap = {
        Pending: this.list1,
        Processing: this.list2,
        Done: this.list3,
      };

      if (statusToListMap[[status]]) {
        statusToListMap[status].push(newTask);
      }
    },
    deleteTask(taskId, status) {
      const statusToListMap = {
        Pending: "list1",
        Processing: "list2",
        Done: "list3",
      };
      const listName = statusToListMap[status];
      if (listName && this[listName]) {
        this[listName] = this[listName].filter((task) => task.id !== taskId);
      }
    },
  },
});

export default useAppStore;
