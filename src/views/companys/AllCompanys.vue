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
                  350,897
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
                  350,897
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
                  350,897
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
                  Unlisted
                </h5>
                <span class="font-semibold text-xl text-blueGray-700">
                  350,897
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
  </div>
</template>
<script>
import { fetchCompanies } from "@/requests"
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          th: "Companies's Name",
          name: "name"
        },
        {
          th: "Company Email",
          name: "email",
          render: (company) => {
            console.log(999, company)
          }
        },
        {
          th: "Website",
          name: "website",
          render: (company) => {
            console.log(999, company)
            if (!company?.domain){
              return "N/A"
            }
            return company?.domain
          }
        },

        {
          th: "LinkedIn Profile",
          name: "profile",
          render: (company) => {
            console.log(999, company)
            if (!company?.linkedin_url) {
              return "N/A"
            }
            return company?.linkedin_url
          }
        },
        {
          th: "Salary Date",
          name: "salarydate"
        },
        {
          th: "Company Teirs",
          name: "teirs"
        },
        {
          th: "Status",
          name: "status"
        }
      ]
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
  mounted() {
    // this.listenForClick()
    this.fetch()
  },
  methods: {
    fetch(page = 1) {
      // this.loading = true
      fetchCompanies(page, this.query, this.perPage)
        .then(({ data }) => {
          console.log(333, data)

          // Update the customers' list
          // this.total = data.meta.total
          // this.currentPage = data.meta.current_page
          this.data.push(...data.results)
        })
        .catch(null)
        .finally(() => console.log(666))
    }
  }
}
</script>
