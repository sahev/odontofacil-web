<template>
    <v-toolbar elevation="3">
        <v-toolbar-title>{{ currentRouteName }}
        </v-toolbar-title>
        <v-responsive v-if="(enableSearch ?? false)" style="padding-right: 20px" max-width="344">
            <v-text-field v-model="onSearchValue" variant="underlined" prepend-inner-icon="mdi-magnify" label="Search" hide-details></v-text-field>
        </v-responsive>
    </v-toolbar>
</template>
<script>
export default {
    name: "GlobalToolbar",
    props: ['enableSearch', 'onSearch'],
    components: {

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