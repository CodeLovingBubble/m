<template>
    <div class="user-portal">
        <!-- 用户信息区域 -->
        <div class="user-header">
            <div class="avatar">
                <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg"
                    alt="用户头像">
            </div>
            <div class="user-info">
                <h2 class="user-id">3100475286</h2>
                <p class="greeting">早上好~</p>
                <router-link to="/user/LoginAndSecurity" class="edit-link">修改个人信息 ></router-link>
            </div>
            <div class="security-panel">
                <p>账户安全：<span class="security-level">普通</span></p>
                <p>绑定手机：158******25</p>
                <p>绑定邮箱：未绑定</p>
            </div>
        </div>

        <!-- 功能快捷入口 -->
        <div class="function-list">
            <div class="function-item orange">
                <div class="icon">
                    <img src="//s01.mifile.cn/i/user/portal-icon-1.png" alt="待支付">
                </div>
                <div class="text">
                    <div class="label-line">
                        <span class="label">待支付的订单：</span>
                        <span class="count">0</span>
                    </div>
                    <router-link to="/user/orders" class="link">查看待支付订单 ></router-link>
                </div>
            </div>

            <div class="function-item green">
                <div class="icon">
                    <img src="//s01.mifile.cn/i/user/portal-icon-2.png" alt="待收货">
                </div>
                <div class="text">
                    <div class="label-line">
                        <span class="label">待收货的订单：</span>
                        <span class="count">0</span>
                    </div>
                    <router-link to="/user/orders" class="link">查看待收货订单 ></router-link>
                </div>
            </div>

            <div class="function-item blue">
                <div class="icon">
                    <img src="//s01.mifile.cn/i/user/portal-icon-3.png" alt="待评价">
                </div>
                <div class="text">
                    <div class="label-line">
                        <span class="label">待评价商品数：</span>
                        <span class="count">0</span>
                    </div>
                    <router-link to="/user/reviews" class="link">查看待评价商品 ></router-link>
                </div>
            </div>

            <div class="function-item yellow">
                <div class="icon">
                    <img src="//s01.mifile.cn/i/user/portal-icon-4.png" alt="喜欢">
                </div>
                <div class="text">
                    <div class="label-line">
                        <span class="label">喜欢的商品：</span>
                        <span class="count">0</span>
                    </div>
                    <router-link to="/user/wishlist" class="link">查看喜欢的商品 ></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale';

const localeStore = useLocaleStore();

definePageMeta({
    layout: 'user' // 保持页面布局一致性
})
</script>

<style scoped>
/* 全局容器样式 */
.user-portal {
    padding: 20px;
    background-color: #fff;
}

/* 用户信息区域 */
.user-header {
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #eee;
    margin-bottom: 50px;
    justify-content: space-between;
}

.avatar {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user-info {
    display: flex;
    flex-direction: column;
}

.user-id {
    font-size: 24px;
    color: #616161;
    margin: 0 0 8px;
}

.greeting {
    font-size: 14px;
    color: #b0b0b0;
    margin: 0 0 8px;
}

.edit-link {
    font-size: 12px;
    color: #ff6700;
    text-decoration: none;
}

.security-panel {
    margin-left: auto;
    margin-right: auto;
}

.security-panel p {
    font-size: 14px;
    color: #757575;
    margin: 0 0 6px;
}

.security-level {
    color: #ffac13;
    /* 安全等级橙色 */
}

/* 功能入口区域 */
.function-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.function-item {
    width: 48%;
    /* 每行两个，留间距 */
    display: flex;
    margin-bottom: 20px;
}

/* 图标颜色区分 */
.function-item.orange .icon {
    background-color: #ff7b00;
}

.function-item.green .icon {
    background-color: #8dc63f;
}

.function-item.blue .icon {
    background-color: #2798e3;
}

.function-item.yellow .icon {
    background-color: #ffb400;
}

.icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    margin-bottom: 30px;
}

.icon img {
    width: 100px;
    height: 100px;
}

.text {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.label-line {
    display: flex;
    align-items: center;
}

.label {
    font-size: 18px;
    color: #757575;
    margin-right: 5px;
}

.count {
    font-size: 16px;
    color: #ff6700;
}

.link {
    font-size: 14px;
    color: #757575;
    text-decoration: none;
    margin-top: 5px;
}
</style>