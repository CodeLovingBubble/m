<template>
    <div class="message-notice">
        <h2 class="title">消息通知</h2>
        <div class="tabs">
            <span v-for="(item, index) in tabList" :key="index" :class="{ active: index === 0 }" class="tab">
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
</script>

<style scoped>
/* 容器基础样式 */
.message-notice {
    background-color: #fff;
    padding: 30px 20px;
}

/* 标题样式 */
.title {
    font-size: 20px;
    color: #666;
    /* 浅灰色标题 */
    font-weight: normal;
    /* 取消默认加粗 */
    margin: 0 0 20px;
    /* 与选项卡间距 */
}

/* 选项卡容器 */
.tabs {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

/* 选项卡Item */
.tab {
    font-size: 14px;
    color: #999;
    /* 未激活态灰色 */
    padding: 0 12px;
    /* 左右间距 */
    cursor: pointer;
    /* 鼠标手势 */
}

.tab.active {
    color: #ff6700;
    /* 激活态橙色（小米品牌色） */
}

/* 分隔线 */
.divider {
    color: #ccc;
    /* 浅灰分隔线 */
    margin: 0 6px;
    /* 两侧间距 */
}

/* 横线分隔 */
.separator {
    height: 1px;
    background-color: #eee;
    /* 浅灰横线 */
    margin: 0 20px 25px;
    /* 上下间距 */
}

/* 空状态文字 */
.empty {
    text-align: center;
    /* 水平居中 */
    font-size: 14px;
    color: #999;
    /* 浅灰文字 */
    margin: 0;
    /* 清除默认边距 */
}
</style>