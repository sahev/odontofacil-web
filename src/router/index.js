import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/homepage.vue'
import Patients from '@/pages/Patients/Patients.vue'
import Schedule from '@/pages/Schedule/Schedule.vue'
import Login from '@/pages/login/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/patients',
    name: 'Patients',
    component: Patients
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
