<template>
    <div class="auth-page">
        <div class="auth-tabs">
            <button class="active">登录</button>
            <NuxtLink to="/register" class="tab-link">注册</NuxtLink>
        </div>

        <form class="auth-form">
            <div class="input-group">
                <input type="text" placeholder="邮箱/手机号码/小米ID">
            </div>

            <div class="input-group">
                <input type="password" placeholder="密码">
            </div>

            <div class="agreement">
                <label>
                    <input type="checkbox">
                    <span>已阅读并同意小米账号使用协议和隐私政策</span>
                </label>
            </div>

            <button type="submit" class="submit-btn">登录</button>
        </form>

        <div class="auth-footer">
            <div class="links">
                <a href="#">忘记密码？</a>
                <span>|</span>
                <a href="#">手机号登录</a>
            </div>

            <div class="divider">
                <span>其他方式登录</span>
            </div>

            <div class="social-login">
                <a href="#" class="social-icon wechat"></a>
                <a href="#" class="social-icon qq"></a>
                <a href="#" class="social-icon weibo"></a>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "auth"
});
</script>

<style scoped>
.auth-page {
    width: 300px; /* 添加固定宽度 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}

.auth-tabs {
    display: flex;
    margin-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
}

.auth-tabs button,
.auth-tabs .tab-link {
    flex: 1;
    padding: 15px 0;
    text-align: center;
    font-size: 18px;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
}

.auth-tabs button.active {
    color: #ff6700;
    font-weight: 500;
}

.auth-tabs button.active::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background: #ff6700;
}

.tab-link {
    text-decoration: none;
    display: block;
}

.input-group {
    margin-bottom: 20px;
}

.input-group input {
    width: 90%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 14px;
    background-color: #f7f7f7;
}

.input-group input:focus {
    border-color: #ff6700;
    outline: none;
    background-color: #f7f7f7;
}

.agreement {
    margin: 15px 0 25px;
    font-size: 14px;
    color: #666;
}

.agreement label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.agreement input {
    margin-right: 8px;
}

.submit-btn {
    width: 100%;
    padding: 12px;
    background: #ff6900;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.submit-btn:hover {
    background: #f56600;
}

.auth-footer {
    margin-top: 30px;
    text-align: center;
}

.links {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #999;
}

.links a {
    color: #999;
    text-decoration: none;
}

.links a:hover {
    color: #ff6700;
}

.divider {
    position: relative;
    margin: 25px 0;
    color: #999;
    font-size: 14px;
}

.divider span {
    background: white;
    padding: 0 10px;
    position: relative;
}

.divider::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e0e0e0;
    z-index: -1;
}

.social-login {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.social-icon {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: contain;
}

.social-icon.wechat {
    background-image: url('https://i01.appmifile.com/webfile/globalimg/icon/wechat.svg');
}

.social-icon.qq {
    background-image: url('https://i01.appmifile.com/webfile/globalimg/icon/qq.svg');
}

.social-icon.weibo {
    background-image: url('https://i01.appmifile.com/webfile/globalimg/icon/weibo.svg');
}
</style>