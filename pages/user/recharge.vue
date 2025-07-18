<template>
    <div class="phone-recharge-order">
        <h2 class="recharge-title">话费充值订单</h2>
        <p class="empty-desc">您暂时没有话费充值账单</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'user' // 强制使用user布局
})
</script>

<style scoped>
/* 外层容器：白色背景 + 内边距 */
.phone-recharge-order {
    background-color: #fff;
    /* 白色容器，与截图一致 */
    padding: 40px 20px;
    /* 上下大间距，左右适中 */
}

/* 标题样式：字号、颜色、间距 */
.recharge-title {
    font-size: 30px;
    /* 标题字号（比描述大） */
    color: #757575;
    /* 浅灰色，突出层级 */
    margin: 0 0 16px 0;
    /* 与下方描述的间距 */
    font-weight: normal;
    /* 取消默认加粗，更贴近截图风格 */
}

/* 空状态描述：字号、颜色 */
.empty-desc {
    font-size: 18px;
    /* 描述字号（比标题小） */
    color: #666;
    /* 稍深灰色，区分层级 */
    margin: 0;
    /* 清除默认边距 */
}
</style>