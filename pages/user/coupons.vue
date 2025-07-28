<template>
    <div class="cash-coupon-container">
        <!-- 标题 -->
        <h2 class="section-title">现金券</h2>

        <!-- 标签栏 -->
        <div class="tab-bar">
            <span v-for="(tab, idx) in tabs" :key="idx" :class="{ active: activeTab === idx }"
                @click="activeTab = idx">{{ tab }}</span>
        </div>

        <!-- 分隔线 -->
        <div class="divider"></div>

        <!-- 空状态 -->
        <p class="empty">暂无记录</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 根据项目实际布局调整
})
import { ref } from 'vue'

// 标签数据
const tabs = ref(['我的现金券', '常见问题'])
// 当前激活标签索引（默认选中第一个）
const activeTab = ref(0)
</script>

<style scoped>
/* 容器样式 */
.cash-coupon-container {
    background-color: #fff;
    padding: 40px;
}

/* 标题样式 */
.section-title {
    font-size: 30px;
    color: #757575;
    /* 浅灰色标题 */
    font-weight: normal;
    /* 取消默认加粗 */
    margin: 0 0 20px;
    /* 与标签栏间距 */
}

/* 标签栏布局 */
.tab-bar {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

/* 标签Item样式 */
.tab-bar span {
    padding: 0 18px;
    color: #666;
    font-size: 18px;
    cursor: pointer;
    /* 鼠标手势 */
    position: relative;
    /* 用于定位竖线 */
}

/* 竖线分隔（最后一个标签无竖线） */
.tab-bar span:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: 0;
    color: #ccc;
    /* 浅灰色分隔线 */
}

/* 激活态样式（橙色高亮） */
.tab-bar span.active {
    color: #ff6700;
    /* 小米品牌橙色 */
}

/* 横线分隔 */
.divider {
    height: 1px;
    background-color: #e5e5e5;
    /* 浅灰色横线 */
    margin: 0 20px 20px;
    /* 上下间距 */
}

/* 空状态文字 */
.empty {
    text-align: center;
    /* 水平居中 */
    font-size: 18px;
    color: #999;
    /* 浅灰色文字 */
    margin: 0;
    /* 清除默认边距 */
}
</style>