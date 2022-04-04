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
    <div class="white black--text elevation-2 pa-7 rounded">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2 class="text-h5 font-weight-light">Pending Claims</h2>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col cols="12">
            <TableContentHeader
              :company="company"
              :pensionFund="pensionFund"
              :providentFund="providentFund"
            />
          </v-col>
          <v-col cols="12">
            <v-simple-table class="elevation-2 rounded">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">First Name</th>
                    <th class="text-left">Last Name</th>
                    <th class="text-left">Member Number</th>
                    <th class="text-left">ID/Passport Number</th>
                    <th class="text-left">Payroll Number</th>
                    <th class="text-left">Transaction Date</th>
                    <th class="text-left">Claim Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in users" :key="item.idNumber">
                    <td>{{ item.firstname }}</td>
                    <td>{{ item.lastname }}</td>
                    <td>{{ item.memberNumber }}</td>
                    <td>{{ item.idNumber }}</td>
                    <td>{{ item.payrollNumber }}</td>
                    <td>{{ item.transactionDate }}</td>
                    <td>{{ item.claimStatus }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import TableContentHeader from "@/components/filter/TableContentHeader";
export default {
  components: { Breadcrumb, TableContentHeader },
  data() {
    return {
      company: "Simba Chips Company (Pty) Ltd (26872634)",
      pensionFund: "Sanlam Umbrella Pension Fund",
      providentFund: "Sanlam Umbrella Provident Fund",
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
      users: [
        {
          firstname: "Ellen",
          lastname: "Louw",
          memberNumber: 283212321,
          idNumber: 7809060450909,
          payrollNumber: 972433,
          transactionDate: "2021/10/25",
          claimStatus: "Saved",
        },
        {
          firstname: "Zack",
          lastname: "Katshi",
          memberNumber: 283212321,
          idNumber: 7809060450909,
          payrollNumber: 972433,
          transactionDate: "2021/10/25",
          claimStatus: "Submitted",
        },
        {
          firstname: "Van",
          lastname: "Louw",
          memberNumber: 283212331,
          idNumber: 7809060450909,
          payrollNumber: 972433,
          transactionDate: "2021/10/25",
          claimStatus: "Saved",
        },
      ],
    };
  },
  methods: {},
  computed: {},
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
</style>
