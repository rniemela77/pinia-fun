<template>
  <div class="person-list">
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr
        v-for="(person, index) in peopleStore.people"
        :class="{ highlight: personIsOlder(person) }"
      >
        <td>
          <span class="tooltip" @click="randomizeName(index)"> 🎲 </span>
          <span class="field">{{ person.name }}</span>
        </td>
        <td
          @click="ageTarget = person.age"
          :class="{ 'age-target': ageTarget === person.age }"
        >
          {{ person.age }}
        </td>
      </tr>
    </table>

    <button @click="addPerson">Add</button>

    <div>Number of people: {{ peopleStore.peopleLength }}</div>
    <!-- {{ peopleStore.peopleOverAgeN(50) }} -->
  </div>
</template>

<script setup lang="ts">
// Store
import { usePeopleStore } from "~/store/people";
// Composables

import { useCreatePerson } from "~/composables/useCreatePerson";
// Store
const peopleStore = usePeopleStore();
// Composables
const { generatePerson, generateName } = useCreatePerson();

// Click on a name to randomize it
const randomizeName = (index: number) => {
  peopleStore.people[index].name = generateName();
};

const ageTarget = ref(999);

const personIsOlder = (person: Person) => {
  return peopleStore.peopleOverAgeN(ageTarget.value).includes(person);
};

// Add another random person
const addPerson = () => {
  peopleStore.people.push(generatePerson());
};
peopleStore.people.push(generatePerson());
peopleStore.people.push(generatePerson());
peopleStore.people.push(generatePerson());
</script>

<style scoped>
.person-list {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
}
table {
  width: fit-content;
  user-select: none;
}
tr:nth-of-type(odd) {
  background: rgb(221, 221, 221);
}
tr.highlight {
  background: yellow;
}
td:hover {
  background: rgb(205, 227, 255);
}
td,
th {
  width: 50%;
  padding: 1rem;
}
td {
  position: relative;
  transition: 0.3s;
}
td .tooltip {
  display: none;
}
td:hover .tooltip {
  display: flex;
}

td .tooltip {
  position: absolute;
  text-align: right;
  align-items: center;
  justify-content: right;
  right: 0;
  width: 100%;
  cursor: pointer;
  height: 95%;
  top: 2.5%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0.95)
  );
  font-size: 55%;
  padding: 0;
  z-index: 999;
  opacity: 0;
  transition: all 0.3s;
}
td .tooltip:hover {
  opacity: 1;
}
td .tooltip button {
  border: none;
  background: none;
}
td .tooltip:hover ~ .field {
  animation: glow 0.5s infinite;
}
@keyframes glow {
  0% {
    color: darkred;
  }
  50% {
    color: red;
  }
  100% {
    color: darkred;
  }
}
.age-target {
  background: lime;
}
</style>
