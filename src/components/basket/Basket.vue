<template>
  <div class="basket">
    <h3>Корзина</h3>
    <router-link :to="{name: 'catalog'}">
      <button class="basket__link-to-catalog btn waves-effect waves-light"><i class="medium material-icons">arrow_back</i>Назад</button>
    </router-link>
    <p v-if="!basket.length">Товаров пока нет в корзине...</p>
    <BasketItem v-for="(item, index) in basket"
                :key="item.article"
                :basket_item="item"
                @deleteFromBasket="deleteFromBasket(index)"
                @decrementItem="decrement(index)"
                @incrementItem="increment(index)"
    />
    <div class="basket__total">
      <p>Общая сумма: {{basketTotalCost | toFix | formatedPrice}}</p>
      <button class="basket__total-btn btn white waves-effect waves-dark"
              v-if="basket.length"
      >Оформить заказ</button>
    </div>
  </div>
</template>

<script>
  import BasketItem from "./BasketItem";
  import {mapActions} from "vuex"
  import toFix from "../../filters/toFix"
  import formatedPrice from "../../filters/price-format";

  export default {
    name: "Basket",
    components: {
      BasketItem
    },
    props: {
      basket: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
    filters: {
      toFix,
      formatedPrice
    },
    computed: {
      basketTotalCost() {
        let result = []

        if (this.basket.length) {
          for (let item of this.basket) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el
          })

          return result
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_BASKET',
        'DECREMENT_BASKET_ITEM',
        'INCREMENT_BASKET_ITEM'
      ]),
      deleteFromBasket(index) {
        this.DELETE_FROM_BASKET(index)
      },
      decrement(index) {
        this.DECREMENT_BASKET_ITEM(index)
      },
      increment(index) {
        this.INCREMENT_BASKET_ITEM(index)
      }
    },
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .basket {
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 115px;
    &__link-to-catalog {
      position: absolute;
      top: 75px;
      left: 10px;
      display: flex;
      background-color: #484966!important;
      .material-icons {
        padding-right: 5px;
      }
    }
    &__total {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      padding: 16px;
      display: flex;
      justify-content: space-around;
      background: #484966;
      color: #fff;
      font-size: 20px;
      &-btn {
        color: black;
        margin-top: 15px;
      }
    }
  }
</style>