<template>
    <div class="inner-margin-1">
        <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
            <v-card elevation="0">
                <v-card-text class="pa-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0">
                                <v-card-title class="text-h5 px-0 black--text"> Claim Details </v-card-title>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="mb-4 pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    Date of exit from the fund
                                </span>
                                <v-text-field
                                    v-model="dateExitFund"
                                    type="date"
                                    :value="dateExitFund"
                                    label="Date of exit from the fund"
                                    hide-details="auto"
                                    outlined
                                    :class="{ 'error--text': v$.dateExitFund.$errors.length }"
                                    @input="v$.dateExitFund.$touch"
                                    @blur="v$.dateExitFund.$touch"
                                    @change="onExitDateChange"
                                ></v-text-field>
                                <small v-if="v$.dateExitFund.$errors.length">
                                    {{ v$.dateExitFund.$errors[0].$message }}
                                </small>
                                <small v-if="!schemeExitDate.isValid" class="validate-field">
                                    <span class="d-block">
                                        According to our records, the member was in
                                        <strong
                                            >{{ schemeExitDate.schemeCode }} ({{ schemeExitDate.schemeName }})</strong
                                        >
                                        member group at the date of exit from the fund.
                                    </span>
                                    <span class="d-block">
                                        To continue please enter an exit date that is greater than
                                        <strong>{{ schemeExitDate.validStartDate.toLocaleDateString() }},</strong>
                                        otherwise cancel and contact Sanlam for assistance
                                    </span>
                                </small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="pa-0 mb-8">
                                <div grey class="text-bg-info py-6 px-7">
                                    <div class="d-flex align-start">
                                        <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                                        <div>
                                            <p>
                                                It is a legislative requirement that all pertinent information and
                                                options are shared with a member that is leaving the fund (for whatever
                                                reason). Kindly provide the member with a printed copy of the
                                                information document below, that contains all this information.
                                            </p>
                                            <div class="flex">
                                                <v-btn text color="primary" class="px-0 mr-4">
                                                    <v-icon>mdi-download</v-icon>
                                                    Member Information
                                                </v-btn>
                                                <v-btn text color="primary">
                                                    <v-icon>mdi-download</v-icon>
                                                    Lid Inligting
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mb-4">
                                <span class="mb-2 d-block font-weight-bold black--text"> Reason for withdrawal </span>
                                <v-select
                                    v-model="selectReasonForWithdrawal"
                                    outlined
                                    hide-details="auto"
                                    :items="reasonForWithdrawal"
                                    label="Reason for withdrawal"
                                    :class="{ 'error--text': v$.selectReasonForWithdrawal.$error }"
                                    @input="v$.selectReasonForWithdrawal.$touch"
                                    @blur="v$.selectReasonForWithdrawal.$touch"
                                    @change="handleRetrenchment"
                                ></v-select>
                                <small v-if="v$.selectReasonForWithdrawal.$error" class="validate-field">
                                    {{ v$.selectReasonForWithdrawal.$errors[0].$message }}
                                </small>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="8" class="mb-4 pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    Does the member have outstanding amounts owing to the employer?
                                </span>
                                <v-radio-group v-model="amountsOwing" hide-details="auto" row>
                                    <v-radio
                                        label="No"
                                        value="No"
                                        class="mr-sm-16"
                                        @click="isAmountOwing = false"
                                    ></v-radio>
                                    <v-radio label="Yes" value="Yes" @click="isAmountOwing = true"></v-radio>
                                </v-radio-group>
                                <small v-if="v$.amountsOwing.$error" class="validate-field">
                                    {{ v$.amountsOwing.$errors[0].$message }}
                                </small>
                            </v-col>
                        </v-row>
                        <v-row v-show="isAmountOwing" class="mb-4">
                            <v-col cols="12" sm="6" class="pa-0">
                                <div class="">
                                    <div class="d-flex justify-start align-center">
                                        <span class="text-h6 mr-2 black--text">R</span>
                                        <v-text-field
                                            v-model="amountOwingToEmployer"
                                            outlined
                                            type="number"
                                            class="custom-field mr-2 flex-grow-0"
                                            hide-details="auto"
                                            placeholder="0"
                                            :class="{ 'error--text': v$.amountOwingToEmployer.$error }"
                                        ></v-text-field>
                                    </div>
                                    <template v-if="v$.amountOwingToEmployer.$dirty">
                                        <small
                                            v-for="error of v$.amountOwingToEmployer.$silentErrors"
                                            :key="error.$message"
                                        >
                                            {{ error.$message }}
                                        </small>
                                    </template>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="8" class="mb-4 pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    Does the member have a pension backed housing loan?
                                </span>
                                <v-radio-group v-model="backedHousingLoan" mandatory row>
                                    <v-radio label="No" value="No" class="mr-sm-16"></v-radio>
                                    <v-radio label="Yes" value="Yes"></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="pa-0 mb-4">
                                <div grey class="text-bg-info py-6 px-7">
                                    <div class="d-flex align-start">
                                        <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                                        <p class="mb-0">
                                            Section 37D - Fund may make certain deductions from pension benefits. <br />
                                            If a member opts to take a portion of the benefit payment in cash,
                                            outstanding loan amounts will be deducted from the cash portion of the
                                            benefit. Thus the net amount paid into their account will be after tax and
                                            the loan settlement.
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="pa-0">
                                <div grey class="text-bg-info py-6 px-7">
                                    <div class="d-flex align-start">
                                        <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                                        <p class="mb-0">
                                            Please furnish Sanlam with proof of any amount by the member in accordance
                                            with the Income Tax Act. <br />
                                            The Fund will contravene the Pension Funds Act if it allows a deduction from
                                            a benefit where such a deduction is not one of the permissible deductions
                                            i.r.o. section 37D of the Pension Funds Act.
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
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
            <!-- MGF User Warning Message - Retrenchment dialog -->
            <v-dialog v-model="retrenchmentModal" persistent width="600px">
                <v-card class="pa-6">
                    <v-card-title class="pa-0 pb-4">
                        <v-icon x-large color="grey darken-2"> mdi-alert-outline </v-icon> Retrenchment...
                    </v-card-title>
                    <v-card-text class="pa-0 pb-4 black--text">
                        Retrenchment has been selected as the exit type. The employer is liable for an additional
                        benefit amount as per Rule 34 of the fund rules. Are you sure you wish to proceed with
                        retrenchment as the reason for exit?</v-card-text
                    >
                    <v-card-text class="pa-0 pb-4 black--text"
                        >According to the fund rules, Rule 34(2) indicates on Redundacy or Retrenchment that the
                        <span class="text-uppercase">member</span> shall become entitled to:</v-card-text
                    >
                    <v-card-text class="pl-3 pa-0 pb-4 black--text">
                        <div class="mb-2">
                            (i)(aa) if they have already reached the age of fifty years, an early retirement benefit in
                            terms of Rule 32, or
                        </div>
                        <div class="pl-2 mb-2">
                            (bb) if they have not yet reached the age of fifty years, a resignation in terms of Rule 32,
                            plus
                        </div>
                    </v-card-text>
                    <v-card-text class="pl-3 pa-0 pb-4 black--text">
                        <div class="mb-2">
                            (ii) an amount payable by the <span class="text-uppercase">local authority</span> concerned
                            being the lesser of:
                        </div>
                        <div class="pl-2 mb-2">
                            (aa) the difference between the <span class="text-uppercase">member</span>'s normal
                            retirement age and their age on their nearest birthday, multiplied by 8 percent multiplied
                            by the <span class="text-uppercase">member</span>'s fund credit, or
                        </div>
                        <div class="pl-2 mb-2">
                            (bb) 100 percent of the <span class="text-uppercase">member</span>'s fund credit.
                        </div>
                    </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn text color="primary" class="mr-2" @click="cancelRetrenchmentOption"> No </v-btn>
                            <v-btn color="primary" class="elevation-0" @click="retrenchmentModal = false"> Yes </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, requiredIf, minValue, maxValue, numeric, helpers } from '@vuelidate/validators'
