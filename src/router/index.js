import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../components/HomeView'
import PhotoView from '../components/PhotoView'
import AuthView from '../components/AuthView'
import FavsView from '@/components/FavsView.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '', name: 'Home', component: HomeView },
    { path: '/faves', name: 'Favourites', component: FavsView },
    { path: '/photo/:id', name: 'Photo', component: PhotoView },
    {
      path: '/user/:username',
      name: 'User',
      component: () => import('../components/UserView')
    },
    { path: '/auth', name: 'Auth', component: AuthView }
  ]
})

export default router
