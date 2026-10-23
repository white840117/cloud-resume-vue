<script setup>
const src = `${import.meta.env.BASE_URL}island.html`
</script>

<template>
  <p class="muted">
    My career, projects and interests as a small 3D island — drag to orbit, tap an island to open its card.
    <a :href="src" target="_blank" rel="noopener">Open full screen ↗</a>
  </p>
  <iframe :src="src" class="island-frame" title="John's Island – 3D portfolio" allow="fullscreen"></iframe>
</template>
