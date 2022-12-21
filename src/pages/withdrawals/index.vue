<template>
    <div>
        <Breadcrumb header="Claims">
            <v-breadcrumbs :items="breadItems" class="px-0">
                <template #item="{ item }">
                    <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
                        {{ item.text }}
                    </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
        </Breadcrumb>

        <!-- TODO: This section is only for Admin/Approvers dashboard -->
        <div class="white black--text elevation-2 mb-8 pa-7 rounded">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div class="d-flex flex-column flex-md-row justify-md-space-between">
                            <h2 class="text-h4 font-weight-light">Active Claims</h2>
                            <div>
                                <v-btn-toggle v-model="graphTabButton" mandatory color="primary">
                                    <v-btn class="px-6" value="all" @click="handleAllGraphs"> All </v-btn>

                                    <v-btn class="px-6" value="withdrawal" @click="handleWithdrawalGraph">
                                        <span class="hidden-sm-and-down">Withdrawal</span>
                                    </v-btn>

                                    <v-btn class="px-6" value="retirement" @click="handleRetirementGraph">
                                        <span class="hidden-sm-and-down">Retirement</span>
                                    </v-btn>

                                    <v-btn class="px-6" value="death" @click="handleDeathGraph">
                                        <span class="hidden-sm-and-down">Death</span>
                                    </v-btn>
                                </v-btn-toggle>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
            <div v-if="reloadWithdrawals">
                <!-- ALL GRAPHS CONTENT DISPLAY HERE-->
                <div v-if="showAllGraphs">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="8" offset-md="2">
                                <div class="mt-7 mb-7">
                                    <h3>Temporary title to be removed - All graphs display here</h3>
                                    <canvas id="myChart" width="400" height="200"></canvas>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row class="filter-section">
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="search" label="Search" outlined clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-select v-model="search" outlined :items="items" label="Claim Status"></v-select>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-btn x-large color="primary"> Search </v-btn>
                            </v-col>
                        </v-row>
                        <DividerBar />
                        <v-row class="mt-4 mb-8">
                            <v-col cols="12">
                                <h2>Temporary title to be removed - Withdrawal Table</h2>
                            </v-col>
                            <v-col cols="12">
                                <TableContentHeader
                                    :company="company"
                                    :pension-fund="pensionFund"
                                    :provident-fund="providentFund"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-data-table :headers="headers" :items="contents" :search="search" class="elevation-2">
                                </v-data-table>
                            </v-col>
                        </v-row>
                        <v-row class="mt-4 mb-8">
                            <v-col cols="12">
                                <h2>Temporary title to be removed - Retirement Table</h2>
                            </v-col>
                            <v-col cols="12">
                                <TableContentHeader
                                    :company="company"
                                    :pension-fund="pensionFund"
                                    :provident-fund="providentFund"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-data-table :headers="headers" :items="contents" :search="search" class="elevation-2">
                                </v-data-table>
                            </v-col>
                        </v-row>
                        <v-row class="mt-4 mb-8">
                            <v-col cols="12">
                                <h2>Temporary title to be removed - Death Table</h2>
                            </v-col>
                            <v-col cols="12">
                                <TableContentHeader
                                    :company="company"
                                    :pension-fund="pensionFund"
                                    :provident-fund="providentFund"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-data-table :headers="headers" :items="contents" :search="search" class="elevation-2">
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>

                <!-- WITHDRAWAL GRAPH CONTENT DISPLAY HERE-->
                <div v-if="showWithdrawalGraph">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="8" offset-md="2">
                                <div class="mt-7 mb-7">
                                    <h3>Temporary title to be removed - Withdrawal graph displays here</h3>
                                    <canvas id="myChart" width="400" height="200"></canvas>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row class="filter-section">
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="search" label="Search" outlined clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-select v-model="search" outlined :items="items" label="Claim Status"></v-select>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-btn x-large color="primary"> Search </v-btn>
                            </v-col>
                        </v-row>
                        <DividerBar />
                        <v-row class="mt-4 mb-8">
                            <v-col cols="12">
                                <h2>Temporary title to be removed - Withdrawal Table</h2>
                            </v-col>
                            <v-col cols="12">
                                <TableContentHeader
                                    :company="company"
                                    :pension-fund="pensionFund"
                                    :provident-fund="providentFund"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-data-table :headers="headers" :items="contents" :search="search" class="elevation-2">
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>

                <!-- RETIREMENT GRAPH CONTENT DISPLAY HERE-->
                <div v-if="showRetirementGrapgh">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="8" offset-md="2">
                                <div class="mt-7 mb-7">
                                    <h3>Temporary title to be removed - Retirement graph displays here</h3>
                                    <canvas id="myChart" width="400" height="200"></canvas>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row class="filter-section">
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="search" label="Search" outlined clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-select v-model="search" outlined :items="items" label="Claim Status"></v-select>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-btn x-large color="primary"> Search </v-btn>
                            </v-col>
                        </v-row>
                        <DividerBar />
                        <v-row class="mt-4 mb-8">
                            <v-col cols="12">
                                <h2>Temporary title to be removed - Retirement Table</h2>
                            </v-col>
                            <v-col cols="12">
                                <TableContentHeader
                                    :company="company"
                                    :pension-fund="pensionFund"
                                    :provident-fund="providentFund"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-data-table :headers="headers" :items="contents" :search="search" class="elevation-2">
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>

                <!-- DEATH GRAPH CONTENT DISPLAY HERE-->
                <div v-if="showDeathGraph">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="8" offset-md="2">
                                <div class="mt-7 mb-7">
                                    <h3>Temporary title to be removed - Death Table</h3>
                                    <canvas id="myChart" width="400" height="200"></canvas>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-container>
                        <v-row class="filter-section">
                            <v-col cols="12" sm="4">
                                <v-text-field v-model="search" label="Search" outlined clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-select v-model="search" outlined :items="items" label="Claim Status"></v-select>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-btn x-large color="primary"> Search </v-btn>
                            </v-col>
                        </v-row>
                        <DividerBar />
                        <v-row class="mt-4 mb-8">
                            <v-col cols="12">
                                <h2>Temporary title to be removed - Death Table</h2>
                            </v-col>
                            <v-col cols="12">
                                <TableContentHeader
                                    :company="company"
                                    :pension-fund="pensionFund"
                                    :provident-fund="providentFund"
                                />
                            </v-col>
                            <v-col cols="12">
                                <v-data-table :headers="headers" :items="contents" :search="search" class="elevation-2">
                                </v-data-table>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </div>

        <v-tooltip left color="black">
            <template #activator="{ on, attrs }">
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    fixed
                    right
                    bottom
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    @click="createClaimsDialog = true"
                >
                    <v-icon dark> mdi-plus </v-icon>
                </v-btn>
            </template>
            <span class="text-caption">Create a new claim</span>
        </v-tooltip>

        <v-dialog v-model="createClaimsDialog" persistent width="376px">
            <v-card>
                <v-card-title class="mb-2">Create a new claim</v-card-title>
                <v-card-text>
                    <v-form ref="selectClaimEmployer" v-model="validSelectClaimEmployer">
                        <div class="mb-4">
                            <v-select
                                v-model="selectedBusinessKey"
                                outlined
                                :items="employers"
                                item-text="display"
                                item-value="businessKey"
                                label="Select an Employer"
                                hide-details="auto"
                            >
                                <template #no-data>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="blue lighten-3"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-select>
                            <small v-if="v$.selectedBusinessKey.$error">
                                {{ v$.selectedBusinessKey.$errors[0].$message }}
                            </small>
                        </div>
                        <div class="mb-4">
                            <v-select
                                v-model="selectedClaim"
                                outlined
                                :items="claimTypes"
                                label="Select a claim type"
                                hide-details="auto"
                            ></v-select>
                            <small v-if="v$.selectedClaim.$error">
                                {{ v$.selectedClaim.$errors[0].$message }}
                            </small>
                        </div>

                        <div class="d-flex justify-end">
                            <v-btn text x-large color="primary" class="mr-2" @click="createClaimsDialog = false">
                                Cancel
                            </v-btn>
                            <span v-if="selectedClaim === 'Withdrawal'">
                                <v-btn
                                    x-large
                                    color="primary"
                                    @click="validate(), selectedClaimsRedirect(), createNewClaim()"
                                >
                                    Next
                                </v-btn>
                            </span>
                            <span v-if="selectedClaim === 'Death' || selectedClaim === 'Retirement'">
                                <v-btn x-large color="primary" @click="validate(), selectedClaimsRedirect()">
                                    Next
                                </v-btn>
                            </span>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
        <!-- Process Claim dialog -->
        <v-dialog v-model="processClaim" persistent width="387px">
            <v-card class="pa-6">
                <v-card-title class="pa-0 pb-4"> Retirement and Death claims </v-card-title>
                <v-card-text class="pa-0 pb-4">
                    The processing of Retirement and Death claims is not yet available on this application.You will now
                    be redirected to the
                    <strong class="black--text">Retirement Fund Web</strong> to process the Retirement/Death claim.
                </v-card-text>
                <v-card-text class="pa-0">
                    <div class="d-flex justify-end">
                        <v-btn text color="primary" class="mr-2" @click="processClaim = false"> Cancel </v-btn>
                        <v-btn color="primary" class="elevation-0" @click="createNewClaim"> Continue </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import Breadcrumb from '@/components/Breadcrumb'
