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
</template>

<style scoped>

/* 唯一改动：移除 position: fixed 和相关定位属性 */
.top-box {
    border-bottom: 2px solid #ff6709;
    height: 100px;
    z-index: 1000;
}

/* 其他所有样式保持不变 */
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