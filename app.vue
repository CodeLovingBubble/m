<script setup lang="ts">
// SEO 优化信息
useSeoMeta({
  // 网站标题
  title: '小米商城-Xiaomi 15、REDMI K80、小米15Pro',
  // 网站描述
  description:
    '小米商城官方正品特卖，抢购最新小米15系列、Redmi K80旗舰手机，选购智能电视、笔记本、家电及生态链产品，享受官方质保和快捷配送服务',
  // 搜索关键词
  keywords: '小米商城,小米15 Pro,Redmi K80,小米电视,智能家居,小米手环8,小米笔记本,官方正品,小米官网,小米优惠',
})
useHead({
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/_nuxt/src/assets/image/logo-footer.png' }
  ]
})
</script>

<!-- 安装pnpm add -D less less-loader     安装pnpm install mitt-->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
ul, ol {
  list-style: none;
  padding-left: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>