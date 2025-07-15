<template>
    <div class="back">
        <div class="left">
            <a href="//www.mi.com/">小米官网</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/shop">小米商城</a>
            <span class="sep">|</span>
            <a href="//hyperos.mi.com/"target="_blank">小米澎湃OS</a>
            <span class="sep">|</span>
            <a href="//www.xiaomiev.com/"target="_blank">小米汽车</a>
            <span class="sep">|</span>
            <a href="//i.mi.com/"target="_blank">云服务</a>
            <span class="sep">|</span>
            <a href="//iot.mi.com"target="_blank">IoT</a>
            <span class="sep">|</span>
            <a href="//youpin.mi.com/"target="_blank">有品</a>
            <span class="sep">|</span>
            <a href="//xiaoai.mi.com/"target="_blank">小爱开放平台</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/aptitude/list/?id=88"target="_blank">资质证照</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/aptitude/list/"target="_blank">协议规则</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/appdownload/" target="_blank"@mouseenter="showAppCode = true" @mouseleave="showAppCode = false">
                下载app
                <span class="appcode" :style="{ height: showAppCode ? '148px' : '0' }">
                    <img src="//i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城" width="90" height="90">
                    小米商城APP
                </span>
            </a>
            <span class="sep">|</span>
            <a href="javascript:;">Select Location</a>
        </div>
        <div class="right">
            <div>
                <a href="">登录</a>
                <span class="sep">|</span>
                <a href="">注册</a>
                <span class="sep">|</span>
                <a href="">消息通知</a>
            </div>
            <div class="cart" @mouseenter="showCart = true" @mouseleave="showCart = false">
                <div class="cart-container">
                    <img src="https://i.postimg.cc/kGbZk9zN/image.png" alt="">
                    <!-- <a href="http://static.mi.com/cart/">
                        购物车(<span>0</span>)
                    </a> -->
                </div>
                <transition name="fade">
                    <div class="cart-list" v-show="showCart">
                        <div class="cart-list-word">购物车中还没有商品，赶快选购吧！</div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showAppCode = ref(false);
const showCart = ref(false);
</script>

<style>
.back{
    /* position: relative; */
    z-index: 30;
    height: 40px;
    width: auto;
    font-size: 12px;
    color: #b0b0b0;
    background: #333;
    display: flex;
    justify-content: space-evenly;
}
.back a:hover{
    color: #fff;
}
.left{
    line-height: 40px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; 
}
.left a {
    color: #b0b0b0;
    line-height: 40px;
    margin-right: 3px;
    margin-left: 3px;
    display: inline-block;
    position: relative; /* 确保二维码定位基准 */
}
.sep{
    margin: 0 .3em;
    color: #424242;
}
.appcode {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 124px;
    height: 0; /* 初始高度为 0 */
    background: #fff;
    margin-left: -55px;
    box-shadow: 0 1px 5px #aaa;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 1;
    overflow: hidden;
    transition: height 0.3s; /* 高度渐变动画 */
    z-index: 20;
}
.appcode img{
    display: block;
    margin: 18px auto 12px;
}

.right{
    line-height: 40px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; 
}
.right a{
    color: #b0b0b0;
    line-height: 40px;
    margin-right: 3px;
    margin-left: 3px;
    display: inline-block;
}
.cart {
    margin-left: 20px;
    position: relative;
    display: inline-block;
}
.cart-container{
    /* background: #424242; */
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.cart-container img{
    width: 100%;
    height: 40px; /* 或任意高度 */
    background-image: url("https://i.postimg.cc/kGbZk9zN/image.png");
    background-size: cover; /* 关键：铺满容器 */
    background-position: center; /* 居中显示 */
    background-repeat: no-repeat;
}
.cart-container img:hover{
    content: url("https://i.postimg.cc/fWt63jy3/image.png");
}
.cart-list {
    position: absolute;
    top: 100%;
    right: 0;
    width: 280px;
    padding: 15px;
    background: #fff;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 100;
    text-align: center;
}
.cart-list-word {
    color: #424242;
    font-size: 12px;
}

/* 过渡动画：高度变化 */
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
    overflow: hidden; /* 防止内容溢出 */
}

.fade-enter-from,
.fade-leave-to {
    height: 0 !important; /* 初始高度为 0 */
    padding-top: 0;
    padding-bottom: 0;
}

.fade-enter-to,
.fade-leave-from {
    height: auto; /* 展开到实际高度 */
    opacity: 1; /* 完全显示 */
}
</style>