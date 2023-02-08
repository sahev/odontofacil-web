<template>
    <v-app>
        <v-sheet class="pa-12" rounded>
            <v-card class="bg-primary mx-auto px-6 py-8" width="344">
                <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable
                        label="Email"></v-text-field>

                    <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable label="Password"
                        placeholder="Enter your password"></v-text-field>

                    <br>

                    <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                        variant="elevated" to='/select-area'>
                        Login
                    </v-btn>
                </v-form>
            </v-card>
            <!--<v-slide-x-transition>
                <v-card v-show="show" class="bg-primary mx-auto px-6 py-8" width="344">
                <v-card-text>
                    Selecione a unidade clínica:
                </v-card-text>
                    <v-form v-model="formClinicalUnit" @submit.prevent="onSelectClinicalUnit">
                        <v-select label="Unidade clínica" v-model="selectedArea"
                            :items="user.clinicalunits"></v-select>

                        <br>

                        <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit"
                            variant="elevated">
                            acessar
                        </v-btn>
                    </v-form>
                </v-card> 
            </v-slide-x-transition>-->
            <v-card-title>
                Login (redirecionar login para tela de seleção de unidade caso o usuario tenha mais de uma clinica
                vinculada)
            </v-card-title>
            <div>
                <v-btn @click="this.setUser(this.assistant)" color="tertiary">assistant</v-btn>
            </div>
            <div>
                <v-btn @click="this.setUser(this.administrator)" color="tertiary">administrator</v-btn>
            </div>
            <div>
                <v-btn @click="this.setUser(this.doctor)" color="tertiary">doctor</v-btn>
            </div>
        </v-sheet>

    </v-app>
</template>
<script>
import { useUserStore } from '@/store/User/UserStore.ts';

export default {
    setup() {
        const userStore = useUserStore();

        return {
            userStore
        };
    },
    name: "LoginPage",
    components: {

    },
    methods: {
        setUser(user) {
            this.userStore.setUser(user);
            this.email = user.email;
            this.password = '1234';
        },
        onSubmit() {
            if (!this.form) return
            this.show = true
        },
        onSelectClinicalUnit() {
            if (!this.form) return

            this.loading = true
            this.user.selectedArea = this.selectedArea;
            setTimeout(() => (this.loading = false, this.show = true, this.$router.push('/')), 2000)
        },
        required(v) {
            return !!v || 'Field is required'
        },
    },
    computed: {
        user() {
            return this.userStore.getUser
        },
    },
    mounted() {

    },
    created() {
        this.userStore.logoutUser();
    },
    data: () => ({
        show: false,
        form: false,
        formClinicalUnit: false,
        selectedArea: '',
        email: null,
        password: null,
        loading: false,
        administrator: {
            initials: 'do',
            fullName: 'dono',
            email: 'administrator@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            clinicalunits: ["unidade clinica 1", "unidade clinica 2", "unidade clinica 3"],
            role: 1
        },
        assistant: {
            initials: 're',
            fullName: 'recepcionista',
            email: 'recepcionista@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            clinicalunits: ["unidade clinica 1"],
            role: 2
        },
        doctor: {
            initials: 'dt',
            fullName: 'doutor',
            email: 'doutor@el.com',
            image: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
            clinicalunits: ["unidade clinica 1", "unidade clinica 3"],
            role: 3
        },
    })
}
</script>