<template>
    <v-card-text class="pa-0">
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Member group</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ memberGroup }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Membership number</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ membershipNumber }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Employee number</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ employeeNumber }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Title</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ title }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">First name</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ memberName }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Middle name</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ middleName }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Last name</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ memberSurname }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Date of birth</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ dateOfBirth }}</span>
            </v-col>
        </v-row>

        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Gender</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ gender }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Marital status</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ maritalStatus }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Language</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ language }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Income tax reference number</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ taxNumber }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Retirement date</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ retirementDate }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Early retirement age</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ normalRetirementAge }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Normal retirement age</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ normalRetirementAge }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Planned retirement age</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ plannedRetirementAge }}</span>
            </v-col>
        </v-row>

        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Date joined the company</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ dateJoinedCompany }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Pensionable service date</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ pensionableDate }}</span>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-2">
            <v-col cols="12" sm="5" class="py-0 py-md-0">
                <span class="text-body-1 font-weight-bold">Debt recovery agreement</span>
            </v-col>
            <v-col cols="12" sm="7" class="py-0 py-md-0">
                <span class="text-body-1">{{ debtRecovery }}</span>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
    props: [
        'employeeNumber',
        'dateJoinedCompany',
        'memberSurname',
        'membershipNumber',
        'gender',
        'title',
        'middleName',
        'pensionableDate',
        'plannedRetirementAge',
        'normalRetirementAge',
        'retirementDate',
        'taxNumber',
        'language',
        'maritalStatus',
        'dateOfBirth',
        'memberName',
        'debtRecovery',
        'emailAddress',
        'idNumber',
        'occupation',
        'mobileNumber',
    ],
    data() {
        return {
            memberGroup: '',
        }
    },
    async fetch() {
        await this.loadMemberGroup()
    },
    computed: {},
    created() {
        this.paypointKey = this.$route.query.paypointKey
    },
    methods: {
        async loadMemberGroup() {
            // TODO: Use generated API Client once this endpoint actually exists
            await this.$axios
                .get('/api/member/getMemberGroup?paypointKey=' + this.paypointKey)
                .then(res => {
                    this.memberGroup = res.data.name
                })
                .catch(() => {
                    this.memberGroups = []
                })
        },
    },
}
</script>
