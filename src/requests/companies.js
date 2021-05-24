import { api } from "@/constants"
import { get$ } from "@/requests"
const path = "workplace"

const fetchCompanies = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.fetch, path, {
    page,
    ...query,
    per_page: perPage
  })
}

const fetchWhitelisted = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.whitelisted, path, {
    page,
    query,
    per_page: perPage
  })
}

const fetchBlacklisted = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.blacklisted, path, {
    page,
    query,
    per_page: perPage
  })
}
const fetchPending = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.pending, path, {
    page,
    query,
    per_page: perPage
  })
}
const fetchSummary = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.summary, path, {
    page,
    query,
    per_page: perPage
  })
}
const fetchSearch = (page = 1, query = "", perPage = 10) => {
  return get$(api.companies.search, path, {
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
  fetchSummary,
  fetchSearch
}
