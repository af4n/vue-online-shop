<template>
  <div class="catalog-item card">
    <img class="catalog-item__image"
         :src="require('../../assets/images/' + product.image)"
         alt="image">
    <p class="catalog-item__name">{{product.name}}</p>
    <p class="catalog-item__article">Код товара: {{product.article}}</p>
    <p class="catalog-item__price">Цена: {{Number.parseInt(product.price)}} &#8372;</p>
    <button class="catalog-item__btn btn light-blue darken-4"
            @click="addToBasket"
    >Купить</button>
  </div>
</template>

<script>
  export default {
    name: 'CatalogItem',
    components: {},
    props: {
      product: {
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
      addToBasket() {
        this.$emit('addToBasket', this.product)
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
  }
  .card:hover {
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
  }
</style>