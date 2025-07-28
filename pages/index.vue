<script setup lang="ts">
definePageMeta({
    layout: 'default' // 使用默认布局
});

import GoodsSale from '~/src/components/GoodsSale.vue';
</script>

<template>
    <div class="index-page">
        <div class="gray-page">
            <GoodsSale />
        </div>
    </div>
</template>

<style scoped>
.index-page {
    padding: 20px 0;
}
</style>