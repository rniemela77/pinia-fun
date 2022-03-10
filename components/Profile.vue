<template>
  <div>
    <div><span>ID</span>{{ props.person.id }}</div>
    <div><span>NAME</span>{{ props.person.name }}</div>
    <div><span>AGE</span>{{ props.person.age }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  person: Person;
}

const props = defineProps<Props>();
</script>

<style scoped>
span {
  color: #999;
}
</style>
