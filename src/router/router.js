import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "../components/main-page/MainPage";
import Catalog from "../components/catalog/Catalog";
import Basket from "../components/basket/Basket";

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket,
      props: true
    }
  ]
})

export default router