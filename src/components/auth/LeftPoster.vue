<template>
    <div class="left-poster">
        <!-- 这里放你的海报内容 -->
        <img src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg" alt="左侧海报" class="poster-image">
    </div>
</template>

<script setup>
// 可以在这里添加组件逻辑
</script>

<style scoped>
.left-poster {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 375px;
    /* 海报宽度，可根据需要调整 */
    background-color: #f5f5f5;
    /* 背景色，图片加载前的占位 */
    z-index: 100;
    /* 确保在海报上方 */
    overflow: hidden;
}

.poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 保持图片比例并填满容器 */
}

@media (max-width: 1226px){
    .left-poster {
        display: none;
    }
}
</style>