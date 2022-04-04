<template>
  <div class="inner-margin-1">
    <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
      <v-form ref="claimDetailsForm">
        <v-card elevation="0">
          <v-card-text class="pa-0">
            <v-container>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <v-card-title class="text-h5 px-0 black--text">
                    Claim Details
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Date of exit from the fund
                  </span>
                  <v-text-field
                    type="date"
                    outlined
                    :value="dateExitFund"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="pa-0 mb-8">
                  <div grey class="text-bg-info py-6 px-7">
                    <div class="d-flex align-start">
                      <v-icon primary class="mr-4 primary--text">
                        mdi-information
                      </v-icon>
                      <div>
                        <p>
                          It is a legislative requirement that all pertinent
                          information and options are shared with a member that
                          is leaving the fund (for whatever reason). Kindly
                          provide the member with a printed copy of the
                          information document below, that contains all this
                          information.
                        </p>
                        <div class="flex">
                          <v-btn text color="primary" class="px-0 mr-4">
                            <v-icon>mdi-download</v-icon>
                            Member Information
                          </v-btn>
                          <v-btn text color="primary">
                            <v-icon>mdi-download</v-icon>
                            Lid Inligting
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Reason for withdrawal
                  </span>
                  <v-select
                    outlined
                    v-model="select"
                    :items="reasonForWithdrawal"
                    :rules="rules"
                    label="Reason for withdrawal"
                    required
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="8" class="mb-4 pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Does the member have outstanding amounts owing to the
                    employer?
                  </span>
                  <v-radio-group v-model="amountsOwing" row>
                    <v-radio
                      label="No"
                      value="No"
                      class="mr-sm-16"
                      @click="isAmountOwing = false"
                    ></v-radio>
                    <v-radio
                      label="Yes"
                      value="Yes"
                      @click="isAmountOwing = true"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
              <v-row class="mt-0 mb-4" v-show="isAmountOwing">
                <v-col cols="12" sm="3" class="pa-0">
                  <div class="d-flex justify-space-between align-center">
                    <span class="text-h6 mr-2 black--text">R</span>
                    <v-text-field
                      style="width: 200px"
                      outlined
                      hide-details
                      type="number"
                      v-model="amountOwingToEmployer"
                      :rules="[rules.amountOwingToEmployer]"
                    ></v-text-field>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="8" class="mb-4 pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Does the member have a pension backed housing loan?
                  </span>
                  <v-radio-group v-model="backedHousingLoan" row>
                    <v-radio label="No" value="No" class="mr-sm-16"></v-radio>
                    <v-radio label="Yes" value="Yes"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="pa-0 mb-4">
                  <div grey class="text-bg-info py-6 px-7">
                    <div class="d-flex align-start">
                      <v-icon primary class="mr-4 primary--text">
                        mdi-information
                      </v-icon>
                      <p class="mb-0">
                        Section 37D - Fund may make certain deductions from
                        pension benefits. <br />
                        If a member opts to take a portion of the benefit
                        payment in cash, outstanding loan amounts will be
                        deducted from the cash portion of the benefit. Thus the
                        net amount paid into their account will be after tax and
                        the loan settlement.
                      </p>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="pa-0">
                  <div grey class="text-bg-info py-6 px-7">
                    <div class="d-flex align-start">
                      <v-icon primary class="mr-4 primary--text">
                        mdi-information
                      </v-icon>
                      <p class="mb-0">
                        Please furnish Katshi with proof of any amount by the
                        member in accordance with the Income Tax Act. <br />
                        The Fund will contravene the Pension Funds Act if it
                        allows a deduction from a benefit where such a deduction
                        is not one of the permissible deductions i.r.o. section
                        37D of the Pension Funds Act.
                      </p>
                    </div>
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
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    dateExitFund: null,
    amountsOwing: null,
    backedHousingLoan: null,
    select: "Select an option",
    reasonForWithdrawal: ["Select an option", "Option 1", "Option 2"],
    isAmountOwing: false,
    amountOwingToEmployer: "",
    rules: [
      {
        required: (value) => !!value,
        amountOwingToEmployer: (value) => value.length <= 10,
      },
    ],
  }),
  validations() {
    return {};
  },
  methods: {
    async submit() {
      const result = await this.v$.$validate();
      if (!result) {
        // notify user form is invalid
        return;
      }
      // perform async actions
    },
    submit() {
      this.$v.$touch();
    },
  },
};
</script>
