import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Home_page.vue'
import devices from '../components/devices.vue'
import equipo from '../components/portal_plantilla.vue'
import paciente from '../components/paciente.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Homepage
  },
{
  path: '/devices',

  component: devices
},
{ 
  path: '/equipo',
component: equipo
},
{
path:'/paciente',
component:paciente
},
{


},
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
