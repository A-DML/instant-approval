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
      default: 'Undecided'
    }
  },
  computed: {
    statusColorClass() {
      switch (this.status) {
        case 'Approved':
          return 'bg-loanbot-green border-loanbot-green text-loanbot-green'
        case 'Processed':
          return 'bg-loanbot-green border-loanbot-green text-loanbot-green'
        // case 'Undecided':
        //   return 'bg-loanbot-red border-loanbot-red text-loanbot-red'
        // case 'Declined':
        //   return 'bg-loanbot-red border-loanbot-red text-loanbot-red'
        case 'Declined':
          return 'bg-loanbot-red border-loanbot-red text-loanbot-red'
        default:
          return 'bg-loanbot-orange border-loanbot-orange text-loanbot-orange'
      }
    }
  }
}
</script>
