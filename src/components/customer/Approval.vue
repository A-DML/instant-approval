<template>
  <div>
    <Tabs v-model="tab" :tabs="tabs" class="mb-6" />
    <div class="flex flex-wrap sm:justify-between mt-4 mb-4 p-8">
      <div>
        <h1 class="text-3xs font-bold mb-1">Instant Approval</h1>
        <div class="flex flex-wrap">
         <div class="">
                <div class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase opacity-75 text-xs">
                          Status 
                        </h5>
                        <span class=" text-xs text-blueGray-700">
                          {{instantApprovalData('status')}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div class="">
                <div class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase opacity-75 text-xs">
                          Amount 
                        </h5>
                        <span class=" text-xs text-blueGray-700">
                          {{instantApprovalData('amount')}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div class="">
                <div class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase opacity-75 text-xs">
                          Remark 
                        </h5>
                        <span class=" text-xs text-blueGray-700">
                          {{instantApprovalData('remark')}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <!-- <div class="">
                <div class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase  text-xs">
                          Doubtful Loan 
                        </h5>
                        <span class=" text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
               
              
       </div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchCustomerDetails } from "@/requests"
export default {
  data() {
    return {
      // tabs: [
      //   { name: "profile", title: "Profile" },
      //   { name: "settlements", title: "Settlements" },
      //   { name: "admins", title: "Admins" },
      //   { name: "branch", title: "Branch & Region" },
      //   { name: "transactions", title: "Transfer Transactions" },
      //   { name: "settings", title: "Settings" },
      // ],
      // tab: "profile",
      data: [],
      userData: {},
      columns: [],
    }
  },
  props: {
    user: {
    type: Object,
required: true
}
  },
  computed: {
    customerId() {
      return this.$route.params.customerId
    },
    // customerName() {
    //   return `${this.user?.surname} ${this.user?.name}`
    // }
  },
  beforeMount() {
    this.fetch()
      console.log(99, this.user)
  },
  methods: {
    instantApprovalData(key) {
      return this.user.instant_approval[key] ?? "N/A"
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