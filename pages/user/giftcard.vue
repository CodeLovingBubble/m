<template>
    <div class="gift-card-container">
        <!-- 页面标题 -->
        <h2 class="page-title">小米礼品卡</h2>

        <!-- 标签栏（带竖线分隔） -->
        <div class="tab-bar">
            <span v-for="(tab, idx) in tabs" :key="idx" :class="{ active: activeTab === idx }"
                @click="activeTab = idx">{{ tab }}</span>
        </div>

        <!-- 内容区域：根据标签切换 -->
        <div class="content-section">
            <!-- 1. 绑定礼品卡 -->
            <div v-if="activeTab === 0">
                <div class="form-section">
                    <div class="form-row">
                        <label class="form-label">密码：</label>
                        <input type="text" class="form-input" placeholder="请填写礼品卡密码">
                    </div>

                    <div class="form-row captcha-row">
                        <label class="form-label">验证码：</label>
                        <input type="text" class="form-input" placeholder="请输入验证码">
                        <img :src="captchaImages[currentIndex]" alt="验证码" class="captcha-img">
                        <a href="#" class="refresh-link" @click.prevent="changeCaptcha">换一张</a>
                    </div>

                    <button class="bind-btn">绑定礼品卡</button>
                </div>

                <div class="doc-section">
                    <p>礼品卡使用前需先绑定，确认已设置安全手机</p>
                    <p>无论电子礼品卡还是实体礼品卡，在绑定的只要需输入礼品卡密码，点击确认即可绑定。</p>
                    <p>礼品卡在使用之前，需要与小米账号绑定，每个礼品卡密码只可绑定一次，绑定后不可解绑，礼品卡金额无需一次用完，您可以在有效期内不限次数重复使用。</p>
                    <p>礼品卡在绑定之前，请确认您的小米已经设置了安全手机，为保证您的资金安全，在使用礼品卡消费时，需要向您的安全手机发送验证码，验证通过以后才可以使用。</p>

                    <h3>下单时选择礼品卡即可抵扣，暂不支持抵扣物流费</h3>
                    <p>您可以像以前一样在小米网选购商品，在订单结算时，填写完地址、电话等信息后，在页面的下方点击使用礼品卡，勾选您希望用来支付的礼品卡，提交订单并支付余款就可完成交易。</p>
                    <p>在小米网购买商品，除8元运费（大家电及特殊说明情况除外），礼品卡暂不支持抵扣物流费，如果订单未满89元，需要支付10元运费，并通过在线支付的方式支付。</p>

                    <h3>礼品卡的使用范围是什么？</h3>
                    <p>礼品卡可用于购买小米商城自营实物商品（有商品除外），暂不支持抵扣物流费，暂不支持购买小米移动电话卡、保险等虚拟商品服务、合约机及其他第三方发售的商品。</p>
                    <p>小米商城（商城配送）及部分线下小米之家门店可以在购买上述商品时选择礼品卡来支付使用，暂不支持门店闪购和到店自提。</p>
                    <p>*注意：具体是否可用请以订单支付页面显示或门店告知为准。</p>
                </div>
            </div>

            <!-- 2. 我的礼品卡 -->
            <div v-else-if="activeTab === 1">
                <div class="empty-section">
                    <p class="empty-text">暂无记录</p>
                </div>
                <div class="desc-section">
                    <p>有效期内重复使用，可查询消费记录</p>
                    <p>您可以在礼品卡的有效期内，不限次数重复使用。如果您对余额有疑问，可以在我的礼品卡里查询到当前礼品卡的消费记录。</p>
                    <p>礼品卡只能绑定一次，不可解绑</p>
                    <p>考虑到礼品卡余额的安全问题，礼品卡只能绑定一次，绑定以后不可解绑。</p>
                </div>
            </div>

            <!-- 3. 常见问题 -->
            <div v-else>
                <div class="faq-section">
                    <div class="faq-item">
                        <p class="faq-question">Q：为什么提示礼品卡未激活或已绑定？</p>
                        <p class="faq-answer">
                            为了保证在运输过程中的安全，礼品卡在客户收到以后，需点击“确认收货”以激活，激活以后便可以使用。每个礼品卡密码只能被绑定一次，其他账户将不能再绑定该密码。如果您遇上上述问题，可联系赠予您礼品卡的朋友，是否已确认收货，或者是否已将该卡同时赠予了他人。
                        </p>
                    </div>
                    <div class="faq-item">
                        <p class="faq-question">Q:为什么我礼品卡里有100元，买50元的东西还需要另外支付10元物流费?</p>
                        <p class="faq-answer">如果您的订单不包邮，物流费需通过在线支付的方式支付，礼品卡暂不支持抵扣物流费。</p>
                    </div>
                    <div class="faq-item">
                        <p class="faq-question">Q：用礼品卡购物，产生退货怎么办?</p>
                        <p class="faq-answer">
                            使用礼品卡购物后发生退款的，退款金额将原路返还，系统优先返还礼品卡支付金额，即礼品卡支付的部分金额退还至原有礼品卡，其余部分原路返还，另有规定的除外。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'user'
})
import { ref } from 'vue'

