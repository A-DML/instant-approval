<template>
  <div class="py-4 w-full flex items-center paginator">
    <div class="w-1/4 text-sm">
      Show
      <DropDown
        class="w-20 inline-block"
        :options="[5, 10, 20, 30, 40, 50, 60, 70]"
        :label="chunk"
        :value="chunk"
        @changed="$emit('chunkChanged', $event)"
      />
      items per page
    </div>

    <div class="w-2/4 text-sm actions">
      <slot>
        <div>
          <div
            class="action"
            :class="!hasPrevPage && 'disabled'"
            @click="handlePageChange(1)"
          >
            <div class="inline-block">
              <ion-icon
                class="inline-block"
                src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-back-outline.svg"
              />
            </div>
            <div class="inline-block -ml-2">
              <ion-icon
                src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-back-outline.svg"
              />
            </div>
          </div>
          <div
            class="action"
            :class="!hasPrevPage && 'disabled'"
            @click="handlePageChange(current - 1)"
          >
            <ion-icon
              src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-back-outline.svg"
            />
          </div>

          <!-- Pages -->
          <div
            v-for="page in pages(5)"
            :key="page"
            class="action"
            @click="handlePageChange(page)"
            :class="page === current && 'active'"
          >
            {{ page }}
          </div>
          <!-- Pages -->

          <div
            class="action"
            :class="!hasNextPage && 'disabled'"
            @click="handlePageChange(current + 1)"
          >
            <ion-icon
              src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-forward-outline.svg"
            />
          </div>
          <div
            class="action"
            :class="!hasNextPage && 'disabled'"
            @click="handlePageChange(totalPages)"
          >
            <div class="inline-block">
              <ion-icon
                class="inline-block"
                src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-forward-outline.svg"
              />
            </div>
            <div class="inline-block -ml-2">
              <ion-icon
                src="//unpkg.com/ionicons@5.4.0/dist/svg/chevron-forward-outline.svg"
              />
            </div>
          </div>
        </div>
      </slot>
    </div>

    <div class="w-1/4 text-sm text-right">
      Showing {{ currentDataStartCount }} - {{ currentDataEndCount }} of
      {{ total.toLocaleString() }} items
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 0
    },
    chunk: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handlePageChange(page) {
      this.$emit('changed', page)
    },
    pages(pageLength = 5) {
      let startPage = 1
      let endPage = 1
      if (this.totalPages <= pageLength) {
        // total pages less than max so show all pages
        startPage = 1
        endPage = this.totalPages
      } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(pageLength / 2)
        let maxPagesAfterCurrentPage = Math.ceil(pageLength / 2) - 1
        if (this.current <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1
          endPage = pageLength
        } else if (this.current + maxPagesAfterCurrentPage >= this.totalPages) {
          // current page near the end
          startPage = this.totalPages - pageLength + 1
          endPage = this.totalPages
        } else {
          // current page somewhere in the middle
          startPage = this.current - maxPagesBeforeCurrentPage
          endPage = this.current + maxPagesAfterCurrentPage
        }
      }

      // create an array of pages to ng-repeat in the pager control
      return Array.from(Array(endPage + 1 - startPage).keys()).map(
        i => startPage + i
      )
    }
  },
  computed: {
    currentDataStartCount() {
      return (this.current - 1) * this.chunk + 1
    },
    totalPages() {
      return Math.ceil(this.total / this.chunk)
    },
    currentDataEndCount() {
      const count = this.chunk * this.current
      if (count > this.total) {
        return this.total
      }
      return count
    },
    hasNextPage() {
      return this.currentDataEndCount < this.total
    },
    hasPrevPage() {
      return this.current !== 1
    }
  }
}
</script>
<style lang="scss" scoped>
.paginator {
  .actions {
    @apply flex justify-center;

    .action {
      @apply p-3 bg-loanbot-blue bg-opacity-60 inline-block rounded-md px-4 text-loanbot-blue mx-1 cursor-pointer transition-opacity duration-500 border border-b border-opacity-60;

      &:hover {
        @apply border-loanbot-blue;
      }

      &.active {
        @apply bg-loanbot-blue text-white;
      }

      &.disabled {
        @apply opacity-50 cursor-not-allowed;
      }
    }
  }
}
</style>
