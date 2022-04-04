<template>
  <div>
    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text"> Name </span>
        <v-text-field outlined v-model="name" label="Name"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Broker Code
        </span>
        <v-text-field
          outlined
          v-model="brokerCode"
          label="Broker Code"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Contact Number
        </span>
        <v-text-field
          outlined
          v-model="contactNumber"
          label="Contact Number"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Email Address
        </span>
        <v-text-field
          outlined
          v-model="emailAddress"
          label="Email Address"
          type="email"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text"> Address </span>
        <v-text-field outlined v-model="address" label="Address"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text"> Suburb </span>
        <v-text-field outlined v-model="suburb" label="Suburb"></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text"> City </span>
        <v-text-field outlined v-model="city" label="City"></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Province
        </span>
        <v-select outlined :items="province" label="Province"></v-select>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="6" sm="3" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Postal Code
        </span>
        <v-text-field
          outlined
          v-model="postalCode"
          label="Postal Code"
          width="200px"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Name of financial service provider
        </span>
        <v-text-field
          outlined
          v-model="nameOfFinancialServiceProvider"
          label="Name of financial service provider"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mx-0">
      <v-col cols="12" sm="6" md="5" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Registered name of fund
        </span>
        <v-text-field
          outlined
          v-model="registerdNameOfRetirementAnnuity"
          label="Registered name of fund"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="mx-0">
      <v-col cols="12" class="pa-0">
        <span class="mb-2 d-block font-weight-bold black--text">
          Fund approval number (SARS)
        </span>
      </v-col>
      <v-col cols="6" sm="3" class="pa-0">
        <v-text-field
          outlined
          v-model="fundApprovalNumber"
          label="Fund approval number (SARS)"
          width="200px"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      brokerCode: "",
      contactNumber: "",
      emailAddress: "",
      address: "",
      suburb: "",
      city: "",
      province: [
        "Eastern Cape",
        "Free State",
        "Gauteng",
        "KwaZulu-Natal",
        "Limpopo",
        "Mpumalanga",
        "Nothern Cape",
        "North West",
        "Western Cape",
      ],
      postalCode: "",
      nameOfFinancialServiceProvider: "",
      registerdNameOfRetirementAnnuity: "",
      fundApprovalNumber: "",
    };
  },
};
</script>

<style></style>
