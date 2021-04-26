<template>
    <div>
       <div class="flex flex-wrap sm:justify-between mt-8 mb-8">
           <div>
            <h1 class="text-3xl font-bold mb-1">
          Dashboard
        </h1>
           </div>
       </div>
         <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 pb-4">
                <div class="relative flex flex-col min-w-0 break-words bg-blue-100 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Total Customer 
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
                      <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 3.48%
                      </span> -->
                      <!-- <span class="whitespace-nowrap">
                        Since last month
                      </span> -->
                    <!-- </p> -->
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-red-100 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Proccessed Customers
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          2,356
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                          <i class="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-red-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 3.48%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last week
                      </span>
                    </p> -->
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-green-100 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Approved Customers
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          924
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
                          <i class="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-orange-500 mr-2">
                        <i class="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span class="whitespace-nowrap">
                        Since yesterday
                      </span>
                    </p> -->
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-red-300 rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Declined
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          49,65%
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-600">
                          <i class="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last month
                      </span>
                    </p> -->
                  </div>
                </div>
              </div>
               <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                          Undecided
                        </h5>
                        <span class="font-semibold text-xl text-blueGray-700">
                          49,65%
                        </span>
                      </div>
                      <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-600">
                          <i class="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <!-- <p class="text-sm text-blueGray-400 mt-4">
                      <span class="text-emerald-500 mr-2">
                        <i class="fas fa-arrow-up"></i> 12%
                      </span>
                      <span class="whitespace-nowrap">
                        Since last month
                      </span>
                    </p> -->
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
                    status: "Employed"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: " Self Employed"
                },
                {
                    id: 1,
                    name: "AMINAT ABIDOGUN",
                    status: "Employed"
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
        
    ]
        }
    }
}
</script>