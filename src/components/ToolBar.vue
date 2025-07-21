<template>
  <div class="tool-bar">
    <template v-for="(item, index) in barData" :key="'tool-item-' + index">
      <!-- 第一个图标（二维码） -->
      <a href="#" v-if="index === 0" @mouseenter="iconHover(item)" @mouseleave="iconRecovery(item)" class="tool-item">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <span class="tool-text">{{ item.value }}</span>
        <div class="tool-qrcode" v-show="item.hover">
          <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png">
          <span>手机扫一扫一分赢好礼</span>
        </div>
      </a>

      <!-- 最后一个图标（返回顶部） -->
      <a :href="item.url" v-else-if="index === barData.length - 1" v-show="scrollTop > windowHeight"
        @mouseenter="iconHover(item)" @mouseleave="iconRecovery(item)" class="tool-item">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <span class="tool-text">{{ item.value }}</span>
        <div class="tool-popup" v-show="isSmallScreen && item.hover">
          <span>{{ item.value }}</span>
        </div>
      </a>

      <!-- 个人中心图标 -->
      <a v-else-if="item.value === '个人中心'" @click.prevent="navigateToLayouts" 
        @mouseenter="iconHover(item)" @mouseleave="iconRecovery(item)" class="tool-item">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <span class="tool-text">{{ item.value }}</span>
        <div class="tool-popup" v-show="isSmallScreen && item.hover">
          <span>{{ item.value }}</span>
        </div>
      </a>

      <!-- 其他中间图标 -->
      <a :href="item.url" target="_blank" v-else @mouseenter="iconHover(item)" @mouseleave="iconRecovery(item)"
        class="tool-item">
        <div class="tool-icon">
          <img :src="item.src" v-show="!item.hover">
          <img :src="item.hsrc" v-show="item.hover">
        </div>
        <span class="tool-text">{{ item.value }}</span>
        <div class="tool-popup" v-show="isSmallScreen && item.hover">
          <span>{{ item.value }}</span>
        </div>
      </a>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'nuxt/app'

const router = useRouter()
const toolStatus = ref(false)
const windowHeight = ref(0)
const scrollTop = ref(0)
const isSmallScreen = ref(false)
const barData = ref([
  { value: '手机App', hover: false, url: '#', src: 'https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png' },
  { value: '个人中心', hover: false, url: 'https://order.mi.com/portal', src: 'https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png' },
  { value: '售后服务', hover: false, url: 'https://service.order.mi.com/apply/front', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png', hsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png' },
  { value: '人工客服', hover: false, url: 'https://support.kefu.mi.com/', src: 'https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png' },
  { value: '购物车', hover: false, url: 'https://static.mi.com/cart/', src: 'https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png', hsrc: 'https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png' },
  { value: '回顶部', hover: false, url: '#', src: 'https://i1.mifile.cn/f/i/2018/home/totop.png', hsrc: 'https://i1.mifile.cn/f/i/2018/home/totop_hover.png' }
])

const getScrollTop = () => {
  let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

const getScrollHeight = () => {
  let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

const getWindowHeight = () => {
  let windowHeight = 0;
  if (document.compatMode === "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

const checkScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 1226;
}

const iconHover = (item) => {
  item.hover = true;// 进入时激活悬停状态
}

const iconRecovery = (item) => {
  item.hover = false;// 离开时恢复默认状态
}

const navigateToLayouts = () => {
  router.push('/user/portal')
}

onMounted(() => {
  windowHeight.value = getWindowHeight()
  checkScreenSize()

  window.onresize = () => {
    windowHeight.value = getWindowHeight()
    checkScreenSize()
  }
// 监听滚动事件，更新滚动距离
  window.onscroll = () => {
    scrollTop.value = getScrollTop()
  }
})
</script>

<style lang="less" scoped>
.tool-bar {
  position: fixed;
  right: 10px;
  bottom: 40px;
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tool-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    padding: 18px 5px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-decoration: none;
    transition: all 0.3s;
    position: relative;

    &:hover {
      .tool-icon img {
        opacity: 1;
        filter: brightness(0) saturate(100%) invert(44%) sepia(95%) saturate(1194%) hue-rotate(349deg) brightness(101%) contrast(101%);
      }

      .tool-text {
        color: #ff6700;
      }
    }

    &:last-child {
      margin-top: 20px;
    }
  }

  .tool-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 5px;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.8;
      transition: all 0.3s;
    }
  }

  .tool-text {
    font-size: 12px;
    color: #757575;
    transition: all 0.3s;
    white-space: nowrap;

    @media (max-width: 1425px) {
      display: none;
    }
  }

  .tool-qrcode {
    position: absolute;
    left: 0;
    top: 0;
    padding: 14px;
    background: #fff;
    border: 1px solid #f5f5f5;
    transform: translate3d(-130%, 0, 0);
    text-align: center;

    img {
      display: block;
      width: 100px;
      height: 100px;
      margin: 6px auto;
    }

    span {
      display: block;
      width: 82px;
      margin: 14px auto 0;
      font-size: 14px;
      color: #757575;
      text-align: center;
    }

    &:after {
      content: "";
      position: absolute;
      right: -12px;
      top: 10px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent transparent #fff;
      z-index: 2;
    }

    &:before {
      content: "";
      position: absolute;
      right: -13px;
      top: 10px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent transparent #f5f5f5;
      z-index: 1;
    }
  }

  .tool-popup {
    position: absolute;
    left: 0;
    top: 0;
    padding: 14px;
    background: #fff;
    border: 1px solid #f5f5f5;
    transform: translate3d(-130%, 0, 0);
    text-align: center;
    white-space: nowrap;

    &:after {
      content: "";
      position: absolute;
      right: -12px;
      top: 10px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent transparent #fff;
      z-index: 2;
    }

    &:before {
      content: "";
      position: absolute;
      right: -13px;
      top: 10px;
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent transparent #f5f5f5;
      z-index: 1;
    }
  }

  @media (max-width: 1425px) {
    .tool-item {
      width: 20px; // 改为更小的宽度
      padding: 6px 3px; // 减少内边距
      margin-bottom: 0;
    }

    .tool-icon {
      width: 20px; // 更小的图标
      height: 20px;
    }

    .tool-popup {
      padding: 4px 6px;
      min-width: 50px;
      
      span {
        font-size: 14px;
        font-weight: normal;
      }
      
      &:after, &:before {
        top: 8px;
        border-width: 5px;
      }
      &:after {
        right: -10px;
      }
      &:before {
        right: -11px;
      }
    }
  }
}
</style>