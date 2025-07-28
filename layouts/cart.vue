<script setup>
import TopCom from '~/src/components/TopCom.vue';
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import ToolBar from '~/src/components/ToolBar.vue';
import CartHeader from '~/src/components/cart/CartHeader.vue';
</script>

<template>
    <CartHeader />
    <TopCom />
    <div class="cart-layout">
        <div class="right-content">
            <!-- 这里插入页面内容 -->
            <slot />
            <ToolBar />
        </div>
    </div>
    <SiteFooter />
    <SiteInfo />
</template>

<style scoped>
/*  */
</style>