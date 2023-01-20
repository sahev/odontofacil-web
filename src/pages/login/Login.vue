<template>
    <v-app>
        <v-container>
            <v-card-title>
                Login
            </v-card-title>
            <div>
                <v-btn @click="this.setUser(this.assistant)" to="/">assistant</v-btn>
            </div>
            <div>
                <v-btn @click="this.setUser(this.administrator)" to="/">administrator</v-btn>
            </div>
            <div>
                <v-btn @click="this.setUser(this.doctor)" to="/">doctor</v-btn>
            </div>
        </v-container>
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
        setUser(user) {
            this.navBarStore.setUser(user);
        },

    },
    computed: {

    },
    created() {
        this.navBarStore.logoutUser();
    },
    data: () => ({
        administrator: {
            initials: 'do',
            fullName: 'dono',
            email: 'administrator@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            role: 1
        },
        assistant: {
            initials: 're',
            fullName: 'recepcionista',
            email: 'recepcionista@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            role: 2
        },
        doctor: {
            initials: 'dt',
            fullName: 'doutor',
            email: 'doutor@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            role: 3
        },
    })
}
</script>