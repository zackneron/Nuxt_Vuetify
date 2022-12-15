<template>
    <v-app>
        <Claims />
    </v-app>
</template>

<script>
import Claims from '@/pages/withdrawals/index'

export default {
    components: { Claims },
    data() {
        return {
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Claims',
                    disabled: true,
                    href: '/withdrawals',
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.v-data-table {
    & tr:hover {
        cursor: pointer;
    }
}
</style>
