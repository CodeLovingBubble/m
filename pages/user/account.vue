<template>
    <div class="cash-account-page">
        <!-- 顶部通知栏（正常流，挤压下方内容） -->
        <div class="notice-bar">
            <p class="notice-text">
                亲爱的用户：为提升用户体验，小米网现金账户即日起至6月15日24点进行升级优化。升级期间，现金账户功能将暂停使用。6月16日0点升级完成后，现金账户将升级合并至小米网现金券，你的账户内未使用余额将1:1转换为小米网现金券。
                <a href="#" class="notice-link">了解小米网现金券>></a>
                <span class="notice-date">小米网 2020年6月10日</span>
            </p>
        </div>

        <!-- 主内容区 -->
        <div class="content">
            <!-- 标题 -->
            <h2 class="section-title">我的现金账户</h2>

            <!-- 未开通提示 -->
            <div class="empty-section">
                <h3 class="empty-title">您尚未开通小米现金账户</h3>
                <p class="empty-desc">使用现金账户会让您在小米网购物、支付更加便捷。</p>
                <button class="open-btn" disabled>免费安全开通</button>
            </div>

            <!-- 功能模块 -->
            <div class="features">
                <!-- 安全保障 -->
                <div class="feature-item">
                    <img src="//s1.mi.com/zt/2013/my/cash-welcome-safe.png" alt="安全保障" class="feature-icon" />
                    <p class="feature-text">采用顶级数据加密方案，保障现金账户、出入账记录的绝对安全，您可放心使用。</p>
                </div>

                <!-- 快速到账 -->
                <div class="feature-item">
                    <img src="//s1.mi.com/zt/2013/my/cash-welcome-fast.png" alt="快速到账" class="feature-icon" />
                    <p class="feature-text">退款、快递补偿等服务可在通过审核后立即到账您的现金账户，免去等待。（目前仅支持快递补偿的入账服务）</p>
                </div>

                <!-- 交易记录 -->
                <div class="feature-item">
                    <img src="https://s1.mi.com/zt/2013/my/cash-welcome-easy.png" alt="交易记录" class="feature-icon" />
                    <p class="feature-text">现金账户中记录您每一笔入账和支出，方便查找和管理日常交易。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user' // 根据实际项目布局调整
})
</script>

<style scoped>
/* 顶部通知栏（正常流，自然挤压下方内容） */
.notice-bar {
    background-color: #dff0d8;
    padding: 12px 20px;
    /* 关键：保持正常文档流，实现挤压效果 */
}

.notice-text {
    font-size: 14px;
    color: #757575;
    line-height: 1.6;
    margin: 0;
}

.notice-link {
    color: #ff6700;
    text-decoration: none;
}

.notice-date {
    display: block;
    text-align: right;
    font-size: 12px;
    color: #666;
    margin-top: 4px;
}

/* 主内容区 */
.content {
    background-color: #fff;
    padding: 30px 20px;
    /* 与通知栏自然衔接，无需额外margin（通知栏已占文档流空间） */
}

.section-title {
    font-size: 30px;
    color: #666;
    font-weight: normal;
    margin: 0 0 40px;
}

/* 未开通提示 */
.empty-section {
    text-align: center;
    margin-bottom: 40px;
}

.empty-title {
    font-size: 30px;
    color: #333;
    margin: 0 0 12px;
}

.empty-desc {
    font-size: 14px;
    color: #999;
    margin: 0 0 20px;
}

.open-btn {
    background-color: #dcdcdc;
    border: none;
    padding: 10px 24px;
    color: #fff;
    cursor: not-allowed;
    border-radius: 4px;
}

/* 功能模块 */
.features {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
}

.feature-item {
    flex: 1;
    min-width: 240px;
    text-align: center;
}

.feature-icon {
    width: 60px;
    /* 严格还原设计尺寸 */
    height: 60px;
    /* 严格还原设计尺寸 */
    margin: 0 auto 12px;
    display: block;
    /* 确保图片居中 */
}

.feature-text {
    font-size: 12px;
    color: #999;
    line-height: 1.5;
    margin: 0;
}
</style>