<template>
  <div class="mt-4">
    <v-card-title class="text-h5 px-0 black--text mb-2">
      Cash Payment Details
    </v-card-title>
    <v-row class="mx-0">
      <v-col cols="12" sm="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Benefit election date
          <v-tooltip bottom color="black">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" primary class="primary--text">
                mdi-information
              </v-icon>
            </template>

            <span class="d-block">The later of the exit date</span>
            <span class="d-block"
              >or the date that the member signed the exit forms.</span
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

    <v-row class="mx-0">
      <v-col cols="12" sm="7" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Indicate the (%) Percentage or (R) Rand value to be paid in cash.
        </span>
        <v-radio-group v-model="portionPayCash" row>
          <v-radio label="%" value="percentage" @change="disabled = false">
            <template v-slot:label>
              <div class="d-flex justify-space-between align-center pa-2">
                <v-text-field
                  style="width: 100px"
                  outlined
                  hide-details
                  v-model="percentage"
                  type="number"
                  min="0"
                  max="100"
                  :disabled="disabled"
                  placeholder="%"
                ></v-text-field>
              </div>
            </template>
          </v-radio>
          <v-radio label="R" value="rand" @change="disabled = false">
            <template v-slot:label>
              <div class="d-flex justify-space-between align-center pa-2">
                <v-text-field
                  style="width: 100px"
                  outlined
                  hide-details
                  v-model="rand"
                  type="number"
                  min="0"
                  max="100"
                  :disabled="disabled"
                  placeholder="Rand"
                ></v-text-field>
              </div>
            </template>
          </v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <BankingDetails />
    <DividerBar />

    <v-card-title class="text-h5 px-0 black--text font-weight-light">
      Broker Details
    </v-card-title>
    <!-- financial representative -->
    <span class="mb-2 d-block font-weight-bold black--text">
      Do you have a financial representative?
    </span>
    <v-radio-group v-model="financialRepresentative" row>
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

    <div grey class="text-bg-info py-6 px-7 mt-2">
      <div class="d-flex align-start">
        <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
        <p class="mb-0">
          The member is required to fill out a
          <a href="#">Sanlam Preservation Fund application form</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BankingDetails from "@/components/StepsAddNewClaim/BankingDetails";
import FinancialRepresentative from "@/components/StepsAddNewClaim/FinancialRepresentative";
export default {
  components: {
    BankingDetails,
    FinancialRepresentative,
  },
  data() {
    return {
      disabled: true,
      benefitElectionDate: null,
      portionPayCash: null,
      financialRepresentative: null,
      showFinRepresentative: false,
      percentage: "",
      rand: "",
      rules: [
        {
          required: (value) => !!value || "Required.",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
