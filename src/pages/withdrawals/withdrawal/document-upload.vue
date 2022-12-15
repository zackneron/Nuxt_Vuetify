<template>
    <div class="inner-margin-1">
        <div class="white elevation-2 pa-7 rounded mb-7 mh-40">
            <v-card elevation="0">
                <v-card-text class="pa-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" class="pa-0">
                                <v-card-title class="text-h5 pa-0 mb-7 black--text font-weight-light">
                                    Upload Supporting Documents
                                </v-card-title>
                                <span class="mb-7 d-block font-weight-bold black--text">
                                    Supporting documents that must be provided when a withdrawal claim is submitted:
                                </span>

                                <p>
                                    For all exits effective from 01 March 2019 it is a legislative requirement that the
                                    member must provide consent in writing with regard to the payment instructions.
                                </p>
                                <p>
                                    Should you have any form of written consent from the member, please upload a scanned
                                    copy here.
                                </p>
                                <p>
                                    Note that should you not have written consent from the member, Sanlam will contact
                                    the member to obtain written consent, using the contact details provided above.
                                </p>
                                <p>
                                    Note that should these contact details be incorrect, this could result in a delay in
                                    processing the payment.
                                </p>
                                <v-btn text color="primary" class="text-caption mb-4" href="form.pdf" download>
                                    <v-icon>mdi-download</v-icon> Download Blank Consent Form
                                </v-btn>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12">
                                <div class="form-group py-4">
                                    <FileDropZone
                                        :files="item.files"
                                        :accept="allowedFileTypes.join(',')"
                                        :invalid-files="item.invalidFiles"
                                    ></FileDropZone>
                                </div>
                                <div v-if="hasErrors" class="error--text">
                                    There are {{ errors.length }} errors in this statement batch, please view the log to
                                    see the errors or upload a new file and try again.
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
            </v-card>
        </div>

        <div class="text-right inner-margin-1">
            <v-btn large color="primary" @click="conversionOptionClaim = true"
                >temporary button to Show Conversion Option dialog</v-btn
            >
            <v-btn text large class="mr-4" @click="back"> Back </v-btn>
            <v-btn text outlined large class="mr-4" @click="saveClaim = true"> Save </v-btn>
            <v-btn large color="primary" @click.prevent="next"> Next </v-btn>
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
            <!-- Conversion Option dialog -->
            <v-dialog v-model="conversionOptionClaim" persistent width="664px">
                <v-card class="pa-6">
                    <v-card-title class="pt-0 px-0">
                        <span class="text-subtitle-1 font-weight-bold">Conversion Option</span>
                        <v-spacer></v-spacer>
                        <v-btn icon v-bind="attrs" v-on="on" @click="conversionOptionClaim = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text class="px-0">
                        This member has conversion option which allows the member to take out a similar individual
                        insurance policy at their own cost when terminating employment. Note that this option may have a
                        different end age than the benefit. The maximum amount of group insurance cover that can be
                        converted to a similar individual insurance policy with Sanlam is equal to the actual cover that
                        member enjoyed immediately before their membership to the group insurance policy was terminated.
                        The converted group insurance will be subject to the conditions that apply to new individual
                        life policies issued by Sanlam at the date of conversion.
                    </v-card-text>
                    <v-card-text class="pa-0">
                        <div class="d-flex justify-end">
                            <v-btn color="primary" class="elevation-0" @click="next">Please contact member</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import FileDropZone from '@/components/core/FileDropZone'
import { ALLOWED_FILE_TYPES } from '@/helpers/files'
export default {
    components: { FileDropZone },
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            attrs: '',
            on: '',
            visible: true,
            item: {
                statementType: null,
                name: null,
                files: [],
                invalidFiles: [],
            },
            allowedFileTypes: ALLOWED_FILE_TYPES,
            errors: [],
            saveClaim: false,
            conversionOptionClaim: false,
        }
    },
    computed: {
        hasErrors() {
            return this.errors && this.errors.length > 0
        },
    },
    watch: {},
    methods: {
        back() {
            this.$router.push('/withdrawals/withdrawal/payment-options')
        },
        async next() {
            const isFormCorrect = await this.v$.$validate()
            if (!isFormCorrect) {
                return
            }
            this.$router.push('/withdrawals/withdrawal/submit-claim')
        },
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style lang="scss"></style>
