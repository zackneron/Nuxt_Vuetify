<template>
    <div class="inner-margin-1">
        <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
            <v-card elevation="0">
                <v-card-title class="text-h5 px-0 black--text font-weight-light"> Member Details </v-card-title>
                <v-card-text v-if="doesQualifyForEarlyRetirement" class="pa-0 mb-8">
                    <div grey class="d-flex align-start text-bg-info py-6 px-7">
                        <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                        <p class="mb-0">
                            Please note: This member qualifies for early retirement based on the Fund Rules. It is
                            advisable that the member seeks advise from an accredited financial adviser to understand
                            tax benefits and implications of this option.
                        </p>
                    </div>
                    <div grey class="d-flex justify-end text-bg-info pb-6 px-7">
                        <nuxt-link to="/" class="mr-2">
                            <v-btn text color="primary"> Cancel </v-btn>
                        </nuxt-link>
                        <v-btn color="primary" @click.once="overrideAgeLimit = true"> Continue </v-btn>
                    </div>
                    <div class="text-right mt-2">
                        <small v-if="v$.isFormDisabled.$error" class="validate-field">
                            Please indicate whether to Cancel or Continue.
                        </small>
                    </div>
                </v-card-text>
            </v-card>

            <v-card id="isFormDisabled" v-model="isFormDisabled" elevation="0">
                <v-card-text class="pa-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mb-4">
                                <span class="mb-2 d-block font-weight-bold black--text"> Select ID type </span>
                                <v-select
                                    v-model="selectedItems"
                                    outlined
                                    hide-details="auto"
                                    :items="idType"
                                    label="Select ID type"
                                    item-value="value"
                                    item-text="type"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.selectedItems.$error }"
                                ></v-select>
                                <small v-if="v$.selectedItems.$error" class="validate-field">
                                    Please select your ID Type
                                </small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    {{ selectedItems }}
                                    <span v-if="selectedItems === 'ID number'">
                                        <v-tooltip bottom color="black">
                                            <template #activator="{ on, attrs }">
                                                <v-icon v-bind="attrs" primary class="primary--text" v-on="on">
                                                    mdi-information
                                                </v-icon>
                                            </template>

                                            <span class="d-block text-caption"
                                                >Note: If you change the member's ID details, a request will be sent to
                                            </span>
                                            <span class="d-block text-caption"
                                                >you and/or the member to furnish proof of the Identity details.</span
                                            >
                                        </v-tooltip>
                                    </span>
                                </span>
                                <v-text-field
                                    v-model="memberDetails.idNumber"
                                    outlined
                                    :label="selectedItems"
                                    :disabled="doesQualifyForEarlyRetirement"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text"> Job title </span>
                                <v-text-field
                                    v-model="memberDetails.occupation"
                                    outlined
                                    label="Job title"
                                    :disabled="doesQualifyForEarlyRetirement"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mb-4">
                                <sc-income-tax-reference-number-input
                                    v-model="memberDetails.taxNumber"
                                    :disabled="doesQualifyForEarlyRetirement"
                                ></sc-income-tax-reference-number-input>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6" class="mb-4 pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    Is this member a SA citizen or resident?
                                </span>
                                <v-radio-group
                                    v-model="memberCitizenship"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    hide-details="auto"
                                    row
                                >
                                    <v-radio
                                        label="No"
                                        value="No"
                                        class="mr-sm-16"
                                        @click="isSACitizen = true"
                                    ></v-radio>
                                    <v-radio label="Yes" value="Yes" @click="isSACitizen = false"></v-radio>
                                </v-radio-group>
                                <small v-if="v$.memberCitizenship.$error" class="validate-field">
                                    Please indicate whether the member is a SA citizen.
                                </small>
                            </v-col>
                        </v-row>

                        <div v-show="isSACitizen">
                            <v-row>
                                <v-col cols="12" sm="5" class="pa-0 mb-4">
                                    <span class="mb-2 d-block font-weight-bold black--text"> Country of origin </span>
                                    <v-select
                                        v-model="countries"
                                        outlined
                                        :items="countryOfOrigin"
                                        :required="!isSACitizen"
                                        :class="{ 'error--text': v$.countries.$error }"
                                        label="Country of origin"
                                        hide-details="auto"
                                    ></v-select>
                                    <small v-if="v$.countries.$error" class="validate-field">
                                        Please provide country of origin.
                                    </small>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="5" class="pa-0 mb-4">
                                    <span class="mb-2 d-block font-weight-bold black--text"> Nationality </span>
                                    <v-select
                                        v-model="countryOfNationality"
                                        outlined
                                        :items="nationality"
                                        :class="{ 'error--text': v$.countryOfNationality.$error }"
                                        label="Nationality"
                                        hide-details="auto"
                                    ></v-select>
                                    <small v-if="v$.countryOfNationality.$error" class="validate-field">
                                        Please provide your nationality.
                                    </small>
                                </v-col>
                            </v-row>
                        </div>

                        <v-row>
                            <v-col cols="12" class="px-0">
                                <DividerBar />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-title class="text-h5 px-0 black--text"> Contact Details </v-card-title>
                <v-card-text class="px-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="5" class="my-4 pa-0 tel">
                                <span class="mb-2 d-block font-weight-bold black--text"> Member's mobile number </span>
                                <vue-tel-input-vuetify
                                    ref="phoneNumber"
                                    v-model="memberMobileNumber"
                                    outlined
                                    class="mr-2"
                                    default-country="za"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.memberMobileNumber.$error }"
                                    hide-details="auto"
                                    maxlength="15"
                                    mode="international"
                                ></vue-tel-input-vuetify>
                                <small v-if="v$.memberMobileNumber.$error" class="validate-field">
                                    Please provide a mobile number.
                                </small>
                                <small class="grey--text lighten-5 text-caption"
                                    >This is the mobile number the exiting member will use once they leave the
                                    company.</small
                                >
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    Member's personal email address
                                </span>
                                <v-text-field
                                    ref="memberEmail"
                                    v-model="memberPersonalEmail"
                                    outlined
                                    label="Member's personal email address"
                                    hide-details="auto"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.memberPersonalEmail.$error }"
                                ></v-text-field>
                                <small v-if="v$.memberPersonalEmail.$error" class="validate-field">
                                    {{ v$.memberPersonalEmail.email.$message }}
                                </small>
                                <small v-if="v$.memberPersonalEmail.$error" class="validate-field">
                                    Your email address is required.
                                </small>
                                <small class="grey--text lighten-5 text-caption"
                                    >This is the email address the exiting member will use once they leave the
                                    company.</small
                                >
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mt-3">
                                <span class="mb-2 d-block font-weight-bold black--text">
                                    Alternative contact number
                                </span>
                                <v-text-field
                                    v-model="alternativeContactNumber"
                                    outlined
                                    label="Alternative contact number"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    type="number"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" class="px-0">
                                <DividerBar />
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>

                <v-card-title class="text-h5 pa-0 black--text"> Address Details </v-card-title>
                <v-card-text class="px-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" class="pa-0">
                                <v-card-subtitle class="font-weight-bold text-subtitle-1 pa-0 black--text"
                                    >Home Address</v-card-subtitle
                                >
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mb-4">
                                <v-text-field
                                    v-model="homeAddress"
                                    outlined
                                    label="Address"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.homeAddress.$error }"
                                    hide-details="auto"
                                ></v-text-field>
                                <small v-if="v$.homeAddress.$error" class="validate-field">
                                    Please enter a home address.
                                </small>
                                <small class="grey--text lighten-5">Number and street name</small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0">
                                <v-text-field
                                    v-model="suburb"
                                    outlined
                                    label="Suburb"
                                    :disabled="doesQualifyForEarlyRetirement"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mb-4">
                                <v-text-field
                                    v-model="city"
                                    outlined
                                    label="City"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.city.$error }"
                                    hide-details="auto"
                                ></v-text-field>
                                <small v-if="v$.city.$error" class="validate-field"> Please enter a city. </small>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" sm="5" class="pa-0 mb-4">
                                <v-select
                                    v-model="provinces"
                                    outlined
                                    :items="province"
                                    hide-details="auto"
                                    label="Province"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.provinces.$error }"
                                ></v-select>
                                <small v-if="v$.provinces.$error" class="validate-field">
                                    Please select a province.
                                </small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="3" class="pa-0 mb-4">
                                <v-text-field
                                    v-model.number="postalCode"
                                    outlined
                                    label="Postal Code"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    :class="{ 'error--text': v$.postalCode.$error }"
                                    hide-details="auto"
                                ></v-text-field>
                                <small v-if="v$.postalCode.$error" class="validate-field">
                                    Please enter a postal code.
                                </small>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="pa-0 mb-6">
                                <span class="mb-2 d-block font-weight-bold black--text text-subtitle-1">
                                    Postal Address
                                </span>
                                <v-radio-group
                                    v-model="postalAddress"
                                    :disabled="doesQualifyForEarlyRetirement"
                                    hide-details="auto"
                                    row
                                >
                                    <v-radio
                                        label="Same as residential address"
                                        name="postalAddressOption"
                                        value="Same as residential address"
                                        @click="isSamePostal = false"
                                    ></v-radio>
                                    <v-radio
                                        label="Other"
                                        name="postalAddressOption"
                                        value="Other"
                                        @click="isSamePostal = true"
                                    ></v-radio>
                                </v-radio-group>
                                <small v-if="v$.postalAddress.$error" class="validate-field"
                                    >Please indicate whether the postal address differs from the home address.</small
                                >
                            </v-col>
                        </v-row>

                        <div v-show="isSamePostal">
                            <v-row>
                                <v-col cols="12" sm="5" class="pa-0 mb-4">
                                    <v-text-field
                                        v-model="otherAddress"
                                        outlined
                                        label="Address"
                                        hide-details="auto"
                                        :class="{ 'error--text': v$.otherAddress.$error }"
                                    ></v-text-field>
                                    <small v-if="v$.otherAddress.$error" class="validate-field">
                                        Please enter a postal address.
                                    </small>
                                    <span class="grey--text lighten-5">Number and street name</span>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="5" class="pa-0">
                                    <v-text-field v-model="otherSuburb" outlined label="Suburb"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="5" class="pa-0 mb-4">
                                    <v-text-field
                                        v-model="otherCity"
                                        outlined
                                        label="City"
                                        hide-details="auto"
                                        :class="{ 'error--text': v$.otherCity.$error }"
                                    ></v-text-field>
                                    <small v-if="v$.otherCity.$error" class="validate-field">
                                        Please enter a city.
                                    </small>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" sm="5" class="pa-0 mb-4">
                                    <v-select
                                        v-model="otherPostalProvince"
                                        outlined
                                        :items="otherProvince"
                                        :class="{ 'error--text': v$.otherPostalProvince.$error }"
                                        label="Province"
                                        hide-details="auto"
                                    ></v-select>
                                    <small v-if="v$.otherPostalProvince.$error" class="validate-field">
                                        Please select a province.
                                    </small>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="3" class="pa-0 mb-4">
                                    <v-text-field
                                        v-model.number="otherPostalCode"
                                        outlined
                                        label="Postal Code"
                                        hide-details="auto"
                                        :class="{ 'error--text': v$.otherPostalCode.$error }"
                                    ></v-text-field>
                                    <small v-if="v$.otherPostalCode.$error" class="validate-field">
                                        Please enter a postal code.
                                    </small>
                                </v-col>
                            </v-row>
                        </div>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>
        <div class="text-right inner-margin-1">
            <v-btn text large class="mr-4" @click="back"> Back </v-btn>
            <v-btn text outlined large class="mr-4" @click="saveClaim"> Save </v-btn>
            <v-btn large color="primary" @click.prevent="next"> Next </v-btn>
        </div>
        <div class="dialogs-wrapper">
            <!-- Save Claim dialog -->
            <v-dialog v-model="saveClaimDialog" persistent width="287px">
                <v-card class="pa-6">
                    <v-card-text class="pa-0 pb-4">Withdrawal claim has been successfully saved </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn color="primary" class="elevation-0" @click="saveClaimDialog = false">OK </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import useVuelidate from '@vuelidate/core'
