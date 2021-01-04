<template>
  <div class="catalog">
    <Notification :messages="messages"
                  :timeout="3000"
    />

    <h3>Каталог</h3>
    <router-link :to="{name: 'basket', params: {basket: BASKET}}">
      <div class="catalog__link-to-basket card"><i class="small material-icons">shopping_cart</i>Корзина:
        {{BASKET.length}}
      </div>
    </router-link>
    <div class="filters">
      <Select :selected="selected"
              :categories="categories"
              @select="sortByCategories"
      />
      <div class="range-slider">
        <input type="range"
               min="0"
               max="10000"
               step="100"
               v-model.number="minPrice"
               @change="setRangeSlider"
        >
        <input type="range"
               min="0"
               max="10000"
               step="100"
               v-model.number="maxPrice"
               @change="setRangeSlider"
        >
      </div>

      <div class="range-value card">
        <div>Цена</div>
        <div>
          <p>От: {{minPrice}} &#8372;</p>
          <p>До: {{maxPrice}} &#8372;</p>
        </div>

      </div>
    </div>

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
  import Notification from "../notification/Notification";

  export default {
    name: 'Catalog',
    components: {Select, CatalogItem, Notification},
    props: {},
    data() {
      return {
        categories: [
          {name: 'Все', value: 'в'},
          {name: 'Мужские', value: 'м'},
          {name: 'Женские', value: 'ж'}
        ],
        selected: 'Все',
        sortedProducts: [
          {
            "image": "1.jpg",
            "name": "T-shirt 1",
            "price": 2100.234234234,
            "article": "T1",
            "available": true,
            "category": "Мужские"
          },
          {
            "image": "2.jpg",
            "name": "T-shirt 2",
            "price": 3150.12312412,
            "article": "T2",
            "available": true,
            "category": "Женские"
          },
          {
            "image": "3.jpg",
            "name": "T-shirt 3",
            "price": 4200.51524,
            "article": "T3",
            "available": false,
            "category": "Женские"
          },
          {
            "image": "4.jpg",
            "name": "T-shirt 4",
            "price": 5300.1245512,
            "article": "T4",
            "available": true,
            "category": "Мужские"
          },
          {
            "image": "5.jpg",
            "name": "T-shirt 5",
            "price": 6500.3522314,
            "article": "T5",
            "available": false,
            "category": "Женские"
          },
          {
            "image": "6.jpeg",
            "name": "T-shirt 6",
            "price": 8700.4124123,
            "article": "T6",
            "available": true,
            "category": "Женские"
          }
        ],
        minPrice: 0,
        maxPrice: 10000,
        messages: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'BASKET',
        "SEARCH_VALUE"
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
          .then(() => {
            let timeStamp = Date.now().toLocaleString()
            this.messages.unshift(
              {name: 'Товар добавлен в корзину!', icon: 'check_circle', id: timeStamp}
            )
          })
      },
      sortByCategories(category) {
        let vm = this
        this.sortedProducts = [...this.PRODUCTS]
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          return item.price >= vm.minPrice && item.price <= vm.maxPrice
        })
        if (category) {
          this.sortedProducts = this.sortedProducts.filter(function (e) {
            vm.selected = category.name
            return e.category === category.name
          })
        }
      },
      setRangeSlider() {
        if (this.minPrice > this.maxPrice) {
          let tmp = this.maxPrice
          this.maxPrice = this.minPrice
          this.minPrice = tmp
        }
        this.sortByCategories()
      },
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })  // this.GET_PRODUCTS_FROM_API() -> this.$store.dispatch('GET_PRODUCTS_FROM_API') - без mapActions
    },
  }
</script>

<style lang="scss">
  .catalog {
    max-width: 900px;
    margin: 0 auto;

    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    &__link-to-basket {
      position: absolute;
      top: 70px;
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

    .filters {
      display: flex;
      align-items: center;

      .range-slider {
        width: 200px;
        margin: auto 16px;
        text-align: center;
        position: relative;
        padding-top: 30px;

        svg, input[type=range] {
          position: absolute;
          left: 0;
          bottom: 0;
        }

        input[type=range]::-webkit-slider-thumb {
          z-index: 2;
          position: relative;
          top: 2px;
          margin-top: -7px;
        }
      }

      .range-value {
        padding: 8px;

        p {
          margin: 0;
        }
      }
    }
  }
</style>