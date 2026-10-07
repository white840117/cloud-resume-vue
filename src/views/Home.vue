<script setup>
import { profile } from '../data/resume'
</script>

<template>
  <section class="hero">
    <img :src="profile.photo" :alt="profile.name" class="avatar" />
    <div>
      <h1>{{ profile.name }}</h1>
      <p class="tagline">{{ profile.tagline }}</p>
      <p class="summary">{{ profile.summary }}</p>
      <div class="links">
        <span>📍 {{ profile.location }}</span>
        <a :href="`mailto:${profile.email}`">✉ Email</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </section>
  <section class="stats">
    <div v-for="h in profile.highlights" :key="h.label" class="stat">
      <strong>{{ h.value }}</strong><span>{{ h.label }}</span>
    </div>
  </section>
  <p class="muted">Languages: {{ profile.languages.join(' · ') }}</p>
</template>
