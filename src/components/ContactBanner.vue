<template>
    <section class="contact container-banner">
        <div class="banner-overlay">
            <div class="wrap white--text">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div class="hero d-flex flex-column flex-md-row justify-md-space-between align-md-center">
                                <span class="text-h2 hero__title">We are here to help</span>
                                <span class="text-subtitle-1 hero__description"
                                    >Please fill out your details below so we can assist you with your general financial
                                    concerns.</span
                                >
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner',
    data() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
.contact {
    &.container-banner {
        background-image: url('../assets/oil_water@1x.png');
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 20rem;
        position: relative;
        @include md {
            min-height: 31rem;
        }

        .banner-overlay {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(#000, 0.2);
        }

        .wrap {
            position: absolute;
            width: 100%;
            bottom: 0;
            top: 0;
            padding-top: 10%;
        }
    }
}

.hero {
    &__title {
        @include md {
            max-width: 40%;
            margin-right: 20px;
        }
    }
    &__description {
        @include md {
            max-width: 50%;
        }
    }
}
</style>
