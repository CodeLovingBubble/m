<template>
    <div class="top-box">
        <div class="top-box-left">
            <img src="/_nuxt/src/assets/image/logo-footer.png" alt="小米Logo">
            <p>小米账号</p>
        </div>
        <div class="top-box-right">
            <p>用户协议</p>
            <p>隐私政策</p>
            <p>帮助中心</p>
        </div>
    </div>
</template>

<style scoped>
.top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

.top-box-left {
    display: flex;
    align-items: center;
    height: 57px;
}

.top-box-left img {
    width: 57px;
    height: 57px;
    margin-right: 15px;
    border-radius: 20px;
}

.top-box-left p {
    font-size: 18px;
    font-weight: 500;
    color: #333;
}

.top-box-right {
    display: flex;
    gap: 30px;
}

.top-box-right p {
    font-size: 16px;
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
}

.top-box-right p:hover {
    color: #ff6709;
}
</style>