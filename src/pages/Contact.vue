<template>
  <v-container class="d-flex">
    <v-row>
      <v-col cols="12" sm="6" class="bg--lighten-blue">
        <div class="pt-16 px-100 pb-120">
          <span class="text-h5">Contact details</span>
          <v-card elevation="0" color="transparent">
            <v-list color="transparent">
              <v-list-group value="collapse">
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 font-weight-light"
                      >Client Contact Centre</v-list-item-title
                    >
                  </v-list-item-content>
                </template>

                <v-list-item class="list-bg mb-4">
                  <v-list-item-icon class="mr-4">
                    <v-icon> mdi-phone </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>086 072 8767</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-bg mb-4">
                  <v-list-item-icon class="mr-4">
                    <v-icon> mdi-at </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >SCdigitalsupport@sanlam.co.za</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="mb-4">
                  <v-list-item-content>
                    <v-list-item-title class="text-caption"
                      >Monday - Friday 08:00 - 17:00</v-list-item-title
                    >
                    <v-list-item-subtitle class="text-caption"
                      >Closed on Saturday, Sunday and public
                      holidays</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>

              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 font-weight-light"
                      >Head Office</v-list-item-title
                    >
                  </v-list-item-content>
                </template>

                <v-list-item class="list-bg mb-4">
                  <v-list-item-icon class="mr-4">
                    <v-icon> mdi-map-marker </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>2 Strand Road</v-list-item-title>
                    <v-list-item-title
                      >Bellville, South Africa</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-bg mb-4">
                  <v-list-item-icon class="mr-4">
                    <v-icon> mdi-email </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>PO Box 1</v-list-item-title>
                    <v-list-item-title>Sanlamhof, 7532 </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>

              <v-list-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6 font-weight-light"
                      >Midrand Office</v-list-item-title
                    >
                  </v-list-item-content>
                </template>

                <v-list-item class="list-bg mb-4">
                  <v-list-item-icon class="mr-4">
                    <v-icon> mdi-map-marker </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >Westland Office Park, Block D,
                    </v-list-item-title>
                    <v-list-item-title
                      >254 Hall Street, Centurion,</v-list-item-title
                    >
                    <v-list-item-title>Pretoria, 0045</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item class="list-bg mb-4">
                  <v-list-item-icon class="mr-4">
                    <v-icon> mdi-email </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      >Private Bag X14, Highveld Park,
                    </v-list-item-title>
                    <v-list-item-title>0169, South Africa</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="pt-16 px-100 pb-120">
          <v-card elevation="0">
            <span class="mb-2 d-block font-weight-bold black--text">
              Full name
            </span>
            <v-card-text class="pa-0">
              <v-text-field
                outlined
                v-model="fullName"
                label="Full name"
              ></v-text-field>
            </v-card-text>
          </v-card>

          <v-card elevation="0">
            <span class="mb-2 d-block font-weight-bold black--text">
              Email
            </span>
            <v-card-text class="pa-0">
              <v-text-field
                outlined
                v-model="email"
                label="Email"
              ></v-text-field>
            </v-card-text>
          </v-card>

          <v-card elevation="0">
            <span class="mb-2 d-block font-weight-bold black--text">
              Contact number
            </span>
            <v-card-text class="pa-0">
              <v-text-field
                outlined
                v-model="contactNumber"
                label="Contact number"
              ></v-text-field>
            </v-card-text>
          </v-card>

          <v-card elevation="0">
            <span class="mb-2 d-block font-weight-bold black--text">
              Contact Type
            </span>
            <v-card-text class="pa-0">
              <v-select
                outlined
                :items="contactType"
                label="Contact Type"
              ></v-select>
            </v-card-text>
          </v-card>

          <v-card elevation="0">
            <span class="mb-2 d-block font-weight-bold black--text">
              Message
            </span>
            <v-card-text class="pa-0">
              <v-textarea
                v-model="messageBox"
                auto-grow
                outlined
                label="Message"
                value=""
              >
              </v-textarea>
            </v-card-text>
          </v-card>

          <v-card
            elevation="0"
            class="d-flex flex-column flex-md-row align-md-center"
          >
            <v-btn
              large
              color="primary"
              elevation="0"
              class="mr-0 mr-md-8 mb-2 mb-md-0"
              >Submit</v-btn
            >
            <span class="text-caption" style="line-height: 14px"
              >By clicking on “Submit”, you acknowledge having read our
              <a href="">privacy policy</a> .</span
            >
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "ContactLayout",
  data() {
    return {
      fullName: "",
      email: "",
      contactNumber: "",
      contactType: ["Email", "Call"],
      messageBox: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.v-list-item-title {
  margin-bottom: 14px;
}
.rate__textarea {
  .v-input__slot {
    margin-bottom: 0;
  }
  .v-text-field__details {
    display: none;
  }
}

.list-bg.v-list-item {
  background-color: #ebeef1;
}
</style>
