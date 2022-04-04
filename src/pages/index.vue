<template>
  <v-app>
    <Claims />
  </v-app>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import Claims from "@/pages/claims/index";
export default {
  components: { Breadcrumb, Claims },
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Claims",
          disabled: true,
          href: "/claims",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-data-table {
  & tr:hover {
    cursor: pointer;
  }
}
</style>
