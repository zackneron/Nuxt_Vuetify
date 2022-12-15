<template>
    <div>
        <Breadcrumb :header="header" :bold-text="fundOptionName" :plain-text="plainText">
            <v-breadcrumbs :items="breadItems" class="px-0">
                <template #item="{ item }">
                    <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
                        {{ item.text }}
                    </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
        </Breadcrumb>
        <div class="white black--text elevation-2 pa-7 rounded">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="text-h5 font-weight-light">Find a member</h2>
                    </v-col>
                </v-row>
            </v-container>

            <v-form>
                <v-container>
                    <v-row class="filter-section mb-8">
                        <v-col cols="12" sm="4">
                            <v-text-field
                                v-model="search"
                                label="Search"
                                outlined
                                clearable
                                required
                                :rules="[v => !!v || 'Item is required']"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-btn x-large color="primary" class="elevation-0"> Search </v-btn>
                        </v-col>
                    </v-row>
                    <DividerBar />
                    <v-row class="mt-4 mb-8">
                        <v-col cols="12">
                            <v-data-table
                                :headers="headers"
                                :items="members"
                                :search="search"
                                class="elevation-2"
                                @click:row="memberSteps"
                            >
                                <template #no-data>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-data-table>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import Breadcrumb from '@/components/Breadcrumb'
import DividerBar from '@/components/DividerBar'
import { EmployerSchemeApi } from '~/generated/api'
import { useMemberSearchStore } from '@/store/memberSearch'

export default {
    name: 'MemberSearch',
    components: { Breadcrumb, DividerBar },
    props: ['retirementScheme'],
    data() {
        return {
            selectedBusinessKey: null,
            header: 'Claims',
            employerSchemeName: 'testing',
            employerSchemeCode: 'testing',
            memberGroup: 'testing',
            middleName: 'testing',
            dateOfBirth: 'testing',
            title: 'testing',
            gender: 'testing',
            employeeNumber: 'testing',
            age: 0,
            fundOptionName: 'Sanlam Umbrella Pension Fund',
            fundOptionCode: 'ABC1234',
            retirementSchemeKey: null,
            memberName: 'testing',
            memberLastName: 'testing',
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
                    text: 'Member Search',
                    disabled: true,
                    to: 'member-search',
                },
            ],
            select: null,
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            search: '',
            headers: [
                {
                    text: 'Membership Number',
                    align: 'start',
                    value: 'membershipNumber',
                },
                { text: 'First Name', value: 'firstName' },
                { text: 'Last Name', value: 'lastName' },
                { text: 'ID/Passport Number', value: 'idNumber' },
                { text: 'Payroll Number', value: 'payrollNumber' },
            ],
        }
    },

    computed: {
        plainText() {
            // TODO this name doesnt make sense
            return ' / ' + this.employerSchemeName
        },
        memberInfo() {
            return this.members.firstName + this.members.lastName
        },
        ...mapState(useMemberSearchStore, ['members']),
    },
    async mounted() {
        this.employerSchemeName = this.$route.query.schemeName // employer display
        this.employerSchemeCode = this.$route.query.schemeCode // employer businessKey

        await this.loadFundOption()
        await this.loadMembers(this.employerSchemeName, this.fundOptionName)
    },
    created() {
        this.$nuxt.$on('rfwUserChanged', $event => {
            this.loadFundOption()
        })
    },
    methods: {
        memberSteps(selectedMember) {
            this.loadMemberDetails(selectedMember.membershipNumber)

            this.$router.push({
                path: '/withdrawals/withdrawal/member-details',
                query: {
                    schemeName: this.employerSchemeName,
                    schemeCode: this.employerSchemeCode,
                    fundOptionName: this.fundOptionName,
                },
            })
        },
        async loadFundOption() {
            await EmployerSchemeApi.getBySchemeCode(this.employerSchemeCode).then(data => {
                this.fundOptionName = data.fundOptionName
                this.fundOptionCode = data.fundOptionCode
                this.retirementSchemeKey = data.retirementSchemeKey
            })
        },
        ...mapActions(useMemberSearchStore, ['loadMembers', 'loadMemberDetails']),
    },
}
</script>

<style lang="scss">
.filter-section {
    margin-bottom: 1.3rem;

    @include sm {
        margin-bottom: 0;
    }
}

.v-data-table__wrapper {
    & > table {
        & > tbody {
            & > tr {
                & > td {
                    &:first-child {
                        color: $brand;
                    }
                }
            }
        }
    }
}
</style>
