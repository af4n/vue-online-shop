<template>
  <div class="select card">
    <p @click="isCategoriesVisible = !isCategoriesVisible">{{selected}}</p>
    <div class="options card"
         v-if="isCategoriesVisible"
    >
      <p v-for="category in categories"
         :key="category.value"
         @click="select(category)"
      >
        {{category.name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Select",
    props: {
      categories: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isCategoriesVisible: false
      }
    },
    methods: {
      select(category) {
        this.$emit('select', category)
        this.isCategoriesVisible = false
      },
      hideSelect() {
        this.isCategoriesVisible = false
      }
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style lang="scss">
  .select {
    position: relative;
    max-width: 200px;
    display: block;
    cursor: pointer;
    p {
      margin: 0;
      padding: 8px;
    }
    .options {
      position: absolute;
      top: 30px;
      right: 0;
      width: 100%;
      z-index: 1;
      p:hover {
        background: #eeeeee;
      }
    }
  }
</style>