// 标签数据
const tabs = ref(['绑定礼品卡', '我的礼品卡', '常见问题'])
// 当前激活标签
const activeTab = ref(0)

// 验证码图片列表（5张真实地址，可替换）
const captchaImages = ref([
    '//captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.8080631444420956',
    '//captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.7778715246027847',
    '//captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.628432352618538',
    '//captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.3756808079466083',
    '//captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.011092658879775619'
])
// 当前显示的图片索引
const currentIndex = ref(0)

// 切换验证码逻辑（循环切换）
const changeCaptcha = () => {
    currentIndex.value = (currentIndex.value + 1) % captchaImages.value.length
}
</script>

<style scoped>
/* 容器基础样式 */
.gift-card-container {
    background-color: #fff;
    padding: 40px;
}

/* 页面标题 */
.page-title {
    font-size: 30px;
    color: #757575;
    font-weight: normal;
    margin: 0 0 16px;
}

/* 标签栏（带竖线分隔） */
.tab-bar {
    display: flex;
    align-items: center;
    height: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
}

.tab-bar span {
    position: relative;
    padding: 20px 16px;
    color: #666;
    font-size: 16px;
    cursor: pointer;
}

/* 竖线分隔：所有非最后一个标签都显示竖线（不受激活影响） */
.tab-bar span:not(:last-child)::after {
    content: '|';
    position: absolute;
    right: 0;
    color: #757575; /* 竖线颜色 */
}

/* 激活标签样式：仅改变文字颜色 */
.tab-bar span.active {
    color: #ff6700; /* 小米橙 */
}

/* 绑定礼品卡 - 表单区域 */
.form-section {
    margin-bottom: 24px;
}

.form-row {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

.form-label {
    width: 60px;
    text-align: right;
    margin-right: 8px;
    color: #666;
    font-size: 14px;
}

.form-input {
    flex: 1;
    height: 32px;
    max-width: 200px;
    padding: 0 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
}

/* 验证码行特殊处理 */
.captcha-row {
    align-items: center;
}

.captcha-img {
    width: 80px;
    height: 32px;
    margin: 0 8px;
    border: 1px solid #ccc;
    object-fit: cover;
}

.refresh-link {
    font-size: 12px;
    color: #1276d3;
    text-decoration: none;
}

/* 绑定按钮 */
.bind-btn {
    margin-left: 68px;
    background-color: #ff6700;
    border: none;
    padding: 10px 24px;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
}

/* 绑定礼品卡 - 说明文档 */
.doc-section {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
}

.doc-section h3 {
    font-size: 16px;
    color: #333;
    margin: 16px 0 8px;
    font-weight: bold;
}

.doc-section p {
    margin: 0 0 8px;
}

/* 我的礼品卡 */
.empty-section {
    text-align: center;
    padding: 60px 0;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 16px;
}

.empty-text {
    color: #999;
    font-size: 14px;
}

.desc-section p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    margin: 8px 0;
}

/* 常见问题 */
.faq-section {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
}

.faq-question {
    font-weight: bold;
    margin: 16px 0 8px;
}

.faq-answer {
    margin: 0 0 8px 24px;
}
</style>