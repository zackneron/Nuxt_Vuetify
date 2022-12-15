<template>
    <div>
        <div class="inner-margin-1">
            <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
                <v-card elevation="0">
                    <v-card-text class="pa-0">
                        <v-container>
                            <v-row>
                                <v-col cols="12" class="pa-0">
                                    <v-card-title class="text-h5 px-0 black--text font-weight-light">
                                        Payment option elected
                                    </v-card-title>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" class="pa-0 mb-4">
                                    <span class="mb-2 d-block font-weight-bold black--text">
                                        Please select a payment option
                                    </span>
                                    <v-radio-group
                                        v-model="paymentOption"
                                        hide-details="auto"
                                        column
                                        required
                                        :rules="paymentOptionsRules"
                                    >
                                        <v-radio
                                            v-show="viewBenefit"
                                            label="Leave benefit in the Fund (In-Fund Preservation / Paid-up member)"
                                            value="Leave benefit in the Fund (In-Fund Preservation / Paid-up member)"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocus }"
                                            @change="showBenefit"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span>
                                                        Leave benefit in the Fund (In-Fund Preservation / Paid-up
                                                        member)
                                                        <v-tooltip bottom color="black">
                                                            <template #activator="{ on, attrs }">
                                                                <v-icon
                                                                    v-bind="attrs"
                                                                    primary
                                                                    class="primary--text"
                                                                    v-on="on"
                                                                >
                                                                    mdi-information
                                                                </v-icon>
                                                            </template>
                                                            <span class="d-block text-caption">
                                                                In-Fund Preservation means that the member’s benefit
                                                                will remain in the fund.
                                                            </span>
                                                            <span class="d-block text-caption">
                                                                The advantage of this option is that the member retains
                                                                his/her investments and defers the payment of tax.
                                                            </span>
                                                            <span class="d-block text-caption">
                                                                It also affords the member time to make a decision re
                                                                preservation or annuitisation or cash payment of his/her
                                                                withdrawal benefit.
                                                            </span>
                                                        </v-tooltip>
                                                    </span>
                                                    <v-btn
                                                        v-show="isActive"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActive }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewTransfer"
                                            label="Transfer full benefit to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            value="Transfer full benefit to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocus }"
                                            @change="showTransfer"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span>
                                                        Transfer full benefit to a Pension Fund, Provident Fund,
                                                        Retirement Annuity Fund or a Preservation Fund
                                                    </span>
                                                    <v-btn
                                                        v-show="isActive"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActive }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewPayPortion"
                                            label="Pay a portion of the benefit in cash and transfer the balance to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            value="Pay a portion of the benefit in cash and transfer the balance to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocus }"
                                            @change="showPayPortion"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span>
                                                        Pay a portion of the benefit in cash and transfer the balance to
                                                        a Pension Fund, Provident Fund, Retirement Annuity Fund or a
                                                        Preservation Fund
                                                        <v-tooltip bottom color="black">
                                                            <template #activator="{ on, attrs }">
                                                                <v-icon
                                                                    v-bind="attrs"
                                                                    primary
                                                                    class="primary--text"
                                                                    v-on="on"
                                                                >
                                                                    mdi-information
                                                                </v-icon>
                                                            </template>
                                                            <span class="d-block text-caption">
                                                                Members who elect to the Sanlam Plus Preservation Fund,
                                                                will have their investment transferred seamlessly
                                                            </span>
                                                            <span class="d-block text-caption">
                                                                provided that the member’s Investment portfolio(s)
                                                                exist(s) on the Sanlam Plus Preservation Fund.
                                                            </span>
                                                            <span class="d-block text-caption">
                                                                In these cases, it means that the funds will not be
                                                                disinvested in cash but transferred directly to the
                                                                chosen portfolios.
                                                            </span>
                                                            <span class="d-block text-caption">
                                                                In order to do such a transfer, we would require the
                                                                separate Sanlam Plus Preservation Fund application form
                                                                to be completed.
                                                            </span>
                                                            <span class="d-block text-caption"
                                                                >There’s a link below for the forms.</span
                                                            >
                                                        </v-tooltip>
                                                    </span>
                                                    <v-btn
                                                        v-show="isActive"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActive }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewFullBenefit"
                                            label="Pay the full benefit in cash (This will be subject to tax)"
                                            value="Pay the full benefit in cash (This will be subject to tax)"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocus }"
                                            @change="showFullBenefit"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span
                                                        >Pay the full benefit in cash (This will be subject to
                                                        tax)</span
                                                    >
                                                    <v-btn
                                                        v-show="isActive"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActive }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewNoPayment"
                                            label="No payment instructions available"
                                            value="No payment instructions available"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocus }"
                                            @change="showNoPayment"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span>
                                                        No payment instructions available
                                                        <v-tooltip bottom color="black">
                                                            <template #activator="{ on, attrs }">
                                                                <v-icon
                                                                    v-bind="attrs"
                                                                    primary
                                                                    class="primary--text"
                                                                    v-on="on"
                                                                >
                                                                    mdi-information
                                                                </v-icon>
                                                            </template>
                                                            <span class="d-block text-caption">
                                                                The member will become a paid-up member of the fund,
                                                                until such time
                                                            </span>
                                                            <span class="d-block text-caption">
                                                                as we receive a written instruction to pay or transfer
                                                                his/her benefit.
                                                            </span>
                                                        </v-tooltip>
                                                    </span>
                                                    <v-btn
                                                        v-show="isActive"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActive }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                    </v-radio-group>
                                    <small v-if="v$.paymentOption.$error" class="validate-field">
                                        {{ v$.paymentOption.$errors[0].$message }}
                                    </small>
                                    <!-- Option 1 -->
                                    <div v-if="showBenefitText" class="pa-2">
                                        <DividerBar />
                                        <LeaveBenefitFundContent />
                                    </div>

                                    <!-- Option 2 -->
                                    <div v-if="showTransferText" class="pa-2">
                                        <DividerBar />
                                        <div class="mt-4">
                                            <v-card-title class="text-h5 px-0 black--text">
                                                Transfer Full Benefit To
                                            </v-card-title>

                                            <small v-if="v$.transferFullBenefit.$error" class="validate-field">
                                                Please select a payment option.
                                            </small>
                                            <v-radio-group v-model="transferFullBenefit" column class="mt-0">
                                                <div
                                                    v-if="viewSanlamPlusPreservationFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="Sanlam Plus Preservation Fund"
                                                        value="Sanlam Plus Preservation Fund"
                                                        @click="showSanlamPlus"
                                                    ></v-radio>
                                                    <v-btn
                                                        v-show="isActiveInner"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActiveInner }"
                                                        class="text-body-2"
                                                        @click="toggleChangeInnerOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>

                                                <div
                                                    v-if="viewRetirementAnnuityFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        @click="showRetirementAnnuityFund"
                                                    ></v-radio>
                                                    <v-btn
                                                        v-show="isActiveInner"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActiveInner }"
                                                        class="text-body-2"
                                                        @click="toggleChangeInnerOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </v-radio-group>

                                            <div v-if="showSanlamPlusPreservationFundText" class="pa-2">
                                                <SanlamPlusPreservationFund />
                                            </div>
                                            <div v-if="showRetirementAnnuityFundText" class="pa-2">
                                                <DividerBar />
                                                <RetirementAnnuityFund />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Option 3 -->
                                    <div v-if="showPayPortionText" class="pa-2">
                                        <DividerBar />
                                        <div class="mt-4">
                                            <v-card-title class="text-h5 px-0 black--text">
                                                Pay a portion of the benefit in cash and transfer the balance to:
                                            </v-card-title>
                                            <small v-if="v$.balanceTransfer.$error" class="validate-field">
                                                Please expand the selection to complete the payment option.
                                            </small>
                                            <v-radio-group v-model="balanceTransfer" column class="mt-0">
                                                <div
                                                    v-if="viewPayPortionSanlamPlus"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="Sanlam Plus Preservation Fund"
                                                        value="Sanlam Plus Preservation Fund"
                                                        @click="showPayPortionSanlamPlus"
                                                    ></v-radio>
                                                    <v-btn
                                                        v-show="isActiveInner"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActiveInner }"
                                                        class="text-body-2"
                                                        @click="toggleChangeInnerOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>

                                                <div
                                                    v-if="viewPayPortionRetirementAnnuityFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        @click="showPayPortionRetirementAnnuityFund"
                                                    ></v-radio>
                                                    <v-btn
                                                        v-show="isActiveInner"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActiveInner }"
                                                        class="text-body-2"
                                                        @click="toggleChangeInnerOption"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </v-radio-group>
                                            <!-- Sanlam Plus Preservation Fund -->
                                            <div v-if="showPayPortionSanlamPlusText" class="pa-2">
                                                <PayPortionBenefitCashSanlamPlusPreservationFund />
                                            </div>

                                            <!-- A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund -->
                                            <div v-if="showPayPortionRetirementAnnuityFundText" class="pa-2">
                                                <DividerBar />
                                                <PayPortionBenefitCashRetirementAnnuityFund />
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Option 4 -->
                                    <div v-if="showFullBenefitText" class="pa-2">
                                        <DividerBar />
                                        <PayFullBenefitInCash />
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </div>
        </div>
        <div class="inner-margin-1">
            <div class="text-right inner-margin-1">
                <v-btn text large class="mr-4" @click="back"> Back </v-btn>
                <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
                <v-btn large color="primary" @click.prevent="next"> Next </v-btn>
            </div>
            <div class="dialogs-wrapper">
                <!-- Save Claim dialog -->
                <v-dialog v-model="saveClaim" persistent width="287px">
                    <v-card class="pa-6">
                        <v-card-text class="pa-0 pb-4">Withdrawal claim has been successfully saved </v-card-text>
                        <v-card-text class="pa-0">
                            <div class="d-flex justify-end">
                                <v-btn color="primary" class="elevation-0" @click="saveClaim = false">OK </v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, requiredIf, helpers } from '@vuelidate/validators'
