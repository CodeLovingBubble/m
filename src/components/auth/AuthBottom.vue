<template>
    <div class="footer">
        <p class="copyright">小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
    </div>
</template>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px 0;
    background: white; /* 可选：添加背景色防止文字与内容重叠 */
    z-index: 100; /* 确保在最上层 */
}

.copyright {
    color: #999;
    text-decoration: underline;
    white-space: nowrap; /* 防止换行 */
    overflow: hidden; /* 隐藏超出部分 */
    text-overflow: ellipsis; /* 超出显示省略号 */
    margin: 0 auto;
    max-width: 90%; /* 控制最大宽度，防止在小屏幕上溢出 */
    font-size: 12px; /* 可选：调整字体大小 */
}
</style>