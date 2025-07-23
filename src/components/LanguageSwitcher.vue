<template>
    <div class="language-selector" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
        <p>
            {{ localeStore.currentLanguageText }}
            <span class="dropdown-icon">▼</span>
        </p>
        <div v-if="showDropdown" class="dropdown-menu">
            <p v-for="lang in localeStore.availableLanguages" :key="lang.code" @click="changeLanguage(lang.code)">
                {{ lang.text }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const localeStore = useLocaleStore()
const showDropdown = ref(false)

const changeLanguage = (locale: 'zh-CN' | 'zh-TW' | 'en') => {
    localeStore.setLocale(locale)
    showDropdown.value = false
}
</script>

<style scoped>
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
</style>