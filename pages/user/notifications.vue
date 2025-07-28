<template>
    <div class="message-notice">
        <h2 class="title">消息通知</h2>
        <div class="tabs">
            <span 
                v-for="(item, index) in tabList" 
                :key="index" 
                :class="{ active: activeTabIndex === index }" 
                class="tab"
                @click="activeTabIndex = index"
            >
                {{ item }}
                <span class="divider" v-if="index < tabList.length - 1">|</span>
            </span>
        </div>
        <div class="separator"></div>
        <p class="empty">暂无数据</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user'
})

const tabList = ["全部消息", "物流动态", "特惠活动"]
const activeTabIndex = ref(0) // 当前激活的标签索引
</script>

<style scoped>
/* 容器基础样式 */
.message-notice {
    background-color: #fff;
    padding: 40px;
}

/* 标题样式 */
.title {
    font-size: 30px;
    color: #757575;
    font-weight: normal;
    margin: 0 0 20px;
}

/* 选项卡容器 */
.tabs {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

/* 选项卡Item */
.tab {
    font-size: 16px;
    color: #999;
    padding: 0 12px;
    cursor: pointer;
    transition: color 0.3s; /* 平滑过渡 */
    position: relative;
}

.tab.active {
    color: #ff6700;
}

.tab.active::after {
    content: '';
    position: absolute;
    bottom: -15px; /* 与分隔线对齐 */
    left: 12px;
    right: 12px;
    height: 2px;
}

/* 分隔线 */
.divider {
    color: #ccc;
    margin: 0 6px;
}

/* 横线分隔 */
.separator {
    height: 1px;
    background-color: #eee;
    margin: 0 20px 25px;
}

/* 空状态文字 */
.empty {
    text-align: center;
    font-size: 18px;
    color: #999;
    margin: 0;
}
</style>