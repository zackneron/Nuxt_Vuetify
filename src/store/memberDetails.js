import { defineStore } from 'pinia'
import { ContactDetailsApi } from '~/generated/api'

export const useMemberDetailsStore = defineStore({
    id: 'memberDetails',
    state: () => ({}),

    actions: {
        async loadContactDetails(membershipNumber) {
            await ContactDetailsApi.getContactDetails(membershipNumber)
                .then(data => {
                    this.homeAddress = data.homeAddress.addressLine1
                    this.suburb = data.homeAddress.addressLine2
                    this.city = data.homeAddress.city
                    this.postalCode = data.homeAddress.postalCode
                    this.memberMobileNumber = data.cellPhone
                })
                .catch(() => {
                    this.contacts = []
                })
        },
        async validateIdNumber(idNumber) {
            await ContactDetailsApi.validateIdNumber(idNumber)
                .then(data => {
                    this.numbers = [data]
                })
                .catch(() => {
                    this.numbers = []
                })
        },

        saveMemberDetails(memberDetails) {
            console.log('Save member details : ', JSON.stringify(memberDetails))
        },
    },
})
