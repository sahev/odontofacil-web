// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Imports
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'

// Icons
import { fa } from 'vuetify/iconsets/fa'
import { md } from 'vuetify/iconsets/md'
import { mdi } from 'vuetify/iconsets/mdi'
import { mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      fa,
      mdi,
      md,
      mdiSvg,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1E80C1',
          secondary: '#1867c0',
          tertiary: '#E57373',
          accent: '#005CAF',
        },
      },
      dark: {
        colors: {
          primary: '#8ecae6',
          secondary: '#ffff',
          tertiary: '#fffff',
          accent: '#FF4081',
          
        },
      },
    },
  },
})
