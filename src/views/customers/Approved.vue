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
        :selectable="false"
        dropdown="actions"
      >
      <template #td-7="{ item }">
          <CustomerStatus :status="item.row.loanstatus" />
        </template>
      </datatable>
      
  </div>
</template>
<script>
export default {
    data(){
        return {
            data:[
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed",
                    bvn: "33453890233",
                    email: "aa@gmail.com",
                    remark: "Customers record not found",
                    amount: "40,009",
                    loanstatus: "Approved"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: " Self Employed",
                    bvn: "33453890233",
                    email: "damolaaaa@gmail.com",
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
                    amount: "40,009",
                    
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Self Employed"
                },
                
            ],
            columns: [
            {
                th: "Customer's Name",
                name: "name",
        },
        {
            th: "Employement Status",
            name: "status"
        }, 
        {
            th: "BVN",
            name: "bvn"
        }, 
        {
            th: "Workplace Email",
            name: "email"
        }, 
        {
            th: "Remark",
            name: "remark"
        }, 
        {
            th: "Loan Amount",
            name: "amount"
        }, 
        {
            th: "Loan Status",
            name: "loanstatus"
        }, 
         
    ],
    actions: [
      {
        text: "View",
        class: "border-blue-500 text-blue-500 rounded-sm px-4 py-2",
        action: this.details
      }
    ]
    }
     },
     methods: {
      view: function() {
      this.$router.push({
        name: 'details'
      })
    },
     }
}
</script>