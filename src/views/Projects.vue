<script setup>
import { projects } from '../data/resume'
</script>

<template>
  <h2>Projects</h2>
  <div class="grid">
    <RouterLink v-for="p in projects" :key="p.id" :to="`/projects/${p.id}`" class="card project-card">
      <h3>{{ p.title }}</h3>
      <span class="muted">{{ p.period }}</span>
      <div><span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span></div>
    </RouterLink>
  </div>
</template>
