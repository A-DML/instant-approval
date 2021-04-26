<template>
  <div class="modal">
    <div class="content" v-bind="$attrs" :class="contentClass">
      <h1 class="title" v-text="header" />
      <div class="close" @click="close">
        <ion-icon name="close" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="scss">
@layer components {
  .modal {
    @apply w-screen h-screen bg-loanbot-blue bg-opacity-60 fixed top-0 left-0 flex items-center justify-center z-30;

    .content {
      @apply bg-white shadow-md rounded-lg relative px-10 pt-10 pb-16;

      .close {
        @apply absolute top-0 right-0 text-3xl mt-6 mr-6 cursor-pointer;
        color: #a8b3e1;
      }

      .title {
        @apply text-2xl font-bold mb-16 capitalize;
      }
    }
  }
}
</style>
