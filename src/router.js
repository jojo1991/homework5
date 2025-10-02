import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import OtherPage from './views/OtherPage.vue'
import CardDetails from './views/CardDetails.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'
import useAuth from './composables/useAuth'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: OtherPage },
  { path: '/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { 
    path: '/settings', 
    name: 'SettingsPage', 
    component: SettingsPage, 
    meta: { requiresAuth: true } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// nav guard
router.beforeEach((to, _from, next) => {
  const { isAuthenticated } = useAuth()

  if (to.meta?.requiresAuth && !isAuthenticated.value) {
    // take back to login if not auth
    next({ name: 'LoginPage', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
