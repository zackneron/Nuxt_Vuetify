<template>
  <div>
    <Breadcrumb header="Claims">
      <v-breadcrumbs :items="breadItems" class="px-0">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </Breadcrumb>

    <!-- TODO: This section is only for Admin/Approvers dashboard -->
    <div class="white black--text elevation-2 mb-8 pa-7 rounded">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div
              class="d-flex flex-column flex-md-row justify-md-space-between"
            >
              <h2 class="text-h4 font-weight-light">Active Claims</h2>
              <div>
                <v-tabs v-model="tab" class="graph-tab" grow show-arrows>
                  <v-tab v-for="item in tabItems" :key="item">
                    {{ item }}</v-tab
                  >
                </v-tabs>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-tabs-items v-model="tab">
              <v-tab-item> ALL GRAPHS GOES HERE </v-tab-item>
              <v-tab-item> ALL GRAPHS GOES HERE Withdrawal </v-tab-item>
              <v-tab-item> ALL GRAPHS GOES HERE Retirement </v-tab-item>
              <v-tab-item> ALL GRAPHS GOES HERE Death </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="white black--text elevation-2 pa-7 rounded">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-h5 font-weight-light">Filter Claims</h2>
          </v-col>
        </v-row>
      </v-container>

      <v-form>
        <v-container>
          <v-row class="filter-section">
            <v-col cols="12" sm="4">
              <v-text-field
                label="Search"
                outlined
                clearable
                required
                :rules="[(v) => !!v || 'Item is required']"
                v-model="search"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-select
                outlined
                v-model="search"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Claim Status"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn x-large color="primary"> Search </v-btn>
            </v-col>
          </v-row>
          <DividerBar />
          <v-row class="mt-4 mb-8">
            <v-col cols="12">
              <TableContentHeader
                :company="company"
                :pensionFund="pensionFund"
                :providentFund="providentFund"
              />
            </v-col>
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="contents"
                :search="search"
                class="elevation-2"
              >
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
    <v-tooltip left color="black">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mx-2"
          fab
          dark
          fixed
          right
          bottom
          color="primary"
          v-on="on"
          v-bind="attrs"
          @click="createClaimsDialog = true"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>
      <span class="text-caption">Create a new claim</span>
    </v-tooltip>

    <v-dialog persistent v-model="createClaimsDialog" width="376px">
      <v-card>
        <v-card-title class="mb-2">Create a new claim</v-card-title>
        <v-card-text>
          <v-form
            ref="selectClaimEmployeer"
            v-movel="validSelectClaimEmployeer"
          >
            <v-select
              outlined
              :rules="[rules.required]"
              :items="employerClaim"
              label="Select an Employer"
            ></v-select>
            <v-select
              outlined
              :rules="[rules.required]"
              :items="claimtype"
              label="Select a claim type"
            ></v-select>
            <div class="d-flex justify-end">
              <v-btn
                text
                x-large
                color="primary"
                @click="createClaimsDialog = false"
                class="mr-2"
              >
                Cancel
              </v-btn>
              <v-btn x-large color="primary" @click="validate"> Next </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Process Claim dialog -->
    <v-dialog persistent v-model="processClaim" width="387px">
      <v-card class="pa-6">
        <v-card-title class="pa-0 pb-4"
          >Retirement and Death claims
        </v-card-title>
        <v-card-text class="pa-0 pb-4">
          The processing of Retirement and Death claims is not yet available on
          this application.You will now be redirected to the
          <strong class="black--text">Retirement Fund Web</strong> to process
          the Retirement/Death claim.
        </v-card-text>
        <v-card-text class="pa-0">
          <div class="d-flex justify-end">
            <v-btn
              text
              color="primary"
              @click="processClaim = false"
              class="mr-2"
            >
              Cancel
            </v-btn>
            <v-btn color="primary" class="elevation-0" @click="createNewClaim"
              >Continue
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import DividerBar from "@/components/DividerBar";
import TableContentHeader from "@/components/filter/TableContentHeader";

