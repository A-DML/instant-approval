<template>
    <div>
         <datatable
      class="pt-12 text-xs p-6"
      :columns="columns"
      :data="data"
      :footer="false"
      :header="false"
      :limit="5"
      :query="query"
      :selectable="false"
      dropdown="actions"
    >
      <template #td-4="{ item }">
        <CompanyStatus :status="item.row.status" />
      </template>
    </datatable>
    </div>
</template>
<script>
import { fetchCompanies } from "@/requests"
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
  beforeMount() {
    // this.listenForClick()
    this.fetch()
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
  }
}
</script>