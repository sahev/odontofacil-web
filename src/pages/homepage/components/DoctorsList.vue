<template>
    <v-card height="288px" width="100%" title="Doutores">
        <v-responsive class="overflow-y-auto" max-height="235">
            <v-list-item :title="doctor.name" :subtitle="doctor.specialty" v-for="(doctor, ix) in doctors" :key="ix">
                <template v-slot:prepend>
                    <v-avatar color="blue">
                        <v-img :src="doctor.img"></v-img>
                    </v-avatar>
                </template>

                <template v-slot:append>
                    <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
                </template>
                <v-divider></v-divider>
            </v-list-item>

        </v-responsive>

    </v-card>
</template>

<script>
export default {
    name: "DoctorsList",

    data: () => ({
        doctors: [
            {
                name: "João Araujo",
                img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                specialty: "Cirurgiao"
            },
            {
                name: "Rafael Araujo",
                img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                specialty: "Arrancador de ciso",
            },
            {
                name: "Allan Fulano",
                img: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                specialty: "Colocador de aparelho"
            },
            {
                name: "Fulano Silva",
                img: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                specialty: "Estagiário de ciso"
            },
            {
                name: "Mariana Araujo",
                img: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                specialty: "Fazedor de molde"
            },

        ],
    }),
}
</script>
<style scoped>
.flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-box {
    height: 200px;
}

.content-box {
    text-align: center;
}

::-webkit-scrollbar {
    width: 15px;
}

::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-left: 1px solid #dadada;
    border-radius: 7px;
}

::-webkit-scrollbar-thumb {
    background: #b0b0b0;
    border: solid 3px #e6e6e6;
    border-radius: 7px;
}

::-webkit-scrollbar-thumb:hover {
    background: black;
}

::-webkit-scrollbar {
    width: 15px;
}
</style>