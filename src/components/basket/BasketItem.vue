<template>
  <div class="basket-item card">
    <img class="basket-item__image"
         :src="require('../../assets/images/' + basket_item.image)"
         alt="image">
    <div class="basket-item__info">
      <p>{{basket_item.name}}</p>
      <p>Код товара: {{basket_item.article}}</p>
      <p>Цена: {{Number.parseInt(basket_item.price)}} &#8372;</p>
    </div>
    <div class="basket-item__quantity">
      <div>Количество: </div>
      <span class="basket-item__quantity__btn" 
            @click="decrementItem"
      >-</span>
      <span>
        {{basket_item.quantity}} шт.
      </span>
      <span class="basket-item__quantity__btn"
            @click="incrementItem"
      >+</span>
    </div>
    <button class="basket-item__btn btn red darken-4"
            @click="deleteFromBasket"
    ><i class="small material-icons">delete_forever</i>Удалить</button>
  </div>
</template>

<script>
  export default {
    name: "BasketItem",
    components: {},
    props: {
      basket_item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      deleteFromBasket() {
        this.$emit('deleteFromBasket')
      },
      decrementItem() {
        this.$emit('decrementItem')
      },
      incrementItem() {
        this.$emit('incrementItem')
      }
    },
    watch: {},
    mounted() {
      this.$set(this.basket_item, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .basket-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    &__image {
      max-width: 50px
    }
    &__quantity {
      span {
        font-size: 18px;
      }
    }
    &__quantity__btn {
      cursor: pointer;
    }
    &__btn {
      display: flex;
      .material-icons {
        padding-right: 5px;
      }
    }
  }
</style>