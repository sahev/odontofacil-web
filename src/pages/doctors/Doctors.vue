<template>
    <v-app>
        <NavigationBarVue />

        <v-main>
            <v-toolbar elevation="3">
                <v-toolbar-title>Doutores
                </v-toolbar-title>
            </v-toolbar>

            <v-container class="text-center">
                listar doutores + adicionar doutor + remover doutor
            </v-container>
        </v-main>


    </v-app>
</template>
<script>
import NavigationBarVue from '@/components/navbar/NavigationBar.vue';

export default {
    name: "PatientsPage",
    components: {
        NavigationBarVue
    },

    data: () => ({

    }),
}
</script>