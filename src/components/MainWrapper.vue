<template>
  <div class="main-wrapper">
    <p>{{title}}</p>
    <Catalog />
    <Basket />
  </div>
</template>

<script>
  import Catalog from "./Catalog";
  import Basket from "./Basket";

  export default {
    name: 'MainWrapper',
    components: {
      Basket,
      Catalog
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello I am main wrapper!')
    },
  }
</script>

<style lang="scss">
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>