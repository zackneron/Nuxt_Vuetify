<template>
    <div class="mt-4">
        <v-card-title class="text-h5 px-0 black--text mb-2"> Cash Payment Details</v-card-title>
        <v-row class="mx-0">
            <v-col cols="12" sm="5" class="pa-0 mb-4">
                <span class="mb-2 d-block font-weight-bold black--text">
                    Benefit election date
                    <v-tooltip bottom color="black">
                        <template #activator="{ on, attrs }">
                            <v-icon v-bind="attrs" primary class="primary--text" v-on="on"> mdi-information </v-icon>
                        </template>

                        <span class="d-block">The later of the exit date</span>
                        <span class="d-block">or the date that the member signed the exit forms.</span>
                    </v-tooltip>
                </span>
                <v-text-field
                    v-model="benefitElectionDate"
                    type="date"
                    outlined
                    hide-details="auto"
                    :class="{ 'error--text': v$.benefitElectionDate.$errors.length }"
                ></v-text-field>
                <small v-if="v$.benefitElectionDate.$error">
                    {{ v$.benefitElectionDate.$errors[0].$message }}
                </small>
            </v-col>
        </v-row>

        <v-row class="mx-0">
            <v-col cols="12" sm="7" class="pa-0">
                <span class="mb-2 d-block font-weight-bold black--text">
                    Indicate the (%) Percentage or (R) Rand value to be paid in cash.
                </span>
                <v-radio-group v-model="portionPayCash" hide-details="auto" row>
                    <v-radio label="%" value="percentage" :checked="(rand = '')" @change="disabled = false">
                        <template #label>
                            <div class="d-flex justify-space-between align-center pa-2">
                                <v-text-field
                                    v-model.number="percentage"
                                    style="width: 100px"
                                    outlined
                                    hide-details
                                    type="number"
                                    min="0"
                                    max="100"
                                    :disabled="disabled"
                                    placeholder="%"
                                ></v-text-field>
                            </div>
                            <small v-if="percentage > 100" class="percentage-error"
                                >Please max percentage is 100%</small
                            >
                        </template>
                    </v-radio>
                    <v-radio label="R" value="rand" :checked="(percentage = '')" @change="disabled = false">
                        <template #label>
                            <div class="d-flex justify-space-between align-center pa-2">
                                <v-text-field
                                    v-model.number="rand"
                                    style="width: 100px"
                                    outlined
                                    hide-details
                                    type="number"
                                    min="1"
                                    max="100"
                                    :disabled="disabled"
                                    placeholder="Rand"
                                ></v-text-field>
                            </div>
                        </template>
                    </v-radio>
                </v-radio-group>
            </v-col>
        </v-row>

        <div class="mt-4">
            <v-card-title class="text-h5 px-0 black--text font-weight-light mb-2"> Bank Details </v-card-title>

            <v-row class="mx-0">
                <v-col cols="12" sm="5" class="pa-0 mb-4">
                    <span class="mb-2 d-block font-weight-bold black--text">
                        Name of bank
                        <v-tooltip bottom color="black">
                            <template #activator="{ on, attrs }">
                                <v-icon v-bind="attrs" primary class="primary--text" v-on="on">
                                    mdi-information
                                </v-icon>
                            </template>

                            <span class="d-block text-caption">Payments cannot be made to:</span>
                            <ul class="text-caption">
                                <li>credit card accounts</li>
                                <li>bond accounts</li>
                                <li>a third party's bank account</li>
                            </ul>
                            <span class="d-block text-caption"
                                >Payments cannot be split into different bank accounts.</span
                            >
                        </v-tooltip>
                    </span>
                    <v-select
                        v-model="bankNames"
                        outlined
                        hide-details="auto"
                        :items="nameOfBanks"
                        label="Name of bank"
                        :class="{ 'error--text': v$.bankNames.$errors.length }"
                        @input="v$.bankNames.$touch"
                        @blur="v$.bankNames.$touch"
                    ></v-select>
                    <small v-if="v$.bankNames.$error">
                        {{ v$.bankNames.$errors[0].$message }}
                    </small>
                </v-col>
            </v-row>

            <v-row class="mx-0">
                <v-col cols="12" sm="5" class="pa-0">
                    <span class="mb-2 d-block font-weight-bold black--text"> Account holder name </span>
                    <v-text-field v-model="accountHolderName" outlined label="Account holder name"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mx-0">
                <v-col cols="12" sm="5" class="pa-0 mb-4">
                    <span class="mb-2 d-block font-weight-bold black--text"> Account number </span>
                    <v-text-field
                        v-model="accountNumber"
                        outlined
                        hide-details="auto"
                        label="Account number"
                        :class="{ 'error--text': v$.accountNumber.$errors.length }"
                        @input="v$.accountNumber.$touch"
                        @blur="v$.accountNumber.$touch"
                    ></v-text-field>
                    <small v-if="v$.accountNumber.$error">
                        {{ v$.accountNumber.$errors[0].$message }}
                    </small>
                </v-col>
            </v-row>
            <v-row class="mx-0">
                <v-col cols="12" sm="5" class="pa-0 mb-4">
                    <span class="mb-2 d-block font-weight-bold black--text"> First 6 digits of the branch code </span>
                    <v-text-field
                        v-model="branchCode"
                        outlined
                        hide-details="auto"
                        label="First 6 digits of the branch code"
                        :class="{ 'error--text': v$.branchCode.$errors.length }"
                        @input="v$.branchCode.$touch"
                        @blur="v$.branchCode.$touch"
                    ></v-text-field>
                    <template v-if="v$.branchCode.$dirty">
                        <small v-for="error of v$.branchCode.$silentErrors" :key="error.$message">
                            {{ error.$message }}
                        </small>
                    </template>
                </v-col>
            </v-row>

            <v-row class="mx-0 mb-4">
                <v-col cols="12" sm="5" class="pa-0">
                    <span class="mb-2 d-block font-weight-bold black--text"> Account type </span>
                    <v-select
                        v-model="accountTypes"
                        outlined
                        :items="accountType"
                        hide-details="auto"
                        label="Account type"
                        :class="{ 'error--text': v$.accountTypes.$errors.length }"
                        @input="v$.accountTypes.$touch"
                        @blur="v$.accountTypes.$touch"
                    ></v-select>
                    <small v-if="v$.accountTypes.$error">
                        {{ v$.accountTypes.$errors[0].$message }}
                    </small>
                </v-col>
            </v-row>
        </div>
        <DividerBar />

        <v-card-title class="text-h5 px-0 black--text font-weight-light"> Broker Details </v-card-title>
        <!-- financial representative -->
        <span class="mb-2 d-block font-weight-bold black--text"> Do you have a financial representative? </span>
        <v-radio-group v-model="financialRepresentative" row>
            <v-radio label="Yes" value="Yes" class="mr-sm-16" @click="showFinRepresentative = true"></v-radio>
            <v-radio label="No" value="No" @click="showFinRepresentative = false"></v-radio>
        </v-radio-group>
        <FinancialRepresentative v-show="showFinRepresentative" />

        <div grey class="text-bg-info py-6 px-7 mt-2">
            <div class="d-flex align-start">
                <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                <p class="mb-0">
                    The member is required to fill out a
                    <a href="#">Sanlam Preservation Fund application form</a>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, numeric, helpers } from '@vuelidate/validators'
