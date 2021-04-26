<template>
  <div class="login">
    <div class="flex flex-row p-12 container mx-auto">
      <img alt="CredPal LoanBot" src="../../assets/images/logo.svg" />
      <span class="text-gray-500 text-xs font-thin mt-2 ml-2">
        Instant Approval
      </span>
    </div>

    <div class="md:flex flex-row-reverse container mx-auto items-end">
      <div
        class="w-full md:w-1/2 rounded-lg p-10 md:p-20 flex flex-col bg-white shadow-card"
      >
        <p class="text-3xl font-bold">
          Reset Password
        </p>
        <h6 class="text-gray-600 my-4">
          Set up a new password for your Instant Approval Dashboard
        </h6>

        <form action="#" class="my-5">
          <TextField
            class="mb-10"
            :ricon="passwordVisible ? 'eye-outline' : 'eye-off-outline'"
            icon="lock-closed-outline"
            label="New Password"
            :type="passwordVisible ? 'text' : 'password'"
            @rclicked="togglePasswordVisibility"
            v-model="password"
          />
          <TextField
            class="mb-10"
            :ricon="passwordVisible ? 'eye-outline' : 'eye-off-outline'"
            icon="lock-closed-outline"
            label="Confirm New Password"
            :type="passwordVisible ? 'text' : 'password'"
            @rclicked="togglePasswordVisibility"
            v-model="password"
          />

          <div>
            <router-link :to="{ name: 'dashboard' }" class="button">
              Continue
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    logo() {
      return '@/assets/images/logo.svg'
    }
  },
  data() {
    return {
      password: '',
      passwordVisible: false
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  @apply min-h-screen bg-blue-100 w-full bg-no-repeat bg-left;
  background-image: url('./../../assets/images/banner1.svg');
}
</style>
