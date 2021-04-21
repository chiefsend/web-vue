import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/public',
    name: 'Public',
    component: () => import(/* webpackChunkName: "Public" */ '../views/Public.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "Upload" */ '../views/Upload.vue')
  },
  {
    path: '/download/:id',
    name: 'Download',
    component: () => import(/* webpackChunkName: "Download" */ '../views/Download.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import(/* webpackChunkName: "Privacy" */ '../views/Privacy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
