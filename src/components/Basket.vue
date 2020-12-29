<template>
  <div class="basket">
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: "Basket",
    components: {},
    props: {},
    data() {
      return {
        title: 'Basket'
      }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {
      console.log('Hello I am basket!')
    }
  }
</script>

<style lang="scss">

</style>