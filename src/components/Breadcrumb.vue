<template>
    <section class="mb-10">
        <div class="breadcrumbs-container">
            <slot></slot>
        </div>
        <div class="hero-container horizontal-pad-15">
            <h1 class="text-h4 font-weight-light">{{ header }} <slot name="profile"></slot></h1>
            <p class="hero__text">
                <strong>{{ boldText }}</strong
                >{{ plainText }}
            </p>
        </div>
    </section>
</template>
<script>
export default {
    name: 'Breadcrumb',
    props: ['header', 'boldText', 'plainText'],
    data() {
        return {
            heroParaBoldText: 'Simba Chips Company (Pty) Ltd',
            heroPlainText: '- Sanlam Umbrella Pension Fund',
        }
    },
    computed: {},
}
</script>
<style lang="scss">
.breadcrumbs-container {
    .theme--light.v-breadcrumbs {
        .v-breadcrumbs__item--disabled {
            color: $orange;
        }
    }
}

.v-breadcrumbs__divider {
    color: white !important;
}

.hero-container {
    color: $white-text;
}

.hero__text {
    font-size: 20px;
}

.v-breadcrumbs__item {
    &:not(.v-breadcrumbs__item--disabled) {
        color: #fff !important;
    }
}
</style>
