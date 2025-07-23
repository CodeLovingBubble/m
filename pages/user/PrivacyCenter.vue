<template>
    <div class="security-verification">
        <h2 class="title">{{ localeStore.t('xiaomiAccountSecurityVerification') }}</h2>
        <div class="content-box">
            <p class="desc">{{ localeStore.t('securityVerificationDesc') }}</p>
            <p class="sub-desc">
                {{ localeStore.t('verificationCodeInstructions') }}
                <span class="phone-number">+86 158****8025</span>
            </p>
            <button class="send-btn">{{ localeStore.t('sendVerificationCode') }}</button>
            <p class="extra">
                {{ localeStore.t('phoneOrEmailDisabled') }}
                <a href="#" class="reset-link">{{ localeStore.t('applyForReset') }}</a>
            </p>
        </div>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()
</script>

<style scoped>
.security-verification {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    overflow: hidden;
    width: 100%;
}

.title {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin-bottom: 40px;
}

.content-box {
    width: 460px;
    background-color: #fff;
    border-radius: 12px;
    padding: 40px;
    box-sizing: border-box;
    text-align: center;
}

.desc {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
}

.sub-desc {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
    margin-left: 20px;
    text-align: left;
}

.phone-number {
    color: #ff7b00;
}

.send-btn {
    width: 200px;
    height: 44px;
    background-color: #ff7b00;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.extra {
    font-size: 14px;
    color: #999;
    margin-top: 20px;
}

.reset-link {
    color: #999;
    text-decoration: underline;
}
</style>