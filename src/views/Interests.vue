<script setup>
import { interests } from '../data/resume'
</script>

<template>
  <section v-for="c in interests" :key="c.id">
    <h2>{{ c.title }}</h2>
    <p>{{ c.text }}</p>
    <div v-if="c.photos.length" class="gallery">
      <figure v-for="p in c.photos" :key="p.src">
        <a :href="p.src" target="_blank" rel="noopener">
          <img :src="p.src" :alt="p.caption" loading="lazy" />
        </a>
        <figcaption>{{ p.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>
