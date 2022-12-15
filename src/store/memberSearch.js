import { defineStore } from 'pinia'
import { MemberApi } from '~/generated/api'

export const useMemberSearchStore = defineStore({
    id: 'memberSearch',
    state: () => ({
        members: [],
        memberDetails: {},
    }),

    actions: {
        async loadMembers(schemeName, fundOptionName) {
            await MemberApi.get(schemeName, fundOptionName)
                .then(data => {
                    this.members = data
                })
                .catch(() => {
                    this.members = []
                })
        },
        loadMemberDetails(membershipNumber) {
            this.memberDetails = this.members.find(member => member.membershipNumber === membershipNumber)
        },
    },
})
