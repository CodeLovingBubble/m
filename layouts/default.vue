<script setup lang="ts">
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import ToolBar from '~/src/components/ToolBar.vue';
import TopHeader from '~/src/components/TopHeader.vue';
import TopTop from '~/src/components/TopTop.vue';
import MenuBanner from '~/src/components/MenuBanner.vue';
import SubChannel from '~/src/components/SubChannel.vue';
</script>

<template>
    <div class="default-layout">
        <!-- 顶部导航栏（布局的一部分） -->
        <TopTop />
        <TopHeader />
        <MenuBanner />
        <SubChannel />

        <!-- 主要内容区域（由页面插入） -->
        <main class="main-content">
            <slot />
        </main>

        <!-- 全局页脚（布局的一部分） -->
        <SiteFooter />
        <div class="gray-page">
            <SiteInfo />
        </div>
        <ToolBar />
    </div>
</template>

<style scoped>
.default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1; /* 让主要内容区域占据剩余空间 */
}

.gray-page {
    background-color: #f5f5f5;
    padding: 20px 0;
}
</style>