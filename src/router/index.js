import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let newRouter = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['../components/HelloWorld'], resolve),
      meta: { title: '' }
    },
    {
      path: '/Animejs_1',
      name: 'Animejs_1',
      component: resolve => require(['../components/page/Animejs_1'], resolve),
      meta: { title: 'anmine.js入门-1' }
    },
    {
      path: '/Animejs_1_1',
      name: 'Animejs_1_1',
      component: resolve => require(['../components/example/Animejs_1_1'], resolve),
      meta: { title: '数字加载效果',example:true }
    },
  ]
})
export default newRouter
