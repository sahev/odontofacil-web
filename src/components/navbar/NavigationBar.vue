<template>
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
        <v-btn block>
          Alterar unidade
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>

  <v-app-bar color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>OdontoFácil</v-toolbar-title>
    <v-icon>mdi-cog</v-icon>
  </v-app-bar>
</template>

<script>
import { useNavBarStore } from './store/NavBarStore.ts';
import { Role } from '@/components/enums/RoleEnum.ts'


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
    Role,
    drawer: null,
    links: [
      ['mdi-home', 'Início', '/'],
      ['mdi-account-box-multiple', 'Pacientes', '/patients'],
      ['mdi-calendar-month', 'Agenda', '/schedule'],
    ],
    adminLinks: [
      ['mdi-folder-home-outline', 'Clínicas', '/clinics'],
      ['mdi-account-group', 'Doutores', '/doctors'],
    ],
    userItems: [
      { title: 'Conta', path: '/edit-account' },
      { title: 'Sair', path: '/login' },
    ],
  }),
}
</script>
