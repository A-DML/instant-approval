<template>
  <div>
     <div class="flex flex-wrap sm:justify-between mt-8 mb-8">
           <div>
            <h1 class="text-3xl font-bold mb-1">
          All Customers
          </h1>
           </div>
       </div>
       <SearchField
        class="w-full"
        v-model="query"
        label="Search for Customer’s Name, Status, etc."
      />
      <datatable class="pt-12 text-9xl"
        :columns="columns"
        :data="data"
        :footer="false"
        :header="false"
        :limit="15"
        :selectable="false"
        dropdown="actions"
      >
      <template #td-3="{ item }">
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
                    loanstatus: "Approved"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                     status: "Employed",
                    loanstatus: "Proccessed"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed"
                },
                 {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed"
                },
                 {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed",
                    loanstatus: "Approved"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed",
                    loanstatus: "Approved"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Self Employed",
                    loanstatus: "Declined"
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
          th: "Loan Status",
          name: "loanstatus"
        }
        
    ]
        }
    }
}
</script>