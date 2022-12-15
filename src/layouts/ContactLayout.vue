<template>
    <v-app light>
        <Header />
        <ContactBanner />
        <v-main class="">
            <Nuxt />
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Header from '@/components/Header'
import ContactBanner from '@/components/ContactBanner'
import Footer from '@/components/Footer'

export default {
    name: 'App',
    components: { Header, ContactBanner, Footer },
    data() {
        return {}
    },
}
</script>

<style scoped lang="scss"></style>
