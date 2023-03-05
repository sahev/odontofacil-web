<template>
    <v-toolbar elevation="3">

        <v-toolbar-title>{{ currentRouteName }}
        </v-toolbar-title>

        <v-responsive v-if="(enableSearch ?? false)" style="padding-right: 20px" max-width="344">
            <v-text-field v-model="onSearchValue" variant="underlined" prepend-inner-icon="mdi-magnify" label="Buscar"
                hide-details></v-text-field>
        </v-responsive>

        <v-btn v-if="enableButton" class="fixed-btn elevation-3" color="primary" @click="onClick">
            {{ buttonName }}
        </v-btn>

    </v-toolbar>
</template>
<script>
export default {
    name: "GlobalToolbar",
    emits: ['onClick'],
    props: ['enableSearch', 'onSearch', 'buttonName', 'enableButton'],
    components: {

    },
    methods: {
        onClick() {
            this.$emit('onClick', true);
        }
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
    },
    watch: {
        onSearchValue(newValue) {
            this.$emit('onSearch', newValue)
        },
    },
    data: () => ({
        onSearchValue: '',
    }),
}
</script>