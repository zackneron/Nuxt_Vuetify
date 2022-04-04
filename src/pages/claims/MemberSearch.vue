<template>
  <div>
    <Breadcrumb :header="header" :boldText="boldText" :plainText="plainText">
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
            <h2 class="text-h5 font-weight-light">Find a member</h2>
          </v-col>
        </v-row>
      </v-container>

      <v-form>
        <v-container>
          <v-row class="filter-section mb-8">
            <v-col cols="12" sm="4">
              <v-text-field
                label="Search"
                outlined
                clearable
                required
                :rules="[(v) => !!v || 'Item is required']"
                v-model="search"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn x-large color="primary" class="elevation-0">
                Search
              </v-btn>
            </v-col>
          </v-row>
          <DividerBar />
          <v-row class="mt-4 mb-8">
            <v-col cols="12">
              <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                class="elevation-2"
                @click:row="memberSteps()"
              >
              </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import DividerBar from "@/components/DividerBar";
export default {
  name: "MemberSearch",
  components: { Breadcrumb, DividerBar },
  data() {
    return {
      header: "Claims",
      boldText: "Simba Chips Company (Pty) Ltd",
      plainText: "Sanlam Umbrella Pension Fund",
      breadItems: [
        {
          text: "Home",
          disabled: false,
          to: "/",
        },
        {
          text: "Claims",
          disabled: true,
          to: "claims",
        },
        {
          text: "Member Search",
          disabled: true,
          to: "member-search",
        },
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      search: "",
      headers: [
        {
          text: "First Name",
          align: "start",
          value: "firstname",
        },
        { text: "Last Name", value: "lastname" },
        { text: "ID/Passport Number", value: "idNumber" },
        { text: "Payroll Number", value: "payrollNumber" },
        { text: "Membership Number", value: "membershipNumber" },
      ],
      desserts: [
        {
          firstname: "Ellen",
          lastname: "Louw",
          idNumber: 7809060450909,
          membershipNumber: 9724331466909,
          payrollNumber: 972433,
        },
        {
          firstname: "Zack",
          lastname: "Katshi",
          idNumber: 7809060450909,
          membershipNumber: 9724331466909,
          payrollNumber: 972433,
        },
        {
          firstname: "Van",
          lastname: "Louw",
          idNumber: 7809060450909,
          membershipNumber: 9724331466909,
          payrollNumber: 972433,
        },
      ],
    };
  },
  computed: {},
  methods: {
    memberSteps(value) {
      this.$router.push("/claims/NewClaim");
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
</style>
