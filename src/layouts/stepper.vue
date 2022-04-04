<template>
  <v-app light>
    <Header />
    <Banner />
    <v-main class="v-main--container mb-16">
      <v-container fluid class="container--custom-size">
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components: { Header, Banner, Footer },
    data(){
        return {

        }
    }
}
</script>

<style scoped lang="scss">
.v-main--container {
  margin-top: -495px;

  .theme--light.v-application {
    background: transparent;
  }

  .container--custom-size {
    @include sm {
      max-width: 90%;
    }
  }
}
</style>