<script setup lang="ts">
import TopCom from '~/src/components/TopCom.vue';
import CartGoods from '~/src/components/CartGoods.vue';
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import ToolBar from '~/src/components/ToolBar.vue';
</script>

<template>
    <div class="ff"></div>
            <div class="top-box">
                <div class="top-container">
                    <div class="top-box-left">
                        <img src="/_nuxt/src/assets/image/logo-footer.png" alt="小米Logo">
                        <p>我的购物车</p>
                    </div>
                    <div class="top-box-right">
                        <NuxtLink to="/login" class="tab-link">登录</NuxtLink>
                        <span class="sep">|</span>
                        <NuxtLink to="/register" class="tab-link">注册</NuxtLink>
                    </div>
                </div>
            </div>
    <TopCom />
    <div class="cart-layout">
        <div class="right-content">
            <!-- 购物车内容 -->
            <CartGoods />
            <ToolBar />
        </div>
    </div>
    <SiteFooter />
    <SiteInfo />
</template>

<style scoped>
.cart-layout {
    display: flex;
    min-height: 100vh;
}

.left-panel {
    width: 240px;
    flex-shrink: 0;
    background: #f5f5f5;
}

.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.gray-page {
    background-color: #f5f5f5;
    padding: 20px 0;
}

.top-box {
    border-bottom: 2px solid #ff6709;
    height: 100px;
    z-index: 1000;
}

.top-container {
    max-width: 1226px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-box-left {
    display: flex;
    align-items: center;
    gap: 15px;
}

.top-box-left img {
    width: 57px;
    height: 57px;
    border-radius: 20px;
}

.top-box-left p {
    margin-left: 20px;
    font-size: 26px;
    font-weight: 500;
    color: #333;
}

.top-box-right {
    display: flex;
    gap: 0px;
}

.tab-link {
    font-size: 16px;
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
}

.tab-link:hover {
    color: #ff6709;
}
</style>