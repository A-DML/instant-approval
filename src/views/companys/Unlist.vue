<template>
  <div>
    <div class="flex flex-wrap sm:justify-between mt-8 mb-8 p-6">
      <div>
        <h1 class="text-3xl font-bold mb-1">Pending Companies</h1>
        <div>
          <router-link :to="{ name: 'comdetails' }" class="button">
            Add Company
          </router-link>
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
import { fetchPending } from "@/requests"
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
          name: "name",
          render: (company) => company?.name
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
          name: "status"
        }
      ]
    }
  },
  beforeMount() {
    this.fetch()
  },
  methods: {
    fetch(page = 1) {
      // this.loading = true
      fetchPending(page, this.query, this.perPage)
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
