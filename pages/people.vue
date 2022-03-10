<template>
  <div class="person-list">
    <template v-for="person in peopleStore.people" :key="person">
      <Profile :person="person" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { usePeopleStore } from "~/store/people";

const peopleStore = usePeopleStore();
</script>
