<script setup>
import { computed } from 'vue'
import { projects } from '../data/resume'

const props = defineProps({ id: String })
const project = computed(() => projects.find((p) => p.id === props.id))
</script>

<template>
  <RouterLink to="/projects" class="back">← All projects</RouterLink>
  <article v-if="project" class="card">
    <h2>{{ project.title }}</h2>
    <p class="muted">{{ project.period }}</p>
    <div><span v-for="t in project.tags" :key="t" class="chip">{{ t }}</span></div>
    <p v-if="project.note" class="muted note">{{ project.note }}</p>
    <ul><li v-for="b in project.bullets" :key="b">{{ b }}</li></ul>
    <p v-for="l in project.links" :key="l.url">
      <a :href="l.url" target="_blank" rel="noopener">{{ l.label }} ↗</a>
    </p>
  </article>
  <p v-else>Project not found.</p>
</template>
