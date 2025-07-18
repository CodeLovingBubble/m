<!-- 布局文件：比如 src/layouts/MoreLayout.vue -->
<script setup lang="ts">
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import ToolBar from '~/src/components/ToolBar.vue';
import TopHeader from '~/src/components/TopHeader.vue';
import TopTop from '~/src/components/TopTop.vue';
</script>

<template>
    <div class="more-layout">
        <div class="right-content">
            <TopTop />
            <TopHeader />

            <!-- 主体内容通过 slot 插入（这里会显示 tradein.vue 的内容） -->
            <main class="more-content">
                <slot />
            </main>

            <SiteFooter />
            <div class="gray-page">
                <SiteInfo />
            </div>
            <ToolBar />
        </div>
    </div>
</template>

<style scoped>
.more-layout {
    display: flex;
    min-height: 100vh;
}

.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    /* 移除左右内边距，确保图片占满 */
}

.more-content {
    width: 100%;
    max-width: none;
    /* 不限制最大宽度 */
    padding: 0;
    /* 移除内边距，避免图片左右间隙 */
}

.gray-page {
    background-color: #f5f5f5;
    padding: 20px 0;
}
</style>