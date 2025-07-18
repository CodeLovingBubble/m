<template>
    <div class="portal-content">
        <!-- 默认显示个人资料 -->
        <div class="content-section">
            <div class="section-header">
                <h2>修改个人信息 ></h2>
            </div>
            <div class="info-cards">
                <div class="info-card">
                    <span>账户安全：{{ accountSecurity }}</span>
                    <a href="#" @click.prevent="showSecuritySettings">提升安全等级 ></a>
                </div>
                <div class="info-card">
                    <span>绑定手机：{{ userInfo.phone }}</span>
                    <a href="#" @click.prevent="changePhone">更换手机号 ></a>
                </div>
                <div class="info-card">
                    <span>绑定邮箱：{{ userInfo.email || '未绑定' }}</span>
                    <a href="#" @click.prevent="bindEmail">{{ userInfo.email ? '更换邮箱' : '绑定邮箱' }} ></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'user'
})

const userInfo = ref({
    phone: '158****2525',
    email: '',
})

const accountSecurity = ref('普通')

const showSecuritySettings = () => {
    navigateTo('/user/security-settings')
}

const changePhone = () => {
    navigateTo('/user/change-phone')
}

const bindEmail = () => {
    navigateTo(userInfo.value.email ? '/user/change-email' : '/user/bind-email')
}
</script>

<style scoped>
.portal-content {
    height: 100%;
}

.content-section {
    padding: 20px;
}

.section-header {
    padding-bottom: 15px;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 20px;
}

.section-header h2 {
    margin: 0;
    font-size: 30px;
    color: #757575;
}

.info-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
}

.info-card {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 4px;
}

.info-card span {
    color: #666;
    display: block;
    margin-bottom: 8px;
}

.info-card a {
    color: #ff6700;
    text-decoration: none;
    font-size: 14px;
}

.info-card a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .info-cards {
        grid-template-columns: 1fr;
    }
}
</style>