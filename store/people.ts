import { defineStore } from "pinia";

export const usePeopleStore = defineStore({
  id: "people-store",
  state: () => {
    return {
      people: [
        {
          id: 0,
          name: "John",
          age: 200,
        },
      ],
    };
  },
});
