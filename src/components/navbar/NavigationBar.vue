<template>
  <div v-if="user">
    <v-navigation-drawer v-model="drawer">
      <v-menu location="end">
        <template v-slot:activator="{ props }">
          <v-list class="text-center">
            <v-list-item>
              <v-avatar size="64" color="secondary">
                <v-img v-if="user.image" :src="user.image" cover>
                </v-img>
                <span v-else class="text-h5">{{ user.initials }}</span>
              </v-avatar>
            </v-list-item>

            <v-list-item v-bind="props" link>
              <v-list-item-title class="text-h6">
                {{ user.fullName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in userItems" :key="index" :value="index" :to="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text, link] in links" :key="icon" link :to="link">
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-list v-if="user.role == Role.Administrator">
        <v-divider></v-divider>
        <v-list-subheader>
          Configurações
        </v-list-subheader>
        <v-list-item v-for="[icon, text, link] in adminLinks" :key="icon" link :to="link">
          <template v-slot:prepend>
            <v-icon>{{ icon }}</v-icon>
          </template>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>



      <template v-slot:append>
        <div class="pa-2">
          <v-btn block dark variant="tonal" to="/select-area">
                Alterar unidade
              </v-btn>
          <!-- <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn block dark variant="tonal" v-bind="props">
                Alterar unidade
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in user.clinicalunits" :key="index" :value="index" :to="item.path">
                <v-list-item-title @click="changeClinicalUnit(item)">{{ item }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu> -->
        </div>
        <div class="pa-2">
          <v-btn block to="/login" color="primary">
            Sair
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title >OdontoFácil</v-toolbar-title>
      
      <v-card-subtitle>{{ user.selectedArea }}</v-card-subtitle>

      <v-btn :prepend-icon="theme.global.name.value === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="toggleTheme" />

    </v-app-bar>
  </div>
</template>

<script>
import { useUserStore } from '@/store/User/UserStore.ts';
import { Role } from '@/components/enums/RoleEnum.ts'
import { useTheme } from 'vuetify'

export default {
  name: "NavBar",
  setup() {
    const userStore = useUserStore();
    const theme = useTheme();

    const toggleTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      localStorage.setItem('theme', theme.global.name.value)
    };

    return {
      userStore,
      theme,
      toggleTheme
    };
  },
  computed: {
    user() {
      return this.userStore.getUser
    },
    
    selectedArea() {
      return this.user.selectedArea
    },
  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    changeClinicalUnit(area) {
      this.user.selectedArea = area;
      console.log('recarregar aplicação com informações da área selecionada');
    },
    setUser(user) {
      this.userStore.setUser(user);
    },
  },
  data: () => ({
    Role,
    drawer: null,
    links: [
      ['mdi-home', 'Início', '/'],
      ['mdi-account-box-multiple', 'Pacientes', '/patients'],
      ['mdi-calendar-month', 'Agenda', '/schedule'],
    ],
    adminLinks: [
      ['mdi-folder-home-outline', 'Unidades Clínicas', '/clinical-units'],
      ['mdi-account-group', 'Funcionários', '/employees'],
    ],
    userItems: [
      { title: 'Conta', path: '/edit-account' }
    ],
  }),
}
</script>
