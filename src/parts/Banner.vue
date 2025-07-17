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
          <img :src="item.src" />
        </a>
      </li>
    </transition-group>
    <div class="banner-points">
      <a class="banner-point" @click="jump(index)" :class="{'active': index === imgIndex}" v-for="(item, index) in banners.length" :key="index"></a>
    </div>
  </div>
</template>

<script>//实现轮播图
export default {
  data () {
    return {
      imgIndex: 0,
      timer: '',
    }
  },
  props: ['banners'],
  methods: {
    next () {
      const lastPage = this.banners.length - 1;
			if (this.imgIndex < lastPage) {
				this.imgIndex += 1;
			} else {
				this.imgIndex = 0;
			}
    },
    prev () {
      const lastPage = this.banners.length - 1;
			if (this.imgIndex > 0) {
				this.imgIndex -= 1;
			} else {
				this.imgIndex = lastPage;
			}
    },
    play () {
			clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.next();
			}, 5000);
    },
    jump (index) {
      this.imgIndex = index;
    }
  },
  mounted () {
    this.play();
  }
}
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
    display: inline-block;
    width: 400px;
    right: 30px;
    bottom: 20px;
    text-align: right;
    z-index: 10;
    
    &-point {
      display: inline-block;
      width: 10px;
      height: 10px;
      border: 2px solid hsla(0, 0%, 100%, 0.3);
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.4);
      margin: 0 4px;
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