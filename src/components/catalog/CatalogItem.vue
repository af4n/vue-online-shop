<template>
  <div class="catalog-item card">

    <Popup v-if="isInfoPopupVisible"
           @closePopup="closeInfoPopup"
           @addToBasketPopup="addToBasket"
           popupBtn="Добавить в корзину"
           :popupTitle="product.name"
    >
      <img class="catalog-item__image"
           :src="require('../../assets/images/' + product.image)"
           alt="image">
      <div>
        <p class="catalog-item__article">Код товара: {{product.article}}</p>
        <p class="catalog-item__category">Категория: {{product.category}}</p>
        <p class="catalog-item__price">Цена: {{product.price | toFix | formatedPrice}}</p>
      </div>
    </Popup>

    <img class="catalog-item__image"
         :src="require('../../assets/images/' + product.image)"
         alt="image">
    <p class="catalog-item__name">{{product.name}}</p>
    <p class="catalog-item__article">Код товара: {{product.article}}</p>
    <p class="catalog-item__price">Цена: {{product.price | toFix | formatedPrice}}</p>
    <button class="catalog-item__btn-info btn waves-effect waves-light"
            @click="showPopupInfo"
    >
      Подробнее
    </button>
    <button class="catalog-item__btn-buy btn waves-effect waves-light"
            @click="addToBasket"
    >Купить</button>
  </div>
</template>

<script>
  import Popup from "../Popup";
  import toFix from "../../filters/toFix";
  import formatedPrice from  "../../filters/price-format"

  export default {
    name: 'CatalogItem',
    components: {Popup},
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        isInfoPopupVisible: false
      }
    },
    filters: {
      toFix,
      formatedPrice
    },
    computed: {},
    methods: {
      addToBasket() {
        this.$emit('addToBasket', this.product)
      },
      showPopupInfo() {
        this.isInfoPopupVisible = true
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false
      }
    },
    watch: {},
    mounted() {},
  }
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 30%;
    padding: 16px;
    &__image {
      max-width: 100px;
    }
    &__btn-buy {
      background-color: #484966!important;
    }
    &__btn-info {
      margin-right: 10px;
    }
  }
  .card {
    position: inherit;
  }
  .card:hover {
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  }
</style>