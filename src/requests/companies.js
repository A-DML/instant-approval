import { api } from "@/constants"
import { get$ } from "@/requests"

export function fetchCompanies(page = 1, query = '', perPage = 10) {
  console.log('here');
  
  return get$(api.companies.fetch, {
    page,
    query,
    per_page: perPage
  })
}