<template>
  <div>
    <v-card-title class="text-h5 px-0 black--text font-weight-light mb-2">
      Bank Details
    </v-card-title>

    <v-row class="mx-0">
      <v-col cols="12" sm="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Name of bank
          <v-tooltip bottom color="black">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" primary class="primary--text">
                mdi-information
              </v-icon>
            </template>

            <span class="d-block text-caption"
              >Payments cannot be made to:</span
            >
            <ul class="text-caption">
              <li>credit card accounts</li>
              <li>bond accounts</li>
              <li>a third party's bank account</li>
            </ul>
            <span class="d-block text-caption"
              >Payments cannot be split into different bank accounts.</span
            >
          </v-tooltip>
        </span>
        <v-select
          outlined
          :items="nameBank"
          :rules="rules"
          label="Name of bank"
          required
        ></v-select>
      </v-col>
    </v-row>

    <v-row class="mx-0">
      <v-col cols="12" sm="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Account holder name
        </span>
        <v-text-field
          outlined
          v-model="accountHolderName"
          label="Account holder name"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Account number
        </span>
        <v-text-field
          outlined
          v-model="accountNumber"
          label="Account number"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          First 6 digits of your branch code
        </span>
        <v-text-field
          outlined
          v-model="branchCode"
          label="First 6 digits of your branch code"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-0 mb-4">
      <v-col cols="12" sm="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Account type
        </span>
        <v-select
          outlined
          :items="accountType"
          :rules="rules"
          label="Account type"
          required
        ></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameBank: ["ABSA", "Capitec", "FNB", "Nedbank"],
      accountHolderName: "",
      accountNumber: "",
      branchCode: "",
      accountType: ["Savings", "Current", "Transmission"],
    };
  },
};
</script>

<style></style>
