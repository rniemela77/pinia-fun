<template>
  <div>
    <h1>home page</h1>
    <ol>
      <li v-for="animal in animalStore.animalList">
        {{ animal }}
      </li>
    </ol>
    <button @click="addAnimal">add</button>
  </div>
</template>

<script setup lang="ts">
import { useAnimalStore } from "~/store/animals";

const animalStore = useAnimalStore();

const addAnimal = () => {
  animalStore.animalList.push("crocodile");
};
</script>
