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
.auth-layout {
    display: flex;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

/* 左侧海报 - 占满高度 */
.left-poster {
    width: 375px;
    flex-shrink: 0;
    position: fixed; /* 改为fixed定位 */
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #f5f5f5;
    z-index: 10;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

/* 右侧内容区 */
.right-content {
    flex: 1;
    min-width: 0;
    margin-left: 375px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

/* 顶部导航调整 */
.top-box {
    position: fixed;
    top: 0;
    left: 375px;
    right: 0;
    z-index: 1000;
    background: white;
}

/* 主内容区 - 添加底部间距 */
.auth-content {
    max-width: 400px;
    margin: 70px auto 60px; /* 上边距匹配顶部导航高度 */
    padding: 20px;
    font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
    flex: 1;
}

/* 底部组件调整 */
.auth-bottom {
    position: fixed;
    bottom: 0;
    left: 375px;
    right: 0;
    z-index: 1000;
}

/* 响应式调整 */
@media (max-width: 1226px) {
    .left-poster {
        display: none;
    }
    
    .right-content {
        margin-left: 0;
    }
    
    .top-box,
    .auth-bottom {
        left: 0;
    }
    
    .auth-content {
        margin: 70px auto 60px;
    }
}
</style>