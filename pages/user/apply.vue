<template>
    <div class="aftersale-container">
        <!-- 标题 -->
        <h2 class="section-title">选择申请方式</h2>

        <!-- 两个申请模块 -->
        <div class="method-row">
            <!-- 快速申请（显示图标上半部分） -->
            <div class="method-item">
                <div class="method-icon quick-icon"></div>
                <h3 class="method-title">快速申请</h3>
                <p class="method-desc">小米网 / 小米商城App购买的订单<br>支持通过订单快速申请</p>
                <!-- 新增点击事件：前往订单路由 -->
                <button class="method-btn" @click="goToOrders">前往订单</button>
            </div>

            <!-- 填写申请单（显示图标下半部分） -->
            <div class="method-item">
                <div class="method-icon form-icon"></div>
                <h3 class="method-title">填写申请单</h3>
                <p class="method-desc">其他渠道购买的产品<br>根据产品唯一识别码和购买凭证申请售后</p>
                <!-- 新增点击事件：预留路由位置 -->
                <button class="method-btn" @click="goToAftersale">申请售后</button>
            </div>
        </div>

        <!-- 底部说明 -->
        <div class="guide-section">
            <p>查看新手指导说明？点击 <a href="#" class="guide-link">申请售后说明</a></p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user'
})
// 引入路由
import { useRouter } from 'vue-router'
const router = useRouter()

// 前往订单路由跳转
const goToOrders = () => {
    router.push('/user/orders')
}

// 申请售后路由（预留）
const goToAftersale = () => {
    // router.push('/')
}
</script>

<style scoped>
.aftersale-container {
    background-color: #fff;
    padding: 40px;
}

.section-title {
    font-size: 30px;
    color: #757575;
    font-weight: normal;
    margin: 0 0 40px;
}

.method-row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
}

.method-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 320px;
}

.method-title {
    font-size: 18px;
    color: #333;
    margin: 0 0 12px;
}

.method-desc {
    font-size: 14px;
    color: #999;
    line-height: 1.6;
    margin: 0 0 20px;
}

.method-btn {
    border: 1px solid #8bc34a;
    background-color: #fff;
    color: #8bc34a;
    padding: 10px 24px;
    font-size: 14px;
    cursor: pointer;
}

.guide-section {
    border-top: 1px solid #e5e5e5;
    padding-top: 20px;
}

.guide-section p {
    font-size: 14px;
    color: #333;
    margin: 0;
}

.guide-link {
    color: #ff6700;
    text-decoration: none;
}

/* 图标切割核心代码 */
.method-icon {
    width: 72px;
    height: 72px;
    margin: 0 auto 20px;
    background-image: url("https://i1.mifile.cn/f/i/aftersale/icons-choose-list.png");
    background-size: 72px 144px;
}

.quick-icon {
    background-position: 0 0;
}

.form-icon {
    background-position: 0 -72px;
}
</style>