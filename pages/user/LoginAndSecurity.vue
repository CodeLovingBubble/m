<template>
    <div class="login-and-security">
        <!-- 登录方式模块 -->
        <section class="module">
            <h3 class="module-title">{{ localeStore.t('loginMethods') }}</h3>
            <div class="item">
                <span class="icon phone-icon"></span>
                <span class="label">{{ localeStore.t('securityPhone') }}</span>
                <span class="value">+86 158****8025</span>
                <span class="arrow">></span>
            </div>
            <div class="item">
                <span class="icon email-icon"></span>
                <span class="label">{{ localeStore.t('securityEmail') }}</span>
                <span class="value not-set">{{ localeStore.t('notSet') }}</span>
                <span class="arrow">></span>
            </div>
            <div class="item">
                <span class="icon pwd-icon"></span>
                <span class="label">{{ localeStore.t('changePassword') }}</span>
                <span class="arrow">></span>
            </div>
            <div class="item">
                <span class="icon third-icon"></span>
                <span class="label">{{ localeStore.t('thirdPartyAccounts') }}</span>
                <!-- 新增微信图标 -->
                <span class="wechat-icon"></span>
                <span class="arrow">></span>
            </div>
        </section>

        <!-- 账号安全模块 -->
        <section class="module">
            <h3 class="module-title">{{ localeStore.t('accountSecurity') }}</h3>
            <div class="item">
                <span class="icon question-icon"></span>
                <span class="label">{{ localeStore.t('securityQuestions') }}</span>
                <span class="value not-set">{{ localeStore.t('notSet') }}</span>
                <span class="arrow">></span>
            </div>
            <div class="item">
                <span class="icon device-icon"></span>
                <span class="label">{{ localeStore.t('loginDeviceManagement') }}</span>
                <span class="arrow">></span>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()

definePageMeta({
    layout: 'account'
})
</script>

<style scoped>
.login-and-security {
    background-color: #fff;
    max-width: 800px;
    margin: 0 auto;
}

/* 模块标题样式 */
.module {
    margin-bottom: 30px; 
}

.module-title {
    font-size: 19px;
    color: #333;
    font-weight: 500;
    margin-bottom: 20px;
    position: relative;
    padding-left: 12px;
    line-height: 1.5;
}

.module-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 3px;
    height: 18px;
    background-color: #ff6700;
    border-radius: 2px;
}

/* 每个功能项样式 */
.item {
    display: flex;
    align-items: center;
    padding: 18px 0;
    min-height: 50px; 
}

/* 图标统一样式 */
.icon {
    width: 22px; 
    height: 22px;
    display: inline-block;
    margin-right: 15px; 
    background-size: contain;
    background-repeat: no-repeat;
}

/* 安全手机图标 */
.phone-icon {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwA…gDIOkph/KVl1guKFvwH8RZeCVUal0WQAAAABJRU5ErkJggg==');
}

/* 安全邮箱图标 */
.email-icon {
    background-image: url('data:image/svg+xml;utf8,<svg fill="#409eff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z"/></svg>');
}

/* 修改密码图标 */
.pwd-icon {
    background-image: url('data:image/svg+xml;utf8,<svg fill="#ff9900" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm0 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>');
}

/* 第三方账号图标 */
.third-icon {
    background-image: url('data:image/svg+xml;utf8,<svg fill="#67c23a" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>');
}

/* 微信图标 */
.wechat-icon {
    width: 22px;
    height: 22px;
    background-image: url('data:image/svg+xml;utf8,<svg fill="#67c23a" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2.999-7.001a1 1 0 0 1 1.998 0v2a1 1 0 0 1-1.998 0v-2zm5.996 0a1 1 0 0 1 1.998 0v2a1 1 0 0 1-1.998 0v-2zm-1.001-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 10px;
}

/* 密保问题图标 */
.question-icon {
    background-image: url('data:image/svg+xml;utf8,<svg fill="#67c23a" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>');
}

/* 登录设备管理图标 */
.device-icon {
    background-image: url('data:image/svg+xml;utf8,<svg fill="#ff9900" viewBox="0 0 24 24"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9zm0 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 8H5v-1h10v1zm8-9c0 3.87-3.13 7-7 7s-7-3.13-7-7 3.13-7 7-7 7 3.13 7 7z"/></svg>');
}

/* 文字内容样式 */
.label {
    flex: 1;
    color: #333;
    font-size: 16px;
    line-height: 1.6;
}

.value {
    color: #999;
    font-size: 15px; 
    margin-right: 12px;
    line-height: 1.6;
}

.not-set {
    color: #ff5722;
    font-size: 15px;
    margin-right: 12px;
}

/* 右侧箭头样式 */
.arrow {
    color: #c0c4cc;
    font-size: 16px;
    margin-left: 10px;
}
</style>