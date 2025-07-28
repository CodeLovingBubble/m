<template>
    <div class="auth-page">
        <div class="auth-tabs">
            <NuxtLink to="/login" class="tab-link">{{ localeStore.t('login') }}</NuxtLink>
            <button class="active">{{ localeStore.t('register') }}</button>
        </div>

        <form class="auth-form" @submit.prevent="handleSubmit">
            <div class="input-row">
                <label>{{ localeStore.t('countryRegion') }}</label>
                <div class="select-box">
                    <span>{{ localeStore.t('china') }}</span>
                </div>
            </div>

            <div class="phone-input-row">
                <div class="country-code-group">
                    <label>{{ localeStore.t('countryCode') }}</label>
                    <div class="select-box">
                        <span>+86</span>
                    </div>
                </div>
                <div class="phone-number-group">
                    <input type="tel" v-model="phone" :placeholder="localeStore.t('phoneNumber')"
                        :class="{ 'error-input': showPhoneError }" @input="validatePhone">
                    <span class="error-message" v-if="showPhoneError">{{ phoneError }}</span>
                </div>
            </div>

            <div class="verification-row">
                <input type="text" v-model="code" :placeholder="localeStore.t('enterVerificationCode')">
                <button type="button" class="code-btn" @click="sendCode" :disabled="!canSendCode">
                    {{ isSendingCode ? `${countdown}s${localeStore.t('retryAfter')}` :
                        localeStore.t('getVerificationCode') }}
                </button>
            </div>

            <div class="agreement">
                <label>
                    <input type="checkbox" v-model="agreed">
                    <span>{{ localeStore.t('agreementText') }}</span>
                </label>
            </div>

            <button type="submit" class="submit-btn" :disabled="!canSubmit">
                {{ localeStore.t('register') }}
            </button>
        </form>

        <div class="auth-footer">
            <a href="#" class="code-help">{{ localeStore.t('noVerificationCode') }}</a>
        </div>

        <!-- 协议确认弹窗 -->
        <div v-if="showAgreementModal" class="modal-overlay">
            <div class="modal-content">
                <h3>{{ localeStore.t('privacyPolicyConfirmation') }}</h3>
                <p>{{ localeStore.t('privacyPolicyText') }}</p>
                <div class="modal-actions">
                    <button @click="cancelAgreement">{{ localeStore.t('cancel') }}</button>
                    <button @click="confirmAgreement" class="confirm-btn">{{ localeStore.t('agreeAndContinue')
                        }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLocaleStore } from '~/stores/locale';

definePageMeta({
    layout: "auth"
});

const router = useRouter();
const localeStore = useLocaleStore();

const phone = ref('');
const code = ref('');
const agreed = ref(false);
const showAgreementModal = ref(false);
const isSendingCode = ref(false);
const countdown = ref(0);
const phoneError = ref('');
const showPhoneError = ref(false);
let timer = null; // 使用局部变量存储定时器

// 表单验证计算属性
const isPhoneValid = computed(() => {
    return /^1[3-9]\d{9}$/.test(phone.value);
});

// 发送验证码按钮始终可点击（只要不在倒计时中）
const canSendCode = computed(() => {
    return !isSendingCode.value;
});

// 注册按钮
const canSubmit = computed(() => {
    return isPhoneValid.value && code.value.trim().length > 0;
});

// 验证手机号
const validatePhone = () => {
    if (!phone.value) {
        phoneError.value = localeStore.t('phoneRequired');
        showPhoneError.value = true;
        return false;
    }

    if (!/^1[3-9]\d{9}$/.test(phone.value)) {
        phoneError.value = localeStore.t('invalidPhone');
        showPhoneError.value = true;
        return false;
    }

    showPhoneError.value = false;
    return true;
};

// 发送验证码
const sendCode = () => {
    // 只验证手机号，不检查协议
    if (!validatePhone()) return;
    
    // 开始发送验证码流程
    isSendingCode.value = true;
    countdown.value = 60;
    
    timer = setInterval(() => {
        countdown.value--;
        if (countdown.value <= 0) {
            clearInterval(timer);
            isSendingCode.value = false;
        }
    }, 1000);
};

// 清理定时器
onUnmounted(() => {
    if (timer) clearInterval(timer);
});

// 处理注册
const handleSubmit = () => {
    // 只有这里检查协议状态
    if (!agreed.value) {
        showAgreementModal.value = true;
        return;
    }
    
    // 注册成功后跳转到首页
    router.push('/');
};

// 确认同意协议
const confirmAgreement = () => {
    agreed.value = true;
    showAgreementModal.value = false;
    handleSubmit();
};

// 取消同意协议
const cancelAgreement = () => {
    showAgreementModal.value = false;
};
</script>

<style scoped>
.auth-page {
    left: 60%;
    width: 350px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    padding: 20px 15px;
    border-radius: 4px;
    background-color: #f7f7f7;
}

.phone-input-row {
    display: flex;
    gap: 0;
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
    border-radius: 4px 0 0 4px;
    border-right: 0;
}

.phone-number-group {
    flex: 1;
}

.phone-number-group input {
    border-radius: 0 4px 4px 0;
}

.phone-number-group input,
.verification-row input {
    width: 100%;
    height: 44px;
    padding: 30px 15px;
    border: none;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #f7f7f7;
    outline: none;
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

.code-btn:disabled {
    color: #999;
    cursor: not-allowed;
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

.submit-btn:disabled {
    background: #ffb88c;
    cursor: not-allowed;
}

.submit-btn:hover:not(:disabled) {
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

/* 统一弹窗样式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.modal-content {
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    width: 350px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.modal-content h3 {
    margin-top: 0;
    color: #333;
}

.modal-content p {
    color: #666;
    margin-bottom: 20px;
}

.modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.modal-actions button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.modal-actions button.confirm-btn {
    background-color: #ff6700;
    color: white;
}

.agreement input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
    position: relative;
}

.agreement input[type="checkbox"]:checked {
    border-color: #ff6700;
    background-color: #ff6700;
}

.agreement input[type="checkbox"]:checked::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.error-input {
    background-color: #fff0f0 !important;
    border: 1px solid #ff4d4f !important;
}

.error-message {
    position: absolute;
    bottom: -20px;
    left: 0;
    color: #ff4d4f;
    font-size: 12px;
}

.phone-number-group {
    position: relative;
    flex: 1;
}

@media (max-width: 1226px){
    .auth-page{
        left: 50%;
    }
}
</style>