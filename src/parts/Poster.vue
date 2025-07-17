<template>
  <div class="sale-poster">
    <a :href="postItem.url" target="_blank">
      <img :src="postItem.src">
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['postItem']
}
</script>

<style lang="less" scoped>
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

  &-link {
    display: block;
    width: 100%;
    height: 100%;
    
    &-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover &-image {
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