import FinancialRepresentative from '@/components/StepsAddNewClaim/FinancialRepresentative'
export default {
    components: {
        FinancialRepresentative,
    },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            disabled: true,
            benefitElectionDate: null,
            portionPayCash: null,
            financialRepresentative: null,
            showFinRepresentative: false,
            percentage: 0,
            rand: '',
            bankNames: null,
            nameOfBanks: ['ABSA', 'Capitec', 'FNB', 'Nedbank'],
            accountHolderName: '',
            accountNumber: '',
            branchCode: '',
            accountTypes: null,
            accountType: ['Savings', 'Current', 'Transmission'],
        }
    },
    methods: {},
    validations() {
        return {
            benefitElectionDate: {
                required: helpers.withMessage('Please enter the Benefit Election Date.', required),
            },
            bankNames: {
                required: helpers.withMessage('Please select a bank.', required),
            },
            accountNumber: {
                required: helpers.withMessage('Please enter an account number.', required),
                numeric,
            },
            branchCode: {
                required: helpers.withMessage('Please enter the first six digits of the Branch code.', required),
                minLength: minLength(6),
                maxLength: maxLength(6),
                numeric,
            },
            accountTypes: {
                required: helpers.withMessage('Please select Account type.', required),
            },
        }
    },
}
</script>

<style lang="scss">
.percentage-error {
    @include md {
        position: absolute;
        width: 200%;
        top: 60px;
        left: -30px;
    }
}
</style>
