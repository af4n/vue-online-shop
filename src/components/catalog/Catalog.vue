<template>
  <div class="catalog">
    <h3>Каталог</h3>
    <router-link :to="{name: 'basket', params: {basket: BASKET}}">
      <div class="catalog__link-to-basket card"><i class="small material-icons">shopping_cart</i>Корзина: {{BASKET.length}}</div>
    </router-link>
    <div class="catalog__list">
      <CatalogItem v-for="product in PRODUCTS"
                   :key="product.article"
                   :product="product"
                   @addToBasket="addToBasket"
      /> <!-- PRODUCTS -> this.$store.state.products - без mapGetters -->
    </div>
  </div>
</template>

<script>
  import CatalogItem from "./CatalogItem";
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Catalog',
    components: {CatalogItem},
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'BASKET'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_BASKET'
      ]),
      addToBasket(product) {
        this.ADD_TO_BASKET(product)
      }
    },
    watch: {},
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if(response.data) {
          console.log(response.data)
        }
      })  // this.GET_PRODUCTS_FROM_API() -> this.$store.dispatch('GET_PRODUCTS_FROM_API') - без mapActions
    },
  }
</script>

<style lang="scss">
  .catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
    &__link-to-basket {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 16px;
      display: flex;
      color: #01579b;
      i.small {
        font-size: 1.5rem;
      }
      .material-icons {
        padding-right: 5px;
      }
    }
  }
</style>