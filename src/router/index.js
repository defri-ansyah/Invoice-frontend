import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Register.vue'
import Invoice from '../views/Invoice.vue'
import Report from '../views/Report.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Signup
  },
  {
    path: '/invoice',
    name: 'invoice',
    component: Invoice
  },
  {
    path: '/report',
    name: 'report',
    component: Report
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/create-invoice',
    name: 'create-invoice',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
