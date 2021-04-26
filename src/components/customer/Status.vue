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
      default: 'pending'
    }
  },
  computed: {
    statusColorClass() {
      switch (this.status) {
        case 'approved':
          return 'bg-loanbot-green border-loanbot-green text-loanbot-green'
        case 'processed':
          return 'bg-loanbot-green border-loanbot-green text-loanbot-green'
        case 'declined':
          return 'bg-loanbot-red border-loanbot-red text-loanbot-red'
        case 'failed':
          return 'bg-loanbot-red border-loanbot-red text-loanbot-red'
        case 'processing':
          return 'bg-loanbot-orange border-loanbot-orange text-loanbot-orange'
        default:
          return 'bg-loanbot-orange border-loanbot-orange text-loanbot-orange'
      }
    }
  }
}
</script>
