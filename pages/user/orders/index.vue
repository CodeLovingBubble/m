<template>
    <div class="orders-page">
        <!-- 标题区 -->
        <div class="header">
            <h2 class="title">我的订单</h2>
            <div class="alert">
                请谨防钓鱼链接或诈骗电话，
                <a href="/help/security" class="link">了解更多&gt;</a>
            </div>
        </div>

        <!-- 选项卡+搜索框区 -->
        <div class="tab-search-bar">
            <!-- 状态选项卡 -->
            <div class="tabs">
                <span v-for="(tab, index) in tabList" :key="index" :class="{ active: currentTab === tab.key }"
                    @click="currentTab = tab.key">
                    {{ tab.label }}
                    <span class="divider" v-if="index < tabList.length - 1">|</span>
                </span>
            </div>

            <!-- 搜索框 -->
            <div class="search-box">
                <input v-model="searchQuery" type="text" placeholder="输入商品名称、订单号">
                <button class="search-btn">🔍</button>
            </div>
        </div>

        <!-- 空状态 -->
        <div class="empty-state" v-if="!hasOrders">
            当前没有交易订单。
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 根据实际项目布局调整
})
import { ref, computed } from 'vue'

// 选项卡数据
const tabList = [
    { key: 'all', label: '全部有效订单' },
    { key: 'unpaid', label: '待支付' },
    { key: 'pending', label: '待收货' },
    { key: 'recycle', label: '订单回收站' }
]

// 状态管理
const currentTab = ref('all')
const searchQuery = ref('')
const hasOrders = computed(() => false) // 模拟空状态
</script>

<style scoped>
/* 全局容器 */
.orders-page {
    padding: 30px 30px;
    background: #fff;
    min-height: calc(100vh - 60px);
}

/* 标题区 */
.header {
    display: flex;
    align-items: flex-end;
    margin-bottom: 24px;
}

.title {
    font-size: 30px;
    color: #757575;
    font-weight: 600;
    margin: 0;
}

.alert {
    margin-left: 12px;
    font-size: 12px;
    color: #999;
}

.link {
    color: #999;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}

/* 选项卡+搜索框区 */
.tab-search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

/* 选项卡 */
.tabs {
    display: flex;
    align-items: center;
}

.tabs span {
    font-size: 16px;
    color: #999;
    cursor: pointer;
    padding: 0 5px;
}

.tabs span.active {
    color: #ff6700;
    font-weight: bold;
}

.divider {
    color: #ccc;
    padding: 0;
    margin: 0;
}

/* 搜索框 */
.search-box {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
}

.search-box input {
    height: 32px;
    padding: 0 10px;
    border: none;
    outline: none;
    font-size: 12px;
    color: #666;
}

.search-box input::placeholder {
    color: #ccc;
}

.search-btn {
    width: 36px;
    height: 32px;
    border: none;
    background: #fff;
    cursor: pointer;
    font-size: 18px;
    color: #666;
}

/* 空状态 */
.empty-state {
    text-align: center;
    font-size: 14px;
    color: #999;
    padding: 40px 0;
}
</style>