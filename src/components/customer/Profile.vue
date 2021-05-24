<template>
    <div>
        <div>profile</div>
        <Tabs v-model="tab" :tabs="tabs" class="mb-6" />
         <datatable
          class="pt-12 p-4 text-9xl"
          :columns="columns"
          :data="data"
          :footer="false"
          :header="false"
          :limit="15"
          :selectable="false"
          dropdown="actions"
        ></datatable>
  </div>
</template>
<script>
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
  }
}
</script>

   