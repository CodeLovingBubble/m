<template>
  <div class="sale-poster">
    <a :href="postItem.url" target="_blank">
      <img :src="postItem.src" :alt="postItem.alt || '促销海报'">
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义props
const props = defineProps({
  postItem: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
// 保持原有样式不变
.sale-poster {
  width: 100%;
  height: 120px;
  margin: 22px 0;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.02);
    }
  }
}

@media (max-width: 768px) {
  .sale-poster {
    height: 90px;
    margin: 16px 0;
  }
}
</style>  