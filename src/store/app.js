// Utilities
import { defineStore } from "pinia";
import { statusListMap } from "@/util";

export const useAppStore = defineStore("app", {
  state: () => ({
    list1: [
      {
        id: 1,
        title: "rehan",
        desc: "abcj",
        file: [],
        status: "Pending",
        tag: "",
        time: "2023-09-15",
      },
    ],
    list2: [
      {
        title: "rehan",
        desc: "dsa",
        file: [],
        status: "Processing",
        tag: "",
        id: 5,
        time: "2023-09-15",
      },
    ],
    list3: [
      {
        title: "rehan",
        desc: "dsad",
        file: [],
        status: "Done",
        tag: "",
        id: 8,
        time: "",
      },
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
      console.log(this.list1, "add");
    },
    updateTask(taskId, updatedTask) {
      const index = this.list1.findIndex((task) => task.id === taskId);
      const item = this.list1.find((task) => task.id === taskId);

      const statusToListMap = {
        Pending: this.list1,
        Processing: this.list2,
        Done: this.list3,
      };

      if (item?.status !== updatedTask?.status) {
        const statusToListMap = {
          Pending: this.list1,
          Processing: this.list2,
          Done: this.list3,
        };

        if (statusToListMap[updatedTask.status]) {
          statusToListMap[updatedTask.status].push(updatedTask);

          const listName = statusListMap[item.status];
          if (listName && this[listName]) {
            this[listName] = this[listName].filter(
              (task) => task.id !== taskId
            );
          }
        }
      } else {
        statusToListMap[updatedTask.status][index] = {
          ...statusToListMap[updatedTask.status][index],
          ...updatedTask,
        };
      }
    },
    deleteTask(taskId, status) {
      const listName = statusListMap[status];

      if (listName && this[listName]) {
        this[listName] = this[listName].filter((task) => task.id !== taskId);
      }
    },
    filteredList(data) {
      console.log(data);
    },
  },
});

export default useAppStore;
