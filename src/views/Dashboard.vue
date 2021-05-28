<template>
  <div>
    <div class="flex flex-wrap sm:justify-between mt-8 mb-8 p-8">
      <div>
        <h1 class="text-3xl mb-1">Dashboard</h1>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase  text-xs">
                  Total Customer
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ totalcustomer }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500"
                >
                  <i class="far fa-chart-bar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase  text-xs">
                  Approved Customers
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                   {{ approved }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500"
                >
                  <i class="fas fa-users"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-orange-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span class="whitespace-nowrap">
                        Since yesterday
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase  text-xs">
                  Declined
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                   {{ undecided }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-600"
                >
                  <i class="fas fa-percent"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last month
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase text-xs">
                  Undecided
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ declined }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-600"
                >
                  <i class="fas fa-percent"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last month
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase text-xs">
                  Total Companies
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ totalcompany }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                >
                  <i class="fas fa-chart-pie"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last week
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase text-xs">
                  Whitelist Companies
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ whitelist }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                >
                  <i class="fas fa-chart-pie"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last week
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase  text-xs">
                  Blacklist Companies
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ blacklist }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                >
                  <i class="fas fa-chart-pie"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last week
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase  text-xs">
                  Pending
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                   {{pending}}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                >
                  <i class="fas fa-chart-pie"></i>
                </div>
              </div>
            </div>
            <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last week
                      </span>
                    </p> -->
          </div>
        </div>
      </div>
    </div>
     <Tabs v-model="tab" :tabs="tabs" class="mt-6 mx-4" />
     <component :is="tab" />
  
  </div>
</template>
<script>
import { fetchSummary, fetchCustomerSummary } from "@/requests"
export default {
  components: {
    CustomerDashboard: () => import("@/components/customer/CustomerDashboard"),
    CompanyDashboard: () => import("@/components/company/CompanyDashboard")
  },
  data() {
    return {
      tabs: [
        // { name: "profile", title: "Profile" },
        { name: "CustomerDashboard", title: "Customer" },
        { name: "CompanyDashboard", title: "Companies" }
        // { name: "branch", title: "Branch & Region" },
        // { name: "transactions", title: "Transfer Transactions" },
        // { name: "settings", title: "Settings" },
      ],
      tab: "CustomerDashboard",
      data: [
        {
          id: 1,
          name: "AMINAT ABIDOGUN",
          status: "Employed",
          bvn: "33453890233",
          email: "aa@gmail.com",
          remark: "Customers record not found",
          amount: "40,009",
          loanstatus: "Approved",
          details: "View"
        },
        {
          id: 1,
          name: "AMINAT ABIDOGUN",
          status: " Self Employed",
          bvn: "33453890233",
          email: "",
          remark: "Customers record not found",
          amount: "40,009",
          loanstatus: "Approved"
        },
        {
          id: 1,
          name: "AMINAT ABIDOGUN",
          status: "Employed",
          bvn: "33453890233",
          email: "aa@gmail.com",
          remark: "Customers record not found",
          amount: "40,009"
        },
        {
          id: 1,
          name: "AMINAT ABIDOGUN",
          status: "Self Employed"
        }
      ],

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
      ],
      summarydata: {},
       customerdata: {}
    }
  },
  watch: {
        query: {
          handler() {
            this.fetch()
          }
        },
        perPage: {
          handler() {
            this.fetch()
          }
        }
      },
      computed: {
        whitelist() {
          return this.summarydata?.whitelist || 0
        },
        blacklist() {
          return this.summarydata?.blacklist || 0
        },
        pending() {
          return this.summarydata?.pending || 0
        },
        totalcompany() {
          return this.summarydata?.total || 0
        },
        approved() {
      return this.customerdata?.approved || 0
    },
    declined() {
      return this.customerdata?.declined || 0
    },
    undecided() {
      return this.customerdata?.undecided || 0
    },
    totalcustomer() {
      return this.customerdata?.total || 0
    }
      },
      // actions: [
      //   {
      //     text: "View",
      //     class: "border-blue-500 text-blue-500 rounded-sm px-4 py-2",
      //     action: this.details
      //   }
      // ],
  beforeMount() {
    // this.listenForClick()
    // this.fetch()
    this.getSummary()
  },
  methods: {
    view: function () {
      this.$router.push({
        name: "details"
      })
    },
    async getSummary() {
      await fetchSummary()
        .then((response) => (this.summarydata = response.data))
        .catch((error) => console.log(error)),
        await fetchCustomerSummary()
        .then((response) => {
          console.log(22, response)

          this.customerdata = response.data
        })
        .catch((error) => console.log(error))
    }
  }
}
</script>
