<script setup>
import { profile, focusAreas, projects, experience, islandPreview } from '../data/resume'

const featured = projects.filter((p) => p.featured)
</script>

<template>
  <div class="hero-banner">
  <section class="hero">
    <img :src="profile.photo" :alt="profile.name" class="avatar" draggable="false" />
    <div>
      <h1>{{ profile.name }}</h1>
      <p class="tagline">{{ profile.tagline }}</p>
      <p class="summary">{{ profile.summary }}</p>
      <p class="availability">{{ profile.availability }}</p>
      <div class="links">
        <span>📍 {{ profile.location }}</span>
        <a :href="`mailto:${profile.email}`">✉ Email</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </section>
  </div>
  <section class="stats">
    <div v-for="h in profile.highlights" :key="h.label" class="stat">
      <strong>{{ h.value }}</strong><span>{{ h.label }}</span>
    </div>
  </section>

  <section>
    <h2>What I do</h2>
    <div class="grid">
      <RouterLink v-for="f in focusAreas" :key="f.title" :to="f.link" class="card project-card">
        <h3>{{ f.title }}</h3>
        <p class="muted">{{ f.text }}</p>
      </RouterLink>
    </div>
  </section>

  <section>
    <h2>Featured projects</h2>
    <div class="grid">
      <RouterLink v-for="p in featured" :key="p.id" :to="`/projects/${p.id}`" class="card project-card">
        <h3>{{ p.title }}</h3>
        <span class="muted">{{ p.period }}</span>
        <div><span v-for="t in p.tags" :key="t" class="chip">{{ t }}</span></div>
      </RouterLink>
    </div>
    <p class="more"><RouterLink to="/projects">All projects →</RouterLink></p>
  </section>

  <RouterLink to="/island" class="island-card">
    <img :src="islandPreview.image" :alt="islandPreview.alt" loading="lazy" width="1600" height="900" draggable="false" />
    <div class="island-card-text">
      <h3>{{ islandPreview.title }}</h3>
      <p>{{ islandPreview.text }}</p>
      <span class="island-card-cta">{{ islandPreview.cta }}</span>
    </div>
  </RouterLink>

  <section>
    <h2>Career path</h2>
    <ol class="timeline">
      <li v-for="w in experience" :key="w.company + w.period">
        <span class="muted">{{ w.period }}</span>
        <span>{{ w.title }} @ {{ w.company }}</span>
      </li>
    </ol>
    <p class="more"><RouterLink to="/experience">Full experience →</RouterLink></p>
  </section>

  <p class="muted">Languages: {{ profile.languages.join(' · ') }}</p>
</template>
