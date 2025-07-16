<script setup lang="ts">
import AuthBottom from '~/src/components/auth/AuthBottom.vue';
import AuthTop from '~/src/components/auth/AuthTop.vue';

</script>

<template>
    <div class="auth-layout">
        <AuthTop />
        <slot />
        <AuthBottom />
    </div>
</template>

<style scoped>
.auth-layout {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    font-family: "PingFang SC", "Helvetica Neue", Arial, sans-serif;
}
</style>