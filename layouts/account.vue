<template>
    <AuthTop />
    <div class="account-layout">
        <AccountMain />
    </div>
    <AuthBottom />
</template>

<script setup>
import AuthTop from '~/src/components/auth/AuthTop.vue'
import AuthBottom from '~/src/components/auth/AuthBottom.vue'
import AccountMain from '@/src/components/account/AccountMain.vue'
</script>