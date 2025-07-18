<template>
    <div class="coupon-container">
        <!-- 标题 -->
        <h2 class="section-title">优惠券</h2>

        <!-- 标签栏 -->
        <div class="tab-bar">
            <span v-for="(tab, idx) in tabs" :key="idx" :class="{ active: activeTab === idx }"
                @click="activeTab = idx">{{ tab }}</span>
        </div>

        <!-- 横线分隔 -->
        <div class="divider"></div>

        <!-- 内容区域：根据标签切换 -->
        <div class="content-section">
            <!-- 空状态（未使用/已使用/已失效） -->
            <div v-if="activeTab < 3" class="empty-section">
                <p class="empty-main">未找到相应优惠券</p>
                <p class="empty-tip">参加小米社区活动，微博、微信活动即有机会赢优惠券哦~</p>
                <p class="empty-links">
                    <a href="#" class="link">小米社区</a> |
                    <a href="#" class="link">官方微博</a>
                </p>
            </div>

            <!-- 兑换优惠券表单（兑换标签） -->
            <div v-else class="exchange-section">
                <input type="text" class="exchange-input" placeholder="请输入优惠券兑换码">
                <button class="exchange-btn">确认兑换</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 按需替换页面布局
})
import { ref } from 'vue'

// 标签数据（严格匹配设计：未使用 | 已使用 | 已失效 | 兑换优惠券）
const tabs = ref(['未使用', '已使用', '已失效', '兑换优惠券'])
// 当前激活标签索引（默认选中“未使用”）
const activeTab = ref(0)
</script>

<style scoped>
/* 容器基础样式 */
.coupon-container {
    background-color: #fff;
    padding: 30px 20px;
}

/* 标题样式（还原设计：30px 浅灰色） */
.section-title {
    font-size: 30px;
    color: #757575;
    font-weight: normal;
    margin: 0 0 20px;
}

/* 标签栏布局 */
.tab-bar {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/* 标签Item样式（还原设计：16px 深灰色） */
.tab-bar span {
    padding: 0 12px;
    color: #666;
    font-size: 16px;
    cursor: pointer;
    position: relative;
    /* 用于竖线定位 */
}

/* 竖线分隔（最后一个标签无竖线，浅灰色） */
.tab-bar span:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: 0;
    color: #ccc;
}

/* 激活态样式（小米橙色高亮） */
.tab-bar span.active {
    color: #ff6700;
}

/* 横线分隔（浅灰色，还原间距） */
.divider {
    height: 1px;
    background-color: #e5e5e5;
    margin: 0 20px 20px;
}

/* 内容区域容器 */
.content-section {
    padding-top: 20px;
}

/* 空状态样式（还原设计：浅灰色文字） */
.empty-section {
    text-align: center;
}

.empty-main {
    font-size: 18px;
    color: #b0b0b0;
    margin: 0 0 8px;
}

.empty-tip {
    font-size: 18px;
    color: #b0b0b0;
    margin: 0 0 16px;
}

.empty-links {
    font-size: 14px;
    color: #999;
}

.empty-links .link {
    color: #424242;
    text-decoration: none;
}

.empty-links .link:hover {
    color: #ff6700;
}

/* 兑换优惠券表单样式（还原设计：输入框+橙色按钮） */
.exchange-section {
    display: flex;
    align-items: center;
    padding-left: 20px;
    /* 与设计图对齐 */
}

.exchange-input {
    width: 280px;
    height: 36px;
    padding: 0 12px;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #666;
    margin-right: 16px;
    transition: border-color 0.3s ease;
}

/* 新增聚焦样式 */
.exchange-input:focus {
    border-color: #ff6700;
    outline: none;
}

.exchange-btn {
    background-color: #ff6700;
    border: none;
    padding: 10px 24px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
}
</style>