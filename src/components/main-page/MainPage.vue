<template>
  <div class="main-page">
    <h1>Онлайн магазин одежды</h1>
    <router-link :to="{name: 'catalog'}"
                 class="waves-effect waves-light btn-large"
    >
      Перейти в каталог
    </router-link>
  </div>
</template>

<script>

  export default {
    name: "MainPage"
  }
</script>

<style lang="scss">
  .main-page {
    .btn-large {
      background: #484966 !important;
    }
}
</style>