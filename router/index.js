import { createRouter, createWebHistory } from 'vue-router'

import Homepage from '../components/Home_page.vue'
import devices from '../components/navbar_portalD.vue'
import equipo from '../components/portal_paciente.vue'
import paciente from '../components/paciente_d.vue'
import citas_doc from '../components/citas_doc.vue';
import empezar_cita from '../components/empezar_cita.vue'
import historial_p from '../components/Historial_paciente.vue'
import portal_p from '../components/portal_paciente.vue'
import historial_po from'../components/historial_po_paciente.vue'
import citas from '../components/citas.vue'
import agendar from '../components/agendar.vue'
import portal_D from'../components/navbarAdmin.vue'
import gestion_usuario from '../components/g_usuario.vue'
import info_user from '../components/informacion_usuario.vue'
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

{   path:'/citas_doc',
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
  path:'/portal_p',
  component:portal_p
},

{
  path:'/historial_po',
  component:historial_po
},

{
  path:'/citas',
  component:citas
},

{
  path:'/agendar',

  component: agendar

},
{
  path:'/Admin_p',
  component: portal_D
},
{
  path:'/gestion_usuario',
  component:gestion_usuario
},
{
  path:'/info_user',
  component:info_user

}
,
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
