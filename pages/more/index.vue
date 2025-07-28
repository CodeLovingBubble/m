<template>
    <div class="more-page-content">
        <MoreList />
        <MoreLun />
    </div>
</template>

<script setup>
import MoreList from '~/src/components/more/MoreList.vue';
import MoreLun from '~/src/components/more/MoreLun.vue';
definePageMeta({
    layout: 'more'
})
</script>