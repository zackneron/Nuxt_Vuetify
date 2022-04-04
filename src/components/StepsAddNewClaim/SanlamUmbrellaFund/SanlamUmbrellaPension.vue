<template>
  <div class="inner-margin-1">
    <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
      <v-form ref="claimDetailsForm">
        <v-card elevation="0">
          <v-card-text class="pa-0">
            <v-container>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <v-card-title
                    class="text-h5 px-0 black--text font-weight-light"
                  >
                    Payment option elected
                  </v-card-title>
                  <h2 class="mb-6 black--text">Katshi Pension Fund</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Please select a payment option
                  </span>
                  <v-radio-group v-model="paymentOptionPensionFund" column>
                    <v-radio
                      label="Same payment options as Katshi Pension Fund"
                      value="Same payment options as Katshi Pension Fund"
                      class="mb-2 pa-2 radio-item"
                      @change="showSamePaymentPensionFund"
                      :class="{ focus: isFocusPensionFund }"
                      v-show="viewSamePaymentPensionFund"
                      :disabled="disabledPensionFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Same payment options as Katshi Pension
                            Fund
                          </span>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActivePensionFund"
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
                      label="Leave benefit in the Fund (Paid-up member)"
                      value="Leave benefit in the Fund (Paid-up member)"
                      class="mb-2 pa-2 radio-item"
                      @change="showBenefitPensionFund"
                      :class="{ focus: isFocusPensionFund }"
                      v-show="viewBenefitPensionFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Leave benefit in the Fund (Paid-up member)
                            <v-tooltip bottom color="black">
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  primary
                                  class="primary--text"
                                >
                                  mdi-information
                                </v-icon>
                              </template>
                              <span class="d-block text-caption"
                                >In-Fund Preservation means that the member’s
                                benefit will remain in the fund.</span
                              >
                              <span class="d-block text-caption"
                                >The advantage of this option is that the member
                                retains his/her investments and defers the
                                payment of tax.</span
                              >
                              <span class="d-block text-caption"
                                >It also affords the member time to make a
                                decision re preservation or annuitisation or
                                cash payment of his/her withdrawal
                                benefit.</span
                              >
                            </v-tooltip>
                          </span>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActivePensionFund"
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
                      label="Transfer full benefit to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                      value="Transfer full benefit to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                      class="mb-2 pa-2 radio-item"
                      @change="showTransferPensionFund"
                      :class="{ focus: isFocusPensionFund }"
                      v-show="viewTransferPensionFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Transfer full benefit to a Pension Fund, Provident
                            Fund, Retirement Annuity Fund or a Preservation
                            Fund</span
                          >
                          <v-btn
                            text
                            color="primary"
                            v-show="isActivePensionFund"
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
                      label="Pay a portion of the benefit in cash and transfer the balance to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                      value="Pay a portion of the benefit in cash and transfer the balance to a Pension Fund, Provident Fund, Retirement Annuity Fund or a Preservation Fund"
                      class="mb-2 pa-2 radio-item"
                      @change="showPayPortionPensionFund"
                      :class="{ focus: isFocusPensionFund }"
                      v-show="viewPayPortionPensionFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Pay a portion of the benefit in cash and transfer
                            the balance to a Pension Fund, Provident Fund,
                            Retirement Annuity Fund or a Preservation Fund
                            <v-tooltip bottom color="black">
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  primary
                                  class="primary--text"
                                >
                                  mdi-information
                                </v-icon>
                              </template>
                              <span class="d-block text-caption"
                                >Members who elect to the Katshi Plus
                                Preservation Fund, will have their investment
                                transferred seamlessly</span
                              >
                              <span class="d-block text-caption"
                                >provided that the member’s Investment
                                portfolio(s) exist(s) on the Katshi Plus
                                Preservation Fund.</span
                              >
                              <span class="d-block text-caption"
                                >In these cases, it means that the funds will
                                not be disinvested in cash but transferred
                                directly to the chosen portfolios.</span
                              >
                              <span class="d-block text-caption"
                                >In order to do such a transfer, we would
                                require the separate Katshi Plus Preservation
                                Fund application form to be completed.</span
                              >
                              <span class="d-block text-caption"
                                >There’s a link below for the forms.</span
                              >
                            </v-tooltip>
                          </span>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActivePensionFund"
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
                      label="Pay the full benefit in cash (This will be subject to tax)"
                      value="Pay the full benefit in cash (This will be subject to tax)"
                      class="mb-2 pa-2 radio-item"
                      @change="showFullBenefitPensionFund"
                      :class="{ focus: isFocusPensionFund }"
                      v-show="viewFullBenefitPensionFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Pay the full benefit in cash (This will be subject
                            to tax)</span
                          >
                          <v-btn
                            text
                            color="primary"
                            v-show="isActivePensionFund"
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
                      label="No payment instructions available"
                      value="No payment instructions available"
                      class="mb-2 pa-2 radio-item"
                      @change="showNoPaymentPensionFund"
                      :class="{ focus: isFocusPensionFund }"
                      v-show="viewNoPaymentPensionFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >No payment instructions available
                            <v-tooltip bottom color="black">
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  primary
                                  class="primary--text"
                                >
                                  mdi-information
                                </v-icon>
                              </template>
                              <span class="d-block text-caption"
                                >The member will become a paid-up member of the
                                fund, until such time</span
                              >
                              <span class="d-block text-caption"
                                >as we receive a written instruction to pay or
                                transfer his/her benefit.</span
                              >
                            </v-tooltip>
                          </span>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActivePensionFund"
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

                  <!-- Option 1 No Content -->

                  <!-- Option 2 -->
                  <div v-show="showBenefitPensionFundText" class="pa-2">
                    <DividerBar />
                    <LeaveBenefitFundContent />
                  </div>

                  <!-- Option 3 -->
                  <div v-show="showTransferPensionFundText" class="pa-2">
                    <DividerBar />
                    <div class="mt-4">
                      <v-card-title class="text-h5 px-0 black--text">
                        Transfer Full Benefit To
                      </v-card-title>
                      <v-radio-group column class="mt-0">
                        <div
                          v-if="viewKatshiPlusPensionFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="Katshi Plus Preservation Fund"
                            value="Katshi Plus Preservation Fund"
                            @click="showKatshiPlusPensionFund"
                          ></v-radio>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActiveInner"
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
                            text
                            color="primary"
                            v-show="isActiveInner"
                            :class="{ active: isActiveInner }"
                            class="text-body-2"
                            @click="toggleChangeInnerOption"
                          >
                            Change
                          </v-btn>
                        </div>
                      </v-radio-group>

                      <div v-show="showKatshiPlusPensionFundText" class="pa-2">
                        <div grey class="text-bg-info py-6 px-7 mb-3">
                          <div class="d-flex align-start">
                            <v-icon primary class="mr-4 primary--text">
                              mdi-information
                            </v-icon>
                            <div>
                              <p class="mb-0">
                                Members who elect to have their benefit
                                transferred to the Katshi Plus Preservation
                                Fund, will have their investments transferred
                                seamlessly provided that the member's investment
                                portfolio(s) exist(s) on the Katshi Plus
                                Preservation Fund. In these cases, it means that
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

                          <span
                            class="mb-2 d-block font-weight-bold black--text"
                          >
                            Do you have a financial representative?
                          </span>
                          <v-radio-group
                            class="mb-3"
                            v-model="financialRepresentative"
                            row
                          >
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
                          <FinancialRepresentative
                            v-show="showFinRepresentative"
                          />

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
                                      >Katshi Preservation Fund application
                                      form</a
                                    >.
                                  </p>
                                </div>
                              </div>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                      <div
                        v-show="showRetirementAnnuityFundPensionFundText"
                        class="pa-2"
                      >
                        <DividerBar />
                        <div class="mt-4">
                          <v-card-title class="text-h5 px-0 black--text">
                            Broker / Representative Details
                          </v-card-title>

                          <span
                            class="mb-2 d-block font-weight-bold black--text"
                          >
                            Do you have a financial representative?
                          </span>
                          <v-radio-group
                            class="mb-3"
                            v-model="retirementFinancialRepresentative"
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
                                    Katshi will contact the member or broker for
                                    the application forms of the receiving fund.
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
                  <div v-show="showPayPortionPensionFundText" class="pa-2">
                    <DividerBar />
                    <div class="mt-4">
                      <v-card-title class="text-h5 px-0 black--text">
                        Balance transfer to:
                      </v-card-title>
                      <v-radio-group column class="mt-0">
                        <div
                          v-if="viewPayPortionKatshiPlusPensionFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="Katshi Plus Preservation Fund"
                            value="Katshi Plus Preservation Fund"
                            @click="showPayPortionKatshiPlusPensionFund"
                          ></v-radio>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActiveInner"
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
                            @click="
                              showPayPortionRetirementAnnuityFundPensionFund
                            "
                          ></v-radio>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActiveInner"
                            :class="{ active: isActiveInner }"
                            class="text-body-2"
                            @click="toggleChangeInnerOption"
                          >
                            Change
                          </v-btn>
                        </div>
                      </v-radio-group>
                      <!-- Katshi Plus Preservation Fund -->
                      <div
                        v-show="showPayPortionKatshiPlusPensionFundText"
                        class="pa-2"
                      >
                        <div grey class="text-bg-info py-6 px-7 mb-3">
                          <div class="d-flex align-start">
                            <v-icon primary class="mr-4 primary--text">
                              mdi-information
                            </v-icon>
                            <div>
                              <p class="mb-0">
                                Members who elect to have their benefit
                                transferred to the Katshi Plus Preservation
                                Fund, will have their investments transferred
                                seamlessly provided that the member's investment
                                portfolio(s) exist(s) on the Katshi Plus
                                Preservation Fund. In these cases, it means that
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
                          <v-radio-group
                            v-model="cashPayment"
                            column
                            class="mt-0"
                          >
                            <div
                              v-if="viewPayPortionBenefitKatshiPlusPensionFund"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to Katshi Plus Preservation fund"
                                value="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to Katshi Plus Preservation fund"
                                @click="
                                  showPayPortionBenefitKatshiPlusPensionFund
                                "
                              ></v-radio>
                              <v-btn
                                text
                                color="primary"
                                v-show="isActiveLast"
                                :class="{ active: isActiveLast }"
                                class="text-body-2"
                                @click="toggleChangeLastOption"
                              >
                                Change
                              </v-btn>
                            </div>

                            <div
                              v-if="viewTransferAmountKatshiPlusPensionFund"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the benefit portion to be transferred to Katshi Plus Preservation fund. The balance will be paid in cash"
                                value="Indicate the benefit portion to be transferred to Katshi Plus Preservation fund. The balance will be paid in cash"
                                @click="showTransferAmountKatshiPlusPensionFund"
                              ></v-radio>
                              <v-btn
                                text
                                color="primary"
                                v-show="isActiveLast"
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
                            v-show="
                              showPayPortionBenefitKatshiPlusPensionFundText
                            "
                            class="pa-2"
                          >
                            <DividerBar />
                            <PortionBenefitCash />
                          </div>

                          <!-- I want to transfer an amount to the Katshi Plus Preservation Fund -->
                          <div
                            v-show="showTransferAmountKatshiPlusPensionFundText"
                            class="pa-2"
                          >
                            <DividerBar />
                            <div class="mt-4">
                              <v-card-title
                                class="text-h5 px-0 black--text mb-4 font-weight-light"
                              >
                                Cash Payment Options
                              </v-card-title>
                              <v-row class="mx-0">
                                <v-col cols="12" sm="5" class="pa-0">
                                  <span
                                    class="mb-2 d-block font-weight-bold black--text"
                                  >
                                    Benefit election date
                                    <v-tooltip bottom color="black">
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-icon
                                          v-bind="attrs"
                                          v-on="on"
                                          primary
                                          class="primary--text"
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
                                </v-col>
                              </v-row>
                              <BankingDetails />
                            </div>
                            <DividerBar />
                            <div class="mt-4 mb-7">
                              <v-card-title class="text-h5 px-0 black--text">
                                Preservation Fund Details
                              </v-card-title>
                              <v-row class="mx-0 mb-4">
                                <v-col cols="12" sm="7" class="pa-0">
                                  <span
                                    class="mb-2 d-block font-weight-bold black--text"
                                  >
                                    Indicate rand amount to be trasferred to
                                    preservation fund.
                                  </span>
                                  <v-text-field
                                    style="width: 150px"
                                    outlined
                                    hide-details
                                    v-model="rand"
                                    placeholder="R"
                                    type="number"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </div>
                            <DividerBar />
                            <div class="mt-4">
                              <v-card-title class="text-h5 px-0 black--text">
                                Broker / Representative Details
                              </v-card-title>

                              <span
                                class="mb-2 d-block font-weight-bold black--text"
                              >
                                Do you have a financial representative?
                              </span>
                              <v-radio-group
                                class="mb-3"
                                v-model="transferAmountFinancialRepresentative"
                                row
                              >
                                <v-radio
                                  label="Yes"
                                  value="Yes"
                                  class="mr-sm-16"
                                  @click="
                                    showTransferAmountFinRepresentative = true
                                  "
                                ></v-radio>
                                <v-radio
                                  label="No"
                                  value="No"
                                  @click="
                                    showTransferAmountFinRepresentative = false
                                  "
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
                      <div
                        v-show="
                          showPayPortionRetirementAnnuityFundPensionFundText
                        "
                        class="pa-2"
                      >
                        <DividerBar />
                        <div class="mt-4">
                          <v-card-title class="text-h5 px-0 black--text">
                            Balance transfer to:
                          </v-card-title>
                          <v-radio-group
                            v-model="cashRetirementPayment"
                            column
                            class="mt-0"
                          >
                            <div
                              v-if="viewRetirementPayPortionBenefitPensionFund"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to a Retirement Annuity / other retirement arrangement."
                                value="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to a Retirement Annuity / other retirement arrangement."
                                @click="
                                  showRetirementPayPortionBenefitPensionFund
                                "
                              ></v-radio>
                              <v-btn
                                text
                                color="primary"
                                v-show="isActiveLast"
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
                                label="Indicate the benefit portion to be transferred to a Retirement Annuity / other retirement arrangement. The balance will be paid in cash."
                                value="Indicate the benefit portion to be transferred to a Retirement Annuity / other retirement arrangement. The balance will be paid in cash."
                                @click="
                                  showRetirementPayTransferAmountPensionFund
                                "
                              ></v-radio>
                              <v-btn
                                text
                                color="primary"
                                v-show="isActiveLast"
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
                            v-show="
                              showRetirementPayPortionBenefitPensionFundText
                            "
                            class="pa-2"
                          >
                            <DividerBar />
                            <PortionBenefitCash />
                          </div>

                          <!-- I want to transfer an amount to the Katshi Plus Preservation Fund -->
                          <div
                            v-show="showRetirementTransferAmountPensionFundText"
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
                                      <template
                                        v-slot:activator="{ on, attrs }"
                                      >
                                        <v-icon
                                          v-bind="attrs"
                                          v-on="on"
                                          primary
                                          class="primary--text"
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
                                </v-col>
                              </v-row>
                              <BankingDetails />
                            </div>
                            <DividerBar />
                            <div class="mt-4 mb-7">
                              <v-card-title class="text-h5 px-0 black--text">
                                Preservation Fund Details
                              </v-card-title>
                              <v-row class="mx-0 mb-4">
                                <v-col cols="12" sm="7" class="pa-0">
                                  <span
                                    class="mb-2 d-block font-weight-bold black--text"
                                  >
                                    Indicate rand amount to be trasferred to
                                    preservation fund.
                                  </span>
                                  <v-text-field
                                    style="width: 150px"
                                    outlined
                                    hide-details
                                    v-model="rand"
                                    placeholder="R"
                                    type="number"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </div>
                            <DividerBar />
                            <div class="mt-4">
                              <v-card-title class="text-h5 px-0 black--text">
                                Broker / Representative Details
                              </v-card-title>

                              <span
                                class="mb-2 d-block font-weight-bold black--text"
                              >
                                Do you have a financial representative?
                              </span>
                              <v-radio-group
                                class="mb-3"
                                v-model="retirementFinancialRepresentative"
                                row
                              >
                                <v-radio
                                  label="Yes"
                                  value="Yes"
                                  class="mr-sm-16"
                                  @click="
                                    showRetirementFinRepresentative = true
                                  "
                                ></v-radio>
                                <v-radio
                                  label="No"
                                  value="No"
                                  @click="
                                    showRetirementFinRepresentative = false
                                  "
                                ></v-radio>
                              </v-radio-group>
                              <FinancialRepresentative
                                v-show="showRetirementFinRepresentative"
                              />
                              <v-row>
                                <v-col cols="12">
                                  <div grey class="text-bg-info py-6 px-7">
                                    <div class="d-flex align-start">
                                      <v-icon
                                        primary
                                        class="mr-4 primary--text"
                                      >
                                        mdi-information
                                      </v-icon>
                                      <p class="mb-0">
                                        Katshi will contact the member or broker
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
                  <div v-show="showFullBenefitPensionFundText" class="pa-2">
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
import LeaveBenefitFundContent from "@/components/StepsAddNewClaim/LeaveBenefitFundContent";
import PayFullBenefitInCash from "@/components/StepsAddNewClaim/PayFullBenefitInCash";
import PortionBenefitCash from "@/components/StepsAddNewClaim/PayPortionBenefit/PortionBenefitCash";
import FinancialRepresentative from "@/components/StepsAddNewClaim/FinancialRepresentative";
import BankingDetails from "@/components/StepsAddNewClaim/BankingDetails";
export default {
  components: {
    LeaveBenefitFundContent,
    PayFullBenefitInCash,
    PortionBenefitCash,
    BankingDetails,
    FinancialRepresentative,
  },
  data() {
    return {
      benefitElectionDate: "",
      paymentOptionPensionFund: null,
      showFinRepresentative: false,
      financialRepresentative: null,
      retirementFinancialRepresentative: null,
      transferAmountFinancialRepresentative: null,
      showRetirementFinRepresentative: false,
      showTransferAmountFinRepresentative: false,
      showTransferPensionFundText: false,
      cashRetirementPayment: null,

      isFocusInner: false,
      isActiveInner: false,
      isFocusLast: false,
      isActiveLast: false,

      viewKatshiPlusPensionFund: true,
      viewRetirementAnnuityFundPensionFund: true,

      viewPayPortionKatshiPlusPensionFund: true,
      viewPayPortionRetirementAnnuityFundPensionFund: true,
      showPayPortionKatshiPlusPensionFundText: false,
      showRetirementTransferAmountPensionFundText: false,

      showPayPortionBenefitKatshiPlusPensionFundText: false,
      viewPayPortionBenefitKatshiPlusPensionFund: true,
      viewTransferAmountKatshiPlusPensionFund: true,
      showTransferAmountKatshiPlusPensionFundText: false,

      viewRetirementPayPortionBenefitPensionFund: true,
      viewRetirementPayTransferAmountPensionFund: true,
      showRetirementPayPortionBenefitPensionFundText: false,
      showRetirementTransferAmountPensionFundText: false,

      viewPayPortionBenefitPensionFund: true,
      viewTransferAmountPensionFund: true,

      viewSamePaymentPensionFund: true,
      showSamePaymentPensionFundText: false,
      disabledPensionFund: false,

      isActivePensionFund: false,
      isFocusPensionFund: false,
      disabledPensionFund: false,
      viewSamePaymentPensionFund: true,
      viewBenefitPensionFund: true,
      viewTransferPensionFund: true,
      viewPayPortionPensionFund: true,
      viewFullBenefitPensionFund: true,
      viewNoPaymentPensionFund: true,
      showSamePaymentPensionFundText: false,
      showBenefitPensionFundText: false,
      showFullBenefitPensionFundText: false,
      showKatshiPlusPensionFundText: false,
      showRetirementAnnuityFundPensionFundText: false,
      showPayPortionBenefitPensionFundText: false,
      showTransferAmountPensionFundText: false,
      showPayPortionRetirementAnnuityFundPensionFundText: false,
      showPayPortionPensionFundText: false,

      rules: [
        {
          required: (value) => !!value || "Required.",
        },
      ],
    };
  },
  methods: {
    // Provident Fund Methods
    showBenefitPensionFund() {
      this.showBenefitPensionFundText = true;
      this.showTransferPensionFundText = false;
      this.showPayPortionPensionFundText = false;
      this.showFullBenefitPensionFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActivePensionFund = true;
      this.isFocusPensionFund = true;
      this.viewTransferPensionFund = false;
      this.viewPayPortionPensionFund = false;
      this.viewFullBenefitPensionFund = false;
      this.viewNoPaymentPensionFund = false;

      this.showSamePaymentPensionFundText = false;
      this.viewSamePaymentPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
    },
    showTransferPensionFund() {
      this.showTransferPensionFundText = true;
      this.showBenefitPensionFundText = false;
      this.showPayPortionPensionFundText = false;
      this.showFullBenefitPensionFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActivePensionFund = true;
      this.isFocusPensionFund = true;
      this.viewBenefitPensionFund = false;
      this.viewPayPortionPensionFund = false;
      this.viewFullBenefitPensionFund = false;
      this.viewNoPaymentPensionFund = false;

      this.showSamePaymentPensionFundText = false;
      this.viewSamePaymentPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
    },
    showPayPortionPensionFund() {
      this.showPayPortionPensionFundText = true;
      this.showBenefitPensionFundText = false;
      this.showTransferPensionFundText = false;
      this.showFullBenefitPensionFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActivePensionFund = true;
      this.isFocusPensionFund = true;
      this.viewBenefitPensionFund = false;
      this.viewTransferPensionFund = false;
      this.viewFullBenefitPensionFund = false;
      this.viewNoPaymentPensionFund = false;

      this.showSamePaymentPensionFundText = false;
      this.viewSamePaymentPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
    },
    showFullBenefitPensionFund() {
      this.showFullBenefitPensionFundText = true;
      this.showBenefitPensionFundText = false;
      this.showTransferPensionFundText = false;
      this.showPayPortionPensionFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActivePensionFund = true;
      this.isFocusPensionFund = true;
      this.viewBenefitPensionFund = false;
      this.viewTransferPensionFund = false;
      this.viewPayPortionPensionFund = false;
      this.viewNoPaymentPensionFund = false;

      this.showSamePaymentPensionFundText = false;
      this.viewSamePaymentPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
    },
    showNoPaymentPensionFund() {
      this.showBenefitPensionFundText = false;
      this.showTransferPensionFundText = false;
      this.showPayPortionPensionFundText = false;
      this.showFullBenefitPensionFundText = false;
      this.showNoPaymentProvidentFundText = true;
      this.isActivePensionFund = true;
      this.isFocusPensionFund = true;
      this.viewBenefitPensionFund = false;
      this.viewTransferPensionFund = false;
      this.viewPayPortionPensionFund = false;
      this.viewFullBenefitPensionFund = false;

      this.showSamePaymentPensionFundText = false;
      this.viewSamePaymentPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
    },

    showSamePaymentPensionFund() {
      this.showSamePaymentPensionFundText = true;
      this.showBenefitPensionFundText = false;
      this.showTransferPensionFundText = false;
      this.showPayPortionPensionFundText = false;
      this.showFullBenefitPensionFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActivePensionFund = true;
      this.isFocusPensionFund = true;
      this.viewBenefitPensionFund = false;
      this.viewTransferPensionFund = false;
      this.viewPayPortionPensionFund = false;
      this.viewFullBenefitPensionFund = false;
      this.viewNoPaymentPensionFund = false;

      this.disabledPensionFund = true;
      this.disabledPensionFund = false;
    },

    toggleChangeOptionPensionFund(e) {
      this.isActivePensionFund = false;
      this.isFocusPensionFund = false;
      this.viewBenefitPensionFund = true;
      this.viewTransferPensionFund = true;
      this.viewPayPortionPensionFund = true;
      this.viewFullBenefitPensionFund = true;
      this.viewNoPaymentPensionFund = true;
      this.viewSamePaymentPensionFund = true;

      this.showBenefitPensionFundText = false;
      this.showTransferPensionFundText = false;
      this.showPayPortionPensionFundText = false;
      this.showFullBenefitPensionFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.showSamePaymentPensionFundText = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      this.disabledPensionFund = false;
      console.log(
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.children
      );

      Array.from(
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement.children
      ).forEach((child) => {
        child.style.display = "flex";
      });
    },

    toggleChangeInnerOption(e) {
      this.isActiveInner = false;
      this.isFocusInner = false;
      this.viewKatshiPlusPensionFund = true;
      this.viewRetirementAnnuityFundPensionFund = true;
      this.showKatshiPlusPensionFundText = false;
      this.showRetirementAnnuityFundPensionFundText = false;

      this.viewPayPortionKatshiPlusPensionFund = true;
      this.viewPayPortionRetirementAnnuityFundPensionFund = true;
      this.showPayPortionKatshiPlusPensionFundText = false;
      this.showPayPortionRetirementAnnuityFundPensionFundText = false;

      console.log(
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement
      );
      Array.from(
        e.target.parentElement.parentElement.parentElement.children
      ).forEach((child) => {
        child.style.display = "flex";
      });
    },

    toggleChangeLastOption(e) {
      this.isActiveLast = false;
      this.isFocusLast = false;

      this.showPayPortionBenefitKatshiPlusPensionFundText = false;
      this.viewPayPortionBenefitKatshiPlusPensionFund = true;

      this.showTransferAmountKatshiPlusPensionFundText = false;
      this.viewTransferAmountKatshiPlusPensionFund = true;

      this.viewRetirementPayTransferAmountPensionFund = true;
      this.showRetirementTransferAmountPensionFundText = false;

      this.viewRetirementPayPortionBenefitPensionFund = true;
      this.showRetirementPayPortionBenefitPensionFundText = false;

      console.log(
        e.target.parentElement.parentElement.parentElement.parentElement
          .parentElement
      );
      Array.from(
        e.target.parentElement.parentElement.parentElement.children
      ).forEach((child) => {
        child.style.display = "flex";
      });
    },

    showKatshiPlusPensionFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showKatshiPlusPensionFundText = true;
      this.showRetirementAnnuityFundPensionFundText = false;

      this.viewKatshiPlusPensionFund = true;
      this.viewRetirementAnnuityFundPensionFund = false;
    },
    showRetirementAnnuityFundPensionFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showKatshiPlusPensionFundText = false;
      this.showRetirementAnnuityFundPensionFundText = true;

      this.viewKatshiPlusPensionFund = false;
      this.viewRetirementAnnuityFundPensionFund = true;
    },

    showPayPortionKatshiPlusPensionFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showPayPortionKatshiPlusPensionFundText = true;
      this.showPayPortionRetirementAnnuityFundPensionFundText = false;

      this.viewPayPortionKatshiPlusPensionFund = true;
      this.viewPayPortionRetirementAnnuityFundPensionFund = false;
    },

    showPayPortionRetirementAnnuityFundPensionFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showPayPortionKatshiPlusPensionFundText = false;
      this.showPayPortionRetirementAnnuityFundPensionFundText = true;

      this.viewPayPortionKatshiPlusPensionFund = false;
      this.viewPayPortionRetirementAnnuityFundPensionFund = true;
    },

    showPayPortionBenefitKatshiPlusPensionFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showPayPortionBenefitKatshiPlusPensionFundText = true;
      this.viewPayPortionBenefitKatshiPlusPensionFund = true;

      this.showTransferAmountKatshiPlusPensionFundText = false;
      this.viewTransferAmountKatshiPlusPensionFund = false;
    },
    showTransferAmountKatshiPlusPensionFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showPayPortionBenefitKatshiPlusPensionFundText = false;
      this.viewPayPortionBenefitKatshiPlusPensionFund = false;

      this.showTransferAmountKatshiPlusPensionFundText = true;
      this.viewTransferAmountKatshiPlusPensionFund = true;
    },

    showRetirementPayPortionBenefitPensionFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;
      this.showRetirementPayPortionBenefitPensionFundText = true;
      this.viewRetirementPayPortionBenefitPensionFund = true;

      this.showRetirementTransferAmountPensionFundText = false;
      this.viewRetirementPayTransferAmountPensionFund = false;
    },

    showRetirementPayTransferAmountPensionFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showRetirementPayPortionBenefitPensionFundText = false;
      this.viewRetirementPayPortionBenefitPensionFund = false;

      this.showRetirementTransferAmountPensionFundText = true;
      this.viewRetirementPayTransferAmountPensionFund = true;
    },
  },
};
</script>

<style></style>
