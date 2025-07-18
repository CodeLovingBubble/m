<script setup lang="ts">
import CartGoods from '~/src/components/CartGoods.vue';
import GoodsSale from '~/src/components/GoodsSale.vue';
import MenuBanner from '~/src/components/MenuBanner.vue';
import MoreList from '~/src/components/more/MoreList.vue';
import MoreLun from '~/src/components/more/MoreLun.vue';
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import SubChannel from '~/src/components/SubChannel.vue';
import ToolBar from '~/src/components/ToolBar.vue';
import TopCom from '~/src/components/TopCom.vue';
import TopHeader from '~/src/components/TopHeader.vue';
import TopTop from '~/src/components/TopTop.vue';

</script>

<template>
    <div class="index-page">
        <!-- 只在首页显示这些组件 -->
        <template v-if="$route.path === '/'">
            <TopTop />
            <TopHeader />
            <MenuBanner />
            <SubChannel />
            <div class="gray-page">
                <GoodsSale />
            </div>
        </template>

        <template v-if="$route.path === '/more'">
            <TopTop />
            <TopHeader />
            <MoreList />
            <MoreLun />
        </template>

        <slot />
        <template v-if="$route.path === '/cart'">
            <TopCom />
            <CartGoods />
        </template>

        <!-- 全局页脚 -->
        <SiteFooter />
        <div class="gray-page">
            <SiteInfo />
        </div>
        <ToolBar />
    </div>
</template>