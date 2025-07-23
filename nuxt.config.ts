// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  modules: [
    '@pinia/nuxt',  // Pinia模块
    ['@element-plus/nuxt', {
      importStyle: 'css',
      themes: ['dark']
    }]
  ],

  // 正确的Pinia配置方式
  imports: {
    dirs: ['stores']
  }
})