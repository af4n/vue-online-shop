<template>
  <div class="header">
    <nav>
      <div class="nav-wrapper">
        <router-link :to="{name: 'main-page'}">
          <img src="../../assets/images/logo.png" alt="logo">
        </router-link>
        <div class="search-field">
          <input type="text"
                 class="search-field__input"
                 v-model="searchValue"
                 placeholder="Поиск по названию"
          >
          <button class="search-field__btn btn waves-effect waves-light"
                  @click="search(searchValue)"
          >Поиск
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "Header",
    data() {
      return {
        searchValue: ''
      }
    },
    computed: {
      ...mapGetters([
        'SEARCH_VALUE'
      ])
    },
    methods: {
      ...mapActions([
        'GET_SEARCH_VALUE_TO_VUEX'
      ]),
      search(value) {
        this.GET_SEARCH_VALUE_TO_VUEX(value)
        this.$router.push('/catalog')
      }
    }
  }
</script>

<style lang="scss">
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    img {
      width: 50px;
      margin-top: 28px;
    }

    .search-field {
      &__input {
        padding: 16px;
        background-color: #ffffff !important;
        width: 200px !important;
        border-radius: 2px !important;
        padding-left: 8px !important;
        height: 36px !important;
      }

      .btn {
        background: #484966 !important;
        margin-left: 10px;
        margin-bottom: 6px;
      }
    }

  }
</style>