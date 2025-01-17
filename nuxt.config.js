import { laravel } from './manifest'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  site: {
    url: 'https://artisan.getlaravel.ru',
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'Laravel v%s - Шпаргалка по Laravel Artisan',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://artisan.getlaravel.ru/favicon.ico',
        },
        {
          rel: 'style',
          href: 'https://fonts.bunny.net/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap',
        },
      ],
      script: [
        process.env.NODE_ENV === 'production' && {
          src: 'https://cdn.usefathom.com/script.js',
          'data-site': 'FMUFNTYW',
          'data-canonical': false,
          defer: 'defer',
        },
      ],
      htmlAttrs: {
        lang: 'ru'
      }
    },
  },

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios',
    // '@nuxtjs/redirect-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-simple-sitemap',
    'nuxt-simple-robots',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    cacheMaxAgeSeconds: 360, // 1 hour
    sources: [
      '/api/__sitemap__/urls'
    ]
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
})