import { required, numeric, email, helpers, requiredIf } from '@vuelidate/validators'
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue'
import DividerBar from '@/components/DividerBar'

import { useMemberSearchStore } from '@/store/memberSearch'
import { useMemberDetailsStore } from '@/store/memberDetails'

export default {
    components: { DividerBar, VueTelInputVuetify },
    props: {},
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            attrs: '',
            on: '',
            member: {
                memberDetails: {
                    idType: [
                        { type: 'ID number', value: 'ID number' },
                        { type: 'Passport number', value: 'Passport number' },
                    ],
                },
            },

            schemeName: '',
            schemeCode: '',
            fundOptionCode: '',

            overrideAgeLimit: false,
            isFormDisabled: '',
            idType: [
                { type: 'ID number', value: 'ID number' },
                { type: 'Passport number', value: 'Passport number' },
            ],
            selectedItems: 'ID number',
            idNumber: '8609090979090',
            age: 0,
            memberCitizenship: null,
            isSACitizen: false,
            countryOfOrigin: [
                'South African',
                'English',
                'Afghan',
                'Albanian',
                'Algerian',
                'American Samoan',
                'Andorran',
                'Angolan',
                'Anguillan',
                'Antiguan / Barbudan',
                'Argentine',
                'Armenian',
                'Aruban',
                'Australian',
                'Austrian',
                'Azerbaijani',
                'Bahamian',
                'Bahraini',
                'Bangladeshi',
                'Barbadian',
                'Belarusian',
                'Ivorian',
                'Croatian',
                'Cuban',
                'Cypriot',
                'Czech',
                'Dane',
                'Djiboutian',
                'Dominican',
            ],
            countryOfNationality: null,
            nationality: [
                'South Africa',
                'United Kingdom',
                'United States',
                'Afghanistan',
                'Albania',
                'Algeria',
                'American Samoa',
                'Andorra',
                'Angola',
                'Anguilla',
                'Antigua and Barbuda',
                'Argentina',
                'Armenia',
                'Aruba',
                'Australia',
                'Austria',
                'Azerbaijan',
                'Bahamas',
                'Bahrain',
                'Bangladesh',
                'Barbados',
                'Belarus',
                'Belguim',
                'Belize',
                'Benin',
                'Bermuda',
                'Bhutan',
                'Bolivia',
                'Bosnia and Herzegovina',
                'Botswana',
                'Brazil',
                'Brunei Darussalam',
                'Bulgaria',
                'Burkina Faso',
                'Burundi',
                'Cambodia',
                'Cameroon',
                'Canada',
                'Cape Verde',
            ],
            memberMobileNumber: null,
            alternativeContactNumber: null,
            memberPersonalEmail: '',
            homeAddress: '',
            membershipNumber: '',
            suburb: '',
            city: '',
            provinces: null,
            province: [
                'Eastern Cape',
                'Free State',
                'Gauteng',
                'KwaZulu-Natal',
                'Limpopo',
                'Mpumalanga',
                'Nothern Cape',
                'North West',
                'Western Cape',
            ],
            postalCode: '',
            postalAddress: null,
            isSamePostal: false,
            otherAddress: '',
            otherSuburb: '',
            otherCity: '',
            otherPostalProvince: null,
            otherProvince: [
                'Eastern Cape',
                'Free State',
                'Gauteng',
                'KwaZulu-Natal',
                'Limpopo',
                'Mpumalanga',
                'Nothern Cape',
                'North West',
                'Western Cape',
            ],
            otherPostalCode: '',
            saveClaimDialog: false,
            selectedItemsRules: [v => !!v || 'Select ID Type'],
            countries: null,
        }
    },
    async fetch() {},
    computed: {
        doesQualifyForEarlyRetirement() {
            return this.age >= 55 && !this.overrideAgeLimit
        },
        ...mapState(useMemberSearchStore, ['memberDetails']),
    },
    created() {
        this.schemeName = this.$route.query.schemeName
        this.schemeCode = this.$route.query.schemeCode
        this.fundOptionName = this.$route.query.fundOptionName
        this.membershipNumber = this.$route.query.membershipNumber

        this.memberPersonalEmail = this.$route.query.emailAddress
        this.paypointKey = this.$route.query.paypointKey
        this.age = this.$route.query.age
    },
    methods: {
        async next() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                scrollTo(0, 0)
                return
            }
            this.$router.push({
                path: '/withdrawals/withdrawal/claims-details',
                query: {
                    membershipNumber: this.membershipNumber,
                    schemeName: this.schemeName,
                    schemeCode: this.schemeCode,
                    fundOptionName: this.fundOptionName,
                },
            })
        },
        saveClaim() {
            this.saveMemberDetails(this.memberDetails)
            this.saveClaimDialog = true
        },
        back() {
            this.$router.push('/withdrawals/MemberSearch')
        },
        passportError() {
            const errors = []
            if (this.selectedItems === 'Passport number') {
                return (this.idNumber = '')
            }

            return errors
        },
        ...mapActions(useMemberDetailsStore, ['loadContactDetails', 'validateIdNumber', 'saveMemberDetails']),
    },
    validations() {
        return {
            memberCitizenship: {
                required,
            },
            countries: {
                required: requiredIf(this.isSACitizen === true),
            },
            countryOfNationality: {
                required: requiredIf(this.isSACitizen === true),
            },
            memberMobileNumber: {
                required: requiredIf(this.memberPersonalEmail === '' || this.memberPersonalEmail === null),
            },
            memberPersonalEmail: {
                required: requiredIf(this.memberMobileNumber === '' || this.memberMobileNumber === null),
                email: helpers.withMessage('Please provide a valid email address.', email),
            },
            selectedItems: {
                required,
            },
            homeAddress: {
                required,
            },
            city: {
                required,
            },
            provinces: {
                required,
            },
            postalCode: {
                required,
                numeric,
            },
            postalAddress: {
                required,
            },
            otherAddress: {
                required: requiredIf(this.isSamePostal === true),
            },
            otherCity: {
                required: requiredIf(this.isSamePostal === true),
            },
            otherPostalProvince: {
                required: requiredIf(this.isSamePostal === true),
            },
            otherPostalCode: {
                required: requiredIf(this.isSamePostal === true),
                numeric,
            },
            isFormDisabled: {
                required: requiredIf(this.age >= 55),
            },
        }
    },
}
</script>

<style lang="scss">
.vue-tel-input-vuetify {
    .country-code {
        width: 60px;
        margin-right: 10px;
    }
}

.tel {
    .v-input__slot {
        margin-bottom: 0;
    }
    .v-text-field__details {
        display: none;
    }
}

.v-input__slot {
    margin-bottom: 0;
    fieldset {
        border-color: #e0e4e9;
        border-width: 2px;
    }
}

.validate-field,
small {
    color: $error;
    font-weight: 700;
    display: block;
    line-height: 12px;
    margin-top: 5px;
}
.error--text {
    fieldset {
        border-color: $error !important;
    }
    label {
        color: $error !important;
    }
}
</style>
