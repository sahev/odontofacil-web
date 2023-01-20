import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/homepage.vue'
import Patients from '@/pages/Patients/Patients.vue'
import Schedule from '@/pages/Schedule/Schedule.vue'
import Login from '@/pages/login/Login.vue'
import Administration from '@/pages/administration/Administration.vue'
import Clinics from '@/pages/clinics/Clinics.vue'
import Doctors from '@/pages/doctors/Doctors.vue'

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
  {
    path: '/adm',
    name: 'Administration',
    component: Administration
  },
  {
    path: '/doctors',
    name: 'Doctors',
    component: Doctors
  },
  {
    path: '/clinics',
    name: 'Clinics',
    component: Clinics
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
