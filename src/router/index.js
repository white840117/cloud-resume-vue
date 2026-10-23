import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Experience from '../views/Experience.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Interests from '../views/Interests.vue'
import Island from '../views/Island.vue'

// Hash history keeps deep links working on S3/CloudFront without rewrite rules.
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/experience', name: 'experience', component: Experience },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/projects/:id', name: 'project', component: ProjectDetail, props: true },
    { path: '/interests', name: 'interests', component: Interests },
    { path: '/island', name: 'island', component: Island },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
