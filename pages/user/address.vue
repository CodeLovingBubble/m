<template>
    <div class="address-container">
        <!-- 标题 -->
        <h2 class="address-title">收货地址</h2>
        <!-- 添加地址卡片 -->
        <div class="add-address-card">
            <div class="add-icon">+</div>
            <p class="add-text">添加新地址</p>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 根据项目实际布局调整
})
</script>

<style scoped>
/* 容器样式 */
.address-container {
    background-color: #fff;
    padding: 30px 20px;
}

/* 标题样式 */
.address-title {
    font-size: 30px;
    color: #757575;
    /* 浅灰色标题 */
    font-weight: normal;
    /* 取消默认加粗 */
    margin: 0 0 20px;
    /* 与卡片间距 */
}

/* 添加地址卡片 */
.add-address-card {
    width: 300px;
    /* 卡片宽度 */
    height: 180px;
    /* 卡片高度 */
    border: 1px solid #e5e5e5;
    /* 浅灰色边框 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

/* 加号图标 */
.add-icon {
    width: 40px;
    /* 图标尺寸 */
    height: 40px;
    background-color: #f5f5f5;
    /* 浅灰背景 */
    border-radius: 50%;
    /* 圆形 */
    color: #ccc;
    /* 加号颜色 */
    font-size: 20px;
    /* 加号大小 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    /* 与文字间距 */
}

/* 提示文字 */
.add-text {
    font-size: 14px;
    color: #b0b0b0;
    /* 浅灰色文字 */
    margin: 0;
    /* 清除默认边距 */
}

/* 悬停时直接修改卡片自身的边框 */
.add-address-card:hover {
    border: 1px solid #999;
    /* 边框变色 */
}

/* 保留其他悬停样式 */
.add-address-card:hover .add-icon {
    background-color: #999;
    color: #fff;
}

.add-address-card:hover .add-text {
    color: #999;
}
</style>