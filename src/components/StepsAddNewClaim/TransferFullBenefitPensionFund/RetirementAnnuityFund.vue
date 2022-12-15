<template>
    <div class="mt-4">
        <v-card-title class="text-h5 px-0 black--text"> Broker / Representative Details </v-card-title>

        <span class="mb-2 d-block font-weight-bold black--text"> Do you have a financial representative? </span>
        <v-radio-group v-model="retirementFinancialRepresentative" class="mb-3" row>
            <v-radio label="Yes" value="Yes" class="mr-sm-16" @click="showRetirementFinRepresentative = true"></v-radio>
            <v-radio label="No" value="No" @click="showRetirementFinRepresentative = false"></v-radio>
        </v-radio-group>

        <FinancialRepresentative v-show="showRetirementFinRepresentative" />

        <v-row>
            <v-col cols="12">
                <div grey class="text-bg-info py-6 px-7">
                    <div class="d-flex align-start">
                        <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                        <p class="mb-0">
                            Sanlam will contact the member or broker for the application forms of the receiving fund.
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
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
            showRetirementFinRepresentative: false,
            retirementFinancialRepresentative: null,
        }
    },
}
</script>

<style></style>
