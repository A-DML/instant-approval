<template>
  <div>
    <Header />
    <!-- <ChangePasswordModal v-if="$store.state.user.should_change_password" /> -->
    <div class="container mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './Header'
export default {
  components: {
    Header
  }
}
</script>
