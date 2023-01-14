<template>
    <v-app>
        <NavigationBarVue />

        <v-main class="bg-grey-lighten-4">
            <v-toolbar elevation="3" class="bg-blue-lighten-5">
                <v-toolbar-title>Agenda
                </v-toolbar-title>
            </v-toolbar>
            
        <v-container class="text-center">
            agenda mensal/semanal/diaria
        </v-container>
        </v-main>


    </v-app>
</template>
<script>
import NavigationBarVue from '@/components/navbar/NavigationBar.vue';

export default {
    name: "SchedulePage",
    components: {
        NavigationBarVue
    },

    data: () => ({

    }),
}
</script>