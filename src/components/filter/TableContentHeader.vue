<template>
    <v-list-item three-line class="px-0">
        <v-list-item-content class="pb-0">
            <v-list-item-title class="text-subtitle font-weight-bold mb-1">{{ company }}</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">
                {{ pensionFund }}
            </v-list-item-subtitle>
            <v-list-item-subtitle class="text-subtitle-2">
                {{ providentFund }}
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
export default {
    props: ['company', 'pensionFund', 'providentFund'],
}
</script>
