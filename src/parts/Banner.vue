<template>
  <div class="banner">
    <div class="banner-prev" @click="prev"></div>
    <div class="banner-next" @click="next"></div>
    <transition-group tag="ul" name="banner-trans" class="banner-container">
      <li class="image-container"
          v-for="(item, index) in banners"
          v-show="index === imgIndex"
          :key="index">
        <a :href="item.url" target="_blank">
          <img :src="item.src" :alt="item.alt || '轮播图'" />
        </a>
      </li>
    </transition-group>
    <div class="banner-points">
      <a class="banner-point" @click="jump(index)" :class="{'active': index === imgIndex}" v-for="(item, index) in banners" :key="index"></a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 定义props
const props = defineProps({
  banners: {
    type: Array,
    required: true
  }
})

// 状态管理
const imgIndex = ref(0)
let timer = null

// 下一张
const next = () => {
  const lastPage = props.banners.length - 1
  if (imgIndex.value < lastPage) {
    imgIndex.value += 1
  } else {
    imgIndex.value = 0
  }
}

// 上一张
const prev = () => {
  const lastPage = props.banners.length - 1
  if (imgIndex.value > 0) {
    imgIndex.value -= 1
  } else {
    imgIndex.value = lastPage
  }
}

// 自动播放
const play = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    next()//每隔五秒调用
  }, 5000)
}

// 跳转到指定页
const jump = (index) => {
  imgIndex.value = index
}

// 生命周期钩子
onMounted(() => {
  play()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  
  &-prev,
  &-next {
    position: absolute;
    top: 50%;
    width: 41px;
    height: 69px;
    margin-top: -35px;
    z-index: 5;
    cursor: pointer;
    outline: none;
    background: url(../assets/image/icon-slides.png) no-repeat;
    transition: opacity 0.3s;
    
    &:hover {
      opacity: 0.8;
    }
  }

  &-prev {
    left: 234px;
    background-position: -84px 50%;
    
    &:hover {
      background-position: 0 50%;
    }
  }

  &-next {
    right: 0;
    background-position: -125px 50%;
    
    &:hover {
      background-position: -43px 50%;
    }
  }

  &-points {
    position: absolute;
    right: 30px;
    bottom: 20px;
    z-index: 10;
    display: flex;  // 使用flex布局替代固定宽度
    gap: 8px;       // 设置点之间的间距
    
    .banner-point {
      width: 10px;
      height: 10px;
      border: 2px solid hsla(0, 0%, 100%, 0.3);
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover,
      &.active {
        background: hsla(0, 0%, 100%, 0.4);
        border-color: rgba(0, 0, 0, 0.4);
      }
    }
  }

  &-container {
    width: 100%;
    height: 460px;
    overflow: hidden;
    
    .image-container {
      width: 100%;
      height: 100%;
      
      a {
        display: block;
        height: 100%;
        
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}

/* 轮播图过渡动画 */
.banner-trans {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
  
  &-enter-to,
  &-leave-from {
    opacity: 1;
  }
}
</style>  