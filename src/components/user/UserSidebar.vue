<template>
    <div class="user-sidebar">
        <div class="sidebar-section" v-for="section in sidebarData" :key="section.title">
            <h3 class="section-title">{{ section.title }}</h3>
            <ul class="section-list">
                <li v-for="item in section.items" :key="item.id" :class="{ active: isActive(item.route) }">
                    <NuxtLink :to="item.route">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const sidebarData = [
    {
        title: '订单中心',
        items: [
            { id: 'order', name: '我的订单', route: '/user/orders' },
            { id: 'review', name: '评价晒单', route: '/user/reviews' },
            { id: 'recharge', name: '话费充值订单', route: '/user/recharge' },
            { id: 'tradein', name: '以旧换新订单', route: '/user/tradein' }
        ]
    },
    {
        title: '个人中心',
        items: [
            { id: 'profile', name: '我的个人中心', route: '/user/portal' },
            { id: 'notification', name: '消息通知', route: '/user/notifications' },
            { id: 'qualification', name: '购买资格', route: '/user/qualification' },
            { id: 'account', name: '现金账户', route: '/user/account' },
            { id: 'giftcard', name: '小米礼品卡', route: '/user/giftcard' },
            { id: 'coupon', name: '现金券', route: '/user/coupons' },
            { id: 'wishlist', name: '喜欢的商品', route: '/user/wishlist' },
            { id: 'discount', name: '优惠券', route: '/user/discounts' },
            { id: 'address', name: '收货地址', route: '/user/address' },
            { id: 'redpacket', name: '红包', route: '/user/redpacket' }
        ]
    },
    {
        title: '售后服务',
        items: [
            { id: 'service-record', name: '服务记录', route: '/user/records' },
            { id: 'apply-service', name: '申请服务', route: '/user/apply' },
            { id: 'courier-reimburse', name: '领取快递报销', route: '/user/quick' }
        ]
    },
    {
        title: '账户管理',
        items: [
            { id: 'personal-info', name: '个人信息', route: '/user/LoginAndSecurity' },
            { id: 'change-password', name: '修改密码', route: '/user/LoginAndSecurity' },
            { id: 'cancel-service', name: '注销服务', route: '/user/LoginAndSecurity' }
        ]
    }
];

const isActive = (path) => {
    return route.path.startsWith(path);
};
</script>

<style scoped>
.user-sidebar {
    width: 230px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.section-title {
    font-size: 16px;
    font-weight: bold;
    padding: 15px;
    margin: 0;
    border-bottom: 1px solid #f5f5f5;
    margin-left: 40px;
}

.section-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.section-list li {
    padding: 12px 15px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    color: #666;
}

.section-list li a {
    display: block;
    color: inherit;
    text-decoration: none;
    margin-left: 40px;
}

.section-list li:hover {
    background: #f5f5f5;
    color: #ff6700;
}

.section-list li.active {
    background: #f5f5f5;
    color: #ff6700;
    border-left: 3px solid #ff6700;
}

/* 响应式设计 */
@media (max-width: 968px) {
    .user-sidebar {
        width: 100%;
        margin-bottom: 20px;
    }

    .section-list {
        display: flex;
        overflow-x: auto;
        padding: 0 10px;
    }

    .section-list li {
        white-space: nowrap;
        border-left: none;
        border-bottom: 3px solid transparent;
        padding: 10px 15px;
    }

    .section-list li.active {
        border-left: none;
        border-bottom: 3px solid #ff6700;
    }
}
</style>