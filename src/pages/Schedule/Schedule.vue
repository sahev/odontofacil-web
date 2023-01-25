<template>
    <v-app>
        <NavigationBarVue />

        <v-main>
            <v-toolbar elevation="3">
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