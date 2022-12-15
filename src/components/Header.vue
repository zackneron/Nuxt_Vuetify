<template>
    <div>
        <v-app-bar :clipped-left="clipped" color="white">
            <nuxt-link to="/">
                <v-img :src="require('~/assets/sanlam-brand-large.png')" max-height="24" max-width="114" />
            </nuxt-link>
            <a :href="homeUrl" class="d-none d-sm-flex text-decoration-none black--text ml-12">Claims</a>
            <v-spacer></v-spacer>

            <v-list class="d-none d-sm-flex">
                <v-list-item>
                    <v-list-item-title class="overflow-visible text-center">
                        <a :href="homePageUrl" class="text-decoration-none black--text">SC Portal Home</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title" :to="item.to">
                    <v-list-item-title class="text-center" v-text="item.title" />
                </v-list-item>
                <v-list-item @click="rate = true">
                    <v-list-item-title class="overflow-visible text-center" v-text="feedback" />
                </v-list-item>
            </v-list>
            <v-list class="d-none d-sm-flex">
                <v-list-item>
                    <v-menu offset-y :z-index="1001">
                        <template #activator="{ on }">
                            <v-btn text v-on="on">{{ currentPortalUser.fullName }} </v-btn>
                        </template>
                        <v-list>
                            <template v-if="currentPortalUser.rfwUsers.length > 1">
                                <v-list-item
                                    v-for="(rfwProfile, i) in currentPortalUser.rfwUsers"
                                    :key="i"
                                    @click="switchRfwProfile(rfwProfile.userId)"
                                >
                                    <v-list-item-icon class="me-2">
                                        <v-icon
                                            v-if="currentPortalUser.currentRfwUser.userId === rfwProfile.userId"
                                            dense
                                            left
                                            >mdi-check</v-icon
                                        >
                                        <v-icon
                                            v-if="currentPortalUser.currentRfwUser.userId !== rfwProfile.userId"
                                            dense
                                            left
                                            >mdi-blank</v-icon
                                        >
                                    </v-list-item-icon>
                                    <v-list-item-title v-text="rfwProfile.userName + ' (' + rfwProfile.role + ')'" />
                                </v-list-item>
                            </template>
                            <v-list-item>
                                <v-list-item-title class="overflow-visible text-center">
                                    <a :href="homePageUrl" class="text-decoration-none black--text">SC Portal Home</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="logout">
                                <v-list-item-title>Logout</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item>
            </v-list>
            <v-badge color="pink" dot overlap>
                <v-icon aria-hidden="false"> mdi-bell </v-icon>
            </v-badge>
            <v-app-bar-nav-icon class="grey--text d-sm-none" @click="drawer = !drawer"> </v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute>
            <v-list>
                <v-list-item>
                    <v-list-item-title class="overflow-visible text-center">
                        <a :href="homePageUrl" class="text-decoration-none black--text">SC Portal Home</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="text-center">
                        <a :href="homeUrl" class="text-decoration-none black--text">Claims</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item v-for="item in items" :key="item.title" :to="item.to">
                    <v-list-item-title class="text-center" v-text="item.title" />
                </v-list-item>
                <v-list-item @click="rate = true">
                    <v-list-item-title class="overflow-visible text-center" v-text="feedback" />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-dialog v-model="rate" width="376px">
            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="mb-4 font-weight-bold">Quick Feedback</v-list-item-title>
                            <v-list-item-subtitle>Help make this a better experience</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-subtitle>Rate us</v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <v-rating
                                    v-model="rating"
                                    background-color="grey"
                                    color="primary"
                                    dense
                                    hover
                                    length="5"
                                    size="25"
                                    value="3"
                                ></v-rating>
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-content>
                            <v-textarea auto-grow outlined label="Leave a comment" class="rate__textarea"> </v-textarea>
                            <v-list-item-subtitle class="text-caption">250 characters remaining</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-card-actions class="py-4 d-flex justify-end">
                    <v-btn color="primary" text large @click="rate = false"> Cancel </v-btn>
                    <v-btn large color="primary" @click="rate = false"> Send </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { useUserStore } from '@/store/user'

export default {
    name: 'Header',
    data() {
        return {
            currentPortalUser: {
                fullName: '',
                rfwUsers: [],
            },
            clipped: false,
            drawer: false,
            rate: false,
            rating: 0,
            homeUrl: this.$config.contextPath,
            homePageUrl: 'https://sc-dev.sanlam.co.za/home/index?autoroute=0',
            items: [
                {
                    title: 'Whats New',
                    to: '/whats-new',
                },
                {
                    title: 'Contact Us',
                    to: '/Contact',
                },
            ],
            feedback: 'Quick Feedback',
        }
    },
    async fetch() {
        const userStore = useUserStore()
        this.currentPortalUser = await userStore.fetchUser()
    },
    methods: {
        async logout() {
            const userStore = useUserStore()
            window.location.href = await userStore.logoutUser()
        },
        async switchRfwProfile(newRfwUserId) {
            const userStore = useUserStore()
            await userStore.switchRfwProfile(newRfwUserId)
            this.$nuxt.$emit('rfwUserChanged')
        },
    },
}
</script>
