<!-- 安装pnpm add -D less less-loader     安装pnpm install mitt-->
<script setup lang="ts">
import GoodsSale from './src/components/GoodsSale.vue';
import MenuBanner from './src/components/MenuBanner.vue';
import SiteFooter from './src/components/SiteFooter.vue';
import SiteInfo from './src/components/SiteInfo.vue';
import SubChannel from './src/components/SubChannel.vue';
import ToolBar from './src/components/ToolBar.vue';
import TopHeader from './src/components/TopHeader.vue';
import LocationWindow from './src/parts/LocationWindow.vue';
import VideoWindow from './src/parts/VideoWindow.vue';
import WeChatWindow from './src/parts/WeChatWindow.vue';

</script>

<template>
    <div class="index-page">
    <TopHeader />
    <MenuBanner />
    <SubChannel />
    <div class="gray-page">
        <!-- <FlashSale />这是秒杀板块 -->
        <GoodsSale />
    </div>
    <SiteFooter />
    <div class="gray-page">
        <SiteInfo />
    </div>
    <ToolBar />
    <!-- 弹窗 -->
    <!-- <VideoWindow /> -->
    <!-- <WeChatWindow /> -->
    <!-- <LocationWindow /> -->
    </div>
</template>