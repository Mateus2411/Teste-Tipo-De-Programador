import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/HomeView.vue'),
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import('@/views/Cadastro & Loguin/CadastroLoguin.vue'),
    },
    {
      path: '/ias',
      name: 'IAs',
      component: () => import('@/views/IAs/IAs.vue'),
    },
  ],
})

export default router
