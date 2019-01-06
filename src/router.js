import Vue from 'vue'
import Router from 'vue-router'
import Home from './component/Home.vue'
import Second from './component/Second.vue'
import Lunbo from './component/lunbo.vue'
import Test from './component/test.vue'
import End from './component/end.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/2',
      name: 'second',
      component: Second
    },
    {
      path: '/3',
      name: 'lunbo',
      component: Lunbo
    },
    {
      path: '/4',
      name: 'test',
      component: Test
    },
    {
      path: '/5',
      name: 'end',
      component: End
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
