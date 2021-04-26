<template>
  <div class="inline-flex flex items-center">
    <ion-icon
      :src="`//unpkg.com/ionicons@5.4.0/dist/svg/${name}.svg`"
      :size="size"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'small',
      validator(value) {
        return ['small', 'large'].includes(value)
      }
    }
  }
}
</script>
