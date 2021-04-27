<template>
<div class="header bg-loanbot-100">
  <nav
      class="p-6 relative container mx-auto flex justify-between items-center" >
    <img alt="" class="mr-6" src="../assets/images/logo.svg" />
    <div class="flex flex-grow justify-center items-center nav">
      <router-link
          v-for="(link, i) in headerLinks"
          :key="i"
          :class="active(link.to) && 'active'"
          :to="`/${link.to}`"
          class="link"
        >
          {{ link.name }}
        </router-link>
    </div>
    </nav>
</div>
</template>
<script>
export default {
  methods: {
    active: function(value) {
      return this.$route.name.indexOf(value) + 1
    },
  },
  data() {
    return {
      headerLinks: [
        {
          to: "dashboard",
          name: 'Dashboard'
        },
        {
          to: 'allcustomers',
          name: 'Customers'
        },
        {
          to: 'allcompanys',
          name: 'All companies'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  .link {
    @apply relative flex flex-row text-lg mx-10;

    &:hover {
      @apply text-loanbot-blue;
    }

    &::after {
      @apply bg-loanbot-blue absolute left-0 bottom-0 rounded-full -mb-3 ml-10 text-center w-0 h-0 duration-200;
      transition-property: width;
      content: '';
    }

    &.active {
      @apply text-loanbot-blue;

      &::after {
        height: 3px;
        width: 10px;
      }
    }
  }
}
</style>

