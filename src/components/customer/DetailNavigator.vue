<template>
    <ul class="tabs">
        <template v-for="(t, n) in tabs">
            <li :key="n">
                <a
                    href="#!"
                    :class="{active: tab === t.name}"
                    @click.prevent="setTab(t.name)"
                    v-html="t.title"
                    :ref="t.name"
                ></a>
            </li>
        </template>
        <span class="tabs-border" ref='border'></span>
    </ul>
</template>
<script>
    export default {
        model: {
            prop: 'tab',
            event: 'change'
        },
        props: {
            tabs: {
                type: Array,
                default: () => []
            },
            clickable: {
                type: Boolean,
                default: true
            }
        }
        ,
        data() {
            return {
                tab: null,
            }
        },
        computed: {
        },
        mounted() {
            this.tab = this.$attrs.tab;
            window.addEventListener('resize', this.render);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.render);
        },
        watch: {
            tab() {
                this.render();
            },
            "$attrs.tab"() {
                this.tab = this.$attrs.tab;
            }
        },
        methods: {
            render() {
                const currentTabElement = this.$refs[this.tab][0];
                const width = currentTabElement.offsetWidth;
                const left = currentTabElement.offsetLeft;
                const height = currentTabElement.parentElement.offsetHeight;
                const top = currentTabElement.offsetTop;
                this.$refs.border.style.left = (left + width / 2)+'px';
                this.$refs.border.style.top = (top + height - 2)+'px';
                this.$refs.border.style.width = width+'px';
            },
            setTab(tab) {
                if (this.clickable) {
                    this.tab = tab;
                    this.$emit('change', this.tab);
                }
            }
        }
    }
</script>
<style lang= "scss" scoped>
.tabs {
    @apply flex;
    @apply flex-wrap;
    @apply relative;
    @apply flex-row;
    > li {
        > a {
            @apply block;
            @apply duration-300;
            @apply rounded-t;
            @apply py-4;
            @apply px-4;
            @apply text-xs;
            @apply border-b-2;
            color: #a8b3e1;
            &.active {
                @apply bg-blue-100;
                @apply text-blue-500;
                @apply border-blue-500;
            }
        }
    }
    &-border {
        @apply bg-blue-500;
        @apply absolute;
        @apply duration-300;
        bottom: 0;
        height: 2px;
        left: 50%;
        transform: translateX(-50%);
    }
}
</style>