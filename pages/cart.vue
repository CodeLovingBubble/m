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
/* 保留您原有的样式（如果有） */
/* 由于布局样式已经移到cart.vue布局文件中，这里可以放页面特有的样式 */
</style>