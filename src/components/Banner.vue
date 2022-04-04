<template>
  <section class="container-banner">
    <div class="banner-overlay"></div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.container-banner {
  background-image: url("../assets/oil_water@1x.png");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 31rem;
  position: relative;

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(#000, 0.2);
  }
}
</style>
