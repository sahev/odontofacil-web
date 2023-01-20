<template>
    <v-app>
        <NavigationBarVue />

        <v-main class="bg-grey-lighten-4">
            <v-toolbar elevation="3" class="bg-blue-lighten-5">
                <v-toolbar-title>Clínicas
                </v-toolbar-title>
            </v-toolbar>
            
        <v-container class="text-center">
            lista clinicas + 
            adicionar unidade clínica +
            remover unidade clínica +
            alterar horario de atendimento clinica
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