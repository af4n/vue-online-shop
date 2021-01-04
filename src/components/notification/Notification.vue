<template>
  <div class="notification">
    <transition-group name="transition-animate"
                      class="messages-list"
    >
      <div class="notification__content"
           v-for="message in messages"
           :key="message.id"
           :class="message.icon"
      >
        <div class="content-text">
          <span>{{message.name}}</span>
          <i class="small material-icons">{{message.icon}}</i>
        </div>
        <div class="content-buttons">
          <span v-if="rightButton.length">{{rightButton}}</span>
          <span v-if="leftButton.length">{{leftButton}}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: "Notification",
    props: {
      messages: {
        type: Array,
        default() {
          return []
        }
      },
      rightButton: {
        type: String,
        default: ''
      },
      leftButton: {
        type: String,
        default: ''
      },
      timeout: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {}
    },
    methods: {
      hideNotification() {
        let vm = this
        if (this.messages.length) {
          setTimeout(function() {
            vm.messages.splice(vm.messages.length - 1, 1)
          }, vm.timeout)
        }
      }
    },
    watch: {
      messages() {
        this.hideNotification()
      }
    },
    mounted() {
      this.hideNotification()
    }
  }
</script>

<style lang="scss">
  .notification {
    position: fixed;
    top: 144px;
    right: 10px;
    z-index: 10;
    &__messages-list {
      display: flex;
      flex-direction: column-reverse;
    }
    &__content {
      padding: 16px;
      border-radius: 4px;
      color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      margin-bottom: 10px;
      background-color: #484966;
      box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
      &.error_outline {
        background: #ee6e73;
      }
      &.check_circle {
        background: #484966;
      }
    &:hover {
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    }
      .content-text, .content-buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .material-icons {
        margin-left: 16px;
      }
    }
    .transition-animate {
      &-enter {
        transform: translateX(120px);
        opacity: 0;
      }
      &-enter-active {
        transition: all .6s ease;
      }
      &-enter-to {
        opacity: 1;
      }
      &-leave {
        height: 50px;
        opacity: 1;
      }
      &-leave-active {
        transition: transform .6s ease, opacity .6s, height .6s .2s;
      }
      &-leave-to {
        height: 0;
        transform: translateX(120px);
        opacity: 0;
      }
      &-move {
        transition: transform .6s ease;
      }
    }
  }
</style>