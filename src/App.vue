<script setup>
import { profile } from './data/resume'
</script>

<template>
  <header class="nav">
    <RouterLink to="/" class="brand">{{ profile.name }}</RouterLink>
    <nav>
      <RouterLink to="/">About</RouterLink>
      <RouterLink to="/experience">Experience</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/interests">Interests</RouterLink>
    </nav>
  </header>
  <main class="container"><RouterView /></main>
  <footer class="footer">© {{ new Date().getFullYear() }} {{ profile.name }}</footer>
</template>
