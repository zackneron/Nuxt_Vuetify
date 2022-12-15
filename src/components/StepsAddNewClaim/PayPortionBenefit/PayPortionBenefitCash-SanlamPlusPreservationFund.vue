<template>
    <div>
        <div class="mt-4 mb-7">
            <v-card-title class="text-h5 px-0 black--text"> Preservation Fund Details </v-card-title>
            <v-row class="mx-0 mb-4">
                <v-col cols="12" sm="7" class="pa-0">
                    <span class="mb-2 d-block font-weight-bold black--text">
                        Indicate rand amount to be trasferred to preservation fund.
                    </span>
                    <v-text-field
                        v-model="rand"
                        style="width: 150px"
                        outlined
                        hide-details
                        placeholder="R"
                        type="number"
                    ></v-text-field>
                </v-col>
            </v-row>
        </div>
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
            <v-card-title class="text-h5 px-0 black--text"> Cash portion as: </v-card-title>
            <v-radio-group v-model="cashPayment" column class="mt-0">
                <div
                    v-if="viewIndicatePercentageOrRandValueToBePaidInCash"
                    v-show="isFocusLast"
                    :class="{
                        focus: isFocusLast,
                    }"
                    class="radio-item d-flex justify-space-between align-center pa-2"
                >
                    <v-radio
                        label="Percentage (%) or (R) Rand value. The balance will be transferred to Sanlam Plus Preservation fund."
                        value="PercentageRandValue"
                        @click="handleIndicatePercentageOrRandValueToBePaidInCash"
                    ></v-radio>
                    <v-btn
                        v-show="isActiveLast"
                        text
                        color="primary"
                        :class="{ active: isActiveLast }"
                        class="text-body-2"
                        @click="toggleChangeLastOption"
                    >
                        Change
                    </v-btn>
                </div>

                <div
                    v-if="viewIndicateBenefitPortionToBeTransferredSanlamPlus"
                    v-show="isFocusLast"
                    :class="{
                        focus: isFocusLast,
                    }"
                    class="radio-item d-flex justify-space-between align-center pa-2"
                >
                    <v-radio
                        label="The remaining balance from the transfer to Sanlam Plus Preservation fund."
                        value="remainingBalanceFromTransferToSanlamPlusPreservationFund"
                        @click="handleIndicateBenefitPortionToBeTransferredSanlamPlus"
                    ></v-radio>
                    <v-btn
                        v-show="isActiveLast"
                        text
                        color="primary"
                        :class="{ active: isActiveLast }"
                        class="text-body-2"
                        @click="toggleChangeLastOption"
                    >
                        Change
                    </v-btn>
                </div>
            </v-radio-group>

            <!-- I want to pay a portion of the benefit in cash -->
            <div v-if="showIndicatePercentageOrRandValueToBePaidInCashText" class="pa-2">
                <DividerBar />
                <PortionBenefitCash />
            </div>

            <!-- I want to transfer an amount to the Sanlam Plus Preservation Fund -->
            <div v-if="showIndicateBenefitPortionToBeTransferredSanlamPlusText" class="pa-2">
                <DividerBar />
                <div class="mt-4">
                    <v-card-title class="text-h5 px-0 black--text mb-4 font-weight-light">
                        Cash Payment Details
                    </v-card-title>
                    <v-row class="mx-0">
                        <v-col cols="12" sm="5" class="pa-0 mb-4">
                            <span class="mb-2 d-block font-weight-bold black--text">
                                Benefit election date
                                <v-tooltip bottom color="black">
                                    <template #activator="{ on, attrs }">
                                        <v-icon v-bind="attrs" primary class="primary--text" v-on="on">
                                            mdi-information
                                        </v-icon>
                                    </template>
                                    <span class="d-block">The later of the exit date</span>
                                    <span class="d-block"> or the date that the member signed the exit forms. </span>
                                </v-tooltip>
                            </span>
                            <v-text-field
                                v-model="benefitElectionDate"
                                type="date"
                                outlined
                                hide-details="auto"
                                :class="{ 'error--text': v$.benefitElectionDate.$errors.length }"
                            ></v-text-field>
                            <template v-if="v$.benefitElectionDate.$dirty">
                                <small v-if="v$.benefitElectionDate.$error">
                                    Please enter the Benefit Election Date
                                </small>
                            </template>
                        </v-col>
                    </v-row>
                    <BankingDetails />
                </div>
                <DividerBar />
                <div class="mt-4">
                    <v-card-title class="text-h5 px-0 black--text"> Broker / Representative Details </v-card-title>

                    <span class="mb-2 d-block font-weight-bold black--text">
                        Do you have a financial representative?
                    </span>
                    <v-radio-group
                        v-model="IndicateBenefitPortionToBeTransferredFinancialRepresentative"
                        class="mb-3"
                        row
                    >
                        <v-radio
                            label="Yes"
                            value="Yes"
                            class="mr-sm-16"
                            @click="showIndicateBenefitPortionToBeTransferredFinRepresentative = true"
                        ></v-radio>
                        <v-radio
                            label="No"
                            value="No"
                            @click="showIndicateBenefitPortionToBeTransferredFinRepresentative = false"
                        ></v-radio>
                    </v-radio-group>
                    <FinancialRepresentative v-show="showIndicateBenefitPortionToBeTransferredFinRepresentative" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'
