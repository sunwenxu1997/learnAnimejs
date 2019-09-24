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
      path: '/Animejs_6',
      name: 'Animejs_6',
      component: resolve => require(['../components/page/Animejs_6'], resolve),
      meta: { title: 'anmine.js入门-6' }
    },
    {
      path: '/Animejs_7',
      name: 'Animejs_7',
      component: resolve => require(['../components/page/Animejs_7'], resolve),
      meta: { title: 'anmine.js入门-7' }
    },
    {
      path: '/Animejs_8',
      name: 'Animejs_8',
      component: resolve => require(['../components/page/Animejs_8'], resolve),
      meta: { title: 'anmine.js入门-8' }
    },
    {
      path: '/Animejs_9',
      name: 'Animejs_9',
      component: resolve => require(['../components/page/Animejs_9'], resolve),
      meta: { title: 'anmine.js入门-9' }
    },
    {
      path: '/Animejs_10',
      name: 'Animejs_10',
      component: resolve => require(['../components/page/Animejs_10'], resolve),
      meta: { title: 'anmine.js入门-10' }
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
    {
      path: '/Animejs_4_3',
      name: 'Animejs_4_3',
      component: resolve => require(['../components/example/Animejs_4_3'], resolve),
      meta: { title: '4.3制定网格文字',example:true }
    },
    {
      path: '/Animejs_4_4',
      name: 'Animejs_4_4',
      component: resolve => require(['../components/example/Animejs_4_4'], resolve),
      meta: { title: '4.4展示网格文字',example:true }
    },
    {
      path: '/Animejs_10_1',
      name: 'Animejs_10_1',
      component: resolve => require(['../components/example/Animejs_10_1'], resolve),
      meta: { title: '100个点',example:true }
    },
    {
      path: '/Animejs_8_1',
      name: 'Animejs_8_1',
      component: resolve => require(['../components/example/Animejs_8_1'], resolve),
      meta: { title: '滑尺',example:true }
    },
    {
      path: '/Animejs_10_2',
      name: 'Animejs_10_2',
      component: resolve => require(['../components/example/Animejs_10_2'], resolve),
      meta: { title: '滑尺+',example:true }
    },
    {
      path: '/Animejs_10_3',
      name: 'Animejs_10_3',
      component: resolve => require(['../components/example/Animejs_10_3'], resolve),
      meta: { title: '圆环加载',example:true }
    },
    {
      path: '/Animejs_10_4',
      name: 'Animejs_10_4',
      component: resolve => require(['../components/example/Animejs_10_4'], resolve),
      meta: { title: '实列介绍',example:true }
    },
    {
      path: '/Others_1',
      name: 'Others_1',
      component: resolve => require(['../components/example/Others_1'], resolve),
      meta: { title: '喜迎国庆',example:true }
    },
  ]
})
export default newRouter
