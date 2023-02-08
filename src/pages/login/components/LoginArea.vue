<template>
    <v-app>
        <v-sheet class="pa-12" rounded>
            <v-slide-x-transition>
                <v-card v-show="show" class="bg-primary mx-auto px-6 py-8" width="344">
                    <v-form v-model="formClinicalUnit" @submit.prevent="onSelectClinicalUnit">
                        <v-select label="Unidade clínica" v-model="selectedArea" :rules="[required]"
                            :items="user.clinicalunits"></v-select>

                        <br>

                        <v-btn :disabled="!formClinicalUnit" :loading="loading" block color="success" size="large"
                            type="submit" variant="elevated">
                            acessar
                        </v-btn>
                    </v-form>
                </v-card>
            </v-slide-x-transition>
        </v-sheet>
    </v-app>
</template>
<script>
import { useUserStore } from '@/store/User/UserStore.ts';

export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },
    name: "LoginArea",
    components: {

    },
    methods: {
        onSelectClinicalUnit() {
            if (!this.formClinicalUnit) return

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
        this.show = true;
    },
    data: () => ({
        password: '',
        form: false,
        show: false,
        formClinicalUnit: false,
        selectedArea: '',
        loading: false,
    })
}
</script>
<style scoped>
.v-card {
  transition: all 500ms ease;
}
</style>