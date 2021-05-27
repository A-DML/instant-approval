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
                  <h5 class="text-blueGray-400 uppercase text-xs opacity-75">Open Loan</h5>
                  <span class="text-xs text-blueGray-700">
                    {{performanceSummaryData('open_loans')}}
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
                  <h5 class="text-blueGray-400 uppercase text-xs">
                    Sub-Standard Loan
                  </h5>
                  <span class="text-xs text-blueGray-700"> {{performanceSummaryData('sub_standard_loans')}} </span>
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
                  <h5 class="text-blueGray-400 uppercase text-xs">
                    Doubtful Loan
                  </h5>
                  <span class="text-xs text-blueGray-700"> {{performanceSummaryData('doubtful_loans')}} </span>
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
                  <h5 class="text-blueGray-400 uppercase text-xs">Lost Loan</h5>
                  <span class="text-xs text-blueGray-700"> {{performanceSummaryData('lost_loans')}} </span>
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
                  <h5 class="text-blueGray-400 uppercase text-xs">
                    Closed Loan
                  </h5>
                  <span class="text-xs text-blueGray-700"> {{performanceSummaryData('closed_loans')}} </span>
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
          status: "Employed",
          bvn: "33453890233",
          email: "aa@gmail.com",
          remark: "Customers record not found",
          amount: "40,009",
          loanstatus: "Approved",
          details: "View"
        }
      ],
      userData: {},
      columns: [
        {
          th: "Subscriber's Name",
          name: "name"
        },
        {
          th: "Opening Balance",
          name: "balance"
        },
        {
          th: "Performance Status ",
          name: "performancestatus"
        },
        {
          th: "Account Status ",
          name: "accountstatus"
        },
        {
          th: "Account Performance Status ",
          name: "accountperstatus"
        },
        {
          th: "Loan Type",
          name: "loantype"
        },
        {
          th: "Loan Duration",
          name: "loanduration"
        },
        {
          th: "Instalment Amount",
          name: "instalmentamount"
        },
        {
          th: "Date Account Opened",
          name: "dateaccountopened"
        },
        {
          th: "Date Account Close",
          name: "dateaccountclose"
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
