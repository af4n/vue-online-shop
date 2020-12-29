<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'MainWrapper',
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
    max-width: 900px;
    margin: 0 auto;
  }
  .btn {
    background-color: #ee6e73!important;
  }
</style>