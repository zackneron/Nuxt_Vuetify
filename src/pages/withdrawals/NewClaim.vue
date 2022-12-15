<template>
    <div class="custom-stepper">
        <v-stepper v-model="nextStep" vertical transparent class="transparent" elevation="0">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-stepper-step :complete="nextStep > 1" step="1"> Member Details </v-stepper-step>
                        <v-stepper-step :complete="nextStep > 2" step="2"> Claim Details </v-stepper-step>
                        <v-stepper-step :complete="nextStep > 3" step="3"> Payment Options </v-stepper-step>
                        <v-stepper-step :complete="nextStep > 4" step="4"> Document Upload </v-stepper-step>
                        <v-stepper-step :complete="nextStep > 5" step="5"> Submit Claim </v-stepper-step>
                    </v-col>
                    <v-col cols="12" md="9">
                        <Breadcrumb :header="header" :bold-text="employerSchemeName" :plain-text="plainText">
                            <v-breadcrumbs :items="breadItems" class="px-0">
                                <template #item="{ item }">
                                    <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
                                        {{ item.text }}
                                    </v-breadcrumbs-item>
                                </template>
                            </v-breadcrumbs>
                            <template #profile>
                                <v-btn icon color="white" v-on="on" @click="memberProfile = true">
                                    <v-icon class="text-h4">mdi-folder-account</v-icon>
                                </v-btn>
                            </template>
                        </Breadcrumb>

                        <div class="black--text">
                            <v-stepper-content step="1" class="overflow-hidden border-left-0">
                                <v-form ref="formMemberDetails">
                                    <!-- <MemberDetails validation-scope="member-details" /> -->
                                    <div class="text-right inner-margin-1">
                                        <v-btn text large class="mr-4" @click="backToMemberSearch"> Back </v-btn>
                                        <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
                                        <v-btn large color="primary" @click.prevent="validateMemberDetails">
                                            Next
                                        </v-btn>
                                    </div>
                                </v-form>
                            </v-stepper-content>

                            <v-stepper-content step="2" class="overflow-hidden border-left-0">
                                <v-form ref="claimDetailsForm">
                                    <!-- <ClaimDetails validation-scope="claim-details" /> -->
                                    <div class="text-right inner-margin-1">
                                        <v-btn text large class="mr-4" @click="nextStep = 1"> Back </v-btn>
                                        <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
                                        <v-btn large color="primary" @click.prevent="validateClaimDetails">
                                            Next
                                        </v-btn>
                                    </div>
                                </v-form>
                            </v-stepper-content>

                            <v-stepper-content step="3" class="overflow-hidden border-left-0">
                                <v-form ref="paymentOptionsForm">
                                    <!-- <PaymentOptions validation-scope="payment-options" /> -->
                                    <PaymentOptionsHybrid validation-scope="payment-options-hybrid" />
                                    <div class="text-right inner-margin-1">
                                        <v-btn text large class="mr-4" @click="nextStep = 2"> Back </v-btn>
                                        <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
                                        <v-btn large color="primary" @click="validatePaymentOptions"> Next </v-btn>
                                    </div>
                                </v-form>
                            </v-stepper-content>

                            <v-stepper-content step="4" class="overflow-hidden border-left-0">
                                <v-form ref="documentUploadForm">
                                    <!-- <DocumentUpload /> -->
                                    <div class="text-right inner-margin-1">
                                        <v-btn text large class="mr-4" @click="nextStep = 3"> Back </v-btn>
                                        <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
                                        <v-btn large color="primary" @click="validateDocumentUpload"> Next </v-btn>
                                        <v-btn large color="primary" @click="conversionOptionClaim = true"
                                            >temporary button to Show Conversion Option dialog</v-btn
                                        >
                                    </div>
                                </v-form>
                            </v-stepper-content>
                            <v-stepper-content step="5" class="overflow-hidden">
                                <!-- <SubmitClaim /> -->
                                <div class="text-right inner-margin-1">
                                    <v-btn text large class="mr-4" @click="nextStep = 4"> Back </v-btn>
                                    <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
                                    <v-btn large color="primary" type="submit" @click="submitClaim = true">
                                        Submit claim to Sanlam
                                    </v-btn>
                                    <v-btn large color="primary" type="submit" @click="submitApprovalClaim = true">
                                        Submit claim for approval
                                    </v-btn>
                                    <v-btn
                                        large
                                        outlined
                                        text
                                        class="elevation-2"
                                        type="submit"
                                        @click="rejectClaim = true"
                                    >
                                        Reject
                                    </v-btn>
                                    <v-btn large color="primary" type="submit" @click="approvedClaim = true">
                                        Approve
                                    </v-btn>
                                </div>
                            </v-stepper-content>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-stepper>

        <div class="dialogs-wrapper">
            <!-- Conversion Option dialog -->
            <v-dialog v-model="conversionOptionClaim" persistent width="664px">
                <v-card class="pa-6">
                    <v-card-title class="pt-0 px-0">
                        <span class="text-subtitle-1 font-weight-bold">Conversion Option</span>
                        <v-spacer></v-spacer>
                        <v-btn icon v-bind="attrs" v-on="on" @click="conversionOptionClaim = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text class="px-0">
                        This member has conversion option which allows the member to take out a similar individual
                        insurance policy at their own cost when terminating employment. Note that this option may have a
                        different end age than the benefit. The maximum amount of group insurance cover that can be
                        converted to a similar individual insurance policy with Sanlam is equal to the actual cover that
                        member enjoyed immediately before their membership to the group insurance policy was terminated.
                        The converted group insurance will be subject to the conditions that apply to new individual
                        life policies issued by Sanlam at the date of conversion.
                    </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn
                                color="primary"
                                class="elevation-0"
                                @click=";(nextStep = 5), (conversionOptionClaim = false)"
                                >Please contact member</v-btn
                            >
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <v-dialog v-model="memberProfile" max-width="768">
                <v-card class="pa-6">
                    <v-card-title class="text-h5 pa-0 mb-4 black--text font-weight-light justify-space-between">
                        Member Details
                        <v-btn text @click="memberProfile = false">
                            <v-icon class="grey--text" @click="memberProfile = false"> mdi-close </v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-subtitle class="text-body-1 pa-0 mb-4 black--text font-weight-light">
                        {{ plainText2 }}
                    </v-card-subtitle>
                    <MemberProfile
                        :employee-number="employeeNumber"
                        :member-surname="lastName"
                        :membership-number="membershipNumber"
                        :gender="gender"
                        :title="memberTitle"
                        :member-name="firstName"
                        :marital-status="maritalStatus"
                        :tax-number="taxNumber"
                        :date-of-birth="dateOfBirth"
                        :middle-name="middleName"
                        :planned-retirement-age="plannedRetirement"
                        :retirement-date="retirementDate"
                    />
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import PaymentOptionsHybrid from '../../components/StepsAddNewClaim/PaymentOptionsHybrid.vue'
import MemberProfile from '../../components/StepsAddNewClaim/MemberProfile.vue'
import Breadcrumb from '@/components/Breadcrumb'

