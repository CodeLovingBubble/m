<script setup lang="ts">
import AuthBottom from '~/src/components/auth/AuthBottom.vue';
import AuthTop from '~/src/components/auth/AuthTop.vue';
import LeftPoster from '~/src/components/auth/LeftPoster.vue';
import { useLocaleStore } from '~/stores/locale'; // 明确导入

const localeStore = useLocaleStore()

// 初始化语言设置
onMounted(() => {
    localeStore.initLocale()
})
</script>

<template>
    <div class="auth-layout">
        <!-- 左侧固定海报 -->
        <LeftPoster class="left-poster" />
        
        <!-- 右侧主内容区 -->
        <div class="right-content">
            <AuthTop />
            <div class="auth-content">
                <slot />
            </div>
            <AuthBottom class="auth-bottom" />
        </div>
    </div>
</template>

<style scoped>
/*  */
</style>