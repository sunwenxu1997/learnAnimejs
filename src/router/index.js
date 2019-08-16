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
      path: '/Animejs_2',
      name: 'Animejs_2',
      component: resolve => require(['../components/page/Animejs_2'], resolve),
      meta: { title: 'anmine.js入门-2' }
    },
    {
      path: '/Animejs_3',
      name: 'Animejs_3',
      component: resolve => require(['../components/page/Animejs_3'], resolve),
      meta: { title: 'anmine.js入门-3' }
    },
    {
      path: '/Animejs_4',
      name: 'Animejs_4',
      component: resolve => require(['../components/page/Animejs_4'], resolve),
      meta: { title: 'anmine.js入门-4' }
    },
    {
      path: '/Animejs_5',
      name: 'Animejs_5',
      component: resolve => require(['../components/page/Animejs_5'], resolve),
      meta: { title: 'anmine.js入门-5' }
    },
    {
      path: '/Animejs_1_1',
      name: 'Animejs_1_1',
      component: resolve => require(['../components/example/Animejs_1_1'], resolve),
      meta: { title: '1.1数字加载效果',example:true }
    },
    {
      path: '/Animejs_2_1',
      name: 'Animejs_2_1',
      component: resolve => require(['../components/example/Animejs_2_1'], resolve),
      meta: { title: '2.1烟花效果',example:true }
    },
    {
      path: '/Animejs_2_2',
      name: 'Animejs_2_2',
      component: resolve => require(['../components/example/Animejs_2_2'], resolve),
      meta: { title: '2.2文字效果',example:true }
    },
    {
      path: '/Animejs_4_1',
      name: 'Animejs_4_1',
      component: resolve => require(['../components/example/Animejs_4_1'], resolve),
      meta: { title: '4.1网格波纹效果',example:true }
    },
    {
      path: '/Animejs_4_2',
      name: 'Animejs_4_2',
      component: resolve => require(['../components/example/Animejs_4_2'], resolve),
      meta: { title: '4.2水波纹效果',example:true }
    },
  ]
})
export default newRouter
