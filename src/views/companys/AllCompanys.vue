<template>
    <div>
        <div class="flex flex-wrap sm:justify-between mt-8 mb-8">
           <div>
            <h1 class="text-3xl font-bold mb-1">
          All Companies
           </h1>
           <div class="button justify-end" @click="openCreateModal"> Add Company </div>
           </div>
       </div>
       <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
                <div class="relative flex flex-col min-w-0 break-words bg-blue-100 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Total Companies 
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                          <i class="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
                <div class="relative flex flex-col min-w-0 break-words bg-green-200 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Whitelisted
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
                          <i class="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
                <div class="relative flex flex-col min-w-0 break-words bg-red-200 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Blacklisted
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                          <i class="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
                <div class="relative flex flex-col min-w-0 break-words bg-loanbot-orange rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                         Unlisted
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          350,897
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-loanbot-orange">
                          <i class="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       </div>
        <datatable class="pt-12 text-9xl"
        :columns="columns"
        :data="data"
        :footer="false"
        :header="false"
        :limit="15"
        :selectable="false"
        dropdown="actions"
      >
        <template #td-2="{ item }">
          <CompanyStatus :status="item.row.status" />
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
                    
                    name: "Branch International",
                    status: "Whitelisted",
                    details: "view Detail"
                },
                {
                    
                    name: "Branch International",
                    status: "Blacklisted"
                },
                {
                    name: "Branch International",
                    status: "Whitelisted"
                },
                {
                    name: "Branch International"
                },
                
            ],
            columns: [
            {
                th: "Customer's Name",
                name: "name",
            },

            {
            th: "Status",
            name: "status"
            },
            {
              th: "",
              name: "details"
            }
    ]
        }
    }
}
</script>