import DividerBar from '@/components/DividerBar'
import LeaveBenefitFundContent from '@/components/StepsAddNewClaim/LeaveBenefitFundContent'
import PayFullBenefitInCash from '@/components/StepsAddNewClaim/PayFullBenefitInCash'
import SanlamPlusPreservationFund from '@/components/StepsAddNewClaim/TransferFullBenefitPensionFund/SanlamPlusPreservationFund'
import RetirementAnnuityFund from '@/components/StepsAddNewClaim/TransferFullBenefitPensionFund/RetirementAnnuityFund'
import PayPortionBenefitCashSanlamPlusPreservationFund from '@/components/StepsAddNewClaim/PayPortionBenefit/PayPortionBenefitCash-SanlamPlusPreservationFund'
import PayPortionBenefitCashRetirementAnnuityFund from '@/components/StepsAddNewClaim/PayPortionBenefit/PayPortionBenefitCash-RetirementAnnuityFund'
export default {
    components: {
        DividerBar,
        LeaveBenefitFundContent,
        PayFullBenefitInCash,
        PayPortionBenefitCashRetirementAnnuityFund,
        SanlamPlusPreservationFund,
        RetirementAnnuityFund,
        PayPortionBenefitCashSanlamPlusPreservationFund,
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            paymentOption: {
                required: helpers.withMessage('Please select a payment option.', required),
            },
            transferFullBenefit: {
                required: requiredIf(this.showTransferText === true),
            },
            balanceTransfer: {
                required: requiredIf(this.showPayPortionText === true),
            },
            benefitElectionsDate: {
                required: requiredIf(this.showRetirementTransferAmountText === true),
            },

            benefitElectionDate: {
                required: requiredIf(this.showTransferAmountSanlamPlusText === true),
            },
        }
    },
    data() {
        return {
            providentIsSameAsPension: false,
            pensionIsSameAsProvident: false,
            isHybridUmbrellaFund: true,
            pensionAndProvidentSame: false,
            benefitElectionDate: null,
            paymentOption: null,
            paidFund: false,
            transferFullBenefit: null,
            benefitElectionsDate: null,
            balanceTransfer: null,

            rand: 0,
            showBenefitText: false,
            showFullBenefitText: false,
            showSanlamPlusPreservationFundText: false,
            showRetirementAnnuityFundText: false,
            showPayPortionBenefitText: false,
            showTransferAmountText: false,
            showPayPortionSanlamPlusText: false,
            showPayPortionRetirementAnnuityFundText: false,
            showPayPortionText: false,
            transferAmountFinancialRepresentative: null,

            showTransferAmountFinRepresentative: false,
            showTransferText: false,
            isActive: false,
            isFocus: false,
            isFocusInner: false,
            isActiveInner: false,
            isFocusLast: false,
            isActiveLast: false,
            viewBenefit: true,
            viewTransfer: true,
            viewPayPortion: true,
            viewFullBenefit: true,
            viewNoPayment: true,

            viewSanlamPlusPreservationFund: true,
            viewRetirementAnnuityFund: true,

            name: '',
            brokerCode: '',
            contactNumber: '',
            emailAddress: '',
            address: '',
            city: '',
            postalCode: '',
            nameOfFinancialServiceProvider: '',
            registeredNameOfRetirementAnnuity: '',
            fundApprovalNumber: '',
            policyNumber: '',
            emailAddressOfFSP: '',

            viewPayPortionSanlamPlus: true,
            viewPayPortionRetirementAnnuityFund: true,

            showPayPortionBenefitSanlamPlusText: false,
            viewPayPortionBenefitSanlamPlus: true,
            viewTransferAmountSanlamPlus: true,
            showTransferAmountSanlamPlusText: false,

            viewPayPortionBenefit: true,
            viewTransferAmount: true,
            saveClaim: false,
            paymentOptionsRules: [v => !!v || 'Please select one option'],
        }
    },
    methods: {
        back() {
            this.$router.push('/withdrawals/withdrawal/claims-details')
        },
        async next() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                return
            }
            this.$router.push('/withdrawals/withdrawal/document-upload')
        },
        showBenefit() {
            this.showBenefitText = true
            this.showTransferText = false
            this.showPayPortionText = false
            this.showFullBenefitText = false
            this.showNoPaymentText = false
            this.isActive = true
            this.isFocus = true
            this.viewTransfer = false
            this.viewPayPortion = false
            this.viewFullBenefit = false
            this.viewNoPayment = false
        },
        showTransfer() {
            this.showTransferText = true
            this.showBenefitText = false
            this.showPayPortionText = false
            this.showFullBenefitText = false
            this.showNoPaymentText = false
            this.isActive = true
            this.isFocus = true
            this.viewBenefit = false
            this.viewPayPortion = false
            this.viewFullBenefit = false
            this.viewNoPayment = false
        },
        showPayPortion() {
            this.showPayPortionText = true
            this.showBenefitText = false
            this.showTransferText = false
            this.showFullBenefitText = false
            this.showNoPaymentText = false
            this.isActive = true
            this.isFocus = true
            this.viewBenefit = false
            this.viewTransfer = false
            this.viewFullBenefit = false
            this.viewNoPayment = false
        },
        showFullBenefit() {
            this.showFullBenefitText = true
            this.showBenefitText = false
            this.showTransferText = false
            this.showPayPortionText = false
            this.showNoPaymentText = false
            this.isActive = true
            this.isFocus = true
            this.viewBenefit = false
            this.viewTransfer = false
            this.viewPayPortion = false
            this.viewNoPayment = false
        },
        showNoPayment() {
            this.showBenefitText = false
            this.showTransferText = false
            this.showPayPortionText = false
            this.showFullBenefitText = false
            this.showNoPaymentText = true
            this.isActive = true
            this.isFocus = true
            this.viewBenefit = false
            this.viewTransfer = false
            this.viewPayPortion = false
            this.viewFullBenefit = false
        },

        toggleChangeOption(e) {
            this.isActive = false
            this.isFocus = false
            this.viewBenefit = true
            this.viewTransfer = true
            this.viewPayPortion = true
            this.viewFullBenefit = true
            this.viewNoPayment = true

            this.showBenefitText = false
            this.showTransferText = false
            this.showPayPortionText = false
            this.showFullBenefitText = false
            this.showNoPaymentText = false

            Array.from(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children).forEach(
                child => {
                    child.style.display = 'flex'
                },
            )
        },

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

        showSanlamPlus() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showSanlamPlusPreservationFundText = true
            this.showRetirementAnnuityFundText = false

            this.viewSanlamPlusPreservationFund = true
            this.viewRetirementAnnuityFund = false
        },
        showRetirementAnnuityFund() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showSanlamPlusPreservationFundText = false
            this.showRetirementAnnuityFundText = true

            this.viewSanlamPlusPreservationFund = false
            this.viewRetirementAnnuityFund = true
        },

        showPayPortionSanlamPlus() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showPayPortionSanlamPlusText = true
            this.showPayPortionRetirementAnnuityFundText = false

            this.viewPayPortionSanlamPlus = true
            this.viewPayPortionRetirementAnnuityFund = false
        },

        showPayPortionRetirementAnnuityFund() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showPayPortionSanlamPlusText = false
            this.showPayPortionRetirementAnnuityFundText = true

            this.viewPayPortionSanlamPlus = false
            this.viewPayPortionRetirementAnnuityFund = true
        },

        showPayPortionBenefitSanlamPlus() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showPayPortionBenefitSanlamPlusText = true
            this.viewPayPortionBenefitSanlamPlus = true

            this.showTransferAmountSanlamPlusText = false
            this.viewTransferAmountSanlamPlus = false
        },
        showTransferAmountSanlamPlus() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showPayPortionBenefitSanlamPlusText = false
            this.viewPayPortionBenefitSanlamPlus = false

            this.showTransferAmountSanlamPlusText = true
            this.viewTransferAmountSanlamPlus = true
        },
    },
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
