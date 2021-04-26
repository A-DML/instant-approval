<template>
  <div>
    <div
      ref="text-field"
      class="text-field"
      :class="{ 'no-icon': !icon, error }"
    >
      <p class="label">
        {{ label }}
      </p>
      <div class="icon" v-if="icon || ricon">
        <ion-icon
          :src="`//unpkg.com/ionicons@5.4.0/dist/svg/${icon}.svg`"
          class="fill-current icon--left"
        />
        <div @click="$emit('rclicked')" class="cursor-pointer">
          <ion-icon
            :src="`//unpkg.com/ionicons@5.4.0/dist/svg/${ricon}.svg`"
            class="fill-current icon--right"
          />
        </div>
      </div>

      <input
        class="input"
        @input="handleInput"
        @focus="triggerFocus"
        @blur="triggerBlur"
        v-bind="$attrs"
        :value="value"
      />
    </div>
    <p v-if="error" v-text="`* ${error}`" class="error" />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  model: {
    prop: 'value',
    event: 'input'
  },
  updated() {
    this.checkForValue(this.value)
  },
  props: {
    ricon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    error: {
      type: [String, Array],
      default: ''
    }
  },
  mounted() {
    this.checkForValue(this.value)
  },
  methods: {
    triggerFocus() {
      this.$refs['text-field'].classList.add('has-focus')
      this.checkForValue(this.value)
    },
    triggerBlur() {
      this.$refs['text-field'].classList.remove('has-focus')
    },
    checkForValue(value) {
      const textField = this.$refs['text-field']
      // change the class on the input to animate and move placeholder text upward
      if (value && value.toString().length > 0) {
        textField.classList.add('has-input')
      } else {
        textField.classList.remove('has-input')
      }
    },
    handleInput($event) {
      const value = $event.target.value
      this.$emit('input', value)
      this.checkForValue(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-field {
  @apply border-b w-full relative py-4 text-base pl-0 my-2;
  border-color: #e0e5fc;
  color: rgba(34, 34, 34, 1);

  &.no-icon {
    .label {
      @apply ml-0;
    }
    input {
      @apply pl-0;
    }
  }

  * {
    @apply transition-all duration-500;
  }

  .label {
    @apply absolute top-0 left-0 mt-4 ml-0 pointer-events-none ml-6 text-base;
    color: rgba(34, 34, 34, 0.25);
  }

  &.has-input {
    .label {
      @apply text-xs -mt-2;
      color: #274fed;
    }
  }

  &.error {
    @apply border-red-800;
    .label {
      @apply text-red-800;
    }
  }

  &.has-focus {
    @apply border-b-2;
    border-color: #274fed;
  }

  .icon {
    @apply absolute top-0 left-0 mt-4 ml-0 text-xl pointer-events-none flex justify-between w-full;
    color: #222222;

    .icon--right {
      @apply pointer-events-auto;
    }
  }

  .input {
    @apply p-0 m-0 pl-6;
    &::placeholder {
      color: transparent;
    }
  }
}

p.error {
  @apply text-xs text-red-800 pl-6 pb-4;
}
</style>
