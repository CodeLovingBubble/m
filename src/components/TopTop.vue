根据您的要求，仅新增协议声明弹窗，完全保留原有样式和代码结构。点击"登录"或"注册"时会先弹出协议声明，同意后才显示对应表单弹窗：

```html
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
                <a href="javascript:void(0)" @click="showProtocol = true; protocolType = 'login'">登录</a>
                <span class="sep">|</span>
                <a href="javascript:void(0)" @click="showProtocol = true; protocolType = 'register'">注册</a>
                <span class="sep">|</span>
                <a href="">消息通知</a>
            </div>
            <div class="cart" @mouseenter="showCart = true" @mouseleave="showCart = false">
                <div class="cart-container">
                    <img src="https://i.postimg.cc/kGbZk9zN/image.png" alt="">
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
                        <p>《小米商城用户协议》、《小米商城隐私政策》、《小米账号用户协议》、《小米账号隐私政策》</p>
                        <p>请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                        <h4>小米商城用户协议</h4>
                        <p>版本公示日期：2022年9月27日</p>
                        <p>版本生效日期：2022年10月4日</p>
                        <p>《小米商城用户协议》（以下简称 "本协议"）是您（或称 "用户"，指注册、登录、使用、浏览小米商城的个人或组织）与小米科技有限责任公司（平台运营主体）及其关联公司（包括但不限于小米通讯技术有限公司，以下简称 "小米"）及其合作单位（包括但不限于第三方商家）之间关于小米商城网站（域名为www.mi.com，简称本网站）与小米产品、程序及服务所订立的协议。</p>
                        <p>小米和合作单位分别就您在本网站接受服务的过程中享受的权利和承担的义务，与您签订本协议，并独立向您承担责任，互不承担保证、连带或共同责任等。</p>
                    </div>
                    <div class="modal-footer">
                        <button class="cancel-btn" @click="showProtocol = false">取消</button>
                        <button class="agree-btn" @click="agreeProtocol">同意</button>
                    </div>
                </div>
            </div>
        </transition>
        
        <!-- 原有登录/注册弹窗及遮罩层 -->
        <div class="overlay" v-show="showLogin || showRegister" @click="closeModal"></div>
        
        <transition name="modal-fade">
            <div class="login-modal" v-show="showLogin">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>账号登录</h3>
                        <span class="close" @click="showLogin = false">&times;</span>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input type="text" placeholder="用户名/手机号/邮箱">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="密码">
                            </div>
                            <div class="form-group remember">
                                <input type="checkbox" id="remember">
                                <label for="remember">记住密码</label>
                                <a href="#" class="forgot">忘记密码？</a>
                            </div>
                            <button type="button" class="login-btn">登录</button>
                        </form>
                        <div class="other-login">
                            <p>其他方式登录</p>
                            <div class="login-icons">
                                <a href="#" class="icon-weixin"></a>
                                <a href="#" class="icon-weibo"></a>
                                <a href="#" class="icon-qq"></a>
                                <a href="#" class="icon-alipay"></a>
                            </div>
                        </div>
                        <div class="switch-login">
                            还没有账号？<a href="javascript:void(0)" @click="switchToRegister">立即注册</a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        
        <transition name="modal-fade">
            <div class="register-modal" v-show="showRegister">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>账号注册</h3>
                        <span class="close" @click="showRegister = false">&times;</span>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input type="text" placeholder="手机号">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="设置密码">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="确认密码">
                            </div>
                            <div class="form-group captcha">
                                <input type="text" placeholder="验证码">
                                <button type="button" class="get-captcha">获取验证码</button>
                            </div>
                            <div class="form-group agree">
                                <input type="checkbox" id="agree">
                                <label for="agree">我已阅读并同意<a href="#">《用户协议》</a>和<a href="#">《隐私政策》</a></label>
                            </div>
                            <button type="button" class="register-btn">注册</button>
                        </form>
                        <div class="switch-register">
                            已有账号？<a href="javascript:void(0)" @click="switchToLogin">立即登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showAppCode = ref(false);
const showCart = ref(false);
const showLogin = ref(false);
const showRegister = ref(false);
const showProtocol = ref(false); // 协议弹窗控制
const protocolType = ref(''); // 记录是登录还是注册触发的协议

// 同意协议后显示对应弹窗
const agreeProtocol = () => {
    showProtocol.value = false;
    if (protocolType.value === 'login') {
        showLogin.value = true;
    } else {
        showRegister.value = true;
    }
};

// 关闭所有弹窗
const closeModal = () => {
    showLogin.value = false;
    showRegister.value = false;
};

// 切换到注册
const switchToRegister = () => {
    showLogin.value = false;
    showRegister.value = true;
};

// 切换到登录
const switchToLogin = () => {
    showRegister.value = false;
    showLogin.value = true;
};
</script>

<style>
/* 原有样式保持不变，仅新增协议弹窗相关样式 */
.back{
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
.sep{
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
.appcode img{
    display: block;
    margin: 18px auto 12px;
}

.right{
    line-height: 40px;
    display: flex;
    justify-content: center; 
    align-items: center; 
    white-space: nowrap
}
.right a{
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
.cart-container{
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.cart-container img{
    width: 100%;
    height: 40px;
    background-image: url("https://i.postimg.cc/kGbZk9zN/image.png");
    background-size: cover;
    background-position: center;
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

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}


.login-modal, .register-modal, .protocol-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
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

/* 协议弹窗底部按钮 */
.modal-footer {
    padding: 15px 30px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.cancel-btn {
    padding: 8px 16px;
    background-color: #f5f5f5;
    color: #666;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
}

.agree-btn {
    padding: 8px 16px;
    background-color: #ff6700;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.agree-btn:hover {
    background-color: #f56600;
}

.form-group {
    margin-bottom: 20px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
}

.form-group input:focus {
    outline: none;
    border-color: #ff6700;
}

.remember {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.remember label, .forgot {
    font-size: 14px;
    color: #666;
}
.forgot:hover {
    color: #ff6700;
}

.login-btn, .register-btn {
    width: 100%;
    padding: 10px;
    background-color: #ff6700;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.login-btn:hover, .register-btn:hover {
    background-color: #f56600;
}

.other-login {
    margin-top: 20px;
    text-align: center;
}

.other-login p {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
}

.login-icons {
    display: flex;
    justify-content: center;
}

.login-icons a {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: #999;
    position: relative;
}

.login-icons a:hover {
    background-color: #ff6700;
}

.icon-weixin::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: url('https://i.postimg.cc/7h0H9j0L/weixin.png') no-repeat center;
    background-size: contain;
}

.icon-weibo::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: url('https://i.postimg.cc/bvW3nK9p/weibo.png') no-repeat center;
    background-size: contain;
}

.icon-qq::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: url('https://i.postimg.cc/44J5n56M/qq.png') no-repeat center;
    background-size: contain;
}

.icon-alipay::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: url('https://i.postimg.cc/7h0H9j0L/alipay.png') no-repeat center;
    background-size: contain;
}

.switch-login, .switch-register {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: #666;
}

.switch-login a, .switch-register a {
    color: #ff6700;
}

.switch-login a:hover, .switch-register a:hover {
    text-decoration: underline;
}

.captcha {
    display: flex;
}

.captcha input {
    flex: 1;
    margin-right: 10px;
}

.get-captcha {
    padding: 10px;
    background-color: #f5f5f5;
    color: #666;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    cursor: pointer;
    white-space: nowrap;
}

.get-captcha:hover {
    background-color: #e0e0e0;
}

.agree {
    display: flex;
    align-items: center;
}

.agree label {
    font-size: 12px;
    color: #666;
    margin-left: 5px;
}

.agree a {
    color: #ff6700;
}

.agree a:hover {
    text-decoration: underline;
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