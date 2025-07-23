<template>
    <AuthTop />
    <div class="account-layout">
        <!-- 左侧目录区域 -->
        <aside class="account-aside">
            <div class="profile" style="background-image: url(&quot;https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/background.fdf39507..png&quot;);">
                <div class="avatar">
                    <img src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/avatar.d443cc57.svg" :alt="localeStore.t('userAvatar')">
                </div>
                <p class="nickname">{{ localeStore.t('setNickname') }}</p>
                <p class="phone">+86 158****8025</p>
            </div>
            <nav class="account-nav">
                <ul>
                    <li v-for="(item, index) in navList" :key="index" 
                        :class="{ active: currentTab === item.key }"
                        @click="handleTabChange(item.key)">
                        <span class="nav-icon" v-if="item.icon" v-html="item.icon"></span>
                        {{ item.label }}
                    </li>
                </ul>
            </nav>
        </aside>
        <!-- 右侧内容区域 -->
        <main class="account-main">
            <div class="account-content">
                <component :is="currentComponent" />
            </div>
        </main>
    </div>
    <AuthBottom />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLocaleStore } from '~/stores/locale'
import LoginAndSecurity from '@/pages/user/LoginAndSecurity.vue'
import PersonalInfo from '@/pages/user/PersonalInfo.vue'
import PrivacyCenter from '@/pages/user/PrivacyCenter.vue'
import BindingAuthorization from '@/pages/user/BindingAuthorization.vue'
import HelpCenter from '@/pages/user/HelpCenter.vue'
import AuthBottom from '~/src/components/auth/AuthBottom.vue'
import AuthTop from '~/src/components/auth/AuthTop.vue'

const localeStore = useLocaleStore()

// 左侧导航数据
const navList = computed(() => [
    { 
        label: localeStore.t('accountAndSecurity'), 
        key: 'loginAndSecurity',
        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>'
    },
    { 
        label: localeStore.t('personalInfo'), 
        key: 'personalInfo',
        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>'
    },
    { 
        label: localeStore.t('privacyCenter'), 
        key: 'privacyCenter',
        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>'
    },
    { 
        label: localeStore.t('bindingAuthorization'), 
        key: 'bindingAuthorization',
        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z"></path></svg>'
    },
    { 
        label: localeStore.t('helpCenter'), 
        key: 'helpCenter',
        icon: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></svg>'
    }
])

// 当前激活的标签
const currentTab = ref('loginAndSecurity')

// 根据当前标签，动态计算要渲染的组件
const currentComponent = computed(() => {
    switch (currentTab.value) {
        case 'loginAndSecurity':
            return LoginAndSecurity
        case 'personalInfo':
            return PersonalInfo
        case 'privacyCenter':
            return PrivacyCenter
        case 'bindingAuthorization':
            return BindingAuthorization
        case 'helpCenter':
            return HelpCenter
        default:
            return LoginAndSecurity
    }
})

// 处理标签切换逻辑
const handleTabChange = (key) => {
    currentTab.value = key
}
</script>

<style scoped>
/* 主布局 */
.account-layout {
    display: flex;
    max-width: 1200px;
    margin: 60px auto 0; /* 上边距20px，左右自动，下边距0 */
    height: calc(100vh - 140px); /* 视口高度减去顶部和底部组件高度 */
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* 隐藏溢出内容 */
}

/* 左侧侧边栏样式 */
.account-aside {
    width: 260px;
    background-color: #fff;
    border-right: 1px solid #e8e8e8;
    height: 100%; /* 填充父容器高度 */
    overflow-y: auto; /* 允许侧边栏单独滚动 */
}

.profile {
    background-image: url(https://cdn.web-global.fds.api.mi-img.com/mcfe--mi…ount/static/static/media/background.fdf39507..png);
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 20px;
}

.avatar img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.nickname {
    font-size: 19px;
    font-weight: 500;
    margin: 8px 0;
    color: #333;
}

.phone {
    font-size: 19px;
    color: #333;
}

.account-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.account-nav li {
    padding: 12px 30px;
    cursor: pointer;
    color: #666;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    font-size: 14px;
}

.account-nav li:hover {
    color: #ff6700;
    background-color: #fafafa;
}

.account-nav li.active {
    color: #ff6700;
    background-color: #fff6f2;
    border-left: 4px solid #ff6700;
    font-weight: 500;
}

.nav-icon {
    margin-right: 10px;
    display: inline-flex;
    align-items: center;
}

/* 右侧主内容区域样式 */
.account-main {
    flex: 1;
    background-color: #fff;
    height: 100%; /* 填充父容器高度 */
    overflow-y: auto; /* 允许内容区域单独滚动 */
}

.account-content {
    max-width: 800px;
    margin: 0 auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .account-layout {
        flex-direction: column;
    }
    
    .account-aside {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid #e8e8e8;
    }
    
    .account-nav li {
        padding: 12px 20px;
    }
    
    .account-main {
        padding: 20px;
    }
}
</style>