export default {
  components: { Breadcrumb, DividerBar, TableContentHeader },
  async fetch() {
    await this.reloadWithdrawals();
  },
  created() {
    this.$nuxt.$on("rfwUserChanged", ($event) => this.reloadWithdrawals());
  },
  data() {
    return {
      company: "Simba Chips Company (Pty) Ltd (26872634)",
      pensionFund: "Sanlam Umbrella Pension Fund",
      providentFund: "Sanlam Umbrella Provident Fund",
      createClaimsDialog: false,
      processClaim: false,
      breadItems: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
      ],
      select: null,
      items: [
        "All",
        "Saved",
        "Submitted",
        "Re-Submitted",
        "Approved",
        "Rejected",
        "Cancelled",
        "Pending Claims",
      ],
      search: "",
      headers: [
        {
          text: "First Name",
          align: "start",
          value: "firstName",
        },
        { text: "Last Name", value: "lastName" },
        { text: "Member Number", value: "memberNumber" },
        { text: "ID/Passport Number", value: "idNumber" },
        { text: "Payroll Number", value: "payrollNumber" },
        { text: "Transaction Date", value: "transactionDate" },
        { text: "Claim Status", value: "workflowStatus.statusName" },
      ],
      defaultContents: [
        {
          firstName: "Ellen",
          lastName: "Louw",
          memberNumber: 283212321,
          idNumber: 7809060450909,
          payrollNumber: 972433,
          transactionDate: "2021/10/25",
          workflowStatus: {
            statusName: "Saved",
          },
        },
        {
          firstName: "Zack",
          lastName: "Katshi",
          memberNumber: 283212321,
          idNumber: 7809060450909,
          payrollNumber: 972433,
          transactionDate: "2021/10/25",
          workflowStatus: {
            statusName: "Submitted",
          },
        },
        {
          firstName: "Van",
          lastName: "Louw",
          memberNumber: 283212331,
          idNumber: 7809060450909,
          payrollNumber: 972433,
          transactionDate: "2021/10/25",
          workflowStatus: {
            statusName: "Saved",
          },
        },
      ],
      contents: [],
      tab: null,
      tabItems: ["All", "Withdrawal", "Retirement", "Death"],
      employerClaim: [
        "Simba Animal Farm (7253623)",
        "Simba Chips Company (Pty) Ltd (7…",
      ],
      claimtype: ["Withdrawal Claims", "Retirement Claims", "Death Claims"],
      rules: {
        required: (value) => !!value || "Required.",
      },
      validSelectClaimEmployeer: true,
    };
  },
  methods: {
    createNewClaim() {
      this.$router.push("/claims/MemberSearch");
    },
    async reloadWithdrawals() {
      await this.$axios
        .get("/api/withdrawal")
        .then((res) => {
          this.contents = this.defaultContents.concat(res.data);
        })
        .catch(function (error) {
          this.contents = this.defaultContents.concat([]);
        });
    },
    validate() {
      if (this.$refs.selectClaimEmployeer.validate()) {
        this.processClaim = true;
        this.createClaimsDialog = false;
      }
    },
  },
};
</script>

<style lang="scss">
.filter-section {
  margin-bottom: 1.3rem;

  @include sm {
    margin-bottom: 0;
  }
}

.v-data-table__wrapper {
  & > table {
    & > tbody {
      & > tr {
        & > td {
          &:first-child {
            color: $brand;
          }
        }
      }
    }
  }
}

.graph-tab .v-slide-group__content {
  border: 1px solid #bcc4ce;
  border-radius: 4px;
}
.v-tabs-slider-wrapper {
  display: none;
}

.graph-tab .v-tab {
  text-transform: none;
  &:not(:last-child) {
    border-right: 1px solid #bcc4ce;
  }
}

.graph-tab .v-tab.v-tab--active {
  background-color: #e6f1fa;
}
.v-btn {
  text-transform: none;
}

.snackbar-list {
  .v-snack {
    height: auto !important;
    position: relative !important;
  }
  .v-snack__wrapper {
    margin: 5px !important;
  }
  .v-snack__content {
    border-left: 5px solid #0075c9;
    padding: 5px;
    padding-right: 0;
  }
}
</style>
