export const api = {
  companies: {
    fetch: "companies",
    whitelisted: "companies?status=whitelist",
    blacklisted: "companies?status=blacklist",
    pending: "companies?status=pending",
    summary: "companies/summary",
    search: "companies?search"
  },
  customers: {
    fetch: "customer",
    undecided: "customer?status=undecided",
    approved: "customer?status=approved",
    declined: "customer?status=declined",
    summary: "customer/summary",
    customerDetails: "customer/:customerId"
  }
}
