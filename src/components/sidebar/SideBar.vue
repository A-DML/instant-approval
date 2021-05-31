<template>
  <div class="sidebar">
    <img alt="" class="m-2 ml-2 p-4 mx-auto" src="@/assets/images/logo.svg" />
    <!-- <div class="nav-title text-xs  text-blue-300 opacity-19">
      Instant Approval
    </div> -->
    <ul class="nav pl-2">
      <!-- <router-link
          v-for="(link, i) in headerLinks"
          :key="i"
          :class="active(link.to) && 'active'"
          :to="`/${link.to}`"
          class="link flex flex-row items-center text-blue-100 text-xs"
        >
        
          {{ link.name }}
        </router-link> -->
      <li class="nav-item my-6">
        <router-link
          :to="{ name: 'dashboard' }"
          class="flex flex-row items-center text-credpal-400 text-xm"
        >
          <span class="">Dashboard</span>
        </router-link>
      </li>
      <!-- section for customers, all customers -->
      <li class="nav-item my-4">
        <a
          href="#!"
          class="flex flex-row items-center text-xm"
          @click="toggle($refs.customers)"
        >
          <span class="text-xm">Customers</span>
        </a>
        <ul class="sub-nav collapse" ref="customers">
          <!-- section for  allcustomers -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'allcustomers' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
              <ion-icon name="people-outline" />
              <span class="text-xs p-3">All Customers</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'approved' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
              <ion-icon name="people-outline" class=""/>
              <span class="text-xs p-3">Approved Customers</span>
            </router-link>
          </li>
          <!-- sections for Declined customer -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'declined' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
              <ion-icon name="people-outline" />
              <span class="text-xs p-3">Declined Customers</span>
            </router-link>
          </li>
          <!-- section for undecided customers -->
           <li class="nav-item">
            <router-link
              :to="{ name: 'undecided' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
              <ion-icon name="people-outline" />
              <span class="text-xs p-3">Undecided Customers</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- section for all companies details -->
      <li class="nav-item">
        <a
          href="#!"
          class="flex flex-row items-center text-xm"
          @click.prevent="collapse($refs.companies)"
        >
          <span>Companies</span>
        </a>
        <ul class="sub-nav collapse" ref="customers">
          <!-- sections for allcompanies -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'allcompanys' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
            <ion-icon name="podium-outline" />
              <span class="text-xs p-3">All Companies</span>
            </router-link>
          </li>
          <!-- section for whitelisted company -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'whitelist' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
             <ion-icon name="podium-outline" />
              <span class="text-xs p-3">Whitelisted</span>
            </router-link>
          </li>
          <!-- sections for Blacklisted companies -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'blacklist' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
             <ion-icon name="podium-outline" />
              <span class="text-xs p-3">Blacklisted</span>
            </router-link>
          </li>
          <!-- section for Unlisted companies -->
          <li class="nav-item">
            <router-link
              :to="{ name: 'unlist' }"
              class="flex flex-row items-center text-xm opacity-75"
            >
             <ion-icon name="podium-outline" />
              <span class="text-xs p-3">Pending</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    active: function (value) {
      return this.$route.name.indexOf(value) + 1
    },
    collapse(element) {
      window.collapse(element, "toggle")
    }
  },
  data() {
    return {
      headerLinks: [
        {
          to: "dashboard",
          name: "Dashboard",
          icon: "grid-outline"
        },
        {
          to: "allcustomers",
          name: "Customers",
          icon: "people-outline"
        },
        {
          to: "allcompanys",
          name: "All companies",
          icon: "people-outline"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 25vw;
  @apply h-screen;
  @apply overflow-y-scroll;
  padding: 10px 16px;
  background-color: blue;
  box-shadow: 0 2px 4px #666;
  color: #fefefe;
  .icon {
    cursor: pointer;
  }
  .icon-circle {
    width: 32px;
    height: 32px;
    padding: 5px;
    margin-left: 10px;
    cursor: pointer;
    color: #222;
    background-color: #fefefe;
    border-radius: 50%;
  }
}
</style>
