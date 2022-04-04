<template>
  <div class="mt-4">
    <v-card-title class="text-h5 px-0 black--text mb-6 font-weight-light">
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
    <BankingDetails />
  </div>
</template>

<script>
import BankingDetails from "@/components/StepsAddNewClaim/BankingDetails";
export default {
  components: { BankingDetails },
  data() {
    return {
      benefitElectionDate: "",
    };
  },
};
</script>

<style></style>
