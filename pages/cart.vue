<script setup lang="ts">
// 指定使用cart布局
definePageMeta({
    layout: 'cart'
});

import CartGoods from '~/src/components/CartGoods.vue';
</script>

<template>
    <div>
        <!-- 这里的内容会插入到布局的slot中 -->
        <CartGoods />
    </div>
</template>

<style scoped>
</style>