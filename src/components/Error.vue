<template>
  <div
    class="bg-red-800-light p-4 rounded-full flex w-full items-center my-2"
  >
    <div
      class="rounded-full bg-loanbot-red text-white w-6 h-6 flex items-center justify-center"
    >
      <ion-icon name="alert" />
    </div>
    <p class="text-sm text-black ml-4">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Error'
    }
  }
}
</script>
