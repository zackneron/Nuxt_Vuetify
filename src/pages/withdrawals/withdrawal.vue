<template>
    <v-row class="claim-steps">
        <v-col cols="12" md="3">
            <ul class="flex-column list justify-start d-sm-flex">
                <li class="list-item">
                    <span class="list-item__title"
                        ><NuxtLink to="/withdrawals/withdrawal/member-details">Member Details</NuxtLink></span
                    >
                </li>
                <li class="list-item">
                    <span class="list-item__title"
                        ><NuxtLink to="/withdrawals/withdrawal/claims-details">Claims Details</NuxtLink></span
                    >
                </li>
                <li class="list-item">
                    <span class="list-item__title"
                        ><NuxtLink to="/withdrawals/withdrawal/payment-options">Payment Options</NuxtLink></span
                    >
                </li>
                <li class="list-item">
                    <span class="list-item__title"
                        ><NuxtLink to="/withdrawals/withdrawal/document-upload">Document Upload</NuxtLink></span
                    >
                </li>
                <li class="list-item">
                    <span class="list-item__title"
                        ><NuxtLink to="/withdrawals/withdrawal/submit-claim">Submit Claim</NuxtLink></span
                    >
                </li>
            </ul>
        </v-col>
        <v-col cols="12" md="9">
            <Breadcrumb :header="header" :bold-text="fundOptionName" :plain-text="plainText">
                <v-breadcrumbs :items="breadItems" class="d-flex justify-start px-0">
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
            <NuxtChild keep-alive />
        </v-col>
        <div class="dialogs-wrapper">
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
    </v-row>
</template>

<script>
import { mapState } from 'pinia'

import MemberProfile from '../../components/StepsAddNewClaim/MemberProfile.vue'
import Breadcrumb from '@/components/Breadcrumb'

import { useMemberSearchStore } from '@/store/memberSearch'

export default {
    components: {
        Breadcrumb,
        MemberProfile,
    },
    layout: 'stepper',
    data() {
        return {
            breadItems: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'Withdrawals',
                    disabled: false,
                },
                {
                    text: 'Withdrawal',
                    disabled: true,
                },
            ],
            attrs: null,
            on: null,
            header: null,
            firstName: null,
            lastName: null,
            middleName: null,
            employeeNumber: null,
            gender: null,
            membershipNumber: null,
            memberTitle: null,
            maritalStatus: null,
            taxNumber: null,
            dateOfBirth: null,
            plannedRetirement: null,
            retirementDate: null,
            memberProfile: false,
            employerSchemeName: '',
            employerSchemeCode: '',
            fundOptionName: '',
        }
    },
    computed: {
        plainText() {
            // TODO this name doesnt make sense
            return ' / ' + this.employerSchemeName
        },
        plainText2() {
            return this.fundOptionName + ' / ' + this.employerSchemeName
        },
        ...mapState(useMemberSearchStore, ['memberDetails']),
    },
    created() {
        this.employerSchemeName = this.$route.query.schemeName
        this.employerSchemeCode = this.$route.query.schemeCode
        this.fundOptionName = this.$route.query.fundOptionName

        this.header = this.memberDetails.firstName + ' ' + this.memberDetails.lastName
        this.firstName = this.memberDetails.firstName
        this.middleName = this.memberDetails.middleName
        this.lastName = this.memberDetails.lastName
        this.membershipNumber = this.memberDetails.membershipNumber
        this.employeeNumber = this.memberDetails.payrollNumber
        this.gender = this.memberDetails.gender
        this.memberTitle = this.memberDetails.title
        this.maritalStatus = this.memberDetails.maritalStatus
        this.taxNumber = this.memberDetails.taxNumber
        this.dateOfBirth = this.memberDetails.dateOfBirth
        this.plannedRetirement = this.memberDetails.plannedRetirement
        this.retirementDate = this.memberDetails.retirementDate
        this.idNumber = this.memberDetails.idNumber
        this.emailAddress = this.memberDetails.emailAddress
        this.occupation = this.memberDetails.occupation
        this.mobilePhone = this.memberDetails.mobilePhone
        this.paypointKey = this.memberDetails.paypointKey
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
}
li {
    margin: 0 0.5rem;
    padding: 0.25rem;
    font-size: 1rem;
}
.claim-steps {
    .list-item {
        position: relative;
        margin-bottom: 30px;
        &:not(:last-child)::before {
            content: '';
            height: 65px;
            width: 1px;
            background-color: #8a7e71;
            position: absolute;
            left: 21px;
            top: 55%;
        }
    }
}
.list-item__title {
    text-align: left !important;

    a {
        color: $white;
        text-decoration: none;
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 30px;
        pointer-events: none;

        &::before {
            content: '';
            position: absolute;
            left: 11px;
            width: 13px;
            height: 13px;
            background-color: #252d34;
            border-radius: 50%;
            border: 2px solid #8a7e71;
        }
    }
}

.list-item__title {
    & > .nuxt-link-active {
        background: $brand;
        border-radius: 25px;
        padding-top: 5px;
        padding-bottom: 5px;
        &::before {
            content: '';
            background-color: $white;
            border: 2px solid $white;
        }
    }
}
</style>
