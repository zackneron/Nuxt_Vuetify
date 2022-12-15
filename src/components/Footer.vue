<template>
    <v-footer :absolute="false" class="P-0">
        <v-container fluid>
            <v-row class="d-flex align-center p-0">
                <v-col cols="12" md="2" lg="2">
                    <div class="d-flex justify-center justify-md-start">
                        <v-img :src="require('~/assets/sanlam-brand-large.png')" max-height="24" max-width="114" />
                    </div>
                </v-col>
                <v-col cols="12" md="6" lg="7" class="p-0">
                    <v-list-item class="text-center">
                        <v-list-item-content>
                            <v-list-item-subtitle
                                ><span>&copy; {{ new Date().getFullYear() }}</span> Sanlam. All rights
                                reserved.</v-list-item-subtitle
                            >
                            <v-list-item-subtitle
                                >Sanlam Life Insurance Limited is a Licensed Financial Service Provider and a Registered
                                Credit Provider</v-list-item-subtitle
                            >
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
                <v-col cols="12" md="3" lg="3" class="p-0">
                    <v-list-item class="text-center text-md-left">
                        <v-list-item-avatar>
                            <v-img :src="require('~/assets/need-help-icon.png')" max-height="40" max-width="40"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>Need help? Call 0861 223 646</v-list-item-title>
                            <v-list-item-title>Or email SCdigitalsupport@sanlam.co.za</v-list-item-title>
                            <v-list-item-title class="grey--text text--lighten-1 text-body-2">
                                Monday - Friday 08:00 - 17:00
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {}
    },
}
</script>

<style scoped lang="scss">
.theme--dark.v-footer {
    background-color: $footer-bg;
}
</style>
