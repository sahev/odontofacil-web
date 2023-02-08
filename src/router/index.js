import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/pages/homepage/homepage.vue'
import Patients from '@/pages/Patients/Patients.vue'
import Schedule from '@/pages/Schedule/Schedule.vue'
import Login from '@/pages/login/Login.vue'
import LoginArea from '@/pages/login/components/LoginArea.vue'
import Administration from '@/pages/administration/Administration.vue'
import ClinicalUnit from '@/pages/clinics/ClinicalUnit.vue'
import ClinicalUnitForm from '@/pages/clinics/components/ClinicalUnitForm.vue'
import Doctors from '@/pages/doctors/Doctors.vue'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
     hideNavbar: true,
    }
  },  
  {
    path: '/select-area',
    name: 'Area',
    component: LoginArea,
    meta: {
     hideNavbar: true,
    }
  },
  {
    path: '/',
    name: 'Início',
    component: Homepage,
  },
  {
    path: '/patients',
    name: 'Pacientes',
    component: Patients
  },
  {
    path: '/schedule',
    name: 'Agenda',
    component: Schedule
  },
  {
    path: '/adm',
    name: 'Administração',
    component: Administration
  },
  {
    path: '/doctors',
    name: 'Doutores',
    component: Doctors
  },
  {
    path: '/clinical-units/',
    name: 'Unidades Clínicas',
    component: ClinicalUnit,
    children: [

    ]
  },      
  {
    path: '/clinical-units/:id',
    name: 'Editar unidade clínica',
    component: ClinicalUnitForm,
  },
]

const router = createRouter({
  base: process.env.BASE_URL,
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
