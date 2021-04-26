<template>
  <!-- Header -->
  <div class="flex items-end container mx-auto">
    <!-- Left -->
    <div class="w-1/4">
      <p class="text-3xl">
        Process New Customer
      </p>
    </div>
    <!-- Left -->

    <!-- Center -->
    <div class="w-2/4 flex justify-center text-blue-600 mt-10">
      <!-- Nav Buttons -->
      <router-link
        :to="{ name: tab.replaceAll(' ', '-') }"
        class="capitalize border-b-2 cursor-pointer w-48 text-center p-4 lowercase border-opacity-25 border-loanbot-blue rounded-t text-loanbot-blue text-opacity-25 bg-loanbot-blue bg-opacity-0"
        v-for="tab in tabs"
        :key="tab"
        :class="
          isActive(tab) && 'text-opacity-100 border-opacity-100 bg-opacity-60'
        "
      >
        {{ tab }}
      </router-link>
      <!-- Nav Buttons -->
    </div>
    <!-- Center -->
    <!-- Right -->
    <div class="flex flex-row-reverse w-1/4 items-end">
      <slot />
    </div>
    <!-- Right -->
  </div>
  <!-- Header -->
</template>

<script>
export default {
  data() {
    return {
      tabs: ['customer onboard', 'fetch credit history']
    }
  },
  methods: {
    isActive(tab) {
      return tab.replaceAll(' ', '-') === this.$route.name
    }
  }
}
</script>
