<template>
    <div class="purchase-qualification">
        <!-- 标题 -->
        <h2 class="title">购买资格</h2>

        <!-- 标签栏（未使用/已使用） -->
        <div class="tabs">
            <span class="tab" :class="{ active: activeTab === 'unused' }" @click="activeTab = 'unused'">未使用</span>
            <span class="tab" :class="{ active: activeTab === 'used' }" @click="activeTab = 'used'">已使用/已过期</span>
        </div>

        <!-- 分割线 -->
        <hr class="divider" />

        <!-- 空状态提示 -->
        <div class="empty-container">
            <div class="empty">您没有可以显示的购买资格</div>
            <div class="empty-border"></div>
        </div>

        <!-- 说明文案 -->
        <div class="explanation">
            <h3>什么是购买资格？</h3>
            <p>购买资格是优先购买新品的特权。</p>
            <p>拥有新品的购买资格可以无需预约或抢购，直接下单购买。</p>
            <p>每个购买资格只可使用一次，商品加入购物车后购买资格即刻失效，请勿将其从购物车中删除。</p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'user' // 强制使用user布局
})
import { ref } from 'vue'

// 标签切换逻辑
const activeTab = ref('unused') // 默认显示"未使用"
</script>

<style scoped>
.purchase-qualification {
    padding: 24px;
    background-color: #fff;
}

.title {
    font-size: 30px;
    color: #757575;
    margin: 0 0 16px;
}

.tabs {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.tab {
    padding: 0 16px;
    line-height: 32px;
    cursor: pointer;
    transition: color 0.3s;
    /* 平滑过渡 */
}

.tab.active {
    color: #ff6700;
    border-right: 1px solid #e5e5e5;
    position: relative;
}

.tab.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
}

.tab:not(.active) {
    color: #999;
}

.divider {
    border: none;
    height: 1px;
    background-color: #e5e5e5;
    margin: 8px 0;
}

.empty-container {
    position: relative;
}

.empty {
    text-align: center;
    color: #999;
    padding: 50px 0;
    font-size: 18px;
}

/* 新增：空状态底部边框 */
.empty-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;
}

.explanation {
    margin-top: 24px;
}

.explanation h3 {
    font-size: 16px;
    color: #333;
    margin: 0 0 8px;
}

.explanation p {
    color: #666;
    line-height: 1.6;
    margin: 0 0 8px;
    font-size: 18px;
}
</style>