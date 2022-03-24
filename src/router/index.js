import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '@/layout'

Vue.use(Router)

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '主页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'dashboard' }
    }]
  },
  {
    path: '/edit',
    name: 'edit',
    component: Layout,
    children: [
      {
        path: '/edit',
        name: 'edit-in',
        component: () => import('@/views/edit/index'),
        meta: { title: '写博客', icon: 'el-icon-edit' }
      }
    ]
  },
  {
    path: '/blog',
    redirect: '/blog/list',
    name: 'Blog',
    meta: {
      title: '博客管理',
      icon: 'el-icon-collection'
    },
    component: Layout,
    children: [
      {
        path: '/blog/list',
        name: 'BlogList',
        component: () => import('@/views/blog/list/index'),
        meta: { title: '博客列表', icon: 'el-icon-c-scale-to-original' }
      },
      {
        path: '/blog/category',
        name: 'BlogCategory',
        component: () => import('@/views/blog/category/index'),
        meta: { title: '分类管理', icon: 'el-icon-suitcase' }
      },
      {
        path: '/blog/tag',
        name: 'BlogTag',
        component: () => import('@/views/blog/tag/index'),
        meta: { title: '标签管理', icon: 'el-icon-price-tag' }
      },
      {
        path: '/blog/recycle',
        name: 'BlogRecycle',
        component: () => import('@/views/edit/index'),
        meta: { title: '垃圾桶', icon: 'el-icon-takeaway-box' }
      }
    ]
  },
  {
    path: '/settings',
    redirect: '/settings/userInfo',
    name: 'Settings',
    meta: {
      title: '网站设置',
      icon: 'el-icon-s-tools'
    },
    component: Layout,
    children: [
      {
        path: '/settings/website',
        name: 'WebsiteEdit',
        component: () => import('@/views/edit/index'),
        meta: { title: '网站编辑', icon: 'el-icon-monitor' }
      },
      {
        path: '/settings/blog',
        name: 'WebsiteBlog',
        component: () => import('@/views/edit/index'),
        meta: { title: '文章推荐', icon: 'el-icon-set-up' }
      }, {
        path: '/settings/user',
        name: 'User',
        component: () => import('@/views/edit/index'),
        meta: { title: '用户管理', icon: 'el-icon-postcard' }
      }
    ]
  },
  {
    path: '/introduction',
    component: Layout,
    children: [
      {
        path: '/introduction',
        meta: { title: '网站介绍', icon: 'el-icon-info' },
        component: () => import('@/views/edit/index')
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
