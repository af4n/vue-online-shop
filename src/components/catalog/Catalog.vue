<template>
  <div class="catalog">
    <h3>Каталог</h3>
    <router-link :to="{name: 'basket', params: {basket: BASKET}}">
      <div class="catalog__link-to-basket card"><i class="small material-icons">shopping_cart</i>Корзина:
        {{BASKET.length}}
      </div>
    </router-link>
    <Select :selected="selected"
            :categories="categories"
            @select="sortByCategories"
    />
    <div class="catalog__list">
      <CatalogItem v-for="product in filterProducts"
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
  import Select from "../Select";

  export default {
    name: 'Catalog',
    components: {Select, CatalogItem},
    props: {},
    data() {
      return {
        categories: [
          {name: 'Все', value: 'в'},
          {name: 'Мужские', value: 'м'},
          {name: 'Женские', value: 'ж'}
        ],
        selected: 'Все',
        sortedProducts: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'BASKET'
      ]),
      filterProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_BASKET'
      ]),
      addToBasket(product) {
        this.ADD_TO_BASKET(product)
      },
      sortByCategories(category) {
        // this.selected = category.name
        this.sortedProducts = []
        let vm = this
        this.PRODUCTS.map(function (item) {
          if (item.category === category.name) {
            vm.sortedProducts.push(item)
          }
        })
        this.selected = category.name
      }
    },
    watch: {},
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
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