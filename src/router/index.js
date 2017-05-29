import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/views/home/index'
const Home = resolve => require(['../views/home/index'], resolve)//懒加载
const About = resolve => require(['@/views/home/about'], resolve)
Vue.use(Router)

export default new Router({
  mode:'history', //html5模式 去掉锚点
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
