<template>
  <div>
    <div ref="text-field" class="text-field">
      <p class="label">
        {{ label }}
      </p>
      <div class="icon icon--left">
        <ion-icon name="search" class="fill-current" />
      </div>
      <input class="input" @input="handleInput" v-bind="$attrs" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchField',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    handleInput($event) {
      const value = $event.target.value
      const textField = this.$refs['text-field']
      // change the class on the input to animate and move placeholder text upward
      if (value.toString().length > 0) {
        textField.classList.add('has-input')
      } else {
        textField.classList.remove('has-input')
      }
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-field {
  @apply border rounded-md w-full relative py-2 text-base pl-0 my-2 border-loanbot-blue border-opacity-25 text-loanbot-blue;

  * {
    @apply transition-all duration-500;
  }

  .label {
    @apply absolute top-0 left-0 mt-2 pointer-events-none ml-10 text-base rounded-md border-loanbot-blue border-opacity-25 text-loanbot-blue text-opacity-25;
  }

  &.has-input {
    @apply border-b-2;
    border-color: #274fed;

    .label {
      color: transparent;
    }
    .icon {
      @apply text-loanbot-blue;
    }
  }

  .icon {
    @apply absolute top-0 left-0 mt-2 ml-3 text-lg pointer-events-none text-loanbot-blue text-opacity-25;
  }

  .input {
    @apply p-0 m-0 pl-10;
    &::placeholder {
      color: transparent;
    }
  }
}
</style>
