import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: () => import('../views/principal.vue')
    },
    {
      path: '/curso_listar',
      name: 'curso_listar',
      component: () => import('../views/curso/curso_listar.vue')
    },
    {
      path: '/curso_crear',
      name: 'curso_crear',
      component: () => import('../views/curso/curso_crear.vue')
    },
    {
      path: '/curso_editar/:id',
      name: 'curso_editar',
      component: () => import('../views/curso/curso_editar.vue')
    },



    {
      path: '/ficha_listar',
      name: 'ficha_listar',
      component: () => import('../views/ficha/ficha_listar.vue')
    },
    {
      path: '/ficha_crear',
      name: 'ficha_crear',
      component: () => import('../views/ficha/ficha_crear.vue')
    },
    {
      path: '/ficha_editar/:id',
      name: 'ficha_editar',
      component: () => import('../views/ficha/ficha_editar.vue')
    },

    {
      path: '/primaria_listar',
      name: 'primaria_listar',
      component: () => import('../views/primaria/primaria_listar.vue')
    },
    {
      path: '/primaria_crear',
      name: 'primaria_crear',
      component: () => import('../views/primaria/primaria_crear.vue')
    },
    {
      path: '/primaria_editar/:id',
      name: 'primaria_editar',
      component: () => import('../views/primaria/primaria_editar.vue')
    }
  ]
})

export default router
