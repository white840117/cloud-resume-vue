<script setup>
import { experience, education, certifications, skills } from '../data/resume'
</script>

<template>
  <h2>Work Experience</h2>
  <article v-for="w in experience" :key="w.company + w.period" class="card">
    <div class="row"><h3>{{ w.company }}</h3><span class="muted">{{ w.period }}</span></div>
    <div class="row"><em>{{ w.title }}</em><span class="muted">{{ w.location }}</span></div>
    <ul><li v-for="b in w.bullets" :key="b">{{ b }}</li></ul>
  </article>

  <h2>Education</h2>
  <article v-for="e in education" :key="e.school" class="card">
    <div class="row"><h3>{{ e.school }}</h3><span class="muted">{{ e.period }}</span></div>
    <div class="row"><em>{{ e.degree }}<template v-if="e.gpa"> — GPA {{ e.gpa }}</template></em><span class="muted">{{ e.location }}</span></div>
    <p v-if="e.note" class="muted">{{ e.note }}</p>
  </article>

  <h2>Certifications</h2>
  <article v-for="c in certifications" :key="c.name" class="card">
    <div class="row"><h3>{{ c.name }}</h3><span class="muted">{{ c.date }}</span></div>
    <em>{{ c.issuer }}</em>
  </article>

  <h2>Skills</h2>
  <div v-for="(items, group) in skills" :key="group" class="skill-group">
    <h4>{{ group }}</h4>
    <span v-for="s in items" :key="s" class="chip">{{ s }}</span>
  </div>
</template>
