<template>
  <div class="inner-margin-1">
    <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
      <v-form ref="claimDetailsForm">
        <v-card elevation="0">
          <v-card-text class="pa-0">
            <v-container>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <v-card-title
                    class="text-h5 px-0 black--text font-weight-light"
                  >
                    Payment option elected
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Please select a payment option
                  </span>
                  <v-radio-group v-model="paymentOption" column>
                    <v-radio
                      label="Leave benefit in the Fund (In-Fund Preservation / Paid-up member)"
                      value="Leave benefit in the Fund (In-Fund Preservation / Paid-up member)"
                      class="mb-2 pa-2 radio-item"
                      @change="showBenefit"
                      :class="{ focus: isFocus }"
                      v-show="viewBenefit"
                    >
                      <template v-slot:label>
                        <div
                          class="d-flex justify-space-between align-center flex-grow-1"
                        >
                          <span
                            >Leave benefit in the Fund (In-Fund Preservation /
                            Paid-up member)
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
                            v-show="isActive"
                            :class="{ active: isActive }"
                            class="text-body-2"
                            @click="toggleChangeOption"
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
                      @change="showTransfer"
                      :class="{ focus: isFocus }"
                      v-show="viewTransfer"
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
                            v-show="isActive"
                            :class="{ active: isActive }"
                            class="text-body-2"
                            @click="toggleChangeOption"
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
                      @change="showPayPortion"
                      :class="{ focus: isFocus }"
                      v-show="viewPayPortion"
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
                                >Members who elect to the Sanlam Plus
                                Preservation Fund, will have their investment
                                transferred seamlessly</span
                              >
                              <span class="d-block text-caption"
                                >provided that the member’s Investment
                                portfolio(s) exist(s) on the Sanlam Plus
                                Preservation Fund.</span
                              >
                              <span class="d-block text-caption"
                                >In these cases, it means that the funds will
                                not be disinvested in cash but transferred
                                directly to the chosen portfolios.</span
                              >
                              <span class="d-block text-caption"
                                >In order to do such a transfer, we would
                                require the separate Sanlam Plus Preservation
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
                            v-show="isActive"
                            :class="{ active: isActive }"
                            class="text-body-2"
                            @click="toggleChangeOption"
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
                      @change="showFullBenefit"
                      :class="{ focus: isFocus }"
                      v-show="viewFullBenefit"
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
                            v-show="isActive"
                            :class="{ active: isActive }"
                            class="text-body-2"
                            @click="toggleChangeOption"
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
                      @change="showNoPayment"
                      :class="{ focus: isFocus }"
                      v-show="viewNoPayment"
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
                            v-show="isActive"
                            :class="{ active: isActive }"
                            class="text-body-2"
                            @click="toggleChangeOption"
                          >
                            Change
                          </v-btn>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>

                  <!-- Option 1 -->
                  <div v-show="showBenefitText" class="pa-2">
                    <DividerBar />
                    <LeaveBenefitFundContent />
                  </div>

                  <!-- Option 2 -->
                  <div v-show="showTransferText" class="pa-2">
                    <DividerBar />
                    <div class="mt-4">
                      <v-card-title class="text-h5 px-0 black--text">
                        Transfer Full Benefit To
                      </v-card-title>
                      <v-radio-group column class="mt-0">
                        <div
                          v-if="viewSanlamPlus"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="Sanlam Plus Preservation Fund"
                            value="Sanlam Plus Preservation Fund"
                            @click="showSanlamPlus"
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
                          v-if="viewRetirementAnnuityFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                            value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                            @click="showRetirementAnnuityFund"
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

                      <div v-show="showSanlamPlusText" class="pa-2">
                        <div grey class="text-bg-info py-6 px-7 mb-3">
                          <div class="d-flex align-start">
                            <v-icon primary class="mr-4 primary--text">
                              mdi-information
                            </v-icon>
                            <div>
                              <p class="mb-0">
                                Members who elect to have their benefit
                                transferred to the Sanlam Plus Preservation
                                Fund, will have their investments transferred
                                seamlessly provided that the member's investment
                                portfolio(s) exist(s) on the Sanlam Plus
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
                      <div v-show="showRetirementAnnuityFundText" class="pa-2">
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
                                    Sanlam will contact the member or broker for
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

                  <!-- Option 3 -->
                  <div v-show="showPayPortionText" class="pa-2">
                    <DividerBar />
                    <div class="mt-4">
                      <v-card-title class="text-h5 px-0 black--text">
                        Balance transfer to:
                      </v-card-title>
                      <v-radio-group column class="mt-0">
                        <div
                          v-if="viewPayPortionSanlamPlus"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="Sanlam Plus Preservation Fund"
                            value="Sanlam Plus Preservation Fund"
                            @click="showPayPortionSanlamPlus"
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
                          v-if="viewPayPortionRetirementAnnuityFund"
                          v-show="isFocusInner"
                          :class="{
                            focus: isFocusInner,
                          }"
                          class="radio-item d-flex justify-space-between align-center pa-2"
                        >
                          <v-radio
                            label="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                            value="A Retirement Annuity Fund, Pension Fund, Provident Fund or other Preservation Fund"
                            @click="showPayPortionRetirementAnnuityFund"
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
                      <!-- Sanlam Plus Preservation Fund -->
                      <div v-show="showPayPortionSanlamPlusText" class="pa-2">
                        <div grey class="text-bg-info py-6 px-7 mb-3">
                          <div class="d-flex align-start">
                            <v-icon primary class="mr-4 primary--text">
                              mdi-information
                            </v-icon>
                            <div>
                              <p class="mb-0">
                                Members who elect to have their benefit
                                transferred to the Sanlam Plus Preservation
                                Fund, will have their investments transferred
                                seamlessly provided that the member's investment
                                portfolio(s) exist(s) on the Sanlam Plus
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
                              v-if="viewPayPortionBenefitSanlamPlus"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to Sanlam Plus Preservation fund"
                                value="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to Sanlam Plus Preservation fund"
                                @click="showPayPortionBenefitSanlamPlus"
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
                              v-if="viewTransferAmountSanlamPlus"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the benefit portion to be transferred to Sanlam Plus Preservation fund. The balance will be paid in cash"
                                value="Indicate the benefit portion to be transferred to Sanlam Plus Preservation fund. The balance will be paid in cash"
                                @click="showTransferAmountSanlamPlus"
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
                            v-show="showPayPortionBenefitSanlamPlusText"
                            class="pa-2"
                          >
                            <DividerBar />
                            <PortionBenefitCash />
                          </div>

                          <!-- I want to transfer an amount to the Sanlam Plus Preservation Fund -->
                          <div
                            v-show="showTransferAmountSanlamPlusText"
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
                        v-show="showPayPortionRetirementAnnuityFundText"
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
                              v-if="viewRetirementPayPortionBenefit"
                              v-show="isFocusLast"
                              :class="{
                                focus: isFocusLast,
                              }"
                              class="radio-item d-flex justify-space-between align-center pa-2"
                            >
                              <v-radio
                                label="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to a Retirement Annuity / other retirement arrangement."
                                value="Indicate the percentage (%) or (R) Rand value to be paid in cash. The balance will be transferred to a Retirement Annuity / other retirement arrangement."
                                @click="showRetirementPayPortionBenefit"
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
                              v-if="viewRetirementPayTransferAmount"
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
                            v-show="showRetirementPayPortionBenefitText"
                            class="pa-2"
                          >
                            <DividerBar />
                            <PortionBenefitCash />
                          </div>

                          <!-- I want to transfer an amount to the Sanlam Plus Preservation Fund -->
                          <div
                            v-show="showRetirementTransferAmountText"
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
                  <!-- Option 4 -->
                  <div v-show="showFullBenefitText" class="pa-2">
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
import DividerBar from "@/components/DividerBar";
import LeaveBenefitFundContent from "@/components/StepsAddNewClaim/LeaveBenefitFundContent";
import PayFullBenefitInCash from "@/components/StepsAddNewClaim/PayFullBenefitInCash";
import PortionBenefitCash from "@/components/StepsAddNewClaim/PayPortionBenefit/PortionBenefitCash";
import FinancialRepresentative from "@/components/StepsAddNewClaim/FinancialRepresentative";
import BankingDetails from "@/components/StepsAddNewClaim/BankingDetails";
export default {
  components: {
    DividerBar,
    LeaveBenefitFundContent,
    PayFullBenefitInCash,
    PortionBenefitCash,
    BankingDetails,
    FinancialRepresentative,
  },
  data() {
    return {
      benefitElectionDate: "",
      paymentOption: null,
      cashPayment: null,
      paidFund: false,
      rand: 0,
      showBenefitText: false,
      showFullBenefitText: false,
      showSanlamPlusText: false,
      showRetirementAnnuityFundText: false,
      showFinRepresentative: false,
      showPayPortionBenefitText: false,
      showTransferAmountText: false,
      showPayPortionRetirementAnnuityFundText: false,
      showPayPortionText: false,
      financialRepresentative: null,
      retirementFinancialRepresentative: null,
      transferAmountFinancialRepresentative: null,
      showRetirementFinRepresentative: false,
      showTransferAmountFinRepresentative: false,
      showTransferText: false,
      cashRetirementPayment: null,
      isActive: false,
      isFocus: false,
      isFocusInner: false,
      isActiveInner: false,
      isFocusLast: false,
      isActiveLast: false,
      viewBenefit: true,
      viewTransfer: true,
      viewPayPortion: true,
      viewFullBenefit: true,
      viewNoPayment: true,

      viewSanlamPlus: true,
      viewRetirementAnnuityFund: true,

      name: "",
      brokerCode: "",
      contactNumber: "",
      emailAddress: "",
      address: "",
      city: "",
      postalCode: "",
      nameOfFinancialServiceProvider: "",
      registerdNameOfRetirementAnnuity: "",
      fundApprovalNumber: "",
      policyNumber: "",
      emailAddressOfFSP: "",

      viewPayPortionSanlamPlus: true,
      viewPayPortionRetirementAnnuityFund: true,
      showPayPortionSanlamPlusText: false,
      showRetirementPayPortionBenefitText: false,
      showRetirementTransferAmountText: false,

      showPayPortionBenefitSanlamPlusText: false,
      viewPayPortionBenefitSanlamPlus: true,
      viewTransferAmountSanlamPlus: true,
      showTransferAmountSanlamPlusText: false,

      viewRetirementPayPortionBenefit: true,
      viewRetirementPayTransferAmount: true,
      showRetirementPayPortionBenefitText: false,
      showRetirementTransferAmountText: false,

      viewPayPortionBenefit: true,
      viewTransferAmount: true,

      rules: [
        {
          required: (value) => !!value || "Required.",
        },
      ],
    };
  },
  methods: {
    showBenefit() {
      this.showBenefitText = true;
      this.showTransferText = false;
      this.showPayPortionText = false;
      this.showFullBenefitText = false;
      this.showNoPaymentText = false;
      this.isActive = true;
      this.isFocus = true;
      this.viewTransfer = false;
      this.viewPayPortion = false;
      this.viewFullBenefit = false;
      this.viewNoPayment = false;
    },
    showTransfer() {
      this.showTransferText = true;
      this.showBenefitText = false;
      this.showPayPortionText = false;
      this.showFullBenefitText = false;
      this.showNoPaymentText = false;
      this.isActive = true;
      this.isFocus = true;
      this.viewBenefit = false;
      this.viewPayPortion = false;
      this.viewFullBenefit = false;
      this.viewNoPayment = false;
    },
    showPayPortion() {
      this.showPayPortionText = true;
      this.showBenefitText = false;
      this.showTransferText = false;
      this.showFullBenefitText = false;
      this.showNoPaymentText = false;
      this.isActive = true;
      this.isFocus = true;
      this.viewBenefit = false;
      this.viewTransfer = false;
      this.viewFullBenefit = false;
      this.viewNoPayment = false;
    },
    showFullBenefit() {
      this.showFullBenefitText = true;
      this.showBenefitText = false;
      this.showTransferText = false;
      this.showPayPortionText = false;
      this.showNoPaymentText = false;
      this.isActive = true;
      this.isFocus = true;
      this.viewBenefit = false;
      this.viewTransfer = false;
      this.viewPayPortion = false;
      this.viewNoPayment = false;
    },
    showNoPayment() {
      this.showBenefitText = false;
      this.showTransferText = false;
      this.showPayPortionText = false;
      this.showFullBenefitText = false;
      this.showNoPaymentText = true;
      this.isActive = true;
      this.isFocus = true;
      this.viewBenefit = false;
      this.viewTransfer = false;
      this.viewPayPortion = false;
      this.viewFullBenefit = false;
    },

    toggleChangeOption(e) {
      this.isActive = false;
      this.isFocus = false;
      this.viewBenefit = true;
      this.viewTransfer = true;
      this.viewPayPortion = true;
      this.viewFullBenefit = true;
      this.viewNoPayment = true;

      this.showBenefitText = false;
      this.showTransferText = false;
      this.showPayPortionText = false;
      this.showFullBenefitText = false;
      this.showNoPaymentText = false;
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
      this.viewSanlamPlus = true;
      this.viewRetirementAnnuityFund = true;
      this.showSanlamPlusText = false;
      this.showRetirementAnnuityFundText = false;

      this.viewPayPortionSanlamPlus = true;
      this.viewPayPortionRetirementAnnuityFund = true;
      this.showPayPortionSanlamPlusText = false;
      this.showPayPortionRetirementAnnuityFundText = false;

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

      this.showPayPortionBenefitSanlamPlusText = false;
      this.viewPayPortionBenefitSanlamPlus = true;

      this.showTransferAmountSanlamPlusText = false;
      this.viewTransferAmountSanlamPlus = true;

      this.viewRetirementPayTransferAmount = true;
      this.showRetirementTransferAmountText = false;

      this.viewRetirementPayPortionBenefit = true;
      this.showRetirementPayPortionBenefitText = false;

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

    showSanlamPlus() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showSanlamPlusText = true;
      this.showRetirementAnnuityFundText = false;

      this.viewSanlamPlus = true;
      this.viewRetirementAnnuityFund = false;
    },
    showRetirementAnnuityFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showSanlamPlusText = false;
      this.showRetirementAnnuityFundText = true;

      this.viewSanlamPlus = false;
      this.viewRetirementAnnuityFund = true;
    },

    showPayPortionSanlamPlus() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showPayPortionSanlamPlusText = true;
      this.showPayPortionRetirementAnnuityFundText = false;

      this.viewPayPortionSanlamPlus = true;
      this.viewPayPortionRetirementAnnuityFund = false;
    },

    showPayPortionRetirementAnnuityFund() {
      this.isActiveInner = true;
      this.isFocusInner = true;

      this.showPayPortionSanlamPlusText = false;
      this.showPayPortionRetirementAnnuityFundText = true;

      this.viewPayPortionSanlamPlus = false;
      this.viewPayPortionRetirementAnnuityFund = true;
    },

    showPayPortionBenefitSanlamPlus() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showPayPortionBenefitSanlamPlusText = true;
      this.viewPayPortionBenefitSanlamPlus = true;

      this.showTransferAmountSanlamPlusText = false;
      this.viewTransferAmountSanlamPlus = false;
    },
    showTransferAmountSanlamPlus() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showPayPortionBenefitSanlamPlusText = false;
      this.viewPayPortionBenefitSanlamPlus = false;

      this.showTransferAmountSanlamPlusText = true;
      this.viewTransferAmountSanlamPlus = true;
    },

    showRetirementPayPortionBenefit() {
      this.isActiveLast = true;
      this.isFocusLast = true;
      this.showRetirementPayPortionBenefitText = true;
      this.viewRetirementPayPortionBenefit = true;

      this.showRetirementTransferAmountText = false;
      this.viewRetirementPayTransferAmount = false;
    },

    showRetirementPayTransferAmount() {
      this.isActiveLast = true;
      this.isFocusLast = true;

      this.showRetirementPayPortionBenefitText = false;
      this.viewRetirementPayPortionBenefit = false;

      this.showRetirementTransferAmountText = true;
      this.viewRetirementPayTransferAmount = true;
    },
  },
};
</script>

<style lang="scss">
.v-radio {
  &.theme--light {
    margin-bottom: 0 !important;
  }
}

.radio-item {
  border-radius: 4px;
  transition: all 0.5s linear;
  &.focus {
    background: #f3f5f7;
  }
  &:hover {
    background: #f3f5f7;
  }
}

.active {
  display: block;
}

.focus {
  background: #f3f5f7;
}

.display-options {
  display: none;
}
</style>
