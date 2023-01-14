<template>
  <v-navigation-drawer v-model="drawer">
    <v-list class="text-center">
      <v-list-item>
        <v-avatar size="64" color="secondary">
          <v-img v-if="user.image" :src="user.image" cover>
          </v-img>
          <span v-else class="text-h5">{{ user.initials }}</span>
        </v-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-title class="text-h6">
          {{ user.fullName }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="[icon, text, link] in links" :key="icon" link :to="link">
        <template v-slot:prepend>
          <v-icon>{{ icon }}</v-icon>
        </template>
        <v-list-item-title>{{ text }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item @click="this.navBarStore.logoutUser()" to="/login" link>
        <template v-slot:prepend>
          <v-icon>mdi-logout</v-icon>
        </template>
        Sair
      </v-list-item>

    </v-list>
  </v-navigation-drawer>

  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>OdontoFácil</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { useNavBarStore } from './store/NavBarStore.ts';

export default {
  name: "NavBar",
  setup() {
    const navBarStore = useNavBarStore();
    return { navBarStore };
  },
  computed: {
    user() {
      return this.navBarStore.getUser
    }
  },  
  created() {
    
  },
  mounted() {
    
  },
  data: () => ({
    drawer: null,
    links: [
      ['mdi-home', 'Início', '/'],
      ['mdi-account-box-multiple', 'Pacientes', '/patients'],
      ['mdi-calendar-month', 'Agenda', '/schedule'],
    ],
  }),
}
</script>
