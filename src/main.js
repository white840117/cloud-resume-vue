import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// Discourage saving photos: no right-click menu or dragging on images.
for (const type of ['contextmenu', 'dragstart']) {
  document.addEventListener(type, (e) => {
    if (e.target instanceof HTMLImageElement) e.preventDefault()
  })
}
