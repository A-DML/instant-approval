<template>
  <div>
    <div
      :class="{ active: opened, error }"
      class="dropdown"
      tabindex="0"
      @blur="handleBlur"
    >
      <div @click="toggleDropdown">
        <slot>
          <div>
            <p class="value">
              {{ value ? value : label }}
            </p>

            <div class="icon">
              <ion-icon
                src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-forward-outline.svg"
              />
            </div>
          </div>
        </slot>
      </div>

      <div class="options">
        <p
          v-for="option in options"
          :key="option.toString()"
          :class="value === option && 'selected'"
          class="option"
          @click="optionSelected(option)"
        >
          {{ option }}
        </p>
      </div>
    </div>
    <p v-if="error" v-text="`* ${error}`" class="error" />
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'changed'
  },
  props: {
    label: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: [String, Number, Object],
      default: () => false
    },
    error: {
      type: [String, Array],
      default: ''
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    optionSelected(option) {
      this.$emit('changed', option)
      this.close()
    },
    close() {
      this.opened = false
      this.$emit('closed')
    },
    toggleDropdown() {
      this.opened = !this.opened
    },
    handleBlur() {
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
@layer base {
  .dropdown {
    @apply relative cursor-pointer;

    .value {
      @apply p-3 pl-4 border rounded-md bg-transparent text-loanbot-blue text-base font-thin text-left;
      border-color: #c2cfff;
    }

    .icon {
      @apply transform rotate-90 h-4 w-4 absolute right-0 top-0 mt-4 mr-3 pointer-events-none transition-all duration-200 text-loanbot-blue;
    }

    .options {
      @apply bg-transparent w-full absolute left-0 duration-200 overflow-hidden mt-12;
      top: 0.4em;
      height: 0;

      .option {
        @apply p-0 cursor-pointer text-loanbot-black;

        &:hover {
          background-color: rgba(168, 179, 225, var(--bg-opacity));
          --bg-opacity: 0.05;
        }
      }
    }

    &.active {
      .icon {
        @apply -rotate-90;
      }

      .options {
        @apply p-0 bg-white rounded-md bg-white z-30 border overflow-y-scroll border-collapse shadow-lg;
        height: max-content;
        max-height: 240px;
        border-color: #c2cfff;

        .option {
          @apply p-3 px-4 border-b;
          border-color: #c2cfff;

          &.selected {
            background-color: rgba(168, 179, 225, 0.5);
          }
        }
      }
    }

    &.error .value {
      @apply border-loanbot-red text-loanbot-red;
    }
  }
}

p.error {
  @apply text-xs text-loanbot-red pl-4 pb-4 pt-2;
}
</style>
