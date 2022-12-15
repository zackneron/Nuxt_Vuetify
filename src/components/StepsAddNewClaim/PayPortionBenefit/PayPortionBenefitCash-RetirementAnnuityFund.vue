<template>
    <div class="mt-4">
        <v-card-title class="text-h5 px-0 black--text"> Cash portion as: </v-card-title>
        <v-radio-group v-model="cashRetirementPayment" column class="mt-0">
            <div
                v-if="viewIndicatePercentageOrRandValueToBePaidInCash"
                v-show="isFocusLast"
                :class="{
                    focus: isFocusLast,
                }"
                class="radio-item d-flex justify-space-between align-center pa-2"
            >
                <v-radio
                    label="Percentage (%) or (R) Rand value."
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
                v-if="viewIndicateBenefitPortionToBeTransferredToRetirementAnnuity"
                v-show="isFocusLast"
                :class="{
                    focus: isFocusLast,
                }"
                class="radio-item d-flex justify-space-between align-center pa-2"
            >
                <v-radio
                    label="The remaining balance from the transfer to Sanlam Plus Preservation fund."
                    value="remainingBalanceFromTransferToSanlamPlusPreservationFund"
                    @click="handleIndicateBenefitPortionToBeTransferredToRetirementAnnuity"
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
        <div v-if="showIndicateBenefitPortionToBeTransferredToRetirementAnnuityText" class="pa-2">
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
                            v-model="benefitElectionsDate"
                            type="date"
                            outlined
                            :value="benefitElectionDate"
                            hide-details="auto"
                            :class="{ 'error--text': v$.benefitElectionsDate.$errors.length }"
                        ></v-text-field>
                        <small v-if="v$.benefitElectionsDate.$error" class="validate-field">
                            Please enter the Benefit Election Date
                        </small>
                    </v-col>
                </v-row>
                <BankingDetails />
            </div>
            <DividerBar />
            <div class="mt-4">
                <v-card-title class="text-h5 px-0 black--text"> Broker / Representative Details </v-card-title>

                <span class="mb-2 d-block font-weight-bold black--text"> Do you have a financial representative? </span>
                <v-radio-group v-model="retirementFinancialRepresentative" class="mb-3" row>
                    <v-radio
                        label="Yes"
                        value="Yes"
                        class="mr-sm-16"
                        @click="showRetirementFinRepresentative = true"
                    ></v-radio>
                    <v-radio label="No" value="No" @click="showRetirementFinRepresentative = false"></v-radio>
                </v-radio-group>
                <FinancialRepresentative v-if="showRetirementFinRepresentative" />
                <v-row>
                    <v-col cols="12">
                        <div grey class="text-bg-info py-6 px-7">
                            <div class="d-flex align-start">
                                <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                                <p class="mb-0">
                                    Sanlam will contact the member or broker for the application forms of the receiving
                                    fund.
                                </p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { requiredIf } from '@vuelidate/validators'
import DividerBar from '@/components/DividerBar'
import FinancialRepresentative from '@/components/StepsAddNewClaim/FinancialRepresentative'
import PortionBenefitCash from '@/components/StepsAddNewClaim/PayPortionBenefit/PortionBenefitCash'
import BankingDetails from '@/components/StepsAddNewClaim/BankingDetails'
export default {
    components: {
        DividerBar,
        FinancialRepresentative,
        PortionBenefitCash,
        BankingDetails,
    },

    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            benefitElectionsDate: {
                required: requiredIf(this.showIndicateBenefitPortionToBeTransferredToRetirementAnnuityText === true),
            },
            benefitElectionDate: {
                required: requiredIf(this.showTransferAmountSanlamPlusText === true),
            },
        }
    },
    data() {
        return {
            cashRetirementPayment: null,
            benefitElectionDate: null,
            benefitElectionsDate: null,
            rand: 0,
            showRetirementFinRepresentative: false,
            retirementFinancialRepresentative: null,
            viewIndicatePercentageOrRandValueToBePaidInCash: true,
            viewIndicateBenefitPortionToBeTransferredToRetirementAnnuity: true,
            showIndicatePercentageOrRandValueToBePaidInCashText: false,
            showIndicateBenefitPortionToBeTransferredToRetirementAnnuityText: false,

            isFocusInner: false,
            isActiveInner: false,
            isFocusLast: false,
            isActiveLast: false,
        }
    },
    methods: {
        toggleChangeInnerOption(e) {
            this.isActiveInner = false
            this.isFocusInner = false
            this.viewSanlamPlusPreservationFund = true
            this.viewRetirementAnnuityFund = true
            this.showSanlamPlusPreservationFundText = false
            this.showRetirementAnnuityFundText = false

            this.viewPayPortionSanlamPlus = true
            this.viewPayPortionRetirementAnnuityFund = true
            this.showPayPortionSanlamPlusText = false
            this.showPayPortionRetirementAnnuityFundText = false

            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach(child => {
                child.style.display = 'flex'
            })
        },
        toggleChangeLastOption(e) {
            this.isActiveLast = false
            this.isFocusLast = false

            this.showPayPortionBenefitSanlamPlusText = false
            this.viewPayPortionBenefitSanlamPlus = true

            this.showTransferAmountSanlamPlusText = false
            this.viewTransferAmountSanlamPlus = true

            this.viewIndicateBenefitPortionToBeTransferredToRetirementAnnuity = true
            this.showIndicateBenefitPortionToBeTransferredToRetirementAnnuityText = false

            this.viewIndicatePercentageOrRandValueToBePaidInCash = true
            this.showIndicatePercentageOrRandValueToBePaidInCashText = false

            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach(child => {
                child.style.display = 'flex'
            })
        },
        handleIndicatePercentageOrRandValueToBePaidInCash() {
            this.isActiveLast = true
            this.isFocusLast = true
            this.showIndicatePercentageOrRandValueToBePaidInCashText = true
            this.viewIndicatePercentageOrRandValueToBePaidInCash = true

            this.showIndicateBenefitPortionToBeTransferredToRetirementAnnuityText = false
            this.viewIndicateBenefitPortionToBeTransferredToRetirementAnnuity = false
        },
        handleIndicateBenefitPortionToBeTransferredToRetirementAnnuity() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showIndicatePercentageOrRandValueToBePaidInCashText = false
            this.viewIndicatePercentageOrRandValueToBePaidInCash = false

            this.showIndicateBenefitPortionToBeTransferredToRetirementAnnuityText = true
            this.viewIndicateBenefitPortionToBeTransferredToRetirementAnnuity = true
        },
    },
}
</script>

<style></style>
