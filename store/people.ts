import { defineStore } from "pinia";

interface PeopleState {
  people: Person[];
}

export const usePeopleStore = defineStore({
  id: "people-store",
  state: (): PeopleState => {
    return {
      people: [
        // {
        //   name: "John",
        //   age: 200,
        // },
      ],
    };
  },
  getters: {
    peopleLength: (state) => state.people.length,
    peopleOverAgeN: (state) => {
      return (age: number) => state.people.filter((person) => person.age > age);
    },
  },
});