export default {
    components: {
        Breadcrumb,
        PaymentOptionsHybrid,
        MemberProfile,
    },
    layout: 'stepper',
    setup() {
        const v$MemberDetails = useVuelidate({ $scope: 'member-details' })
        const v$ClaimDetails = useVuelidate({ $scope: 'claim-details' })
        const v$PaymentOptions = useVuelidate({ $scope: 'payment-options' })
        const v$PaymentOptionsHybrid = useVuelidate({
            $scope: 'payment-options-hybrid',
        })
        const v$conversionOptionClaim = useVuelidate({ $scope: 'document-upload' })
        // const v$submitApprovalClaim = useVuelidate({ $scope: 'claim-details' })

        return {
            v$MemberDetails,
            v$ClaimDetails,
            v$PaymentOptions,
            v$PaymentOptionsHybrid,
            v$conversionOptionClaim,
        }
    },
    data() {
        return {
            attrs: null,
            on: null,
            breadItems: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Claims',
                    disabled: true,
                    to: '/withdrawals',
                },
            ],
            nextStep: 1,
            header: null,
            employerSchemeName: null,
            employerSchemeCode: null,
            firstName: null,
            middleName: null,
            idNumber: null,
            emailAddress: null,
            mobilePhone: null,
            paypointKey: null,
            lastName: null,
            occupation: null,
            membershipNumber: null,
            employeeNumber: null,
            gender: null,
            memberTitle: null,
            maritalStatus: null,
            taxNumber: null,
            dateOfBirth: null,
            plannedRetirement: null,
            retirementDate: null,
            conversionOptionClaim: false,
            memberProfile: false,
        }
    },
    computed: {
        plainText() {
            // TODO this name doesnt make sense
            return ' / ' + this.employerSchemeCode
        },
        plainText2() {
            return this.employerSchemeName + ' / ' + this.employerSchemeCode
        },
    },
    created() {
        this.employerSchemeName = this.$route.query.schemeCode
        this.employerSchemeCode = this.$route.query.schemeName
        this.header = this.$route.query.memberName
        this.firstName = this.$route.query.firstName
        this.middleName = this.$route.query.middleName
        this.lastName = this.$route.query.lastName
        this.membershipNumber = this.$route.query.membershipNumber
        this.employeeNumber = this.$route.query.employeeNumber
        this.gender = this.$route.query.gender
        this.memberTitle = this.$route.query.title
        this.maritalStatus = this.$route.query.maritalStatus
        this.taxNumber = this.$route.query.taxNumber
        this.dateOfBirth = this.$route.query.dateOfBirth
        this.plannedRetirement = this.$route.query.plannedRetirement
        this.retirementDate = this.$route.query.retirementDate
        this.idNumber = this.$route.query.idNumber
        this.emailAddress = this.$route.query.emailAddress
        this.occupation = this.$route.query.occupation
        this.mobilePhone = this.$route.query.mobilePhone
        this.paypointKey = this.$route.query.paypointKey
    },
    methods: {
        backToMemberSearch() {
            this.$router.push('/withdrawals/MemberSearch')
        },
        async validateMemberDetails() {
            const validateMemberDetails = await this.v$MemberDetails.$validate()
            if (!validateMemberDetails) {
                scrollTo(0, 0)
                return
            }
            this.nextStep = 2
        },
        async validateClaimDetails() {
            const validateClaimDetails = await this.v$ClaimDetails.$validate()
            if (!validateClaimDetails) {
                return
            }
            this.nextStep = 3
        },
        async validatePaymentOptions() {
            const validatePaymentOptions = await this.v$PaymentOptions.$validate()
            console.log(this.v$PaymentOptions)
            if (!validatePaymentOptions) {
                return
            }
            this.nextStep = 4
        },
        async validateDocumentUpload() {
            const validateDocumentUpload = await this.v$conversionOptionClaim.$validate()
            if (!validateDocumentUpload) {
                return
            }
            this.nextStep = 5
        },
    },
}
</script>

