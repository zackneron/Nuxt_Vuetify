<template>
  <div class="inner-margin-1">
    <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
      <v-card class="mb-8" elevation="0">
        <v-card-title class="text-h5 px-0 black--text font-weight-light">
          Member Details
        </v-card-title>
        <v-card-text class="pa-0">
          <div grey class="d-flex align-start text-bg-info py-6 px-7">
            <v-icon primary class="mr-4 primary--text">
              mdi-information
            </v-icon>
            <p class="mb-0">
              Please note: This member qualifies for early retirement based on
              the Fund Rules. It is advisable that the member seeks advise from
              an accredited financial adviser to understand tax benefits and
              implications of this option.
            </p>
          </div>
          <div grey class="d-flex justify-end text-bg-info pb-6 px-7">
            <nuxt-link to="/" class="mr-2">
              <v-btn text color="primary"> Cancel </v-btn>
            </nuxt-link>
            <v-btn color="primary" @click.once="disabled = !disabled">
              Continue
            </v-btn>
          </div>
        </v-card-text>
      </v-card>

      <v-form ref="form" v-model="memberDetailsForm">
        <v-card elevation="0">
          <v-card-text class="pa-0">
            <v-container>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Select ID type
                  </span>
                  <v-select
                    outlined
                    :rules="[rules.required]"
                    :items="idType"
                    label="Select ID type"
                    v-model="selectedItems"
                    item-value="value"
                    item-text="type"
                    :disabled="disabled"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    {{ selectedItems }}
                    <span v-if="selectedItems == 'ID number'">
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
                          >Note: If you change the member's ID details, a
                          request will be sent to
                        </span>
                        <span class="d-block text-caption"
                          >you and/or the member to furnish proof of the
                          Identity details.</span
                        >
                      </v-tooltip>
                    </span>
                  </span>
                  <v-text-field
                    outlined
                    v-model="idNumber"
                    :label="selectedItems"
                    :rules="[rules.required, rules.idNumber]"
                    :disabled="disabled"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Job title
                  </span>
                  <v-text-field
                    outlined
                    v-model="jobTitle"
                    label="Job title"
                    :rules="[rules.required, rules.jobTitle]"
                    :disabled="disabled"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Income tax reference number
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
                        >A tax reference number is a compulsory requirement of
                        SARS.</span
                      >
                      <span class="d-block text-caption"
                        >We will not be able to process any claim payments
                        without a valid tax reference number.</span
                      >
                    </v-tooltip>
                  </span>
                  <v-text-field
                    outlined
                    v-model="taxReference"
                    label="Income tax reference number"
                    :rules="[rules.required, rules.taxReference]"
                    :disabled="disabled"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" class="mb-4 pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Is this member a SA citizen or resident?
                  </span>
                  <v-radio-group
                    v-model="memberCitizenship"
                    :disabled="disabled"
                    row
                  >
                    <v-radio
                      label="No"
                      value="No"
                      class="mr-sm-16"
                      @click="isSACitizen = true"
                    ></v-radio>
                    <v-radio
                      label="Yes"
                      value="Yes"
                      @click="isSACitizen = false"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <div v-show="isSACitizen">
                <v-row>
                  <v-col cols="12" sm="5" class="pa-0">
                    <span class="mb-2 d-block font-weight-bold black--text">
                      Country of origin
                    </span>
                    <v-select
                      outlined
                      :items="countryOfOrigin"
                      :rules="[rules.required]"
                      :disabled="disabled"
                      label="Country of origin"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="5" class="pa-0">
                    <span class="mb-2 d-block font-weight-bold black--text">
                      Nationality
                    </span>
                    <v-select
                      outlined
                      :items="nationality"
                      label="Nationality"
                      :rules="[rules.required]"
                      :disabled="disabled"
                    ></v-select>
                  </v-col>
                </v-row>
              </div>

              <v-row>
                <v-col cols="12" class="px-0">
                  <DividerBar />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-title class="text-h5 px-0 black--text">
            Contact Details
          </v-card-title>
          <v-card-text class="px-0">
            <v-container>
              <v-row>
                <v-col cols="12" sm="5" class="mt-4 pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Member's mobile number
                  </span>
                  <vue-tel-input-vuetify
                    v-model="memberMobileNumber"
                    outlined
                    class="mr-2"
                    :rules="[rules.required, rules.memberMobileNumber]"
                    defaultCountry="za"
                    :disabled="disabled"
                  ></vue-tel-input-vuetify>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Member's personal email address
                  </span>
                  <v-text-field
                    outlined
                    v-model="memberPersonalEmail"
                    label="Member's personal email address"
                    :rules="[rules.required, rules.memberPersonalEmail]"
                    hide-details="auto"
                    :disabled="disabled"
                  ></v-text-field>
                  <span class="grey--text lighten-5 text-caption"
                    >This is the email address they will use once they leave the
                    company</span
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0 mt-3">
                  <span class="mb-2 d-block font-weight-bold black--text">
                    Alternative contact number
                  </span>
                  <v-text-field
                    outlined
                    v-model="alternativeContactNumber"
                    label="Alternative contact number"
                    :disabled="disabled"
                    type="number"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" class="px-0">
                  <DividerBar />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-title class="text-h5 pa-0 black--text">
            Address Details
          </v-card-title>
          <v-card-text class="px-0">
            <v-container>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <v-card-subtitle
                    class="font-weight-bold text-subtitle-1 pa-0 black--text"
                    >Home Address</v-card-subtitle
                  >
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <v-text-field
                    outlined
                    v-model="address"
                    label="Address"
                    :rules="[rules.required, rules.address]"
                    :disabled="disabled"
                  ></v-text-field>
                  <span class="grey--text lighten-5"
                    >Number and street name</span
                  >
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <v-text-field
                    outlined
                    v-model="suburb"
                    label="Suburb"
                    :rules="[rules.required, rules.suburb]"
                    :disabled="disabled"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <v-text-field
                    outlined
                    v-model="city"
                    label="City"
                    :disabled="disabled"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="5" class="pa-0">
                  <v-select
                    outlined
                    :items="province"
                    :rules="[rules.required]"
                    label="Province"
                    :disabled="disabled"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="3" class="pa-0">
                  <v-text-field
                    outlined
                    v-model="postalCode"
                    label="Postal Code"
                    :disabled="disabled"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="pa-0">
                  <span
                    class="mb-2 d-block font-weight-bold black--text text-subtitle-1"
                  >
                    Postal Address
                  </span>
                  <v-radio-group
                    v-model="postalAddress"
                    :disabled="disabled"
                    row
                    class="mb-4"
                  >
                    <v-radio
                      label="Same as residential address"
                      name="postalAddressOption"
                      @click="isSamePostal = false"
                      value="Same as residential address"
                    ></v-radio>
                    <v-radio
                      label="Other"
                      name="postalAddressOption"
                      value="Other"
                      @click="isSamePostal = true"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <div v-show="isSamePostal">
                <v-row>
                  <v-col cols="12" sm="5" class="pa-0">
                    <v-text-field
                      outlined
                      v-model="otherAddress"
                      label="Address"
                      :rules="[rules.required, rules.otherAddress]"
                      :disabled="disabled"
                    ></v-text-field>
                    <span class="grey--text lighten-5"
                      >Number and street name</span
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="5" class="pa-0">
                    <v-text-field
                      outlined
                      v-model="otherSuburb"
                      label="Suburb"
                      :rules="[rules.required, rules.otherSuburb]"
                      :disabled="disabled"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="5" class="pa-0">
                    <v-text-field
                      outlined
                      v-model="otherCity"
                      label="City"
                      :disabled="disabled"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" sm="5" class="pa-0">
                    <v-select
                      outlined
                      :items="otherProvince"
                      :rules="[rules.required]"
                      label="Province"
                      :disabled="disabled"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" sm="3" class="pa-0">
                    <v-text-field
                      outlined
                      v-model="otherPostalCode"
                      label="Postal Code"
                      :disabled="disabled"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
            </v-container>
          </v-card-text>
        </v-card>
      </v-form>
    </div>
  </div>
