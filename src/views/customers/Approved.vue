<template>
  <div>
     <div class="flex flex-wrap sm:justify-between mt-8 mb-8 p-6">
           <div>
            <h1 class="text-3xl font-bold mb-1">
          Approved Customers
          </h1>
           </div>
       </div>
       <SearchField
        class="w-full p-6"
        v-model="query"
        label="Search for Customer’s Name, Status, etc."
      />
      <datatable class="pt-12 text-9xl p-6"
        :columns="columns"
        :data="data"
        :footer="false"
        :header="false"
        :limit="15"
        :query="query"
        :selectable="false"
        dropdown="actions"
        :on-click="selectionUpdate"
        @clicked-row="selectionUpdate"
      >
      <template #td-7="{ item }">
          <CustomerStatus :status="item.row.loanstatus" />
        </template>
      </datatable>
      
  </div>
</template>
<script>
import {fetchApproved} from "@/requests"
export default {
    data(){
        return {
           perPage: 10,
      total: 0,
      query: "",
      currentPage: 1,
            data:[],
            columns: [
            {
          th: "Customer's Name",
          name: "name",
          render: (customer) =>{
          console.log(customer)
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
            customer?.workplace_email
              ? `${customer?.workplace_email}`
              : "N/A"
        },
        {
            th: "Loan Status",
            name: "loanstatus"
        }, 
         
    ],
    // actions: [
    //   {
    //     text: "View",
    //     class: "border-blue-500 text-blue-500 rounded-sm px-4 py-2",
    //     action: this.details
    //   }
    // ]
    }
     },
    //  methods: {
    //   view: function() {
    //   this.$router.push({
    //     name: 'details'
    //   })
    // },
    //  }
    beforeMount() {
    this.fetch()
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
      fetchApproved(page, this.query, this.perPage)
        .then(({ data }) => {
          console.log(data)

          // Update the customers' list
          // this.total = data.meta.total
          // this.currentPage = data.meta.current_page
          this.data.push(...data.results)
        })
        .catch(null)
        .finally(() => console.log())
    }
  }
}
</script>