
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages base path
const baseURL = '/THEMED-WEBSITE/'

export default defineNuxtConfig({
  modules: ['@nuxt/fonts'],

  compatibilityDate: '2025-01-01',

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    baseURL,

    head: {
      title: 'Themed Website Project',

      meta: [
        {
          name: 'description',
          content:
            'A controlled, isolated environment for developers to test applications, APIs and integrations safely.',
        },
      ],

      // Browser tab icon
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: `${baseURL}/Icon-a-dark.png`,
        },
        {
          rel: 'shortcut icon',
          type: 'image/png',
          href: `${baseURL}/Icon-a-dark.png`,
        },
      ],

      script: [
        {
          innerHTML: `try {
            var t = localStorage.getItem('ec-theme');
            if (!t) {
              t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            document.documentElement.classList.toggle('dark', t === 'dark');
            document.documentElement.style.colorScheme = t;
          } catch(e) {}`,
          tagPosition: 'head',
        },
      ],
    },
  },

  nitro: {
    preset: 'github_pages',
  },
})