<style lang="scss">
.custom-stepper {
    .v-stepper__step {
        position: relative;

        @include md {
            margin-bottom: 15px;
        }
        &:not(:last-child):before {
            content: '';
            position: absolute;
            height: 100%;
            border-left: 2px solid #8a7e71;
            left: 35px;
            bottom: -40px;
        }
        &.v-stepper__step--active {
            background-color: $brand;
            border-radius: 50px;
            &:after {
                content: '';
                background: $brand;
                width: 20px;
                height: 15px;
                position: absolute;
                bottom: 0;
            }
        }
        &__step.primary {
            background-color: $white !important;
        }
        &.v-stepper__step--complete {
            background-color: transparent;
            .v-stepper__step__step.primary {
                background-color: $brand !important;
            }
            .v-stepper__label {
                color: $white-text !important;
            }
        }
    }

    .theme--light.v-stepper .v-stepper__label {
        color: $white-text;
    }

    .theme--light.v-stepper
        .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
        .v-stepper__step__step {
        background: #252d34;
        border: 2px solid #8a7e71;
    }

    .v-stepper__step {
        &.v-stepper__step--inactive {
            .v-stepper__step__step {
                color: #252d34;
            }
        }
    }

    .v-stepper--vertical .v-stepper__content {
        padding: 0 !important;
        margin: 0 !important;
    }
    .v-stepper__wrapper {
        overflow: inherit !important;
    }
    .v-stepper--vertical .v-stepper__step {
        padding: 16px 24px 16px;
    }
}
</style>
