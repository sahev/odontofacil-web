<template>
  <v-app>
    <NavigationBar v-if="!$route.meta.hideNavbar" />

    <v-main>
      <!-- <v-toolbar elevation="3">
        <v-toolbar-title>{{ currentRouteName }}
        </v-toolbar-title>
      </v-toolbar> -->
      
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import NavigationBar from '@/components/navbar/NavigationBar.vue';
import { useTheme } from 'vuetify'

export default {
  setup() {
    const theme = useTheme();
    let themeSaved = localStorage.getItem('theme');

    if (themeSaved) {
      theme.global.name.value = themeSaved;
    } else {
      theme.global.name.value = 'light';
    }
  },
  name: "SchedulePage",
  components: {
    NavigationBar
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>