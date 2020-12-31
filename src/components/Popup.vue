<template>
  <div class="popup-wrapper"
       ref="popup-wrapper"
  >
    <div class="popup card">
      <div class="popup__header">
        <span>{{popupTitle}}</span>
        <span><i class="small material-icons"
                 @click="closePopup"
        >close</i></span>
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button class="popup__footer-btn btn waves-effect waves-light"
                @click="addToBasketPopup"
        >{{popupBtn}}</button>
        <button class="popup__footer-btn-close btn waves-effect waves-light"
                @click="closePopup"
        >Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Popup",
    props: {
      popupTitle: {
        type: String,
        default: 'Popup name'
      },
      popupBtn: {
        type: String,
        default: 'Ok'
      }
    },
    methods: {
      closePopup() {
        this.$emit('closePopup')
      },
      addToBasketPopup () {
        this.$emit('addToBasketPopup')
      }
    },
    mounted() {
      let vm = this
      document.addEventListener('click', function(e) {
        if (e.target === vm.$refs['popup-wrapper']) {
          vm.closePopup()
        }
      })
    }
  }
</script>

<style lang="scss">
  .popup-wrapper {
    background: rgba(64,64,64, .4);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    z-index: 2;

    &__header, &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        cursor: pointer
      }
    }

    &__content {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
      margin-top: 20px;
    }
    &__footer-btn {
      background-color: #484966!important;
    }
  }
</style>