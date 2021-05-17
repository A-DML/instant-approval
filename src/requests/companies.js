import { api } from "@/constants"
import { get$ } from "@/requests"

const fetchCompanies = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.fetch, {
    page,
    query,
    per_page: perPage
  })
}

const fetchWhitelisted = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.whitelisted, {
    page,
    query,
    per_page: perPage
  })
}

const fetchBlacklisted = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.blacklisted, {
    page,
    query,
    per_page: perPage
  })
}
const fetchPending = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.pending, {
    page,
    query,
    per_page: perPage
  })
}
const fetchSummary = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.summary, {
    page,
    query,
    per_page: perPage
  })
}

export {
  fetchWhitelisted,
  fetchCompanies,
  fetchBlacklisted,
  fetchPending,
  fetchSummary
}
