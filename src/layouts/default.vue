<template>
    <v-app light>
        <Header />
        <Banner />
        <v-main class="v-main--container mb-16">
            <v-container>
                <Nuxt />
            </v-container>
            <!-- Notifications -->
            <v-list class="snackbar-list">
                <v-list-item v-for="(notification, i) in notifications" :key="i">
                    <v-snackbar
                        v-model="snackbar"
                        :timeout="timeout"
                        :multi-line="true"
                        class="grey--text text-subtitle-2"
                        app
                        top
                        color="primary"
                        right
                        text
                    >
                        <div @click="hideNotification(i)">
                            <div class="item">
                                <div class="d-flex align-start justify-space-between">
                                    <v-icon primary class="mr-4 primary--text"> mdi-information </v-icon>
                                    <div style="width: 238px">
                                        <span class="d-block text-subtitle-2 black--text" v-text="notification.title" />
                                        <span
                                            class="d-block text-subtitle-2 text-primary"
                                            v-text="notification.subtitle"
                                        />
                                    </div>
                                    <v-btn icon class="text-primary">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="d-block align-start text-right text-primary">
                                <v-btn text color="primary" :to="notification.to" v-text="notification.redirect" />
                            </div>
                        </div>
                    </v-snackbar>
                </v-list-item>
            </v-list>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import { mapState } from 'pinia'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import { useNotificationStore } from '@/store/notifications'

export default {
    name: 'App',
    components: { Header, Banner, Footer },
    data() {
        return {
            snackbar: true,
            timeout: -1,
            vertical: true,
        }
    },
    methods: {
        async hideNotification(index) {
            const notificationStore = useNotificationStore()
            await notificationStore.hideNotification(index)
        },
        async showNotification(title, subtitle, redirect, to) {
            const notificationStore = useNotificationStore()
            await notificationStore.showNotification(title, subtitle, redirect, to)
        },
    },
    computed: {
        ...mapState(useNotificationStore, ['notifications']),
    },
}
</script>

<style scoped lang="scss">
.v-main--container {
    margin-top: -495px;

    .theme--light.v-application {
        background: transparent;
    }
}

.snackbar-list {
    &.v-list {
        position: fixed;
        top: 0;
        right: 0;
        width: auto;
        background: transparent;
    }
}
</style>
