<template>
  <div>
    <div class="flex flex-wrap sm:justify-between mt-8 mb-8 p-6">
      <div>
        <h1 class="text-3xl font-bold mb-1">All Customers</h1>
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
                <h5 class="text-blueGray-400 uppercase font-bold text-xs">
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
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                  Approved
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ approved }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500"
                >
                  <i class="far fa-chart-bar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                  Declined
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ declined }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                >
                  <i class="far fa-chart-bar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
        <div
          class="relative flex flex-col min-w-0 break-words white rounded mb-6 xl:mb-0 shadow-lg"
        >
          <div class="flex-auto p-4">
            <div class="flex flex-wrap">
              <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                  Undecided
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ undecided }}
                </span>
              </div>
              <div class="relative w-auto pl-4 flex-initial">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-loanbot-orange"
                >
                  <i class="far fa-chart-bar"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- cards for customer summary -->

    <Paginator
      class="p-6"
      :current="currentPage"
      :chunk="perPage"
      :total="total"
      @changed="fetch($event)"
      @chunkChanged="perPage = $event"
    >
    </Paginator>
    <SearchField
      class="w-full p-6"
      v-model="query"
      label="Search for Customer’s Name, Status, etc."
    />
    <datatable
      class="pt-12 text-9xl p-6"
      :columns="columns"
      :data="data"
      :footer="false"
      :header="false"
      :limit="15"
      :selectable="false"
      dropdown="actions"
      @clicked-row="selectionUpdate"
    >
      <template #td-7="{ item }">
        <CustomerStatus :status="item.row.loanstatus" />
      </template>
    </datatable>
    <Paginator
      class="p-6"
      :current="currentPage"
      :chunk="perPage"
      :total="total"
      @changed="fetch($event)"
      @chunkChanged="perPage = $event"
    />
  </div>
</template>
<script>
import { fetchCustomers, fetchCustomerSummary } from "@/requests"
export default {
  data() {
    return {
      perPage: 10,
      total: 0,
      query: "",
      currentPage: 1,
      isOpen: false,
      selected: {},
      data: [],
      columns: [
        {
          th: "Customer's Name",
          name: "name",
          render: (customer) => {
            return `${customer?.customer?.FirstName} ${customer?.customer?.Surname} `
          }
        },
        {
          th: "Workplace Status",
          name: "status",
          ender: (customer) =>
            customer?.workplace_status ? `${customer?.workplace_status}` : "N/A"
        },
        {
          th: "BVN",
          name: "bvn",
          render: (customer) => customer?.customer?.BankVerificationNo
        },
        {
          th: "Workplace Email",
          name: "email",
          render: (customer) =>
            customer?.workplace_email ? `${customer?.workplace_email}` : "N/A"
        },
        // {
        //   th: "Remark",
        //   name: "remark"
        // },

        {
          th: "Loan Status",
          name: "loanstatus"
        }
      ],
      customerdata: {}
      // actions: [
      //   {
      //     text: "View",
      //     class: "border-blue-500 text-blue-500 rounded-sm px-4 py-2",
      //     action: this.details
      //   }
      // ]
    }
  },
  beforeMount() {
    // this.listenForClick()
    this.fetch()
    this.getSummary()
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
  methods: {
    selectionUpdate({ data }) {
      console.log(66, data)

      this.selected = data
      this.isOpen = true

      this.$router.push({
        name: "customerdetails",
        params: { customerId: data?.id }
      })
    },
    fetch(page = 1) {
      // this.loading = true
      fetchCustomers(
        page,
        {
          search: this.query
        },
        this.perPage
      )
        .then(({ data }) => {
          // Update the customers' list
          // this.total = data.meta.total
          // this.currentPage = data.meta.current_page
          this.data.push(...data.results)
        })
        .catch(null)
        .finally(() => console.log())
    },
    async getSummary() {
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
