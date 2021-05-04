<template>
  <div class="flex min-h-screen">
      <SideBar />
    <!-- <ChangePasswordModal v-if="$store.state.user.should_change_password" /> -->
    <div class="container mx-auto overflow-y-scroll h-screen">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from './sidebar/SideBar'
export default {
  components: {
    SideBar
  }
}
</script>
