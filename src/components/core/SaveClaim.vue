<template>
    <!-- Save Claim dialog -->
    <v-dialog persistent width="287px">
        <v-card class="pa-6">
            <v-card-text class="pa-0 pb-4">Withdrawal claim has been successfully saved </v-card-text>
            <v-card-text class="pa-0">
                <div class="d-flex justify-end">
                    <v-btn color="primary" class="elevation-0" @click="closeModal">OK </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    methods: {
        closeModal() {
            this.$emit('close')
        },
    },
}
</script>

<style></style>
