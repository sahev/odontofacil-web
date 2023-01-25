<template>
  <router-view />
</template>
<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme();
let themeSaved = localStorage.getItem('theme');

if (themeSaved) {
  theme.global.name.value = themeSaved;
} else {
  theme.global.name.value = 'light';
}
</script>