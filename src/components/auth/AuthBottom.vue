<template>
    <div class="footer">
        <p class="copyright">{{ localeStore.t('copyright') }}</p>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale';

const localeStore = useLocaleStore();
</script>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 375px;
    right: 0;
    text-align: center;
    padding: 10px 0;
    background: white; 
    z-index: 100;
}

.copyright {
    color: #999;
    text-decoration: underline;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
    max-width: 90%;
    font-size: 12px;
}

@media (max-width: 1226px){
    .auth-bottom {
        left: 0;
    }
}
</style>