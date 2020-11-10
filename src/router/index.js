import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import Dashboard1 from '@/components/Dashboard1.vue'
import Dashboard2 from '@/components/Dashboard2.vue'

import MyContents11 from '@/components/MyContents11.vue'
import MyContents12 from '@/components/MyContents12.vue'
import MyContents21 from '@/components/MyContents21.vue'
import MyContents22 from '@/components/MyContents22.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // redirect: '/dashborad1',
    children: [
      { path: '/dashborad1', name: 'DashBoard1', component: Dashboard1 },
      { path: '/dashborad2', name: 'DashBoard2', component: Dashboard2 },    
      { path: '/mycontents11', name: 'mycontents11', component: MyContents11 },
      { path: '/mycontents12', name: 'mycontents12', component: MyContents12 },
      { path: '/mycontents21', name: 'mycontents21', component: MyContents21 },
      { path: '/mycontents22', name: 'mycontents22', component: MyContents22 },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
