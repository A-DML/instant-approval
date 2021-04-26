<template>
  <div class="login">
    <div class="flex flex-row p-12 container mx-auto">
      <img alt="Instant Approval" src="../../assets/images/logo.svg" />
      <span class="text-gray-500 text-xs font-thin mt-2 ml-2">
        Instant Approval
      </span>
    </div>
     <div class="md:flex flex-row-reverse container mx-auto items-end">
        <div class="w-full md:w-1/2 rounded-lg p-10 md:p-20 flex flex-col bg-white shadow-card">
        <p class="text-3xl font-bold">
          Log In
        </p>
         <h6 class="text-gray-600 my-4">
          Sign In To Instant Approval Dashboard
        </h6>
        <Error :message="error.message" v-if="error.message" />
        <form action="#" class="my-5" @submit.prevent="processLogin">
          <TextField
            class="mb-10"
            icon="mail-outline"
            label="Email Address"
            type="email"
            v-model="email"
          />
          <TextField
            class="mb-10"
            :ricon="passwordVisible ? 'eye-outline' : 'eye-off-outline'"
            icon="lock-closed-outline"
            label="Password"
            :type="passwordVisible ? 'text' : 'password'"
            @rclicked="togglePasswordVisibility"
            v-model="password"
          />
           <router-link
            :to="{ name: 'ResetPassword' }"
            class="flex w-full justify-end text-gray-600 mt-8 mb-4 "
          >
            Forgot Password?
          </router-link>
          <!-- <div class="grid place-items-center">
            <button class="button" :disabled="loading">
              {{ loading ? 'Loging in...' : 'Log In' }}
            </button>
          </div> -->
           <div >
            <router-link :to="{ name: 'dashboard' }" class="button">
              Log in
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
      loading: false,
      email: '',
      password: '',
      passwordVisible: false,
      error: {
        email: '',
        message: ''
      }
    }
  },
   methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible
    },
    // processLogin() {
    //   this.loading = true
    //   login(this.email, this.password)
    //     .then(({ data }) => {
    //       // Persist the user token to localstorage
    //       window.localStorage.setItem('auth_token', data.token)
    //       // Save user information to vuex
    //       this.$store.commit('updateUserProfile', data)
    //       // Authenticate
    //       this.$store.commit('authenticate')
    //       // Redirect User to Dashboard
    //       this.$router.push({
    //         name: 'dashboard'
    //       })
    //     })
    //     .catch(() => (this.error.message = 'Invalid credentials provided.'))
    //     .finally(() => (this.loading = false))
    // }
  }
}
</script>

<style lang="scss" scoped>
.login {
  @apply min-h-screen bg-blue-100 w-full bg-no-repeat bg-left;
  background-image: url('./../../assets/images/banner1.svg');
}
</style>