<template>
  <div class="custom-stepper">
    <v-stepper
      v-model="e6"
      vertical
      transparent
      class="transparent"
      elevation="0"
    >
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <v-stepper-step :complete="e6 > 1" step="1">
              Member Details
            </v-stepper-step>
            <v-stepper-step :complete="e6 > 2" step="2">
              Claim Details
            </v-stepper-step>
            <v-stepper-step :complete="e6 > 3" step="3">
              Payment Options
            </v-stepper-step>
            <v-stepper-step :complete="e6 > 4" step="4">
              Document Upload
            </v-stepper-step>
            <v-stepper-step :complete="e6 > 5" step="5">
              Submit Claim
            </v-stepper-step>
          </v-col>
          <v-col cols="12" md="9">
            <Breadcrumb
              :header="header"
              :boldText="boldText"
              :plainText="plainText"
            >
              <v-breadcrumbs :items="breadItems" class="px-0">
                <template v-slot:item="{ item }">
                  <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
                    {{ item.text }}
                  </v-breadcrumbs-item>
                </template>
              </v-breadcrumbs>
              <template v-slot:profile>
                <v-btn
                  icon
                  v-on="on"
                  color="white"
                  @click="memberProfile = true"
                >
                  <v-icon class="text-h4">mdi-folder-account</v-icon>
                </v-btn>
              </template>
            </Breadcrumb>

            <div class="black--text">
              <v-stepper-content step="1" class="overflow-hidden border-left-0">
                <MemberDetails />
                <div class="text-right inner-margin-1">
                  <v-btn text large class="mr-4" @click="backToMemberSearch">
                    Back
                  </v-btn>
                  <v-btn
                    text
                    outlined
                    large
                    class="mr-4"
                    @click="saveClaim = true"
                  >
                    Save
                  </v-btn>
                  <v-btn large color="primary" @click="e6 = 2"> Next </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2" class="overflow-hidden border-left-0">
                <ClaimDetails />
                <div class="text-right inner-margin-1">
                  <v-btn text large class="mr-4" @click="e6 = 1"> Back </v-btn>
                  <v-btn
                    text
                    outlined
                    large
                    class="mr-4"
                    @click="saveClaim = true"
                  >
                    Save
                  </v-btn>
                  <v-btn large color="primary" @click="e6 = 3"> Next </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="3" class="overflow-hidden border-left-0">
                <PaymentOptions />
                <PaymentOptionsHybrid />
                <div class="text-right inner-margin-1">
                  <v-btn text large class="mr-4" @click="e6 = 2"> Back </v-btn>
                  <v-btn
                    text
                    outlined
                    large
                    class="mr-4"
                    @click="saveClaim = true"
                  >
                    Save
                  </v-btn>
                  <v-btn large color="primary" @click="e6 = 4"> Next </v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-content step="4" class="overflow-hidden border-left-0">
                <DocumentUpload />
                <div class="text-right inner-margin-1">
                  <v-btn text large class="mr-4" @click="e6 = 3"> Back </v-btn>
                  <v-btn
                    text
                    outlined
                    large
                    class="mr-4"
                    @click="saveClaim = true"
                  >
                    Save
                  </v-btn>
                  <v-btn large color="primary" @click="e6 = 5"> Next </v-btn>
                  <v-btn
                    large
                    color="primary"
                    @click="conversionOptionClaim = true"
                    >temporary button to Show Conversion Option dialog</v-btn
                  >
                </div>
              </v-stepper-content>
              <v-stepper-content step="5" class="overflow-hidden">
                <SubmitClaim />
                <div class="text-right inner-margin-1">
                  <v-btn text large class="mr-4" @click="e6 = 4"> Back </v-btn>
                  <v-btn
                    text
                    outlined
                    large
                    class="mr-4"
                    @click="saveClaim = true"
                  >
                    Save
                  </v-btn>
                  <v-btn
                    large
                    color="primary"
                    type="submit"
                    @click="submitClaim = true"
                  >
                    Submit claim to Katshi
                  </v-btn>
                  <v-btn
                    large
                    color="primary"
                    type="submit"
                    @click="submitApprovalClaim = true"
                  >
                    Submit claim for approval
                  </v-btn>
                  <v-btn
                    large
                    outlined
                    text
                    class="elevation-2"
                    type="submit"
                    @click="rejectClaim = true"
                  >
                    Reject
                  </v-btn>
                  <v-btn large color="primary" type="submit"> Approve </v-btn>
                </div>
              </v-stepper-content>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-stepper>

    <div class="dialogs-wrapper">
      <!-- Conversion Option dialog -->
      <v-dialog persistent v-model="conversionOptionClaim" width="664px">
        <v-card class="pa-6">
          <v-card-title class="pt-0 px-0">
            <span class="text-subtitle-1 font-weight-bold"
              >Conversion Option</span
            >
            <v-spacer></v-spacer>
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              @click="conversionOptionClaim = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="px-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quos voluptatibus exercitationem, dolorem, dolor vel modi rerum error doloremque ad ea eveniet, facilis excepturi at!
          </v-card-text>
          <v-card-text class="pa-0">
            <div class="d-flex justify-end">
              <v-btn
                color="primary"
                class="elevation-0"
                @click="(e6 = 5), (conversionOptionClaim = false)"
                >Please contact member</v-btn
              >
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Save Claim dialog -->
      <v-dialog persistent v-model="saveClaim" width="287px">
        <v-card class="pa-6">
          <v-card-text class="pa-0 pb-4"
            >Withdrawal claim has been successfully saved
          </v-card-text>
          <v-card-text class="pa-0">
            <div class="d-flex justify-end">
              <v-btn
                color="primary"
                class="elevation-0"
                @click="saveClaim = false"
                >OK
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Submit Claim dialog -->
      <v-dialog persistent v-model="submitClaim" width="287px">
        <v-card class="pa-6">
          <v-card-text class="pa-0 pb-4"
            >Your withdrawal has been successfully submitted
          </v-card-text>
          <v-card-text class="pa-0">
            <div class="d-flex justify-end">
              <v-btn
                color="primary"
                class="elevation-0"
                @click="submitClaim = false"
                >OK
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Reject Claim dialog -->
      <v-dialog persistent v-model="rejectClaim" width="335px">
        <v-card>
          <v-card-title>Reject Claim</v-card-title>
          <v-card-text>
            <v-textarea
              name="input-7-4"
              label="Leave comment for Admin"
              hide-details="auto"
              rows="4"
              row-height="15"
              no-resize
              outlined
            ></v-textarea>
            <div class="d-flex justify-end mt-6">
              <v-btn
                text
                color="primary"
                @click="rejectClaim = false"
                class="mr-2"
              >
                Cancel
              </v-btn>
              <v-btn color="primary" @click="rejectClaim = false"
                >Confirm
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Submit dialog for Approver -->
      <v-dialog persistent v-model="submitApprovalClaim" width="335px">
        <v-card>
          <v-card-title>Submit Claim for approval</v-card-title>
          <v-card-text>
            <v-textarea
              outlined
              name="input-7-4"
              label="Leave a comment"
              hide-details="auto"
              rows="4"
              row-height="15"
              no-resize
            ></v-textarea>
            <span class="text-caption d-block mb-8 mt-2"
              >This comment is for approvers</span
            >
            <div class="d-flex justify-end">
              <v-btn
                text
                color="primary"
                @click="submitApprovalClaim = false"
                class="mr-2"
              >
                Cancel
              </v-btn>
              <v-btn color="primary" @click="submitApprovalClaim = false"
                >Confirm
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-dialog v-model="memberProfile" max-width="768">
        <v-card class="pa-6">
          <v-card-title
            class="text-h5 pa-0 mb-4 black--text font-weight-light justify-space-between"
          >
            Member Details
            <v-btn text @click="memberProfile = false">
              <v-icon class="grey--text" @click="memberProfile = false">
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle
            class="text-body-1 pa-0 mb-4 black--text font-weight-light"
          >
            Lumiere Company (Pty) Ltd - Zaria Pension and
            Provident Fund
          </v-card-subtitle>
          <MemberProfile />
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import MemberDetails from "@/components/StepsAddNewClaim/MemberDetails";
import ClaimDetails from "@/components/StepsAddNewClaim/ClaimDetails";
import PaymentOptions from "../../components/StepsAddNewClaim/PaymentOptions.vue";
import PaymentOptionsHybrid from "../../components/StepsAddNewClaim/PaymentOptionsHybrid.vue";
import DocumentUpload from "../../components/StepsAddNewClaim/DocumentUpload.vue";
import SubmitClaim from "../../components/StepsAddNewClaim/SubmitClaim.vue";
import MemberProfile from "../../components/StepsAddNewClaim/MemberProfile.vue";

