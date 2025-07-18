<template>
    <div class="auth-page">
        <div class="auth-tabs">
            <NuxtLink to="/login" class="tab-link">登录</NuxtLink>
            <button class="active">注册</button>
        </div>

        <form class="auth-form">
            <div class="input-row">
                <label>国家/地区</label>
                <div class="select-box">
                    <span>中国</span>
                </div>
            </div>

            <div class="phone-input-row">
                <div class="country-code-group">
                    <label>国家码</label>
                    <div class="select-box">
                        <span>+86</span>
                    </div>
                </div>
                <div class="phone-number-group">
                    <input type="tel" placeholder="手机号">
                </div>
            </div>

            <div class="verification-row">
                <input type="text" placeholder="请输入验证码">
                <button class="code-btn">获取验证码</button>
            </div>

            <div class="agreement">
                <label>
                    <input type="checkbox">
                    <span>已阅读并同意小米账号使用协议和隐私政策</span>
                </label>
            </div>

            <button type="submit" class="submit-btn">注册</button>
        </form>

        <div class="auth-footer">
            <a href="#" class="code-help">收不到验证码？</a>
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
    width: 300px;
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

.input-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.input-row label {
    width: 80px;
    font-size: 14px;
    color: #666;
}

.select-box {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #f7f7f7;
}

.phone-input-row {
    display: flex;
    gap: 0; /* 移除间隙 */
    margin-bottom: 20px;
    align-items: flex-end;
}

.country-code-group {
    flex: 0 0 120px;
}

.country-code-group label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
    color: #666;
}

.country-code-group .select-box {
    border-radius: 4px 0 0 4px; /* 左圆角 */
    border-right: 0; /* 移除右边框 */
}

.phone-number-group {
    flex: 1;
}

.phone-number-group input {
    border-radius: 0 4px 4px 0; /* 右圆角 */
}

.phone-number-group input,
.verification-row input {
    width: 100%;
    height: 44px;
    padding: 0 15px;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #f7f7f7;
}

.verification-row {
    position: relative;
    margin-bottom: 20px;
}

.verification-row input {
    padding-right: 110px;
}

.code-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 32px;
    margin: 0 5px;
    padding: 0 10px;
    background: none;
    border: none;
    border-left: 1px solid #e0e0e0;
    color: #ff6700;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
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
    background: #ff6700;
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
    margin-top: 20px;
    text-align: center;
}

.code-help {
    color: #999;
    font-size: 14px;
    text-decoration: none;
}

.code-help:hover {
    color: #ff6700;
}
</style>
    