<template>
  <div class="main-wrapper">
    <Header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Header from "./layouts/Header";

  export default {
    name: 'MainWrapper',
    components: {
      Header
    },
    props: {
      basket_data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}
  }
</script>

<style lang="scss">
  .main-wrapper {
    margin: 0 auto;
  }
  .btn {
    background-color: #ee6e73!important;
  }
</style>