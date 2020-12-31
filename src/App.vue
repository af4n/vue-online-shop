<template>
  <div id="app">
    <MainWrapper/>
  </div>
</template>

<script>
  import MainWrapper from "./components/MainWrapper";

  export default {
    name: 'App',
    components: {
      MainWrapper
    }
  }
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
