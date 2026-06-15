import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Quotcat Wiki',
  description: 'База знаний и документация проекта',
  lang: 'ru-RU',
  base: '/wiki/',
  themeConfig: {
    logo: { light: '/logo.svg', dark: '/logo-dark.svg' },
    siteTitle: false,
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/guide/introduction' },
      { text: 'Проверка элементов', link: '/guide/tokens' }
    ],
    sidebar: [
      {
        text: 'Документация',
        items: [
          { text: 'Введение', link: '/guide/introduction' },
          { text: 'Быстрый старт', link: '/guide/quick-start' },
          { text: 'Конфигурация', link: '/guide/configuration' },
          { text: 'Компоненты', link: '/guide/components' },
          { text: 'Вопросы и ответы', link: '/guide/faq' }
        ]
      },
      {
        text: 'Превью темы',
        items: [
          { text: 'Главная', link: '/' },
          { text: 'Проверка элементов', link: '/guide/tokens' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
