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