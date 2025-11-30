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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/');
  } else {
    next();
  }
});

export default router
