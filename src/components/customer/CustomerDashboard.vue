<template>
    <div>
         <datatable
      class="pt-12 text-9xl p-6"
      :columns="columns"
      :data="data"
      :footer="false"
      :header="false"
      :query="query"
      :limit="5"
      :selectable="false"
      dropdown="actions"
      :on-click="selectionUpdate"
      @clicked-row="selectionUpdate"
    >
      <template #td-5="{ item }">
        <CustomerStatus :status="item.row.loanstatus" />
      </template>
    </datatable>
    </div>
</template>
<script>
import { fetchCustomers } from "@/requests"
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
          render: (customer) =>
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
  methods: {
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
  }
}
</script>