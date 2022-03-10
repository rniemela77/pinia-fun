<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/other">Other</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/people">People</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100vw;
  display: block;
  background: rgba(128, 180, 93, 0.5);
}
ul {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  padding: 0;
  margin: 0;
}
li {
  /* flex: 1; */
  list-style-type: none;
}
a {
  padding: 1rem;
  display: block;
  background: rgba(0, 0, 0, 0.1);
}
</style>
