<template>
    <div>
        <SanlamUmbrellaPension />
        <SanlamUmbrellaProvident />
    </div>
</template>

<script>
import SanlamUmbrellaPension from '@/components/StepsAddNewClaim/SanlamUmbrellaFund/SanlamUmbrellaPension'
import SanlamUmbrellaProvident from '@/components/StepsAddNewClaim/SanlamUmbrellaFund/SanlamUmbrellaProvident'

export default {
    components: {
        SanlamUmbrellaPension,
        SanlamUmbrellaProvident,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style lang="scss">
.v-radio {
    &.theme--light {
        margin-bottom: 0 !important;
    }
}

.radio-item {
    border-radius: 4px;
    transition: all 0.5s linear;
    &.focus {
        background: #f3f5f7;
    }
    &:hover {
        background: #f3f5f7;
    }
}

.active {
    display: block;
}

.focus {
    background: #f3f5f7;
}

.display-options {
    display: none;
}
</style>