import { ClaimsDetailsApi } from '~/generated/api'

export default {
    props: {},
    setup() {
        return { v$: useVuelidate() }
    },
    data: () => ({
        membershipNumber: '',
        schemeName: '',
        schemeCode: '',
        fundOptionName: '',

        dateExitFund: null,
        amountsOwing: null,
        backedHousingLoan: null,
        selectReasonForWithdrawal: null,
        reasonForWithdrawal: [
            'Dismissed',
            'Deserted',
            'Terminal Illness',
            'Normal',
            'Reorganisation',
            'Resigned',
            'Disability',
            'Non - Terminal',
            'Medically Board',
            'Voluntary Retrenchment',
            'Involuntary Retrenchment',
            'Normal Resignation',
            'Retrenchment',
        ],
        isAmountOwing: false,
        amountOwingToEmployer: null,
        saveClaim: false,
        schemeExitDate: {
            isValid: true,
            schemeName: '',
            schemeCode: '',
            fundOptionName: '',
            validStartDate: '',
        },
        retrenchmentModal: false,
    }),
    validations() {
        return {
            dateExitFund: {
                required: helpers.withMessage('Please enter a withdrawal date.', required),
                lastDayOfMonth: helpers.withMessage('Please select the last date of the month.', value => {
                    const parsedDate = new Date(value)
                    const lastDay = new Date(parsedDate.getFullYear(), parsedDate.getMonth() + 1, 0).getDate()

                    if (parsedDate.getDate() !== lastDay) {
                        return false
                    } else {
                        return true
                    }
                }),
            },
            selectReasonForWithdrawal: {
                required: helpers.withMessage('Please select a withdrawal reason.', required),
            },
            amountsOwing: {
                required: helpers.withMessage(
                    'Please indicate if there is an amount owing to the members employer.',
                    required,
                ),
            },
            amountOwingToEmployer: {
                required: helpers.withMessage(
                    'Please indicate if there is an amount owing to the members employer. 222',
                    requiredIf(this.isAmountOwing === true),
                ),
                minValue: minValue(1),
                maxValue: maxValue(100000),
                numeric,
            },
        }
    },
    computed: {},
    created() {
        this.membershipNumber = this.$route.query.membershipNumber
        this.schemeName = this.$route.query.schemeName
        this.schemeCode = this.$route.query.schemeCode
        this.fundOptionName = this.$route.query.fundOptionName
    },
    methods: {
        async onExitDateChange() {
            if (this.v$.dateExitFund.$invalid) {
                return
            }
            await ClaimsDetailsApi.validateSchemeExitDate(
                this.membershipNumber,
                this.schemeName,
                this.schemeCode,
                this.fundOptionName,
                new Date(this.dateExitFund),
            )
                .then(data => {
                    this.schemeExitDate.isValid = data.isValid
                    this.schemeExitDate.validStartDate = new Date(data.validStartDate)
                    this.schemeExitDate.schemeName = data.schemeName
                    this.schemeExitDate.schemeCode = data.schemeCode
                    this.schemeExitDate.fundOptionName = data.fundOptionName
                })
                .catch(() => {})
        },
        back() {
            this.$router.push('/withdrawals/withdrawal/member-details')
        },
        async next() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect || this.isNotLastMonthDateSelected === true || this.schemeExitDate.isValid === false) {
                return
            }
            this.$router.push('/withdrawals/withdrawal/payment-options')
        },
        handleRetrenchment() {
            if (this.selectReasonForWithdrawal === 'Retrenchment') {
                this.retrenchmentModal = !this.retrenchmentModal
            }
        },
        cancelRetrenchmentOption() {
            this.selectReasonForWithdrawal = null
            this.retrenchmentModal = !this.retrenchmentModal
        },
    },
}
</script>

<style lang="scss">
.custom-field {
    max-width: 140px;
    margin-right: 10px;
    .v-input__control {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;

        & > .v-input__slot {
            flex-basis: 139px;
        }
    }
}
</style>
