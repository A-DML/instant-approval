<template>
  <div class="card p-4 rounded-lg border" :class="borderColor + ' ' + bgColor">
    <div class="flex justify-between">
      <span class="text-12 font-medium text-black">
        {{ label }}
      </span>
      <ion-icon
        :src="`//unpkg.com/ionicons@5.4.0/dist/svg/${icon}.svg`"
        class="text-2xl"
        :class="iconColor"
      />
    </div>
    <div
      class="text-left w-full overflow-hidden"
      :class="spacious ? 'py-4' : 'py-1'"
    >
      <p class="text-3xl truncate">
        {{ value }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    spacious: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: 'Label'
    },
    color: {
      type: String,
      default: 'bg-blue-100'
    },
    icon: {
      type: String,
      default: 'person-circle-outline'
    },
    value: {
      type: [String, Number],
      default: 'Value'
    }
  },
  computed: {
    getColor: function() {
      // get the color class with its property prefix
      const color = this.color.split('-')
      // only splice if the array is 3 or more
      if (color.length >= 3) return color.splice(1).join('-')
      return color.join('-')
    },
    bgColor() {
      // make bg color
      return `bg-${this.getColor}`
    },
    borderColor() {
      // make border color
      return `border-${this.getColor}`
    },
    iconColor() {
      return `text-${this.getColor}`
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  --bg-opacity: 0.05;
}
</style>
