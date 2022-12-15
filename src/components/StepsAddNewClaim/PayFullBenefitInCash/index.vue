<template>
    <div class="mt-4">
        <v-card-title class="text-h5 px-0 black--text mb-6 font-weight-light"> Cash Payment Details </v-card-title>
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
                <small v-if="v$.benefitElectionDate.$error"> Please enter the Benefit Election Date </small>
            </v-col>
        </v-row>
        <div>
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
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength, numeric, helpers } from '@vuelidate/validators'
export default {
    components: {},
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            benefitElectionDate: null,
            showFullBenefitText: false,
            bankNames: null,
            nameOfBanks: ['ABSA', 'Capitec', 'FNB', 'Nedbank'],
            accountHolderName: '',
            accountNumber: '',
            branchCode: '',
            accountTypes: null,
            accountType: ['Savings', 'Current', 'Transmission'],
        }
    },
    validations() {
        return {
            benefitElectionDate: {
                required,
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

<style></style>
