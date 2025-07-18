<script setup lang="ts">
import GoodsSale from '~/src/components/GoodsSale.vue';
import MenuBanner from '~/src/components/MenuBanner.vue';
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import SubChannel from '~/src/components/SubChannel.vue';
import ToolBar from '~/src/components/ToolBar.vue';
import TopHeader from '~/src/components/TopHeader.vue';
import TopTop from '~/src/components/TopTop.vue';

</script>

<template>
    <div class="index-page">
        <TopTop />
        <TopHeader />
        <MenuBanner />
        <SubChannel />
        <div class="gray-page">
            <GoodsSale />
        </div>

        <slot />

        <!-- 全局页脚 -->
        <SiteFooter />
        <div class="gray-page">
            <SiteInfo />
        </div>
        <ToolBar />
    </div>
</template>