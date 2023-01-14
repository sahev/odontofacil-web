<template>
    <v-card height="288px" width="100%" title="Sala de espera">
        <div class="flex-box container-box">
            <v-progress-circular indeterminate :size="150" :width="5" color="secondary" class="content-box">
                <h1 class="font-weight-light" style=" font-size: 50px"> {{ queue }}</h1>
            </v-progress-circular>
        </div>
        <p class="font-weight-thin text-center">
            pacientes aguardando
        </p>
    </v-card>
</template>

<script>
export default {
    name: "QueuePatients",
    data: () => ({
        queue: 8
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
    height: 180px;
}

.content-box {
    text-align: center;
}
</style>