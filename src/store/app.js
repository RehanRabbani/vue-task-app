// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    list1: [
      { name: "a", id: 1 },
      { name: "b", id: 2 },
      { name: "c", id: 3 },
      { name: "d", id: 4 },
    ],
    list2: [
      { name: "e", id: 5 },
      { name: "f", id: 6 },
      { name: "g", id: 7 },
    ],
    list3: [
      { name: "rehan", id: 8 },
      { name: "hage", id: 9 },
      { name: "hafeez", id: 10 },
    ],
  }),
});

export default useAppStore;
