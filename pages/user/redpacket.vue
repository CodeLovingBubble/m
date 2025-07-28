<template>
    <div class="red-packet-container">
        <!-- 标题 -->
        <h2 class="section-title">红包</h2>

        <!-- 标签栏 -->
        <div class="tab-bar">
            <span v-for="(tab, idx) in tabs" :key="idx" :class="{ active: activeTab === idx }"
                @click="activeTab = idx">{{ tab }}</span>
        </div>

        <!-- 横线分隔 -->
        <div class="divider"></div>

        <!-- 内容区域：根据标签切换文案 -->
        <div class="content-section">
            <p v-if="activeTab === 0" class="empty-text">
                一个红包也没有，快去app端参与活动抢红包吧~
            </p>
            <p v-else class="empty-text">
                还没有已使用/已失效的红包哦~
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 按需替换页面布局
})
import { ref } from 'vue'

// 标签数据（严格匹配设计）
const tabs = ref(['未使用', '已使用/已失效'])
// 当前激活标签索引（默认选中“未使用”）
const activeTab = ref(0)
</script>

<style scoped>
/* 容器基础样式 */
.red-packet-container {
    background-color: #fff;
    padding: 40px;
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

/* 内容区域样式 */
.content-section {
    text-align: center;
    /* 文字居中 */
    padding-top: 20px;
}

/* 空状态文案样式 */
.empty-text {
    font-size: 18px;
    color: #333;
    /* 深灰色文案 */
    margin: 0;
    /* 清除默认边距 */
}
</style>