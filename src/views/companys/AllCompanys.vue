<template>
  <div>
    <div class="flex flex-wrap sm:justify-between mt-8 mb-8 p-6">
      <div>
        <h1 class="text-3xl font-bold mb-1">All Companies</h1>
        <div>
          <router-link :to="{ name: 'comdetails' }" class="button">
            Add Company
          </router-link>
        </div>
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
                  Total Companies
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{ totalcompany }}
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
                  Whitelisted
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                {{whitelist}}
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
                  Blacklisted
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{blacklist}}
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
                  Pending
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  {{pending}}
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
    <Paginator
      class="p-6"
      :current="currentPage"
      :chunk="perPage"
      :total="total"
      @changed="fetch($event)"
      @chunkChanged="perPage = $event"
    >
      <SearchField
        class="w-full p-6"
        v-model="query"
        label="Search for Customer’s Name, Status, etc."
      />
    </Paginator>
    <datatable
      class="pt-12 text-9xl p-6"
      :columns="columns"
      :data="data"
      :footer="false"
      :header="false"
      :limit="15"
      :selectable="false"
      dropdown="actions"
    >
      <template #td-7="{ item }">
        <CompanyStatus :status="item.row.status" />
      </template>
      <router-link
        :to="{ name: 'comdetails' }"
        class="button bg-white text-loanbot-blue font-hairline inline-block mx-2"
      >
        View
      </router-link>
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
import { fetchCompanies, fetchSummary } from "@/requests"
export default {
  data() {
    return {
      perPage: 10,
      total: 0,
      query: "",
      currentPage: 1,
      data: [],
      columns: [
        {
          th: "Companies's Name",
          name: "name"
        },
        {
          th: "Website",
          name: "website",
          render: (company) =>
            company?.domain
              ? `<a href=https://${company?.domain} target='_blank'>${company?.domain}</a>`
              : "N/A"
        },
        {
          th: "LinkedIn Profile",
          name: "profile",
          render: (company) =>
            company?.linkedin_url
              ? `<a href=${company?.linkedin_url} target='_blank'>${company?.linkedin_url}</a>`
              : "N/A" //{
          //   if (!company?.linkedin_url) {
          //     return "N/A"
          //   }
          //   return company?.linkedin_url
          // }
        },
        {
          th: "Status",
          name: "status",
          render: (company) =>
          company?. status
        }
      ],
      summarydata: {}
    }
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
      whitelist() {
     return this.summarydata?.whitelist || 0     
      },
      blacklist() {
     return this.summarydata?.blacklist || 0     
      },
      pending() {
     return this.summarydata?.pending || 0     
      },
      totalcompany() {
     return this.summarydata?.total || 0     
      },

},
  beforeMount() {
    // this.listenForClick()
    this.fetch()
    this.getSummary()
  },
  methods: {
    fetch(page = 1) {
      // this.loading = true
      fetchCompanies(page, {
        search: this.query
      }, this.perPage)
        .then(({ data }) => {
          console.log(data)

          // Update the customers' list
          // this.total = data.meta.total
          // this.currentPage = data.meta.current_page
          this.data.push(...data.results)
        })
        .catch(null)
        .finally(() => console.log())
    },
    async getSummary() {
      await fetchSummary()
        .then((response) =>(this.summarydata=response.data))
        .catch((error) => console.log(error))
    }
  }
}
</script>
