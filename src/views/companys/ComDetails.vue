<template>
  <div>
    <div class="mt-4 text-blue-600 tex-xl-200 justify-center p-6">
      Add New Company
    </div>
    <div class="flex justify-center items-center mt-5 px-12">
      <div
        class="border border-loanbot-blue border-opacity-25 rounded w-1/2 h-full p-12"
      >
        <form action="" @submit.prevent="Add">
          <TextField
            class="mb-10"
            label="Name"
            :error="error.name"
            type="text"
            v-model="form.name"
          />
          <TextField
            class="mb-10"
            label="Website"
            :error="error.website"
            type="text"
            v-model="form.website"
          />
          <TextField
            class="mb-10"
            label="Address"
            :error="error.address"
            type="text"
            v-model="form.address"
          />
          <!-- <TextField
            class="mb-10"
            label="Salary Date"
            :error="error.salarydate"
            type="text"
            v-model="form.salarydate"
          /> -->
          <!-- section for status of the company with credpal -->

          <!-- <div class="col-span-3">
            <div class="grid grid-cols-3 gap-2">
              <p class="text-loanbot-blue mb-4">Credpal User :</p>
              <div
                class="radio"
                :class="credpaluser === 'Yes' && 'active'"
                @click="changeCredpaluser('Yes')"
              >
                <label class=" " :error="error.credpaluser">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="credpaluser"
                    value="Yes"
                  />
                  <span class="mr-4 text-left"> Yes </span>
                </label>
              </div>
              <div
                class="radio"
                :class="credpaluser === 'No' && 'active'"
                @click="changeCredpaluser('No')"
              >
                <label class=" " :error="error.credpaluser">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="credpaluser"
                    value="No"
                  />
                  <span class="mr-4 text-left"> No </span>
                </label>
              </div>
            </div>
          </div> -->
          <!-- the button for company tier -->

          <!-- <div class="col-span-3">
            <div class="grid grid-cols-3 gap-2 mb-4">
              <p class="text-loanbot-blue mb-a">Tier</p>
              <div
                class="radio"
                :class="tier === 'A' && 'active'"
                @click="changetier('A')"
              >
                <label class=" " :error="error.tier">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="tier"
                    value="A"
                  />
                  <span class="mr-4 text-left"> A </span>
                </label>
              </div>
              <div
                class="radio"
                :class="tier === 'B' && 'active'"
                @click="changetier('B')"
              >
                <label class=" " :error="error.tier">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="tier"
                    value="B"
                  />
                  <span class="mr-4 text-left"> B </span>
                </label>
              </div>
            </div>
          </div> -->
          <!-- section for staus of the company -->
          <p class="text-loanbot-blue mb-a">Status</p>
          <div class="col-span-3">
            <div class="grid grid-cols-3 gap-2">
              <div
                class="radio"
                :class="status === 'Whitelist' && 'active'"
                @click="changetier('Whitelist')"
              >
                <label class=" " :error="error.status">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="status"
                    value="Whitelist"
                  />
                  <span class="mr-4 text-left"> Whitelist </span>
                </label>
              </div>
              <div
                class="radio"
                :class="status === 'Blacklist' && 'active'"
                @click="changetier('Blacklist')"
              >
                <label class=" " :error="error.status">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="status"
                    value="Blacklist"
                  />
                  <span class="mr-4 text-left"> Blacklist </span>
                </label>
              </div>
              <!-- <div
                class="radio"
                :class="status === 'Unlisted' && 'active'"
                @click="changetier('Unlisted')"
              >
                <label class=" " :error="error.status">
                  <input
                    type="radio"
                    class="form-radio"
                    v-model="status"
                    value="B"
                  />
                  <span class="mr-4 text-left"> Unlisted </span>
                </label>
              </div> -->
            </div>
          </div>
          <div>
            <button class="button mt-6 w-full">Add Company</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      credpaluser: "Yes",
      tier: "B",
      status: "Whitelist",
      form: {
        name: "",
        email: "",
        website: "",
        address: "",
        salarydate: "",
        credpaluser: "Yes",
        tier: "B",
        status: "Whitelist"
      },
      error: {
        name: "",
        email: "",
        website: "",
        address: "",
        tier: "",
        salarydate: "",
        status: "",
        credpaluser: ""
      }
    }
  },
  methods: {
    changeCredpaluser(credpaluser = "yes") {
      this.credpaluser = credpaluser
    },
    changeTier(tier = "A") {
      this.tier = tier
    },
    changeStatus(status = "A") {
      this.status = status
    },
    daysOfTheMonth() {
      const salarydates = []
      for (let i = 0; i < 31; i++) {
        const salarydate = i + 1
        const value = salarydate
        const title = `${salarydate}th`
        salarydates.push({ title, value })
      }
      return salarydates
    },
    // process() {
    //     createNewCompany(this.form)
    //     this.$router.push({ name: 'allcompanys' })
    // },
  }
}
</script>
