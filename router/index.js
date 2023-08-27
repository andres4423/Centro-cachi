import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Home_page.vue'
import devices from '../components/devices.vue'
import equipo from '../components/portal_plantilla.vue'
import paciente from '../components/paciente_d.vue'
import citas_doc from '../components/citas_doc.vue';
import empezar_cita from '../components/empezar_cita.vue'
import historial_p from '../components/Historial_paciente.vue'
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
  path:'/citas_doc',
  component:citas_doc
},

{
  path:'/empezar_c',
  component:empezar_cita
},
{
path:'/historial',
component:historial_p
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
