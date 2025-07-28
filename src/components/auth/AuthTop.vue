<template>
    <div class="top-box">
        <div class="top-box-left">
            <img src="/_nuxt/src/assets/image/logo-footer.png" alt="小米Logo">
            <p>{{ localeStore.t('account') }}</p>
        </div>
        <div class="top-box-right">
            <p>{{ localeStore.t('agreement') }}</p>
            <p>{{ localeStore.t('privacy') }}</p>
            <p>{{ localeStore.t('help') }}</p>
            <p>|</p>
            <LanguageSwitcher />
        </div>
    </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from '~/src/components/LanguageSwitcher.vue'
const localeStore = useLocaleStore()
</script>

<style scoped>
.top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 375px;
    right: 0;
    z-index: 1000;
    padding: 0 20px;
    box-sizing: border-box;
}

.top-box-left {
    display: flex;
    align-items: center;
    height: 57px;
}

.top-box-left img {
    width: 57px;
    height: 57px;
    margin-right: 15px;
    border-radius: 20px;
}

.top-box-left p {
    font-size: 20px;
    font-weight: 500;
    color: #333;
}

.top-box-right {
    display: flex;
    gap: 30px;
    padding-right: 20px;
}

.top-box-right p {
    font-size: 16px;
    color: #666;
    cursor: pointer;
    transition: color 0.3s ease;
}

.top-box-right p:hover {
    color: #ff6709;
}

.language-selector {
    position: relative;
    display: inline-block;
    cursor: pointer;
}

.dropdown-icon {
    font-size: 12px;
    margin-left: 5px;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    z-index: 1001;
    min-width: 120px;
}

.dropdown-menu p {
    padding: 8px 12px;
    margin: 0;
    white-space: nowrap;
}

.dropdown-menu p:hover {
    background-color: #f5f5f5;
    color: #ff6709;
}

.dropdown-menu p.active {
    color: #ff6709;
    font-weight: bold;
}

@media (max-width: 1226px){
    .top-box {
        left: 0;
    }
}
</style>