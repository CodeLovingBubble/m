<template>
    <div class="order-card">
        <div class="order-header">
            <span class="order-id">订单号: {{ order.id }}</span>
            <span class="order-status" :class="order.status">
                {{ getStatusText(order.status) }}
            </span>
        </div>

        <div class="order-items">
            <div v-for="item in order.items" :key="item.id" class="order-item">
                <img :src="item.image" :alt="item.name" class="item-image">
                <div class="item-info">
                    <h4 class="item-name">{{ item.name }}</h4>
                    <p class="item-spec">规格: 默认</p>
                    <p class="item-price">¥{{ item.price }} × {{ item.quantity }}</p>
                </div>
            </div>
        </div>

        <div class="order-footer">
            <div class="order-total">
                共{{ order.items.length }}件商品 合计: <span class="total-amount">¥{{ order.totalAmount }}</span>
            </div>
            <div class="order-actions">
                <button v-if="order.status === 'unpaid'" class="action-btn primary">去支付</button>
                <button v-if="order.status === 'shipped'" class="action-btn">确认收货</button>
                <button class="action-btn cancel">取消订单</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Order } from '~/types/order'

defineProps<{
    order: Order
}>()

const getStatusText = (status: string) => {
    const statusMap: Record<string, string> = {
        unpaid: '待支付',
        pending: '待发货',
        shipped: '待收货',
        completed: '已完成',
        cancelled: '已取消'
    }
    return statusMap[status] || status
}
</script>

<style scoped>
.order-card {
    background: white;
    border-radius: 8px;
    margin-bottom: 10px;
    padding: 15px;
}

.order-header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 10px;
    font-size: 13px;
}

.order-id {
    color: #666;
}

.order-status {
    color: #ff6700;
}

.order-status.completed {
    color: #999;
}

.order-items {
    margin-bottom: 10px;
}

.order-item {
    display: flex;
    margin-bottom: 10px;
}

.item-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 10px;
    border: 1px solid #f5f5f5;
}

.item-info {
    flex: 1;
}

.item-name {
    font-size: 14px;
    margin: 0 0 5px 0;
    color: #333;
}

.item-spec {
    font-size: 12px;
    color: #999;
    margin: 0 0 5px 0;
}

.item-price {
    font-size: 14px;
    color: #ff6700;
    margin: 0;
}

.order-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #f5f5f5;
}

.order-total {
    font-size: 13px;
    color: #666;
}

.total-amount {
    color: #ff6700;
    font-weight: bold;
}

.order-actions {
    display: flex;
    gap: 8px;
}

.action-btn {
    padding: 5px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    font-size: 12px;
    cursor: pointer;
}

.action-btn.primary {
    background: #ff6700;
    color: white;
    border-color: #ff6700;
}

.action-btn.cancel {
    color: #999;
}
</style>