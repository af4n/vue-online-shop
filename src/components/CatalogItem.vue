<template>
  <div class="catalog-item card">
    <img class="catalog-item__image" :src=" require('../assets/images/' + product.image) " alt="image">
    <p class="catalog-item__name">{{product.name}}</p>
    <p class="catalog-item__article">Код товара: {{product.article}}</p>
    <p class="catalog-item__price">Цена: {{Number.parseInt(product.price)}} &#8372;</p>
    <button class="catalog-item__btn btn"
            @click="sendDataToParent"
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
      return {
        title: 'Catalog item'
      }
    },
    computed: {},
    methods: {
      sendDataToParent() {
        this.$emit('sendDataToParent', this.product.article)
      }
    },
    watch: {},
    mounted() {
      console.log('Hello I am catalog item!')
    },
  }
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 30%;
    padding: 16px;
    &__image {
      width: 100px;
    }
  }
</style>