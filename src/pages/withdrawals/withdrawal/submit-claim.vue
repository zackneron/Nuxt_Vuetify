<template>
    <div class="inner-margin-1">
        <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
            <v-card elevation="0">
                <v-card-title class="text-h5 px-0 black--text font-weight-light"> Submit Claim </v-card-title>
                <v-card-text class="pa-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" class="pa-0 mb-8">
                                <p class="mb-0">
                                    By submitting this claim, you warrant that the information provided is true and
                                    correct in all respects. The insurer, fund, administrator, it’s agents, employees or
                                    officers will not be held liable for any incorrect information supplied.
                                </p>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>

        <div class="text-right inner-margin-1">
            <v-btn text large class="mr-4" @click="back"> Back </v-btn>
            <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
            <v-btn large color="primary" type="submit" @click="submitClaim = true"> Submit claim to Sanlam </v-btn>
            <v-btn large color="primary" type="submit" @click="submitApprovalClaim = true">
                Submit claim for approval
            </v-btn>
            <v-btn large outlined text class="elevation-2" type="submit" @click="rejectClaim = true"> Reject </v-btn>
            <v-btn large color="primary" type="submit" @click="approvedClaim = true"> Approve </v-btn>
        </div>

        <div class="dialogs-wrapper">
            <!-- Save Claim dialog -->
            <v-dialog v-model="saveClaim" persistent width="287px">
                <v-card class="pa-6">
                    <v-card-text class="pa-0 pb-4">Withdrawal claim has been successfully saved </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn color="primary" class="elevation-0" @click="saveClaim = false">OK </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <!-- Submit Claim dialog -->
            <v-dialog v-model="submitClaim" persistent width="287px">
                <v-card class="pa-6">
                    <v-card-text class="pa-0 pb-4">Your withdrawal has been successfully submitted </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn color="primary" class="elevation-0" @click="submitClaim = false">OK </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <!-- Approve Claim dialog -->
            <v-dialog v-model="approvedClaim" persistent width="287px">
                <v-card class="pa-6">
                    <v-card-text class="pa-0 pb-4">Your withdrawal has been successfully approved </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn color="primary" class="elevation-0" @click="approvedClaim = false">OK </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <!-- Reject Claim dialog -->
            <v-dialog v-model="rejectClaim" persistent width="335px">
                <v-card>
                    <v-card-title>Reject Claim</v-card-title>
                    <v-card-text>
                        <v-textarea
                            name="input-7-4"
                            label="Leave comment for Admin"
                            hide-details="auto"
                            rows="4"
                            row-height="15"
                            no-resize
                            outlined
                        ></v-textarea>
                        <div class="d-flex justify-end mt-6">
                            <v-btn text color="primary" class="mr-2" @click="rejectClaim = false"> Cancel </v-btn>
                            <v-btn color="primary" @click="rejectClaim = false">Confirm </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>

            <!-- Submit dialog for Approver -->
            <v-dialog v-model="submitApprovalClaim" persistent width="335px">
                <v-card>
                    <v-card-title>Submit Claim for approval</v-card-title>
                    <v-card-text>
                        <v-textarea
                            outlined
                            name="input-7-4"
                            label="Leave a comment"
                            hide-details="auto"
                            rows="4"
                            row-height="15"
                            no-resize
                        ></v-textarea>
                        <span class="text-caption d-block mb-8 mt-2">This comment is for approvers</span>
                        <div class="d-flex justify-end">
                            <v-btn text color="primary" class="mr-2" @click="submitApprovalClaim = false">
                                Cancel
                            </v-btn>
                            <v-btn color="primary" @click="submitApprovalClaim = false">Confirm </v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            saveClaim: false,
            rejectClaim: false,
            submitApprovalClaim: false,
            submitClaim: false,
            approvedClaim: false,
        }
    },
    methods: {
        back() {
            this.$router.push('/withdrawals/withdrawal/document-upload')
        },
    },
}
</script>

<style></style>
