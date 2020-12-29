import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from "../components/catalog/Catalog";
import Basket from "../components/basket/Basket";

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
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