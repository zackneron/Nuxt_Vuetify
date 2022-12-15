import { defineStore } from 'pinia'
import { SignOutApi, UserApi } from '~/generated/api'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: null,
        signOutRedirect: null,
    }),
    actions: {
        async fetchUser() {
            if (this.user == null) {
                this.user = await UserApi.get()
            }
            return this.user
        },
        async logoutUser() {
            if (this.signOutRedirect == null) {
                this.signOutRedirect = await SignOutApi.get()
            }
            return this.signOutRedirect
        },
        async switchRfwProfile(newRfwUserId) {
            const rfwUser = await UserApi.changeRfwUserId(newRfwUserId)
            this.user.currentRfwUser.userId = rfwUser.userId
            this.user.currentRfwUser.userName = rfwUser.userName
            this.user.currentRfwUser.role = rfwUser.role
        },
    },
})
