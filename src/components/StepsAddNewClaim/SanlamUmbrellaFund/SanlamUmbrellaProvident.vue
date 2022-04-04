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
                  <h2 class="mb-6 black--text">
                    Katshi Design Provident Fund
                  </h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Please select a payment option
                  </span>
                  <v-radio-group v-model="paymentOptionProvidentFund" column>
                    <v-radio
                      label="Same payment options as Katshi Design Pension Fund"
                      value="Same payment options as Katshi Design Pension Fund"
                      class="mb-2 pa-2 radio-item"
                      @change="showSamePaymentProvidentFund"
                      :class="{ focus: isFocusProvidentFund }"
                      v-show="viewSamePaymentProvidentFund"
                      :disabled="disabledProvidentFund"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Same payment options as Katshi Design Pension
                            Fund
                          </span>
                          <v-btn
                            text
                            color="primary"
                            v-show="isActiveProvidentFund"
                            :class="{ active: isActiveProvidentFund }"
                            class="text-body-2"
                            @click="toggleChangeOptionProvidentFund"
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
                      @change="showBenefitProvidentFund"
                      :class="{ focus: isFocusProvidentFund }"
                      v-show="viewBenefitProvidentFund"
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
                            v-show="isActiveProvidentFund"
                            :class="{ active: isActiveProvidentFund }"
                            class="text-body-2"
                            @click="toggleChangeOptionProvidentFund"
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
                      @change="showTransferProvidentFund"
                      :class="{ focus: isFocusProvidentFund }"
                      v-show="viewTransferProvidentFund"
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
                            v-show="isActiveProvidentFund"
                            :class="{ active: isActiveProvidentFund }"
                            class="text-body-2"
                            @click="toggleChangeOptionProvidentFund"
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
                      @change="showPayPortionProvidentFund"
                      :class="{ focus: isFocusProvidentFund }"
                      v-show="viewPayPortionProvidentFund"
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
                            v-show="isActiveProvidentFund"
                            :class="{ active: isActiveProvidentFund }"
                            class="text-body-2"
                            @click="toggleChangeOptionProvidentFund"
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
                      @change="showFullBenefitProvidentFund"
                      :class="{ focus: isFocusProvidentFund }"
                      v-show="viewFullBenefitProvidentFund"
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
                            v-show="isActiveProvidentFund"
                            :class="{ active: isActiveProvidentFund }"
                            class="text-body-2"
                            @click="toggleChangeOptionProvidentFund"
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
                      @change="showNoPaymentProvidentFund"
                      :class="{ focus: isFocusProvidentFund }"
                      v-show="viewNoPaymentProvidentFund"
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
                            v-show="isActiveProvidentFund"
                            :class="{ active: isActiveProvidentFund }"
                            class="text-body-2"
                            @click="toggleChangeOptionProvidentFund"
                          >
                            Change
                          </v-btn>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>

                  <!-- Option 1 No Content -->

                  <!-- Option 2 -->
                  <div v-show="showBenefitProvidentFundText" class="pa-2">
                    <DividerBar />
                    <LeaveBenefitFundContent />
                  </div>

                  <!-- Option 3 -->
                  <div v-show="showTransferProvidentFundText" class="pa-2">
                    <DividerBar />
                    <div class="mt-4">
                      <v-card-title class="text-h5 px-0 black--text">
                        Transfer Full Benefit To
                      </v-card-title>
                      <v-radio-group column class="mt-0">
                        <div
                          v-if="viewKatshiPlusProvidentFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="Katshi Plus Preservation Fund"
                            value="Katshi Plus Preservation Fund"
                            @click="showKatshiPlusProvidentFund"
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
                          v-if="viewRetirementAnnuityFundProvidentFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                            value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                            @click="showRetirementAnnuityFundProvidentFund"
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

                      <div
                        v-show="showKatshiPlusProvidentFundText"
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
                        v-show="showRetirementAnnuityFundProvidentFundText"
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
                  <div v-show="showPayPortionProvidentFundText" class="pa-2">
                    <DividerBar />
                    <div class="mt-4">
                      <v-card-title class="text-h5 px-0 black--text">
                        Balance transfer to:
                      </v-card-title>
                      <v-radio-group column class="mt-0">
                        <div
                          v-if="viewPayPortionKatshiPlusProvidentFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="Katshi Plus Preservation Fund"
                            value="Katshi Plus Preservation Fund"
                            @click="showPayPortionKatshiPlusProvidentFund"
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
                          v-if="
                            viewPayPortionRetirementAnnuityFundProvidentFund
                          "
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
                              showPayPortionRetirementAnnuityFundProvidentFund
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
                        v-show="showPayPortionKatshiPlusProvidentFundText"
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
                              v-if="
                                viewPayPortionBenefitKatshiPlusProvidentFund
                              "
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
                                  showPayPortionBenefitKatshiPlusProvidentFund
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
                              v-if="viewTransferAmountKatshiPlusProvidentFund"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the benefit portion to be transferred to Katshi Plus Preservation fund. The balance will be paid in cash"
                                value="Indicate the benefit portion to be transferred to Katshi Plus Preservation fund. The balance will be paid in cash"
                                @click="
                                  showTransferAmountKatshiPlusProvidentFund
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
                              showPayPortionBenefitKatshiPlusProvidentFundText
                            "
                            class="pa-2"
                          >
                            <DividerBar />
                            <PortionBenefitCash />
                          </div>

                          <!-- I want to transfer an amount to the Katshi Plus Preservation Fund -->
                          <div
                            v-show="
                              showTransferAmountKatshiPlusProvidentFundText
                            "
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
                          showPayPortionRetirementAnnuityFundProvidentFundText
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
                              v-if="
                                viewRetirementPayPortionBenefitProvidentFund
                              "
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
                                  showRetirementPayPortionBenefitProvidentFund
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
                              v-if="
                                viewRetirementPayTransferAmountProvidentFund
                              "
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the benefit portion to be transferred to a Retirement Annuity / other retirement arrangement. The balance will be paid in cash."
                                value="Indicate the benefit portion to be transferred to a Retirement Annuity / other retirement arrangement. The balance will be paid in cash."
                                @click="showRetirementPayTransferAmount"
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
                              showRetirementPayPortionBenefitProvidentFundText
                            "
                            class="pa-2"
                          >
                            <DividerBar />
                            <PortionBenefitCash />
                          </div>

                          <!-- I want to transfer an amount to the Katshi Plus Preservation Fund -->
                          <div
                            v-show="
                              showRetirementTransferAmountProvidentFundText
                            "
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
                  <div v-show="showFullBenefitProvidentFundText" class="pa-2">
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
      paymentOptionProvidentFund: null,
      showFinRepresentative: false,
      financialRepresentative: null,
      retirementFinancialRepresentative: null,
      transferAmountFinancialRepresentative: null,
      showRetirementFinRepresentative: false,
      showTransferAmountFinRepresentative: false,
      showTransferProvidentFundText: false,
      cashRetirementPayment: null,

      isFocusInner: false,
      isActiveInner: false,
      isFocusLast: false,
      isActiveLast: false,

      viewKatshiPlusProvidentFund: true,
      viewRetirementAnnuityFundProvidentFund: true,

      viewPayPortionKatshiPlusProvidentFund: true,
      viewPayPortionRetirementAnnuityFundProvidentFund: true,
      showPayPortionKatshiPlusProvidentFundText: false,
      showRetirementTransferAmountProvidentFundText: false,

      showPayPortionBenefitKatshiPlusProvidentFundText: false,
      viewPayPortionBenefitKatshiPlusProvidentFund: true,
      viewTransferAmountKatshiPlusProvidentFund: true,
      showTransferAmountKatshiPlusProvidentFundText: false,

      viewRetirementPayPortionBenefitProvidentFund: true,
      viewRetirementPayTransferAmountProvidentFund: true,
      showRetirementPayPortionBenefitProvidentFundText: false,
      showRetirementTransferAmountProvidentFundText: false,

      viewPayPortionBenefitProvidentFund: true,
      viewTransferAmountProvidentFund: true,

      viewSamePaymentPensionFund: true,
      showSamePaymentPensionFundText: false,
      disabledPensionFund: false,

      isActiveProvidentFund: false,
      isFocusProvidentFund: false,
      disabledProvidentFund: false,
      viewSamePaymentProvidentFund: true,
      viewBenefitProvidentFund: true,
      viewTransferProvidentFund: true,
      viewPayPortionProvidentFund: true,
      viewFullBenefitProvidentFund: true,
      viewNoPaymentProvidentFund: true,
      showSamePaymentProvidentFundText: false,
      showBenefitProvidentFundText: false,
      showFullBenefitProvidentFundText: false,
      showKatshiPlusProvidentFundText: false,
      showRetirementAnnuityFundProvidentFundText: false,
      showPayPortionBenefitProvidentFundText: false,
      showTransferAmountProvidentFundText: false,
      showPayPortionRetirementAnnuityFundProvidentFundText: false,
      showPayPortionProvidentFundText: false,

      rules: [
        {
          required: (value) => !!value || "Required.",
        },
      ],
    };
  },
  methods: {
    // Provident Fund Methods
    showBenefitProvidentFund() {
      this.showBenefitProvidentFundText = true;
      this.showTransferProvidentFundText = false;
      this.showPayPortionProvidentFundText = false;
      this.showFullBenefitProvidentFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActiveProvidentFund = true;
      this.isFocusProvidentFund = true;
      this.viewTransferProvidentFund = false;
      this.viewPayPortionProvidentFund = false;
      this.viewFullBenefitProvidentFund = false;
      this.viewNoPaymentProvidentFund = false;

      this.showSamePaymentProvidentFundText = false;
      this.viewSamePaymentProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
    },
    showTransferProvidentFund() {
      this.showTransferProvidentFundText = true;
      this.showBenefitProvidentFundText = false;
      this.showPayPortionProvidentFundText = false;
      this.showFullBenefitProvidentFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActiveProvidentFund = true;
      this.isFocusProvidentFund = true;
      this.viewBenefitProvidentFund = false;
      this.viewPayPortionProvidentFund = false;
      this.viewFullBenefitProvidentFund = false;
      this.viewNoPaymentProvidentFund = false;

      this.showSamePaymentProvidentFundText = false;
      this.viewSamePaymentProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
    },
    showPayPortionProvidentFund() {
      this.showPayPortionProvidentFundText = true;
      this.showBenefitProvidentFundText = false;
      this.showTransferProvidentFundText = false;
      this.showFullBenefitProvidentFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActiveProvidentFund = true;
      this.isFocusProvidentFund = true;
      this.viewBenefitProvidentFund = false;
      this.viewTransferProvidentFund = false;
      this.viewFullBenefitProvidentFund = false;
      this.viewNoPaymentProvidentFund = false;

      this.showSamePaymentProvidentFundText = false;
      this.viewSamePaymentProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
    },
    showFullBenefitProvidentFund() {
      this.showFullBenefitProvidentFundText = true;
      this.showBenefitProvidentFundText = false;
      this.showTransferProvidentFundText = false;
      this.showPayPortionProvidentFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActiveProvidentFund = true;
      this.isFocusProvidentFund = true;
      this.viewBenefitProvidentFund = false;
      this.viewTransferProvidentFund = false;
      this.viewPayPortionProvidentFund = false;
      this.viewNoPaymentProvidentFund = false;

      this.showSamePaymentProvidentFundText = false;
      this.viewSamePaymentProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
    },
    showNoPaymentProvidentFund() {
      this.showBenefitProvidentFundText = false;
      this.showTransferProvidentFundText = false;
      this.showPayPortionProvidentFundText = false;
      this.showFullBenefitProvidentFundText = false;
      this.showNoPaymentProvidentFundText = true;
      this.isActiveProvidentFund = true;
      this.isFocusProvidentFund = true;
      this.viewBenefitProvidentFund = false;
      this.viewTransferProvidentFund = false;
      this.viewPayPortionProvidentFund = false;
      this.viewFullBenefitProvidentFund = false;

      this.showSamePaymentProvidentFundText = false;
      this.viewSamePaymentProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
    },

    showSamePaymentProvidentFund() {
      this.showSamePaymentProvidentFundText = true;
      this.showBenefitProvidentFundText = false;
      this.showTransferProvidentFundText = false;
      this.showPayPortionProvidentFundText = false;
      this.showFullBenefitProvidentFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.isActiveProvidentFund = true;
      this.isFocusProvidentFund = true;
      this.viewBenefitProvidentFund = false;
      this.viewTransferProvidentFund = false;
      this.viewPayPortionProvidentFund = false;
      this.viewFullBenefitProvidentFund = false;
      this.viewNoPaymentProvidentFund = false;

      this.disabledPensionFund = true;
      this.disabledProvidentFund = false;
    },

    toggleChangeOptionProvidentFund(e) {
      this.isActiveProvidentFund = false;
      this.isFocusProvidentFund = false;
      this.viewBenefitProvidentFund = true;
      this.viewTransferProvidentFund = true;
      this.viewPayPortionProvidentFund = true;
      this.viewFullBenefitProvidentFund = true;
      this.viewNoPaymentProvidentFund = true;
      this.viewSamePaymentProvidentFund = true;

      this.showBenefitProvidentFundText = false;
      this.showTransferProvidentFundText = false;
      this.showPayPortionProvidentFundText = false;
      this.showFullBenefitProvidentFundText = false;
      this.showNoPaymentProvidentFundText = false;
      this.showSamePaymentProvidentFundText = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
      this.disabledPensionFund = false;
      this.disabledProvidentFund = false;
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
      this.viewKatshiPlusProvidentFund = true;
      this.viewRetirementAnnuityFundProvidentFund = true;
      this.showKatshiPlusProvidentFundText = false;
      this.showRetirementAnnuityFundProvidentFundText = false;

      this.viewPayPortionKatshiPlusProvidentFund = true;
      this.viewPayPortionRetirementAnnuityFundProvidentFund = true;
      this.showPayPortionKatshiPlusProvidentFundText = false;
      this.showPayPortionRetirementAnnuityFundProvidentFundText = false;

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

      this.showPayPortionBenefitKatshiPlusProvidentFundText = false;
      this.viewPayPortionBenefitKatshiPlusProvidentFund = true;

      this.showTransferAmountKatshiPlusProvidentFundText = false;
      this.viewTransferAmountKatshiPlusProvidentFund = true;

      this.viewRetirementPayTransferAmountProvidentFund = true;
      this.showRetirementTransferAmountProvidentFundText = false;

      this.viewRetirementPayPortionBenefitProvidentFund = true;
      this.showRetirementPayPortionBenefitProvidentFundText = false;

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

    showKatshiPlusProvidentFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showKatshiPlusProvidentFundText = true;
      this.showRetirementAnnuityFundProvidentFundText = false;

      this.viewKatshiPlusProvidentFund = true;
      this.viewRetirementAnnuityFundProvidentFund = false;
    },
    showRetirementAnnuityFundProvidentFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showKatshiPlusProvidentFundText = false;
      this.showRetirementAnnuityFundProvidentFundText = true;

      this.viewKatshiPlusProvidentFund = false;
      this.viewRetirementAnnuityFundProvidentFund = true;
    },

    showPayPortionKatshiPlusProvidentFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showPayPortionKatshiPlusProvidentFundText = true;
      this.showPayPortionRetirementAnnuityFundProvidentFundText = false;

      this.viewPayPortionKatshiPlusProvidentFund = true;
      this.viewPayPortionRetirementAnnuityFundProvidentFund = false;
    },

    showPayPortionRetirementAnnuityFundProvidentFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showPayPortionKatshiPlusProvidentFundText = false;
      this.showPayPortionRetirementAnnuityFundProvidentFundText = true;

      this.viewPayPortionKatshiPlusProvidentFund = false;
      this.viewPayPortionRetirementAnnuityFundProvidentFund = true;
    },

    showPayPortionBenefitKatshiPlusProvidentFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showPayPortionBenefitKatshiPlusProvidentFundText = true;
      this.viewPayPortionBenefitKatshiPlusProvidentFund = true;

      this.showTransferAmountKatshiPlusProvidentFundText = false;
      this.viewTransferAmountKatshiPlusProvidentFund = false;
    },
    showTransferAmountKatshiPlusProvidentFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showPayPortionBenefitKatshiPlusProvidentFundText = false;
      this.viewPayPortionBenefitKatshiPlusProvidentFund = false;

      this.showTransferAmountKatshiPlusProvidentFundText = true;
      this.viewTransferAmountKatshiPlusProvidentFund = true;
    },

    showRetirementPayPortionBenefitProvidentFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;
      this.showRetirementPayPortionBenefitProvidentFundText = true;
      this.viewRetirementPayPortionBenefitProvidentFund = true;

      this.showRetirementTransferAmountProvidentFundText = false;
      this.viewRetirementPayTransferAmountProvidentFund = false;
    },

    showRetirementPayTransferAmountProvidentFund() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showRetirementPayPortionBenefitProvidentFundText = false;
      this.viewRetirementPayPortionBenefitProvidentFund = false;

      this.showRetirementTransferAmountProvidentFundText = true;
      this.viewRetirementPayTransferAmountProvidentFund = true;
    },
  },
};
</script>

<style></style>
