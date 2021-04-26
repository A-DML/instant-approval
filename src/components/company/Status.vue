<template>
  <div class="button w-32 text-xs bg-opacity-25" :class="statusColorClass">
    {{ status }}
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: String,
      default: 'Unlisted'
    }
  },
  computed: {
    statusColorClass() {
      switch (this.status) {
        case 'Whitelisted':
          return 'bg-loanbot-green border-loanbot-green text-loanbot-green'
        case 'Blacklisted':
          return 'bg-loanbot-red border-loanbot-red text-loanbot-red'
        case 'Unlisted':
        default:
          return 'bg-loanbot-orange border-loanbot-orange text-loanbot-orange'
      }
    }
  }
}
</script>
