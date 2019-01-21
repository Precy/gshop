/*
路由器对象模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
const MSite = r => require.ensure([], () => r(require('../pages/MSite/MSite')), 'MSite')
const Order = r => require.ensure([], () => r(require('../pages/Order/Order')), 'Order')
const Profile = r => require.ensure([], () => r(require('../pages/Profile/Profile')), 'Profile')
const Search = r => require.ensure([], () => r(require('../pages/Search/Search')), 'Search')
const Login = r => require.ensure([], () => r(require('../pages/Login/Login')), 'Login')
const Shop = r => require.ensure([], () => r(require('../pages/Shop/Shop')), 'Shop')
const ShopGoods = r => require.ensure([], () => r(require('../pages/Shop/ShopGoods/ShopGoods')), 'ShopGoods')
const ShopInfo = r => require.ensure([], () => r(require('../pages/Shop/ShopInfo/ShopInfo')), 'ShopInfo')
const ShopRatings = r => require.ensure([], () => r(require('../pages/Shop/ShopRatings/ShopRatings')), 'ShopRatings')



/*import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'*/

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },{
      path: '/login',
      component: Login
    },{
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