import BankingDetails from '@/components/StepsAddNewClaim/BankingDetails'
import FinancialRepresentative from '@/components/StepsAddNewClaim/FinancialRepresentative'
import PortionBenefitCash from '@/components/StepsAddNewClaim/PayPortionBenefit/PortionBenefitCash'
export default {
    components: {
        BankingDetails,
        FinancialRepresentative,
        PortionBenefitCash,
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            benefitElectionDate: null,
            cashPayment: null,
            rand: 0,
            viewIndicatePercentageOrRandValueToBePaidInCash: true,
            viewIndicateBenefitPortionToBeTransferredSanlamPlus: true,
            showIndicatePercentageOrRandValueToBePaidInCashText: false,
            showIndicateBenefitPortionToBeTransferredSanlamPlusText: false,
            IndicateBenefitPortionToBeTransferredFinancialRepresentative: null,
            showIndicateBenefitPortionToBeTransferredFinRepresentative: false,

            isFocusLast: false,
            isActiveLast: false,
        }
    },
    methods: {
        handleIndicatePercentageOrRandValueToBePaidInCash() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showIndicatePercentageOrRandValueToBePaidInCashText = true
            this.viewIndicatePercentageOrRandValueToBePaidInCash = true

            this.showIndicateBenefitPortionToBeTransferredSanlamPlusText = false
            this.viewIndicateBenefitPortionToBeTransferredSanlamPlus = false
        },
        handleIndicateBenefitPortionToBeTransferredSanlamPlus() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showIndicatePercentageOrRandValueToBePaidInCashText = false
            this.viewIndicatePercentageOrRandValueToBePaidInCash = false

            this.showIndicateBenefitPortionToBeTransferredSanlamPlusText = true
            this.viewIndicateBenefitPortionToBeTransferredSanlamPlus = true
        },

        toggleChangeLastOption(e) {
            this.isActiveLast = false
            this.isFocusLast = false

            this.showIndicatePercentageOrRandValueToBePaidInCashText = false
            this.viewIndicatePercentageOrRandValueToBePaidInCash = true

            this.showIndicateBenefitPortionToBeTransferredSanlamPlusText = false
            this.viewIndicateBenefitPortionToBeTransferredSanlamPlus = true

            this.viewRetirementPayIndicateBenefitPortionToBeTransferred = true
            this.showRetirementIndicateBenefitPortionToBeTransferredText = false

            this.viewRetirementPayPortionBenefit = true
            this.showRetirementPayPortionBenefitText = false

            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach(child => {
                child.style.display = 'flex'
            })
        },
    },
    validations() {
        return {
            cashPayment: {
                required: requiredIf(this.showPayPortionSanlamPlusText === true),
            },
            benefitElectionDate: {
                required: requiredIf(this.showIndicateBenefitPortionToBeTransferredSanlamPlusText === true),
            },
        }
    },
}
</script>

<style></style>
