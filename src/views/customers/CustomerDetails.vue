<template>
  <div>
    <div class="grid grid-cols-3 gap-4 mt-8 mb-8 p-8">
      <!-- first section -->
      <div class="col-span-1 border-2">
        <div class="mt-4 text-blue-600 text-4xl justify-center p-6">
          Customer Details
        </div>
        <div>
          <div class="border-b pb-2 mx-4">
            <p>Surname</p>
            <p>{{ userData.customer.Surname }}</p>
          </div>
          <div class="border-b pb-2 p-8">
            <p>Lastname</p>
            <p>{{ userData.customer.FirstName }}</p>
          </div>
          <div class="border-b pb-2 p-8">
            <p>Nationality</p>
            <p>{{ userData.customer.Nationality }}</p>
          </div>
          <div class="border-b pb-2 p-8">
            <p>BVN</p>
            <p>{{ userData.customer.BankVerificationNo }}</p>
          </div>
          <div class="border-b pb-2 p-4">
            <p>Gender</p>
            <p>{{ userData.customer.Gender }}</p>
          </div>
          <div class="border-b pb-2 p-8">
            <p>Date of Birth</p>
            <p>{{ userData.customer.BirthDate }}</p>
          </div>
          <div class="border-b pb-2 p-8">
            <p>Residential Address</p>
            <p>{{ userData.customer.ResidentialAddress1 }}</p>
          </div>
          <div class="border-b pb-2 p-8">
            <p>Phone No</p>
            <p>{{ userData.customer.CellularNo }}</p>
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

        <!-- <datatable
          class="pt-12 p-4 text-9xl"
          :columns="columns"
          :data="data"
          :footer="false"
          :header="false"
          :limit="15"
          :selectable="false"
          dropdown="actions"
        ></datatable> -->
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
        { name: "performance", title: "Performance Summary" },
        { name: "approval", title: "Instant Approval" }
        // { name: "branch", title: "Branch & Region" },
        // { name: "transactions", title: "Transfer Transactions" },
        // { name: "settings", title: "Settings" },
      ],
      tab: "performance",
      userData: {},
      columns: [
        {
          th: "Customer's Name",
          name: "name"
        },
        {
          th: "Employement Status",
          name: "status"
        },
        {
          th: "Workplace Email",
          name: "email"
        },
        {
          th: "Loan Status",
          name: "loanstatus"
        }
      ]
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
