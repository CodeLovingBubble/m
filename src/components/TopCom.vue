<template>
    <div>
        <div class="cart-t">
            <div class="cart-content"> <!-- 新增的包裹容器 -->
                <div class="cart-image"></div> <!-- 图片容器 -->
                <div class="text-content"> <!-- 文字容器 -->
                    <h2 class="kong">您的购物车还是空的！</h2>
                    <p class="kong2">登录后将显示您之前加入的商品</p>
                    <button @click="navigateToLogin"
                        class="login-btn">
                        立即登录
                    </button>
                    <button class="ma">马上去购物</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const navigateToLogin = () => {
    window.location.href = '/login';
};
</script>

<style>
.cart-t {
    background-color: #f5f5f5;
    height: 500px;
    width: 100%;
    margin: 0px 0 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cart-content {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.cart-image {
    width: 350px;
    height: 350px;
    background: url("https://cdn.cnbj1.fds.api.mi-img.com/staticsfile/cart/cart-empty.png") no-repeat center;
    background-size: contain;
    margin-right: 40px;
}

.text-content {
    text-align: left;
}

.kong {
    font-size: 36px;
    margin: 0 0 10px 0;
    color: #b0b0b0;
}

.kong2 {
    font-size: 20px;
    margin: 0 0 20px 0;
    color: #b0b0b0;
}

.login-btn {
    background-color: #ff6700;
    color: white;
    padding: 0;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 170px;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
}

.login-btn:hover {
    background-color: #f25907;
}
.ma{
    background-color: #f5f5f5;
    color: #ff6700;
    padding: 0;
    border: 1px solid #ff6700;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 170px;
    height: 48px;
    line-height: 48px;
    font-size: 14px;
    margin-left: 10px;
}
</style>