<template>
    <div class="back">
        <div class="left">
            <a href="//www.mi.com/">小米官网</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/shop">小米商城</a>
            <span class="sep">|</span>
            <a href="//hyperos.mi.com/" target="_blank">小米澎湃OS</a>
            <span class="sep">|</span>
            <a href="//www.xiaomiev.com/" target="_blank">小米汽车</a>
            <span class="sep">|</span>
            <a href="//i.mi.com/" target="_blank">云服务</a>
            <span class="sep">|</span>
            <a href="//iot.mi.com" target="_blank">IoT</a>
            <span class="sep">|</span>
            <a href="//youpin.mi.com/" target="_blank">有品</a>
            <span class="sep">|</span>
            <a href="//xiaoai.mi.com/" target="_blank">小爱开放平台</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/aptitude/list/?id=88" target="_blank">资质证照</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/aptitude/list/" target="_blank">协议规则</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/appdownload/" target="_blank" @mouseenter="showAppCode = true"
                @mouseleave="showAppCode = false">
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
                <a href="javascript:void(0)" @click="showProtocol = true; protocolType = 'login'">登录</a>
                <span class="sep">|</span>
                <a href="javascript:void(0)" @click="showProtocol = true; protocolType = 'register'">注册</a>
                <span class="sep">|</span>
                <a href="">消息通知</a>
            </div>
            <div class="cart" @mouseenter="showCart = true" @mouseleave="showCart = false">
                <div class="cart-container" @click.stop="goToCart">
                    <NuxtLink to="/cart" class="tab-link">
                        <img src="https://i.postimg.cc/kGbZk9zN/image.png" alt="">
                    </NuxtLink>
                </div>
                <transition name="fade">
                    <div class="cart-list" v-show="showCart">
                        <div class="cart-list-word">购物车中还没有商品，赶快选购吧！</div>
                    </div>
                </transition>
            </div>
        </div>

        <!-- 协议声明弹窗 -->
        <transition name="modal-fade">
            <div class="protocol-modal" v-show="showProtocol">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>协议声明</h3>
                        <span class="close" @click="showProtocol = false">&times;</span>
                    </div>
                    <div class="modal-body protocol-content">
                        <p class="colo">《小米商城用户协议》、《小米商城隐私政策》、《小米账号用户协议》、《小米账号隐私政策》</p>
                        <p>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                        <h4>小米商城用户协议</h4>
                        <p>版本公示日期：2022年9月27日</p>
                        <p>版本生效日期：2022年10月4日</p>
                        <p>《小米商城用户协议》（以下简称 "本协议"）是您（或称
                            "用户"，指注册、登录、使用、浏览小米商城的个人或组织）与小米科技有限责任公司（平台运营主体）及其关联公司（包括但不限于小米通讯技术有限公司，以下简称
                            "小米"）及其合作单位（包括但不限于第三方商家）之间关于小米商城网站（域名为www.mi.com，简称本网站）与小米产品、程序及服务所订立的协议。</p>
                        <p>小米和合作单位分别就您在本网站接受服务的过程中享受的权利和承担的义务，与您签订本协议，并独立向您承担责任，互不承担保证、连带或共同责任等。</p>
                    </div>
                    <div class="modal-footer">
                        <button class="agree-btn" @click="handleAgree">同意</button>
                        <button class="cancel-btn" @click="showProtocol = false">不同意</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
const showAppCode = ref(false);// 控制"下载app"悬浮二维码的显示状态（默认隐藏）
const showCart = ref(false);// 控制购物车下拉框的显示状态（默认隐藏）
const showProtocol = ref(false);// 控制协议声明弹窗的显示状态（默认隐藏）
const protocolType = ref('');// 记录当前是登录还是注册操作（用于后续跳转对应页面）
const handleAgree = async () => {// 处理用户同意协议后的逻辑
    showProtocol.value = false;
    await nextTick(); // 等待DOM更新完成（确保弹窗完全关闭后再执行跳转）

    if (protocolType.value === 'login') {
        return navigateTo('/login'); // 使用 Nuxt 的 navigateTo
    } else {
        return navigateTo('/register');
    }
};
</script>

<style>
/* 原有样式保持不变 */
.back {
    z-index: 30;
    height: 40px;
    width: auto;
    font-size: 12px;
    color: #b0b0b0;
    background: #333;
    display: flex;
    justify-content: space-evenly;
}

.back a:hover {
    color: #fff;
}

.left {
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left a {
    color: #b0b0b0;
    line-height: 40px;
    margin-right: 3px;
    margin-left: 3px;
    display: inline-block;
    position: relative;
    white-space: nowrap
}

.sep {
    margin: 0 .3em;
    color: #424242;
}

.appcode {
    position: absolute;
    top: 40px;
    left: 50%;
    width: 124px;
    height: 0;
    background: #fff;
    margin-left: -55px;
    box-shadow: 0 1px 5px #aaa;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 1;
    overflow: hidden;
    transition: height 0.3s;
    z-index: 20;
}

.appcode img {
    display: block;
    margin: 18px auto 12px;
}

.right {
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap
}

.right a {
    color: #b0b0b0;
    line-height: 40px;
    margin-right: 3px;
    margin-left: 3px;
    display: inline-block;
    white-space: nowrap
}

.cart {
    margin-left: 20px;
    position: relative;
    display: inline-block;
}

.cart-container {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}

.cart-container img {
    width: 100%;
    height: 40px;
    background-image: url("https://i.postimg.cc/kGbZk9zN/image.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.cart-container img:hover {
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 100;
    text-align: center;
}

.cart-list-word {
    color: #424242;
    font-size: 12px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
    overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
    height: 0 !important;
    padding-top: 0;
    padding-bottom: 0;
}

.fade-enter-to,
.fade-leave-from {
    height: auto;
    opacity: 1;
}

/* 协议弹窗样式 */
.protocol-modal {
    position: fixed;    /* 全屏固定定位，改变全屏背景颜色 */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fff;
    width: 800px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    position: relative;
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: #333;
}

.close {
    font-size: 24px;
    color: #999;
    cursor: pointer;
}

.close:hover {
    color: #333;
}

.modal-body {
    padding: 20px 30px;
}

/* 协议弹窗内容样式 */
.protocol-content {
    max-height: 300px;
    overflow-y: auto;
    line-height: 1.6;
}

.protocol-content h4 {
    margin: 15px 0 10px;
    font-size: 16px;
    color: #333;
}

.colo {
    color: #ff6700;
}

/* 协议弹窗底部按钮 */
.modal-footer {
    padding: 15px 30px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    ;
    gap: 10px;
}

.cancel-btn {
    padding: 8px 60px;
    background-color: #f5f5f5;
    color: #666;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
}

.agree-btn {
    padding: 8px 65px;
    background-color: #ff6700;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.agree-btn:hover {
    background-color: #f56600;
}

/* 弹窗动画 */
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.modal-fade-enter-to,
.modal-fade-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>