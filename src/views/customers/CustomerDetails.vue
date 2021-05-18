<template>
  <div>
    <div class="grid grid-cols-3 gap-4 mt-8 mb-8 p-8">
      <!-- first section -->
      <div class="col-span-1 border-2">
        <div class="mt-4 text-blue-600 text-4xl justify-center p-6">
          Customer Details
        </div>
        <div>
        <div class="border-b pb-2 mx-4">
          <p> Name</p>
          <p>Customer Name</p>
        </div>
        <div class="border-b pb-2 p-8">
          <p> Name</p>
          <p>Customer Name</p>
        </div>
        <div class="border-b pb-2 p-8">
          <p> Name</p>
          <p>Customer Name</p>
        </div>
        <div class="border-b pb-2 p-4">
          <p> Name</p>
          <p>Customer Name</p>
        </div>
        <div class="border-b pb-2 p-8">
          <p> Name</p>
          <p>Customer Name</p>
        </div>
        </div>
      </div>
      <!-- second section-->
      <div class="col-span-2 border-2">
        <!-- tabs for second section -->
        <div style="border-bottom: 2px solid #eaeaea">
          <ul class="flex cursor-pointer">
            <li class="py-2 px-6 bg-white rounded-t-lg">Personal</li>
            <li
              class="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200"
            >
              Akun
            </li>
            <li
              class="py-2 px-6 bg-white rounded-t-lg text-gray-500 bg-gray-200"
            >
              Pengaturan
            </li>
          </ul>
        </div>
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
