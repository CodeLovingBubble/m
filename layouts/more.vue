<script setup lang="ts">
import TopTop from '~/src/components/TopTop.vue';
import TopHeader from '~/src/components/TopHeader.vue';
import MoreList from '~/src/components/more/MoreList.vue';
import MoreLun from '~/src/components/more/MoreLun.vue';
import SiteFooter from '~/src/components/SiteFooter.vue';
import SiteInfo from '~/src/components/SiteInfo.vue';
import ToolBar from '~/src/components/ToolBar.vue';
</script>

<template>
    <div class="more-layout">
        <div class="right-content">
            <TopTop />
            <TopHeader />

            <main class="more-content">
                <MoreList />
                <MoreLun />
            </main>

            <SiteFooter />
            <div class="gray-page">
                <SiteInfo />
            </div>
            <ToolBar />
        </div>
    </div>
</template>

<style scoped>
.more-layout {
    display: flex;
    min-height: 100vh;
}



.right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.gray-page {
    background-color: #f5f5f5;
    padding: 20px 0;
}
</style>