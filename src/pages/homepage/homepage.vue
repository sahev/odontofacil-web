<template>
  <GlobalToolbar />
      <v-container>

        <section class="flex-container">
          <div class="list-item-1">
            <ItemBoard counter="10" text="Agendamentos hoje" icon="mdi-calendar-check" />
            <ItemBoard counter="254" text="Agendamentos do mês" icon="mdi-calendar-multiselect" />
            <ItemBoard counter="2" text="Aniversariantes do dia" icon="mdi-cake-variant" />
          </div>

          <div class="card-recents-1">
            <DoctorsList />
            <QueuePatients />
          </div>
        </section>

        <v-row>
          <template v-for="n in 4" :key="n">
            <v-col>
              <v-card height="200"></v-card>
            </v-col>
            <v-responsive v-if="n === 2" :key="`width-${n}`" width="100%"></v-responsive>
          </template>
        </v-row>

      </v-container>
</template>

<script>
import QueuePatients from './components/QueuePatients.vue';
import DoctorsList from './components/DoctorsList.vue';
import ItemBoard from './components/ItemBoard.vue';

export default {
  name: "HomePage",
  components: {
    QueuePatients,
    DoctorsList,
    ItemBoard
  },
  data: () => ({
    drawer: null,
    theme: localStorage.getItem('theme'),
  })
}
</script>
<style scoped>
.flex-container {
  padding: 12px 0 24px 0;
  display: flex;
}

.list-item-1 {
  padding: 0 12px 0 0;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-between;
}

.card-recents-1 {
  padding: 0 0 0 12px;
  width: 100%;
  display: flex;
  gap: 24px;
}
</style>