export default {
  layout: "stepper",
  components: {
    Breadcrumb,
    MemberDetails,
    ClaimDetails,
    PaymentOptions,
    PaymentOptionsHybrid,
    DocumentUpload,
    SubmitClaim,
    MemberProfile,
  },
  data() {
    return {
      breadItems: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Claims",
          disabled: true,
          to: "/claims",
        },
      ],
      e6: 1,
      header: "Zack Neron",
      boldText: "Lumiere Company (Pty) Ltd",
      plainText: "Zaria Pension Fund",
      saveClaim: false,
      rejectClaim: false,
      submitApprovalClaim: false,
      conversionOptionClaim: false,
      memberProfile: false,
      submitClaim: false,
    };
  },
  methods: {
    backToMemberSearch() {
      this.$router.push("/claims/MemberSearch");
    },
  },
};
</script>

<style lang="scss">
.custom-stepper {
  .v-stepper__step {
    position: relative;

    @include md {
      margin-bottom: 15px;
    }
    &:not(:last-child):before {
      content: "";
      position: absolute;
      height: 100%;
      border-left: 2px solid #8a7e71;
      left: 35px;
      bottom: -40px;
    }
    &.v-stepper__step--active {
      background-color: $brand;
      border-radius: 50px;
      &:after {
        content: "";
        background: $brand;
        width: 20px;
        height: 15px;
        position: absolute;
        bottom: 0;
      }
    }
    &__step.primary {
      background-color: $white !important;
    }
    &.v-stepper__step--complete {
      background-color: transparent;
      .v-stepper__step__step.primary {
        background-color: $brand !important;
      }
      .v-stepper__label {
        color: $white-text !important;
      }
    }
  }

  .theme--light.v-stepper .v-stepper__label {
    color: $white-text;
  }

  .theme--light.v-stepper
    .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error)
    .v-stepper__step__step {
    background: #252d34;
    border: 2px solid #8a7e71;
  }

  .v-stepper__step {
    &.v-stepper__step--inactive {
      .v-stepper__step__step {
        color: #252d34;
      }
    }
  }

  .v-stepper--vertical .v-stepper__content {
    padding: 0 !important;
    margin: 0 !important;
  }
  .v-stepper__wrapper {
    overflow: inherit !important;
  }
  .v-stepper--vertical .v-stepper__step {
    padding: 16px 24px 16px;
  }
}
</style>
