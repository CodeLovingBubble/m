<template>
    <div class="order-review">
        <h2 class="review-title">我的服务单</h2>
        <p class="empty-tip">当前没有服务单哦~</p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'user' // 强制使用user布局
})
</script>

<style scoped>
/* 外层容器：白色背景 + 内边距 */
.order-review {
    background-color: #fff;
    padding: 40px 20px;
    /* 上下大间距，左右适中 */
}

/* 标题样式：字体、颜色、间距 */
.review-title {
    font-size: 30px;
    /* 标题字号 */
    color: #757575;
    /* 标题灰色（比提示深） */
    margin: 0 0 30px 0;
    /* 与下方提示的间距 */
    font-weight: normal;
    /* 取消默认加粗，更贴近截图 */
}

/* 空状态提示：居中、字体、颜色 */
.empty-tip {
    font-size: 18px;
    /* 提示字号 */
    color: #999;
    /* 提示浅灰色 */
    text-align: center;
    /* 水平居中 */
    margin: 0;
    /* 清除默认边距 */
}
</style>