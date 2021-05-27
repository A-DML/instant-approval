<template>
  <div>
    <div class="grid grid-cols-3 gap-4 mt-8 mb-8 p-8">
      <!-- first section -->
      <div class="col-span-1 border-2">
        <div class="mt-4 text-blue-600 text-4xs justify-center p-6">
          Customer Details
        </div>
        <div v-if="userData.customer">
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Surname</p>
            <p class="text-xs opacity-75 ">{{ customerDetail('Surname')}}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Firstname</p>
            <p class="text-xs opacity-75 ">{{ customerDetail('FirstName')}}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Nationality</p>
            <p class="text-xs opacity-75 ">{{ customerDetail('Nationality') }}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">BVN</p>
            <p class="text-xs opacity-75 ">{{customerDetail('BankVerificationNo') }}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Gender</p>
            <p class="text-xs opacity-75 ">{{ customerDetail('Gender') }}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Date of Birth</p>
            <p class="text-xs opacity-75 ">{{ customerDetail('BirthDate') }}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Residential Address</p>
            <p class="text-xs opacity-75">{{ customerDetail('ResidentialAddress1') }}</p>
          </div>
          <div class="border-b pb-2 mx-4">
            <p class="text-xs p-2">Phone No</p>
            <p class="text-xs opacity-75 ">{{ customerDetail('CellularNo') }}</p>
          </div>
        </div>
      </div>
      <!-- second section-->
      <div class="col-span-2 border-2">
        <!-- tabs for second section -->
        <!-- <div style="border-bottom: 2px solid #eaeaea">
          <ul class="flex cursor-pointer">
            <li class="py-2 px-6 bg-white rounded-t-lg">Personal</li>
            <li
              class="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200"
            >
              Akun
            </li>
            <li
              class="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200"
            >
              Pengaturan
            </li>
          </ul>
        </div> -->

        <div>
          <Tabs v-model="tab" :tabs="tabs" class="mb-6" />

          <component :is="tab" :user="userData" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchCustomerDetails } from "@/requests"
export default {
  components: {
    // profile: () => import("@/components/customer/Profile"),
    performance: () => import("@/components/customer/Performance"),
    approval: () => import("@/components/customer/Approval")
  },
  data() {
    return {
      tabs: [
        // { name: "profile", title: "Profile" },
        { name: "performance", title: "Summary" },
        { name: "approval", title: "Instant Approval" }
        // { name: "branch", title: "Branch & Region" },
        // { name: "transactions", title: "Transfer Transactions" },
        // { name: "settings", title: "Settings" },
      ],
      tab: "performance",
      userData: {},
    }
  },
  computed: {
    customerId() {
      return this.$route.params.customerId 
    }
  },
  beforeMount() {
    this.fetch()
  },
  methods: {
    customerDetail(key) {
      console.log(key);
      
      return this.userData?.customer[key] ?? "N/A"
    },
    test() {
      console.log(99, this.customerId)
    },
    fetch() {
      fetchCustomerDetails(this.customerId)
        .then((response) => {
          console.log(22, response)

          this.userData = response.data
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>
