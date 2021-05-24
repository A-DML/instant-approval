import { api } from "@/constants"
import { get$ } from "@/requests"
const path = "underwriter"

const fetchCustomers = (page = 1, query = "", perPage = 10) => {
  return get$(api.customers.fetch, path, {
    page,
    ...query,
    per_page: perPage
  })
}
const fetchUndecided = (page = 1, query = "", perPage = 10) => {
  return get$(api.customers.undecided, path, {
    page,
    query,
    per_page: perPage
  })
}
const fetchApproved = (page = 1, query = "", perPage = 10) => {
  return get$(api.customers.approved, path, {
    page,
    query,
    per_page: perPage
  })
}

const fetchDeclined = (page = 1, query = "", perPage = 10) => {
  return get$(api.customers.declined, path, {
    page,
    query,
    per_page: perPage
  })
}

const fetchSummary = (page = 1, query = "", perPage = 10) => {
  return get$(api.customers.summary, path, {
    page,
    query,
    per_page: perPage
  })
}

export {
  fetchCustomers,
  fetchUndecided,
  fetchApproved,
  fetchDeclined,
  fetchSummary
}