import DividerBar from '@/components/DividerBar'
import TableContentHeader from '@/components/filter/TableContentHeader'
import { EmployerSchemeApi, WithdrawalApi } from '~/generated/api'

export default {
    components: { Breadcrumb, DividerBar, TableContentHeader },
    setup() {
        // const { isLoading, isError, data, error, isFetching } = EmployerSchemeApiQueries.useGet()
        // return { v$: useVuelidate(), isLoading, isError, data, error, isFetching }
        return { v$: useVuelidate() }
    },
    data() {
        return {
            showAllGraphs: true,
            showWithdrawalGraph: false,
            showRetirementGrapgh: false,
            showDeathGraph: false,
            graphTabButton: undefined,
            selectedClaim: null,
            company: 'Simba Chips Company (Pty) Ltd (26872634)',
            pensionFund: 'Sanlam Umbrella Pension Fund',
            providentFund: 'Sanlam Umbrella Provident Fund',
            createClaimsDialog: false,
            processClaim: false,
            breadItems: [
                {
                    text: 'Home',
                    disabled: false,
                    to: '/',
                },
            ],
            select: null,
            items: ['All', 'Saved', 'Submitted', 'Re-Submitted', 'Approved', 'Rejected', 'Cancelled', 'Pending Claims'],
            search: '',
            headers: [
                {
                    text: 'First Name',
                    align: 'start',
                    value: 'firstName',
                },
                { text: 'Last Name', value: 'lastName' },
                { text: 'Member Number', value: 'memberNumber' },
                { text: 'ID/Passport Number', value: 'idNumber' },
                { text: 'Payroll Number', value: 'payrollNumber' },
                { text: 'Exit Date', value: 'exitDate' },
                { text: 'Claim Status', value: 'workflowStatus.statusName' },
            ],
            defaultContents: [
                {
                    firstName: 'Ellen',
                    lastName: 'Louw',
                    memberNumber: 283212321,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Saved',
                    },
                },
                {
                    firstName: 'Zack',
                    lastName: 'Katshi',
                    memberNumber: 283212321,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Submitted',
                    },
                },
                {
                    firstName: 'Neron',
                    lastName: 'Kath Way',
                    memberNumber: 283212321,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Re-Submitted',
                    },
                },
                {
                    firstName: 'Van',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Saved',
                    },
                },
                {
                    firstName: 'Ellen',
                    lastName: 'Louw',
                    memberNumber: 283212321,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Saved',
                    },
                },
                {
                    firstName: 'Zack',
                    lastName: 'Katshi',
                    memberNumber: 283212321,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Submitted',
                    },
                },
                {
                    firstName: 'Van',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Saved',
                    },
                },
                {
                    firstName: 'Bulelani',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Pending Claims',
                    },
                },
                {
                    firstName: 'Zaria',
                    lastName: 'Kadima',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Cancelled',
                    },
                },
                {
                    firstName: 'Van',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Saved',
                    },
                },
                {
                    firstName: 'Van',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Approved',
                    },
                },
                {
                    firstName: 'Van',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Rejected',
                    },
                },
                {
                    firstName: 'Van',
                    lastName: 'Louw',
                    memberNumber: 283212331,
                    idNumber: 7809060450909,
                    payrollNumber: 972433,
                    exitDate: '2021/10/25',
                    workflowStatus: {
                        statusName: 'Rejected',
                    },
                },
            ],

            contents: [],
            tab: null,
            tabItems: ['All', 'Withdrawal', 'Retirement', 'Death'],
            employers: [],
            selectedBusinessKey: '',
            claimTypes: ['Withdrawal', 'Retirement', 'Death'],
            validSelectClaimEmployer: true,
            retirementSchemeKey: null,
            fundOptionCode: '',
            fundOptionName: '',
        }
    },
    async fetch() {
        await this.reloadWithdrawals()
        await this.loadEmployers()
    },
    computed: {},
    created() {
        this.$nuxt.$on('rfwUserChanged', $event => {
            this.reloadWithdrawals()
            this.loadEmployerBranches()
        })
    },
    mounted() {
        const ctx = document.getElementById('myChart')

        const defaultContents = this.defaultContents

        const mapDefaultContents = defaultContents.map(element => {
            const mappedElement = element.workflowStatus.statusName
            return mappedElement
        })
        const filterMapDefaultContents = (array, status) => {
            return array.filter(n => n === status).length
        }

        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Saved', 'Submitted', 'Re-Submitted', 'Approved', 'Rejected', 'Cancelled', 'Pending Claims'],
                datasets: [
                    {
                        label: '',
                        data: [
                            filterMapDefaultContents(mapDefaultContents, 'Saved'),
                            filterMapDefaultContents(mapDefaultContents, 'Submitted'),
                            filterMapDefaultContents(mapDefaultContents, 'Re-Submitted'),
                            filterMapDefaultContents(mapDefaultContents, 'Approved'),
                            filterMapDefaultContents(mapDefaultContents, 'Rejected'),
                            filterMapDefaultContents(mapDefaultContents, 'Cancelled'),
                            filterMapDefaultContents(mapDefaultContents, 'Pending Claims'),
                        ],
                        backgroundColor: [
                            'rgba(77,76,82, 1)',
                            'rgba(154,239,136, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(243,103,138, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderColor: [
                            'rgba(77,76,82, 1)',
                            'rgba(154,239,136, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(243,103,138, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        suggestedMin: 0,
                        ticks: {
                            precision: 0,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        callbacks: {
                            label: (val, data) => {
                                if (val.label === 'Saved') {
                                    return 'Saved, please complete and submit for approval and/or to Sanlam for processing.'
                                }
                                if (val.label === 'Re-Submitted') {
                                    return 'Previously submitted and rejected. Amendments done and resubmitted for approval.'
                                }
                                if (val.label === 'Submitted') {
                                    return 'Ready to be reviewed and approved.'
                                }
                                if (val.label === 'Approved') {
                                    return 'Sent to Sanlam processing or, exit form received with no amendments necessary.'
                                }
                                if (val.label === 'Cancelled') {
                                    return 'Exits terminated in an incomplete status. '
                                }
                                if (val.label === 'Pending Claims') {
                                    return 'Exits submitted via the Monthly Contribution Process.'
                                }
                                if (val.label === 'Rejected') {
                                    return 'Amendments required before resubmission for approval.'
                                }
                            },
                        },
                    },
                },
            },
        })
        return myChart
    },
    methods: {
        handleAllGraphs() {
            this.showAllGraphs = true
            this.showWithdrawalGraph = false
            this.showRetirementGrapgh = false
            this.showDeathGraph = false
        },
        handleWithdrawalGraph() {
            this.showAllGraphs = false
            this.showWithdrawalGraph = true
            this.showRetirementGrapgh = false
            this.showDeathGraph = false
        },
        handleRetirementGraph() {
            this.showAllGraphs = false
            this.showWithdrawalGraph = false
            this.showRetirementGrapgh = true
            this.showDeathGraph = false
        },
        handleDeathGraph() {
            this.showAllGraphs = false
            this.showWithdrawalGraph = false
            this.showRetirementGrapgh = false
            this.showDeathGraph = true
        },
        createNewClaim() {
            const selectedEmployer = this.employers.find(employer => employer.businessKey === this.selectedBusinessKey)

            this.$router.push({
                name: 'withdrawals-MemberSearch',
                query: {
                    schemeName: selectedEmployer.display,
                    schemeCode: selectedEmployer.businessKey,
                },
            })
        },
        async reloadWithdrawals() {
            await WithdrawalApi.get()
                .then(data => {
                    this.contents = this.defaultContents.concat(data)
                })
                .catch(() => {
                    this.contents = this.defaultContents.concat([])
                })
        },
        async loadEmployers() {
            await EmployerSchemeApi.get()
                .then(data => {
                    this.employers = data
                })
                .catch(() => {
                    this.employers = []
                })
        },
        async loadFundOption() {
            await EmployerSchemeApi.getBySchemeCode(this.schemeCode).then(data => {
                this.fundOptionName = data.fundOptionName
                this.fundOptionCode = data.fundOptionCode
                this.retirementSchemeKey = data.retirementSchemeKey
            })
        },
        async loadEmployerBranches() {
            await EmployerSchemeApi.getBranches(this.retirementSchemeKey)
                .then(data => {
                    this.employerBranches = data
                })
                .catch(() => {
                    this.employerBranches = []
                })
        },
        async validate() {
            const validateCreateNewClaim = await this.v$.$validate()
            if (!validateCreateNewClaim) {
                return
            }

            this.processClaim = true
            this.createClaimsDialog = false
        },
        selectedClaimsRedirect() {
            if (this.selectedClaim === 'Retirement' || this.selectedClaim === 'Death') {
                window.location.href = 'https://sc-dev.sanlam.co.za/scrfw/Applications/MemberMovement/Default'
            }
        },
        withdrawalCheck() {
            if (this.selectedClaim === 'Withdrawal') {
                this.processClaim = false
            }
        },
    },
    validations: {
        selectedBusinessKey: {
            required,
        },
        selectedClaim: {
            required,
        },
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

.graph-tab .v-slide-group__content {
    border: 1px solid #bcc4ce;
    border-radius: 4px;
    overflow: hidden;
}

.v-tabs-slider-wrapper {
    display: none;
}

.graph-tab .v-tab {
    text-transform: none;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    &:not(:last-child) {
        border-right: 1px solid #bcc4ce;
    }
}

.graph-tab .v-tab.v-tab--active {
    background-color: #e6f1fa;
    border-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
}

.v-btn {
    text-transform: none;
}

.snackbar-list {
    .v-snack {
        height: auto !important;
        position: relative !important;
    }

    .v-snack__wrapper {
        margin: 5px !important;
    }

    .v-snack__content {
        border-left: 5px solid #0075c9;
        padding: 5px;
        padding-right: 0;
    }
}

.v-window-item {
    margin: auto;
    max-width: 1200px;
    width: 100%;
}
.v-window-item svg {
    max-width: 1015px;
    width: 100%;
}

.pure-vue-bar-chart text {
    font-size: 0.875rem !important;
    font-family: 'Roboto', sans-serif !important;
}

.v-window-item g > g g rect {
    fill: #4d4c52 !important;
    position: inherit;
    justify-self: center;
    width: 70px;
}

.v-window-item g > g g rect + text {
    color: white;
}

.v-window-item g > g g:nth-child(1) rect {
    fill: #4d4c52 !important;
    position: inherit;
    justify-self: center;
    & + text {
        transform: translate(10px, 0);
    }
}

.v-window-item g > g g:nth-child(2) {
    & rect {
        fill: #9aef88 !important;
        position: relative;
        justify-self: center;
        transform: translate(100px, 0);
        & + text {
            transform: translate(110px, 0);
        }
    }
    & g > text {
        transform: translate(110px, 0);
    }
}

.v-window-item g > g g:nth-child(3) {
    & rect {
        fill: #f7ad66 !important;
        position: relative;
        justify-self: center;
        transform: translate(190px, 0);
        & + text {
            transform: translate(200px, 0);
        }
    }
    & g > text {
        transform: translate(200px, 0);
    }
}

.v-window-item g > g g:nth-child(4) {
    & rect {
        fill: #8b90ec !important;
        position: relative;
        justify-self: center;
        transform: translate(250px, 0);
        & + text {
            transform: translate(260px, 0);
        }
    }
    & g > text {
        transform: translate(260px, 0);
    }
}

.v-window-item g > g g:nth-child(5) {
    & rect {
        fill: #f3678a !important;
        position: relative;
        justify-self: center;
        transform: translate(350px, 0);
        & + text {
            transform: translate(360px, 0);
        }
    }
    & g > text {
        transform: translate(360px, 0);
    }
}

.v-window-item g > g g:nth-child(6) {
    & rect {
        fill: #e7d95e !important;
        position: relative;
        justify-self: center;
        transform: translate(450px, 0);
        & + text {
            transform: translate(460px, 0);
        }
    }
    & g > text {
        transform: translate(460px, 0);
    }
}

.v-window-item g > g g:nth-child(7) {
    & rect {
        fill: #e7d95e !important;
        position: relative;
        justify-self: center;
        transform: translate(550px, 0);
        & + text {
            transform: translate(560px, 0);
        }
    }
    & g > text {
        transform: translate(560px, 0);
    }
}
</style>
