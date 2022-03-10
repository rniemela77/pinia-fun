import { defineStore } from 'pinia'

export const useAnimalStore = defineStore({
  id: 'animal-store',
  state: () => {
    return {
      animalList: ['tiger'],
    }
  },
//   actions: {},
//   getters: {
//     animalList: state => state.animalList,
//   },
})