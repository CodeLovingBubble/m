<template>
    <div class="mi-help-center">
        <!-- 标题 -->
        <h1 class="page-title">{{ localeStore.t('miAccountHelpCenter') }}</h1>
        <!-- 搜索框 -->
        <div class="search-bar">
            <input type="text" :placeholder="localeStore.t('searchPlaceholder')" class="search-input" />
        </div>
        <!-- 自助服务区域 -->
        <div class="section">
            <h2 class="section-title">{{ localeStore.t('selfService') }}</h2>
            <div class="service-grid">
                <div class="service-item">
                    <i class="el-icon-refresh-right"></i>
                    <p class="service-text">{{ localeStore.t('resetPassword') }}</p>
                </div>
                <div class="service-item">
                    <i class="el-icon-s-claim"></i>
                    <p class="service-text">{{ localeStore.t('accountAppeal') }}</p>
                </div>
                <div class="service-item">
                    <i class="el-icon-lock"></i>
                    <p class="service-text">{{ localeStore.t('freezeAccount') }}</p>
                </div>
                <div class="service-item">
                    <i class="el-icon-unlock"></i>
                    <p class="service-text">{{ localeStore.t('unfreezeAccount') }}</p>
                </div>
                <div class="service-item">
                    <i class="el-icon-circle-check"></i>
                    <p class="service-text">{{ localeStore.t('unblockAccount') }}</p>
                </div>
                <div class="service-item">
                    <i class="el-icon-close"></i>
                    <p class="service-text">{{ localeStore.t('deleteAccount') }}</p>
                </div>
            </div>
        </div>
        <!-- 帮助中心区域 -->
        <div class="section">
            <div class="help-header">
                <h2 class="section-title">{{ localeStore.t('helpCenter') }}</h2>
                <a href="#" class="more-link">{{ localeStore.t('more') }}</a>
            </div>
            <div class="tab-nav">
                <span class="tab-item active">{{ localeStore.t('faq') }}</span>
                <span class="tab-item">{{ localeStore.t('login') }}</span>
                <span class="tab-item">{{ localeStore.t('modifyInfo') }}</span>
                <span class="tab-item">{{ localeStore.t('accountSecurity') }}</span>
            </div>
            <ul class="question-list">
                <li class="question-item">{{ localeStore.t('forgotAccountQuestion') }}</li>
                <li class="question-item">{{ localeStore.t('forgotPasswordQuestion') }}</li>
                <li class="question-item">{{ localeStore.t('phoneDisabledQuestion') }}</li>
                <li class="question-item">{{ localeStore.t('appealRejectedQuestion') }}</li>
                <li class="question-item">{{ localeStore.t('accountHackedQuestion') }}</li>
                <li class="question-item">{{ localeStore.t('logoutQuestion') }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()
</script>

<style scoped>
/* 全局容器 */
.mi-help-center {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #333;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

/* 标题 */
.page-title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #f5f5f5;
    margin: 0;
}

/* 搜索栏 */
.search-bar {
    padding: 16px;
}

.search-input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #eee;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
}

.search-input::placeholder {
    color: #ccc;
}

/* 板块通用样式 */
.section {
    padding: 16px;
    border-bottom: 1px solid #f5f5f5;
}

.section-title {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 12px;
}

/* 自助服务 - 网格布局 */
.service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 12px;
    background-color: #f9f9f9;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.service-item:hover {
    background-color: #f5f5f5;
}

/* 图标样式 */
.service-item i {
    font-size: 24px;
    color: #409eff;
    margin-bottom: 6px;
}

.service-text {
    font-size: 14px;
    margin: 0;
}

.help-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.more-link {
    font-size: 14px;
    color: #409eff;
    text-decoration: none;
}

.more-link:hover {
    text-decoration: underline;
}

/* 标签导航 */
.tab-nav {
    display: flex;
    gap: 16px;
    margin: 12px 0;
}

.tab-item {
    font-size: 14px;
    color: #666;
    padding-bottom: 4px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s ease;
}

.tab-item.active {
    color: #333;
    border-bottom: 2px solid #409eff;
}

/* 问题列表 */
.question-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.question-item {
    font-size: 14px;
    padding: 12px 0;
    border-bottom: 1px solid #f5f5f5;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.question-item::after {
    content: "＞";
    color: #999;
    font-size: 16px;
}
</style>