<template>
  <Modal
    contentClass="w-1/3"
    header="Add New User"
    @close="$emit('close', false)"
  >
    <form class="w-full" @submit.prevent="createNewUser">
      <TextField
        v-model="last_name"
        :error="error.first_name"
        class="mb-4"
        icon="person-outline"
        label="First Name"
      />
      <TextField
        v-model="first_name"
        :error="error.last_name"
        class="mb-4"
        icon="person-outline"
        label="Last Name"
      />
      <TextField
        v-model="email"
        :error="error.email"
        class="mb-4"
        icon="person-outline"
        label="Email Address"
        type="email"
      />
      <!-- <DropDown
        v-model="role"
        :error="error.role"
        :options="roles"
        icon="person"
        label="Role"
      /> -->
      <div class="flex w-full space-x-2 justify-center mt-10">
        <button class="button" :disabled="loading">
          Add Company
        </button>
      </div>
    </form>
  </Modal>
</template>