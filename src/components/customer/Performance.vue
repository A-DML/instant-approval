<template>
  <div>
    <div class="flex flex-wrap sm:justify-between mt-2 mb-4 p-2">
      <div>
        <h1 class="text-3xs mb-1">Performance summary</h1>
      </div>
      <div class="flex flex-wrap">
        <div class="">
          <div
            class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase text-xs opacity-75">
                    Open Loan
                  </h5>
                  <span class="text-xs text-blueGray-700">
                    {{ performanceSummaryData("open_loans") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase opacity-75 text-xs">
                    Sub-Standard Loan
                  </h5>
                  <span class="text-xs text-blueGray-700">
                    {{ performanceSummaryData("sub_standard_loans") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase text-xs opacity-75">
                    Doubtful Loan
                  </h5>
                  <span class="text-xs text-blueGray-700">
                    {{ performanceSummaryData("doubtful_loans") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase text-xs opacity-75">
                    Lost Loan
                  </h5>
                  <span class="text-xs text-blueGray-700">
                    {{ performanceSummaryData("lost_loans") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div
            class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
          >
            <div class="flex-auto p-4">
              <div class="flex flex-wrap">
                <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 class="text-blueGray-400 uppercase text-xs opacity-75">
                    Closed Loan
                  </h5>
                  <span class="text-xs text-blueGray-700">
                    {{ performanceSummaryData("closed_loans") }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Tabs v-model="tab" :tabs="tabs" class="mb-6" /> -->
    <div class="p-4">Credit Agreement summary</div>
    <datatable
      class="pt-2 p-4 text-9xl"
      :columns="columns"
      :data="agreementSummary"
      :footer="false"
      :header="false"
      :limit="15"
      :selectable="false"
      dropdown="actions"
    ></datatable>
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
      data: [ ],
      userData: {},
      columns: [
        {
          th: "Subscriber's Name",
          name: "SubscriberName",
          // render: (userData) => {
          //   console.log(99, userData)
          // return  userData?.credit_agreement_summary.SubscriberName ? `${userData?.credit_agreement_summary.SubscriberName}` : "N/A"
          // }
        },
        {
          th: "Opening Balance",
          name: "OpeningBalanceAmt"
        },
        {
          th: "Performance Status ",
          name: "PerformanceStatus"
        },
        {
          th: "Account Status ",
          name: "AccountStatus"
        },
        {
          th: "Account Performance Status ",
          name: "AccountPerformanceStatus"
        },
        {
          th: "Loan Type",
          name: "LoanType"
        },
        {
          th: "Loan Duration",
          name: "LoanDuration"
        },
        {
          th: "Instalment Amount",
          name: "InstalmentAmount"
        },
        {
          th: "Date Account Opened",
          name: "DateAccountOpened"
        },
        {
          th: "Date Account Close",
          name: "ClosedDate"
        }
      ],
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
    agreementSummary() {
      return this.user.credit_agreement_summary
    }

  },
  beforeMount() {
    this.fetch()
      console.log(99, this.user)
  },
  methods: {
    performanceSummaryData(key) {
      return this.user?.performance_summary[key] ?? "N/A"
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
     // customerName() {
    //   return `${this.user?.surname} ${this.user?.name}`
    // }
  }
}
</script>
