<template>
    <TopTop />
    <TopHeader />
    <div class="user-layout">
        <div class="user-top-bar">
            <div class="shou">
                <p @click="$router.push('/')">首页</p>
                <p>/</p>
                <p @click="$router.go(0)" style="cursor:pointer">个人中心</p>
            </div>
        </div>

        <!-- 主内容区 -->
        <div class="user-main-container container">
            <!-- 使用独立的侧边栏组件 -->
            <UserSidebar />

            <!-- 页面内容出口 -->
            <div class="user-content-area">
                <slot />
            </div>
        </div>
    </div>
    <SiteFooter />
    <SiteInfo />
    <ToolBar />
</template>

<script setup>
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import ToolBar from '~/src/components/ToolBar.vue';
import TopHeader from '~/src/components/TopHeader.vue';
import TopTop from '~/src/components/TopTop.vue';
import UserSidebar from '~/src/components/user/UserSidebar.vue';
</script>

<style scoped>
.user-layout {
    background-color: #f5f5f5;
    min-height: 100vh;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.user-top-bar {
    background-color: #fff;
}

.user-main-container {
    display: flex;
    margin-top: 20px;
    gap: 20px;
    padding-bottom: 40px;
}

.user-content-area {
    flex: 1;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.user-top-bar{
    background-color: #f5f5f5;
    height: 20px;
}

.shou {
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    padding: 10px;
}

.shou p {
    margin: 0 6px 0 0;
    cursor: pointer;
    color: #757575;
    font-size: 12px;
}

.shou p:nth-child(2) {
    cursor: default;
}

/* 响应式设计 */
@media (max-width: 968px) {
    .user-main-container {
        flex-direction: column;
    }
}
</style>