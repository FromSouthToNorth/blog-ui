import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

// 公共路由
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: (resolve) => require(['@/views/redirect'], resolve)
      }
    ]
  },
  {
    path: '/404',
    component: (resolve) => require(['@/views/error/404'], resolve),
    hidden: true
  },
  {
    path: '/401',
    component: (resolve) => require(['@/views/error/401'], resolve),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: '首页',
        meta: { title: '首页', icon: 'mdi-home-group'}
      },
      {
        path: 'aboutMe',
        component: (resolve) => require(['@/views/aboutMe/index'], resolve),
        name: '关于我',
        meta: { title: '关于我', icon: 'mdi-account'}
      },
      {
        path: 'message',
        component: (resolve) => require(['@/views/message/index'], resolve),
        name: '留言板',
        meta: { title: '留言板', icon: 'mdi-comment-processing'}
      },
      {
        path: 'flie',
        component: (resolve) => require(['@/views/file/index'], resolve),
        name: '归档',
        meta: { title: '归档', icon: 'mdi-ballot-recount-outline'}
      }
    ]
  }
]

export default new Router({
  mode: 'history', // 去掉url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
