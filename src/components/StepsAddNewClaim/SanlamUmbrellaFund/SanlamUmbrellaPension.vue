<template>
    <div class="inner-margin-1">
        <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
            <v-form ref="claimDetailsForm">
                <v-card elevation="0">
                    <v-card-text class="pa-0">
                        <v-container>
                            <v-row>
                                <v-col cols="12" class="pa-0">
                                    <v-card-title class="text-h5 px-0 black--text font-weight-light">
                                        Payment option elected
                                    </v-card-title>
                                    <h2 class="mb-6 black--text">Sanlam Umbrella Pension Fund</h2>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" class="pa-0">
                                    <span class="mb-2 d-block font-weight-bold black--text">
                                        Please select a payment option
                                    </span>
                                    <v-radio-group v-model="selectedPaymentOption" column hide-details="auto">
                                        <v-radio
                                            v-show="viewSamePaymentPensionFund"
                                            label="Same payment options as Sanlam Umbrella Provident Fund"
                                            value="SameAsProvidentFund"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocusPensionFund }"
                                            :disabled="disableSameAsProvidentOption"
                                            @change="showSamePaymentPensionFund"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span>Same payment options as Sanlam Umbrella Provident Fund </span>
                                                    <v-btn
                                                        v-show="isActivePensionFund"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActivePensionFund }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOptionPensionFund"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewBenefitPensionFund"
                                            label="Leave benefit in the Fund (Paid-up member)"
                                            value="Leave benefit in the Fund (Paid-up member)"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocusPensionFund }"
                                            @change="showBenefitPensionFund"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span
                                                        >Leave benefit in the Fund (Paid-up member)
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
                                                            <span class="d-block text-caption"
                                                                >In-Fund Preservation means that the member’s benefit
                                                                will remain in the fund.</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >The advantage of this option is that the member retains
                                                                his/her investments and defers the payment of tax.</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >It also affords the member time to make a decision re
                                                                preservation or annuitisation or cash payment of his/her
                                                                withdrawal benefit.</span
                                                            >
                                                        </v-tooltip>
                                                    </span>
                                                    <v-btn
                                                        v-show="isActivePensionFund"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActivePensionFund }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOptionPensionFund"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewTransferPensionFund"
                                            label="Transfer full benefit to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            value="Transfer full benefit to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocusPensionFund }"
                                            @change="showTransferPensionFund"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span
                                                        >Transfer full benefit to a Pension Fund, Provident Fund,
                                                        Retirement Annuity Fund or a Preservation Fund</span
                                                    >
                                                    <v-btn
                                                        v-show="isActivePensionFund"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActivePensionFund }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOptionPensionFund"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewPayPortionPensionFund"
                                            label="Pay a portion of the benefit in cash and transfer the balance to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            value="Pay a portion of the benefit in cash and transfer the balance to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocusPensionFund }"
                                            @change="showPayPortionPensionFund"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span
                                                        >Pay a portion of the benefit in cash and transfer the balance
                                                        to a Pension Fund, Provident Fund, Retirement Annuity Fund or a
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
                                                            <span class="d-block text-caption"
                                                                >Members who elect to the Sanlam Plus Preservation Fund,
                                                                will have their investment transferred seamlessly</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >provided that the member’s Investment portfolio(s)
                                                                exist(s) on the Sanlam Plus Preservation Fund.</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >In these cases, it means that the funds will not be
                                                                disinvested in cash but transferred directly to the
                                                                chosen portfolios.</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >In order to do such a transfer, we would require the
                                                                separate Sanlam Plus Preservation Fund application form
                                                                to be completed.</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >There’s a link below for the forms.</span
                                                            >
                                                        </v-tooltip>
                                                    </span>
                                                    <v-btn
                                                        v-show="isActivePensionFund"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActivePensionFund }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOptionPensionFund"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewFullBenefitPensionFund"
                                            label="Pay the full benefit in cash (This will be subject to tax)"
                                            value="Pay the full benefit in cash (This will be subject to tax)"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocusPensionFund }"
                                            @change="showFullBenefitPensionFund"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span
                                                        >Pay the full benefit in cash (This will be subject to
                                                        tax)</span
                                                    >
                                                    <v-btn
                                                        v-show="isActivePensionFund"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActivePensionFund }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOptionPensionFund"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                        <v-radio
                                            v-show="viewNoPaymentPensionFund"
                                            label="No payment instructions available"
                                            value="No payment instructions available"
                                            class="mb-2 pa-2 radio-item"
                                            :class="{ focus: isFocusPensionFund }"
                                            @change="showNoPaymentPensionFund"
                                        >
                                            <template #label>
                                                <div class="d-flex justify-space-between align-center flex-grow-1">
                                                    <span
                                                        >No payment instructions available
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
                                                            <span class="d-block text-caption"
                                                                >The member will become a paid-up member of the fund,
                                                                until such time</span
                                                            >
                                                            <span class="d-block text-caption"
                                                                >as we receive a written instruction to pay or transfer
                                                                his/her benefit.</span
                                                            >
                                                        </v-tooltip>
                                                    </span>
                                                    <v-btn
                                                        v-show="isActivePensionFund"
                                                        text
                                                        color="primary"
                                                        :class="{ active: isActivePensionFund }"
                                                        class="text-body-2"
                                                        @click="toggleChangeOptionPensionFund"
                                                    >
                                                        Change
                                                    </v-btn>
                                                </div>
                                            </template>
                                        </v-radio>
                                    </v-radio-group>
                                    <small v-if="v$.selectedPaymentOption.$error" class="validate-field">
                                        {{ v$.selectedPaymentOption.$errors[0].$message }}
                                    </small>

                                    <!-- Option 1 No Content -->

                                    <!-- Option 2 -->
                                    <div v-if="showBenefitPensionFundText" class="pa-2">
                                        <DividerBar />
                                        <LeaveBenefitFundContent />
                                    </div>

                                    <!-- Option 3 -->
                                    <div v-if="showTransferPensionFundText" class="pa-2">
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
                                                    v-if="viewSanlamPlusPensionFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="Sanlam Plus Preservation Fund"
                                                        value="Sanlam Plus Preservation Fund"
                                                        @click="showSanlamPlusPensionFund"
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
                                                    v-if="viewRetirementAnnuityFundPensionFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        @click="showRetirementAnnuityFundPensionFund"
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

                                            <div v-if="showSanlamPlusPensionFundText" class="pa-2">
                                                <div grey class="text-bg-info py-6 px-7 mb-3">
                                                    <div class="d-flex align-start">
                                                        <v-icon primary class="mr-4 primary--text">
                                                            mdi-information
                                                        </v-icon>
                                                        <div>
                                                            <p class="mb-0">
                                                                Members who elect to have their benefit transferred to
                                                                the Sanlam Plus Preservation Fund, will have their
                                                                investments transferred seamlessly provided that the
                                                                member's investment portfolio(s) exist(s) on the Sanlam
                                                                Plus Preservation Fund. In these cases, it means that
                                                                the funds will not be disinvested in cash, but
                                                                transferred directly to the chosen portfolios.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <DividerBar />
                                                <div class="mt-4">
                                                    <v-card-title class="text-h5 px-0 black--text">
                                                        Broker / Representative Details
                                                    </v-card-title>

                                                    <span class="mb-2 d-block font-weight-bold black--text">
                                                        Do you have a financial representative?
                                                    </span>
                                                    <v-radio-group v-model="financialRepresentative" class="mb-3" row>
                                                        <v-radio
                                                            label="Yes"
                                                            value="Yes"
                                                            class="mr-sm-16"
                                                            @click="showFinRepresentative = true"
                                                        ></v-radio>
                                                        <v-radio
                                                            label="No"
                                                            value="No"
                                                            @click="showFinRepresentative = false"
                                                        ></v-radio>
                                                    </v-radio-group>
                                                    <FinancialRepresentative v-show="showFinRepresentative" />

                                                    <v-row>
                                                        <v-col cols="12">
                                                            <div grey class="text-bg-info py-6 px-7">
                                                                <div class="d-flex align-start">
                                                                    <v-icon primary class="mr-4 primary--text">
                                                                        mdi-information
                                                                    </v-icon>
                                                                    <p class="mb-0">
                                                                        The member is required to fill out a
                                                                        <a href="#"
                                                                            >Sanlam Preservation Fund application
                                                                            form</a
                                                                        >.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                            </div>
                                            <div v-if="showRetirementAnnuityFundPensionFundText" class="pa-2">
                                                <DividerBar />
                                                <div class="mt-4">
                                                    <v-card-title class="text-h5 px-0 black--text">
                                                        Broker / Representative Details
                                                    </v-card-title>

                                                    <span class="mb-2 d-block font-weight-bold black--text">
                                                        Do you have a financial representative?
                                                    </span>
                                                    <v-radio-group
                                                        v-model="retirementFinancialRepresentative"
                                                        class="mb-3"
                                                        row
                                                    >
                                                        <v-radio
                                                            label="Yes"
                                                            value="Yes"
                                                            class="mr-sm-16"
                                                            @click="showRetirementFinRepresentative = true"
                                                        ></v-radio>
                                                        <v-radio
                                                            label="No"
                                                            value="No"
                                                            @click="showRetirementFinRepresentative = false"
                                                        ></v-radio>
                                                    </v-radio-group>

                                                    <FinancialRepresentative v-show="showRetirementFinRepresentative" />

                                                    <v-row>
                                                        <v-col cols="12">
                                                            <div grey class="text-bg-info py-6 px-7">
                                                                <div class="d-flex align-start">
                                                                    <v-icon primary class="mr-4 primary--text">
                                                                        mdi-information
                                                                    </v-icon>
                                                                    <p class="mb-0">
                                                                        Sanlam will contact the member or broker for the
                                                                        application forms of the receiving fund.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Option 4 -->
                                    <div v-if="showPayPortionPensionFundText" class="pa-2">
                                        <DividerBar />
                                        <div class="mt-4">
                                            <v-card-title class="text-h5 px-0 black--text">
                                                Pay a portion of the benefit in cash and transfer the balance to:
                                            </v-card-title>
                                            <small
                                                v-if="v$.radioPayAPortionOfBenefitInCash.$error"
                                                class="validate-field"
                                            >
                                                Please select a payment option.
                                            </small>
                                            <v-radio-group
                                                v-model="radioPayAPortionOfBenefitInCash"
                                                column
                                                class="mt-0"
                                                hide-details="auto"
                                            >
                                                <div
                                                    v-if="viewPayPortionSanlamPlusPensionFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="Sanlam Plus Preservation Fund"
                                                        value="Sanlam Plus Preservation Fund"
                                                        @click="showPayPortionSanlamPlusPensionFund"
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
                                                    v-if="viewPayPortionRetirementAnnuityFundPensionFund"
                                                    v-show="isFocusInner"
                                                    :class="{
                                                        focus: isFocusInner,
                                                    }"
                                                    class="radio-item d-flex justify-space-between align-center pa-2"
                                                >
                                                    <v-radio
                                                        label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                                                        @click="showPayPortionRetirementAnnuityFundPensionFund"
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
                                            <div v-if="showPayPortionSanlamPlusPensionFundText" class="pa-2">
                                                <div
                                                    v-if="isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund"
                                                    class="mb-7"
                                                >
                                                    <v-card-title class="text-h5 px-0 black--text">
                                                        Preservation Fund Details
                                                    </v-card-title>
                                                    <v-row class="mx-0 mb-4">
                                                        <v-col cols="12" sm="7" class="pa-0">
                                                            <span class="mb-2 d-block font-weight-bold black--text">
                                                                Indicate rand amount to be trasferred to preservation
                                                                fund.
                                                            </span>
                                                            <v-text-field
                                                                v-model="rand"
                                                                style="width: 150px"
                                                                outlined
                                                                hide-details
                                                                placeholder="R"
                                                                type="number"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <div grey class="text-bg-info py-6 px-7 mb-3">
                                                    <div class="d-flex align-start">
                                                        <v-icon primary class="mr-4 primary--text">
                                                            mdi-information
                                                        </v-icon>
                                                        <div>
                                                            <p class="mb-0">
                                                                Members who elect to have their benefit transferred to
                                                                the Sanlam Plus Preservation Fund, will have their
                                                                investments transferred seamlessly provided that the
                                                                member's investment portfolio(s) exist(s) on the Sanlam
                                                                Plus Preservation Fund. In these cases, it means that
                                                                the funds will not be disinvested in cash, but
                                                                transferred directly to the chosen portfolios.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <DividerBar />
                                                <div class="mt-4">
                                                    <v-card-title class="text-h5 px-0 black--text">
                                                        Cash portion as:
                                                    </v-card-title>
                                                    <small
                                                        v-if="v$.cashPortionSanlamPlusPensionFund.$error"
                                                        class="validate-field"
                                                    >
                                                        Please select a payment option.
                                                    </small>
                                                    <v-radio-group
                                                        v-model="cashPortionSanlamPlusPensionFund"
                                                        column
                                                        class="mt-0"
                                                    >
                                                        <div
                                                            v-if="viewPayPortionBenefitSanlamPlusPensionFund"
                                                            v-show="isFocusLast"
                                                            :class="{
                                                                focus: isFocusLast,
                                                            }"
                                                            class="radio-item d-flex justify-space-between align-center pa-2"
                                                        >
                                                            <v-radio
                                                                label="Percentage (%) or (R) Rand value. The balance will be transferred to Sanlam Plus Preservation fund."
                                                                value="PercentageRandValue"
                                                                @click="showPayPortionBenefitSanlamPlusPensionFund"
                                                            ></v-radio>
                                                            <v-btn
                                                                v-show="isActiveLast"
                                                                text
                                                                color="primary"
                                                                :class="{ active: isActiveLast }"
                                                                class="text-body-2"
                                                                @click="toggleChangeLastOption"
                                                            >
                                                                Change
                                                            </v-btn>
                                                        </div>

                                                        <div
                                                            v-if="viewTransferAmountSanlamPlusPensionFund"
                                                            v-show="isFocusLast"
                                                            :class="{
                                                                focus: isFocusLast,
                                                            }"
                                                            class="radio-item d-flex justify-space-between align-center pa-2"
                                                        >
                                                            <v-radio
                                                                label="The left over balance from the transfer to Sanlam Plus Preservation fund."
                                                                value="leftOverBalanceFromTransferToSanlamPlusPreservationFund"
                                                                @click="showTransferAmountSanlamPlusPensionFund"
                                                            ></v-radio>
                                                            <v-btn
                                                                v-show="isActiveLast"
                                                                text
                                                                color="primary"
                                                                :class="{ active: isActiveLast }"
                                                                class="text-body-2"
                                                                @click="toggleChangeLastOption"
                                                            >
                                                                Change
                                                            </v-btn>
                                                        </div>
                                                    </v-radio-group>

                                                    <!-- I want to pay a portion of the benefit in cash -->
                                                    <div
                                                        v-show="showPayPortionBenefitSanlamPlusPensionFundText"
                                                        class="pa-2"
                                                    >
                                                        <DividerBar />
                                                        <PortionBenefitCash />
                                                    </div>

                                                    <!-- I want to transfer an amount to the Sanlam Plus Preservation Fund -->
                                                    <div
                                                        v-if="showTransferAmountSanlamPlusPensionFundText"
                                                        class="pa-2"
                                                    >
                                                        <DividerBar />
                                                        <div class="mt-4">
                                                            <v-card-title
                                                                class="text-h5 px-0 black--text mb-4 font-weight-light"
                                                            >
                                                                Cash Payment Details
                                                            </v-card-title>
                                                            <v-row class="mx-0">
                                                                <v-col cols="12" sm="5" class="pa-0">
                                                                    <span
                                                                        class="mb-2 d-block font-weight-bold black--text"
                                                                    >
                                                                        Benefit election date
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

                                                                            <span class="d-block"
                                                                                >The later of the exit date</span
                                                                            >
                                                                            <span class="d-block"
                                                                                >or the date that the member signed the
                                                                                exit forms.</span
                                                                            >
                                                                        </v-tooltip>
                                                                    </span>
                                                                    <v-text-field
                                                                        type="date"
                                                                        outlined
                                                                        :value="benefitElectionDate"
                                                                        required
                                                                    ></v-text-field>
                                                                    <template v-if="v$.benefitElectionDate.$dirty">
                                                                        <small v-if="v$.benefitElectionDate.$error">
                                                                            Please enter the Benefit Election Date
                                                                        </small>
                                                                    </template>
                                                                </v-col>
                                                            </v-row>
                                                            <BankingDetails />
                                                        </div>
                                                        <DividerBar />
                                                        <div class="mt-4">
                                                            <v-card-title class="text-h5 px-0 black--text">
                                                                Broker / Representative Details
                                                            </v-card-title>

                                                            <span class="mb-2 d-block font-weight-bold black--text">
                                                                Do you have a financial representative?
                                                            </span>
                                                            <v-radio-group
                                                                v-model="transferAmountFinancialRepresentative"
                                                                class="mb-3"
                                                                row
                                                            >
                                                                <v-radio
                                                                    label="Yes"
                                                                    value="Yes"
                                                                    class="mr-sm-16"
                                                                    @click="showTransferAmountFinRepresentative = true"
                                                                ></v-radio>
                                                                <v-radio
                                                                    label="No"
                                                                    value="No"
                                                                    @click="showTransferAmountFinRepresentative = false"
                                                                ></v-radio>
                                                            </v-radio-group>
                                                            <FinancialRepresentative
                                                                v-show="showTransferAmountFinRepresentative"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!-- A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund -->
                                            <div v-if="showPayPortionRetirementAnnuityFundPensionFundText" class="pa-2">
                                                <DividerBar />
                                                <div
                                                    v-if="isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund"
                                                    class="mb-7"
                                                >
                                                    <v-card-title class="text-h5 px-0 black--text">
                                                        Preservation Fund Details
                                                    </v-card-title>
                                                    <v-row class="mx-0 mb-4">
                                                        <v-col cols="12" sm="7" class="pa-0">
                                                            <span class="mb-2 d-block font-weight-bold black--text">
                                                                Indicate rand amount to be trasferred to preservation
                                                                fund.
                                                            </span>
                                                            <v-text-field
                                                                v-model="rand"
                                                                style="width: 150px"
                                                                outlined
                                                                hide-details
                                                                placeholder="R"
                                                                type="number"
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <DividerBar />
                                                <div class="mt-4">
                                                    <v-card-title class="text-h5 px-0 black--text">
                                                        Cash portion as:
                                                    </v-card-title>
                                                    <small
                                                        v-if="v$.cashRetirementPayment.$error"
                                                        class="validate-field"
                                                    >
                                                        Please select a payment option.
                                                    </small>
                                                    <v-radio-group v-model="cashRetirementPayment" column class="mt-0">
                                                        <div
                                                            v-if="viewRetirementPayPortionBenefitPensionFund"
                                                            v-show="isFocusLast"
                                                            :class="{
                                                                focus: isFocusLast,
                                                            }"
                                                            class="radio-item d-flex justify-space-between align-center pa-2"
                                                        >
                                                            <v-radio
                                                                label="Percentage (%) or (R) Rand value. The balance will be transferred to Sanlam Plus Preservation fund."
                                                                value="PercentageRandValue."
                                                                @click="showRetirementPayPortionBenefitPensionFund"
                                                            ></v-radio>
                                                            <v-btn
                                                                v-show="isActiveLast"
                                                                text
                                                                color="primary"
                                                                :class="{ active: isActiveLast }"
                                                                class="text-body-2"
                                                                @click="toggleChangeLastOption"
                                                            >
                                                                Change
                                                            </v-btn>
                                                        </div>

                                                        <div
                                                            v-if="viewRetirementPayTransferAmountPensionFund"
                                                            v-show="isFocusLast"
                                                            :class="{
                                                                focus: isFocusLast,
                                                            }"
                                                            class="radio-item d-flex justify-space-between align-center pa-2"
                                                        >
                                                            <v-radio
                                                                label="The left over balance from the transfer to Sanlam Plus Preservation fund."
                                                                value="leftOverBalanceFromTransferToSanlamPlusPreservationFund"
                                                                @click="showRetirementPayTransferAmountPensionFund"
                                                            ></v-radio>
                                                            <v-btn
                                                                v-show="isActiveLast"
                                                                text
                                                                color="primary"
                                                                :class="{ active: isActiveLast }"
                                                                class="text-body-2"
                                                                @click="toggleChangeLastOption"
                                                            >
                                                                Change
                                                            </v-btn>
                                                        </div>
                                                    </v-radio-group>

                                                    <!-- I want to pay a portion of the benefit in cash -->
                                                    <div
                                                        v-if="showRetirementPayPortionBenefitPensionFundText"
                                                        class="pa-2"
                                                    >
                                                        <DividerBar />
                                                        <PortionBenefitCash />
                                                    </div>

                                                    <!-- I want to transfer an amount to the Sanlam Plus Preservation Fund -->
                                                    <div
                                                        v-if="showRetirementTransferAmountPensionFundText"
                                                        class="pa-2"
                                                    >
                                                        <DividerBar />
                                                        <div class="mt-4">
                                                            <v-card-title
                                                                class="text-h5 px-0 black--text mb-4 font-weight-light"
                                                            >
                                                                Cash Payment Details
                                                            </v-card-title>
                                                            <v-row class="mx-0">
                                                                <v-col cols="12" sm="5" class="pa-0">
                                                                    <span
                                                                        class="mb-2 d-block font-weight-bold black--text"
                                                                    >
                                                                        Benefit election date
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

                                                                            <span class="d-block"
                                                                                >The later of the exit date</span
                                                                            >
                                                                            <span class="d-block"
                                                                                >or the date that the member signed the
                                                                                exit forms.</span
                                                                            >
                                                                        </v-tooltip>
                                                                    </span>
                                                                    <v-text-field
                                                                        v-model="benefitElectionsDate"
                                                                        type="date"
                                                                        outlined
                                                                        :value="benefitElectionDate"
                                                                        required
                                                                    ></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                            <BankingDetails />
                                                        </div>
                                                        <DividerBar />
                                                        <div class="mt-4">
                                                            <v-card-title class="text-h5 px-0 black--text">
                                                                Broker / Representative Details
                                                            </v-card-title>

                                                            <span class="mb-2 d-block font-weight-bold black--text">
                                                                Do you have a financial representative?
                                                            </span>
                                                            <v-radio-group
                                                                v-model="retirementFinancialRepresentative"
                                                                class="mb-3"
                                                                row
                                                            >
                                                                <v-radio
                                                                    label="Yes"
                                                                    value="Yes"
                                                                    class="mr-sm-16"
                                                                    @click="showRetirementFinRepresentative = true"
                                                                ></v-radio>
                                                                <v-radio
                                                                    label="No"
                                                                    value="No"
                                                                    @click="showRetirementFinRepresentative = false"
                                                                ></v-radio>
                                                            </v-radio-group>
                                                            <FinancialRepresentative
                                                                v-show="showRetirementFinRepresentative"
                                                            />
                                                            <v-row>
                                                                <v-col cols="12">
                                                                    <div grey class="text-bg-info py-6 px-7">
                                                                        <div class="d-flex align-start">
                                                                            <v-icon primary class="mr-4 primary--text">
                                                                                mdi-information
                                                                            </v-icon>
                                                                            <p class="mb-0">
                                                                                Sanlam will contact the member or broker
                                                                                for the application forms of the
                                                                                receiving fund.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </v-col>
                                                            </v-row>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Option 5 -->
                                    <div v-if="showFullBenefitPensionFundText" class="pa-2">
                                        <DividerBar />
                                        <PayFullBenefitInCash />
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-form>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, requiredIf, helpers } from '@vuelidate/validators'
import LeaveBenefitFundContent from '@/components/StepsAddNewClaim/LeaveBenefitFundContent'
import PayFullBenefitInCash from '@/components/StepsAddNewClaim/PayFullBenefitInCash'
import PortionBenefitCash from '@/components/StepsAddNewClaim/PayPortionBenefit/PortionBenefitCash'
import FinancialRepresentative from '@/components/StepsAddNewClaim/FinancialRepresentative'
import BankingDetails from '@/components/StepsAddNewClaim/BankingDetails'
export default {
    components: {
        LeaveBenefitFundContent,
        PayFullBenefitInCash,
        PortionBenefitCash,
        BankingDetails,
        FinancialRepresentative,
    },
    props: {
        disableSameAsProvidentOption: {
            type: Boolean,
        },
    },
    setup() {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            selectedPaymentOption: {
                required: helpers.withMessage('Please select a payment option.', required),
            },
            transferFullBenefit: {
                required: requiredIf(this.showTransferPensionFundText === true),
            },
            radioPayAPortionOfBenefitInCash: {
                required: requiredIf(this.showPayPortionPensionFundText === true),
            },
            balanceTransfer: {
                required: requiredIf(this.showPayPortionText === true),
            },
            benefitElectionsDate: {
                required: requiredIf(this.showRetirementTransferAmountPensionFundText === true),
            },

            benefitElectionDate: {
                required: requiredIf(this.showTransferAmountSanlamPlusPensionFundText === true),
            },
            cashPortionSanlamPlusPensionFund: {
                required: requiredIf(this.showPayPortionSanlamPlusPensionFundText === true),
            },
            cashRetirementPayment: {
                required: requiredIf(this.showPayPortionRetirementAnnuityFundPensionFundText === true),
            },
        }
    },
    data() {
        return {
            rand: '',
            benefitElectionDate: '',
            benefitElectionsDate: '',
            selectedPaymentOption: null,
            showFinRepresentative: false,
            financialRepresentative: null,
            retirementFinancialRepresentative: null,
            transferAmountFinancialRepresentative: null,
            showRetirementFinRepresentative: false,
            showTransferAmountFinRepresentative: false,
            showTransferPensionFundText: false,
            cashRetirementPayment: null,
            transferFullBenefit: null,
            radioPayAPortionOfBenefitInCash: null,

            cashPortionSanlamPlusPensionFund: null,

            isFocusInner: false,
            isActiveInner: false,
            isFocusLast: false,
            isActiveLast: false,

            viewSanlamPlusPensionFund: true,
            viewRetirementAnnuityFundPensionFund: true,

            viewPayPortionSanlamPlusPensionFund: true,
            viewPayPortionRetirementAnnuityFundPensionFund: true,
            showPayPortionSanlamPlusPensionFundText: false,
            showRetirementTransferAmountPensionFundText: false,

            showPayPortionBenefitSanlamPlusPensionFundText: false,
            viewPayPortionBenefitSanlamPlusPensionFund: true,
            viewTransferAmountSanlamPlusPensionFund: true,
            showTransferAmountSanlamPlusPensionFundText: false,

            viewRetirementPayPortionBenefitPensionFund: true,
            viewRetirementPayTransferAmountPensionFund: true,
            showRetirementPayPortionBenefitPensionFundText: false,

            viewPayPortionBenefitPensionFund: true,
            viewTransferAmountPensionFund: true,

            viewSamePaymentPensionFund: true,
            showSamePaymentPensionFundText: false,

            isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund: false,

            isActivePensionFund: false,
            isFocusPensionFund: false,
            disabledPensionFund: false,
            viewBenefitPensionFund: true,
            viewTransferPensionFund: true,
            viewPayPortionPensionFund: true,
            viewFullBenefitPensionFund: true,
            viewNoPaymentPensionFund: true,
            showBenefitPensionFundText: false,
            showFullBenefitPensionFundText: false,
            showSanlamPlusPensionFundText: false,
            showRetirementAnnuityFundPensionFundText: false,
            showPayPortionBenefitPensionFundText: false,
            showTransferAmountPensionFundText: false,
            showPayPortionRetirementAnnuityFundPensionFundText: false,
            showPayPortionPensionFundText: false,
        }
    },
    watch: {
        selectedPaymentOption(value) {
            this.$emit(`payment-option-selected`, value)
        },
    },
    methods: {
        // Provident Fund Methods
        showBenefitPensionFund() {
            this.showBenefitPensionFundText = true
            this.showTransferPensionFundText = false
            this.showPayPortionPensionFundText = false
            this.showFullBenefitPensionFundText = false
            this.isActivePensionFund = true
            this.isFocusPensionFund = true
            this.viewTransferPensionFund = false
            this.viewPayPortionPensionFund = false
            this.viewFullBenefitPensionFund = false
            this.viewNoPaymentPensionFund = false

            this.showSamePaymentPensionFundText = false
            this.viewSamePaymentPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
        },
        showTransferPensionFund() {
            this.showTransferPensionFundText = true
            this.showBenefitPensionFundText = false
            this.showPayPortionPensionFundText = false
            this.showFullBenefitPensionFundText = false
            this.isActivePensionFund = true
            this.isFocusPensionFund = true
            this.viewBenefitPensionFund = false
            this.viewPayPortionPensionFund = false
            this.viewFullBenefitPensionFund = false
            this.viewNoPaymentPensionFund = false

            this.showSamePaymentPensionFundText = false
            this.viewSamePaymentPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
        },
        showPayPortionPensionFund() {
            this.showPayPortionPensionFundText = true
            this.showBenefitPensionFundText = false
            this.showTransferPensionFundText = false
            this.showFullBenefitPensionFundText = false
            this.showNoPaymentProvidentFundText = false
            this.isActivePensionFund = true
            this.isFocusPensionFund = true
            this.viewBenefitPensionFund = false
            this.viewTransferPensionFund = false
            this.viewFullBenefitPensionFund = false
            this.viewNoPaymentPensionFund = false

            this.showSamePaymentPensionFundText = false
            this.viewSamePaymentPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
        },
        showFullBenefitPensionFund() {
            this.showFullBenefitPensionFundText = true
            this.showBenefitPensionFundText = false
            this.showTransferPensionFundText = false
            this.showPayPortionPensionFundText = false
            this.showNoPaymentProvidentFundText = false
            this.isActivePensionFund = true
            this.isFocusPensionFund = true
            this.viewBenefitPensionFund = false
            this.viewTransferPensionFund = false
            this.viewPayPortionPensionFund = false
            this.viewNoPaymentPensionFund = false

            this.showSamePaymentPensionFundText = false
            this.viewSamePaymentPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
        },
        showNoPaymentPensionFund() {
            this.showBenefitPensionFundText = false
            this.showTransferPensionFundText = false
            this.showPayPortionPensionFundText = false
            this.showFullBenefitPensionFundText = false
            this.showNoPaymentProvidentFundText = true
            this.isActivePensionFund = true
            this.isFocusPensionFund = true
            this.viewBenefitPensionFund = false
            this.viewTransferPensionFund = false
            this.viewPayPortionPensionFund = false
            this.viewFullBenefitPensionFund = false

            this.showSamePaymentPensionFundText = false
            this.viewSamePaymentPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
        },

        showSamePaymentPensionFund() {
            this.showSamePaymentPensionFundText = true
            this.showBenefitPensionFundText = false
            this.showTransferPensionFundText = false
            this.showPayPortionPensionFundText = false
            this.showFullBenefitPensionFundText = false
            this.showNoPaymentProvidentFundText = false
            this.isActivePensionFund = true
            this.isFocusPensionFund = true
            this.viewBenefitPensionFund = false
            this.viewTransferPensionFund = false
            this.viewPayPortionPensionFund = false
            this.viewFullBenefitPensionFund = false
            this.viewNoPaymentPensionFund = false

            this.disabledPensionFund = true
            this.disabledPensionFund = false
        },

        toggleChangeOptionPensionFund(e) {
            this.isActivePensionFund = false
            this.isFocusPensionFund = false
            this.viewBenefitPensionFund = true
            this.viewTransferPensionFund = true
            this.viewPayPortionPensionFund = true
            this.viewFullBenefitPensionFund = true
            this.viewNoPaymentPensionFund = true
            this.viewSamePaymentPensionFund = true

            this.showBenefitPensionFundText = false
            this.showTransferPensionFundText = false
            this.showPayPortionPensionFundText = false
            this.showFullBenefitPensionFundText = false
            this.showNoPaymentProvidentFundText = false
            this.showSamePaymentPensionFundText = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false
            this.disabledPensionFund = false

            Array.from(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children).forEach(
                child => {
                    child.style.display = 'flex'
                },
            )
        },

        toggleChangeInnerOption(e) {
            this.isActiveInner = false
            this.isFocusInner = false
            this.viewSanlamPlusPensionFund = true
            this.viewRetirementAnnuityFundPensionFund = true
            this.showSanlamPlusPensionFundText = false
            this.showRetirementAnnuityFundPensionFundText = false

            this.viewPayPortionSanlamPlusPensionFund = true
            this.viewPayPortionRetirementAnnuityFundPensionFund = true
            this.showPayPortionSanlamPlusPensionFundText = false
            this.showPayPortionRetirementAnnuityFundPensionFundText = false

            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach(child => {
                child.style.display = 'flex'
            })
        },

        toggleChangeLastOption(e) {
            this.isActiveLast = false
            this.isFocusLast = false

            this.showPayPortionBenefitSanlamPlusPensionFundText = false
            this.viewPayPortionBenefitSanlamPlusPensionFund = true

            this.showTransferAmountSanlamPlusPensionFundText = false
            this.viewTransferAmountSanlamPlusPensionFund = true

            this.viewRetirementPayTransferAmountPensionFund = true
            this.showRetirementTransferAmountPensionFundText = false

            this.viewRetirementPayPortionBenefitPensionFund = true
            this.showRetirementPayPortionBenefitPensionFundText = false

            Array.from(e.target.parentElement.parentElement.parentElement.children).forEach(child => {
                child.style.display = 'flex'
            })
        },

        showSanlamPlusPensionFund() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showSanlamPlusPensionFundText = true
            this.showRetirementAnnuityFundPensionFundText = false

            this.viewSanlamPlusPensionFund = true
            this.viewRetirementAnnuityFundPensionFund = false
        },
        showRetirementAnnuityFundPensionFund() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showSanlamPlusPensionFundText = false
            this.showRetirementAnnuityFundPensionFundText = true

            this.viewSanlamPlusPensionFund = false
            this.viewRetirementAnnuityFundPensionFund = true
        },

        showPayPortionSanlamPlusPensionFund() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showPayPortionSanlamPlusPensionFundText = true
            this.showPayPortionRetirementAnnuityFundPensionFundText = false

            this.viewPayPortionSanlamPlusPensionFund = true
            this.viewPayPortionRetirementAnnuityFundPensionFund = false
        },

        showPayPortionRetirementAnnuityFundPensionFund() {
            this.isActiveInner = true
            this.isFocusInner = true

            this.showPayPortionSanlamPlusPensionFundText = false
            this.showPayPortionRetirementAnnuityFundPensionFundText = true

            this.viewPayPortionSanlamPlusPensionFund = false
            this.viewPayPortionRetirementAnnuityFundPensionFund = true
        },

        showPayPortionBenefitSanlamPlusPensionFund() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showPayPortionBenefitSanlamPlusPensionFundText = true
            this.viewPayPortionBenefitSanlamPlusPensionFund = true

            this.showTransferAmountSanlamPlusPensionFundText = false
            this.viewTransferAmountSanlamPlusPensionFund = false

            this.isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund = false
        },
        showTransferAmountSanlamPlusPensionFund() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showPayPortionBenefitSanlamPlusPensionFundText = false
            this.viewPayPortionBenefitSanlamPlusPensionFund = false

            this.showTransferAmountSanlamPlusPensionFundText = true
            this.viewTransferAmountSanlamPlusPensionFund = true

            this.isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund = true
        },

        showRetirementPayPortionBenefitPensionFund() {
            this.isActiveLast = true
            this.isFocusLast = true
            this.showRetirementPayPortionBenefitPensionFundText = true
            this.viewRetirementPayPortionBenefitPensionFund = true

            this.showRetirementTransferAmountPensionFundText = false
            this.viewRetirementPayTransferAmountPensionFund = false

            this.isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund = false
        },

        showRetirementPayTransferAmountPensionFund() {
            this.isActiveLast = true
            this.isFocusLast = true

            this.showRetirementPayPortionBenefitPensionFundText = false
            this.viewRetirementPayPortionBenefitPensionFund = false

            this.showRetirementTransferAmountPensionFundText = true
            this.viewRetirementPayTransferAmountPensionFund = true

            this.isLeftOverBalanceFromTheTransferToSanlamPlusPreservationFund = true
        },
    },
}
</script>

<style></style>
