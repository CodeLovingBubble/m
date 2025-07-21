<template>
    <div class="security-verification">
        <h2 class="title">小米账号安全验证</h2>
        <div class="content-box">
            <p class="desc">为确认身份，我们仍需验证您的安全手机</p>
            <p class="sub-desc">
                点击发送验证码按钮，将会发送一条带有验证码的信息至手机
                <span class="phone-number">+86 158****8025</span>
            </p>
            <button class="send-btn">发送验证码</button>
            <p class="extra">
                手机号或邮箱已停用？
                <a href="#" class="reset-link">去申请重置</a>
            </p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'blank' // 若需要空白布局可配置，根据实际项目调整，也可去掉
})
</script>

<style scoped>
.security-verification {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    overflow: hidden;
    width: 100%;
}

.title {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    margin-bottom: 40px;
}

.content-box {
    width: 460px;
    background-color: #fff;
    border-radius: 12px;
    padding: 40px;
    box-sizing: border-box;
    text-align: center;
}

.desc {
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
}

.sub-desc {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
    margin-left: 20px;
    text-align: left;
}

.phone-number {
    color: #ff7b00;
}

.send-btn {
    width: 200px;
    height: 44px;
    background-color: #ff7b00;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.extra {
    font-size: 14px;
    color: #999;
    margin-top: 20px;
}

.reset-link {
    color: #999;
    text-decoration: underline;
}
</style>