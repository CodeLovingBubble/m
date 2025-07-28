<template>
    <div class="qr-section">
        <p class="qr-desc">请扫码下载小米商城 App，通过 App 申请运费报销</p>
        <img class="qr-img" src="https://i1.mifile.cn/f/i/17/appdownload/download.png" >
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 保持页面布局一致性
})
</script>

<style scoped>
.qr-section {
    background-color: #fff;
    padding: 40px;
    text-align: left;
    /* 严格左对齐 */
}

.qr-desc {
    font-size: 14px;
    color: #333;
    /* 深灰色文字，匹配官网风格 */
    margin: 0 0 12px;
    /* 文字与二维码间距 */
    line-height: 1.5;
}

.qr-img {
    width: 150px;
    /* 二维码实际尺寸 */
    height: auto;
    /* 保持比例 */
    display: block;
    /* 避免底部间隙 */
}
</style>