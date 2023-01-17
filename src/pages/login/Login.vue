<template>
    <v-app>
        <v-main class="bg-grey-lighten-4">
            <v-toolbar elevation="3" class="bg-blue-lighten-5">
                <v-toolbar-title>Login
                </v-toolbar-title>
            </v-toolbar>
            
        <v-container class="text-center">
            <div>
                <v-btn @click="this.setUser(this.user)" to="/" >Logar</v-btn>
            </div>
        </v-container>
        </v-main>


    </v-app>
</template>
<script>
import { useNavBarStore } from '@/components/navbar/store/NavBarStore.ts';

export default {
    setup() {
        const navBarStore = useNavBarStore();
        return { navBarStore };
    },
    name: "LoginPage",
    components: {

    },
    methods: {
        setUser() {
            console.log('setuserlogin');
            this.navBarStore.setUser(this.user);
        }
        
    },
    computed: {
        
    },
    data: () => ({
        user: {
            initials: 'SE',
            fullName: 'testando dockerrr',
            email: 'samu@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            role: 'doctor'
        },
    }),
    created() {
       
    }
}
</script>