</template>

<script>
import DividerBar from "@/components/DividerBar";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";
export default {
  components: { DividerBar, VueTelInputVuetify },
  data() {
    return {
      attrs: "",
      on: "",
      memberDetailsForm: true,
      disabled: true,
      idType: [
        { type: "ID number", value: "ID number" },
        { type: "Passport number", value: "Passport number" },
      ],
      selectedItems: "ID number",
      idNumber: "8609090979090",
      jobTitle: "",
      taxReference: "1234567890",
      memberCitizenship: null,
      isSACitizen: false,
      countryOfOrigin: ["Congo Democratic", "Zimbabwe"],
      nationality: "",
      memberMobileNumber: null,
      alternativeContactNumber: null,
      memberPersonalEmail: "",
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
      postalAddress: null,
      isSamePostal: false,
      otherAddress: "",
      otherSuburb: "",
      otherCity: "",
      otherProvince: [
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
      otherPostalCode: "",
      rules: [
        {
          required: (value) => !!value || "Required.",
          idNumber: (value) => value.length <= 20,
          jobTitle: (value) => value.length <= 20,
          taxReference: (value) => value.length <= 20,
          memberMobileNumber: (value) =>
            value.length <= 20 || "Add member\’s mobile number",
          memberMobileNumber: (value) =>
            !!value || "Add member\’s mobile number",
          memberPersonalEmail: (value) => value.length <= 20,
          memberPersonalEmail: (value) =>
            !!value || "Add member\’s mobile number and/or email address",
          address: (value) => value.length <= 20,
          suburb: (value) => value.length <= 20,
          otherSuburb: (value) => value.length <= 20,
          otherAddress: (value) => value.length <= 20,
          city: (value) => value.length <= 20,
          postalCode: (value) => value.length <= 20,
          email: (value) => {
            const pattern =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || "Invalid e-mail.";
          },
        },
      ],
    };
  },
  methods: {
    validateField() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss">
.vue-tel-input-vuetify {
  .country-code {
    width: 60px;
    margin-right: 10px;
  }
}
</style>
