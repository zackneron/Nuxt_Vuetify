<template>
    <div>
        <div grey class="text-bg-info py-6 px-7 mb-3">
            <div class="d-flex align-start">
                <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                <div>
                    <p class="mb-0">
                        Members who elect to have their benefit transferred to the Sanlam Plus Preservation Fund, will
                        have their investments transferred seamlessly provided that the member's investment portfolio(s)
                        exist(s) on the Sanlam Plus Preservation Fund. In these cases, it means that the funds will not
                        be disinvested in cash, but transferred directly to the chosen portfolios.
                    </p>
                </div>
            </div>
        </div>
        <DividerBar />
        <div class="mt-4">
            <v-card-title class="text-h5 px-0 black--text"> Broker / Representative Details </v-card-title>

            <span class="mb-2 d-block font-weight-bold black--text"> Do you have a financial representative? </span>
            <v-radio-group v-model="financialRepresentative" class="mb-3" row>
                <v-radio label="Yes" value="Yes" class="mr-sm-16" @click="showFinancialRepresentative = true"></v-radio>
                <v-radio label="No" value="No" @click="showFinancialRepresentative = false"></v-radio>
            </v-radio-group>
            <FinancialRepresentative v-show="showFinancialRepresentative" />

            <v-row>
                <v-col cols="12">
                    <div grey class="text-bg-info py-6 px-7">
                        <div class="d-flex align-start">
                            <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                            <p class="mb-0">
                                The member is required to fill out a
                                <a href="#">Sanlam Preservation Fund application form</a>.
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import FinancialRepresentative from '@/components/StepsAddNewClaim/FinancialRepresentative'
export default {
    components: {
        FinancialRepresentative,
    },
    data() {
        return {
            showFinancialRepresentative: false,
            financialRepresentative: null,
        }
    },
    computed: {},
    methods: {},
}
</script>

<style></style>
