// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // 正确的模块配置方式
  modules: [
    ['@element-plus/nuxt', {
      // 模块选项放在这里
      importStyle: 'css',
      themes: ['dark']
    }]
  ],
})