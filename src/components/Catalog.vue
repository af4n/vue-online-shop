<template>
  <div class="catalog">
    {{title}}
    <div class="catalog__list">
      <CatalogItem v-for="product in PRODUCTS"
                   :key="product.article"
                   :product="product"
                   @sendDataToParent="showChildArticleInConsole"
      />
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
      return {
        title: 'Catalog'
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ])
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
      showChildArticleInConsole(data) {
        console.log(data)
      }
    },
    watch: {},
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if(response.data) {
          console.log('loading')
        }
      })
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
  }
</style>