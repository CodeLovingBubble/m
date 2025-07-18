<template>
  <div class="sale-slide">
    <ul class="slide-container" :style="transformStyle">
      <li class="slide-item"
          v-for="(item, index) in slideItems"
          :key="index"
          :style="{'border-top-color': item.topColor}">
        <a :href="item.url">
          <img :src="item.src" :alt="item.value">
          <h3 class="name ellipsis">{{item.value}}</h3>
          <span class="desc ellipsis">{{item.desc}}</span>
          <div class="price">
            <span>{{item.newPrice}}元</span>
            <del>{{item.oldPrice}}元</del>
          </div>
        </a>
      </li>
    </ul>
    <!-- 调整控制按钮位置 -->
    <button class="control-btn prev" @click="prev">上一张</button>
    <button class="control-btn next" @click="next">下一张</button>
  </div>
</template>

<script setup>
// 保持原有JavaScript代码不变
</script>

<style lang="less" scoped>
.sale-slide {
  width: 978px;
  height: 340px;
  margin-left: 14px;
  position: relative;
  overflow: hidden;
  
  &-container {
    height: 100%;
    display: flex;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
  }

  &-item {
    flex: 0 0 234px;
    margin-right: 14px;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    text-align: center;
    transition: all 0.3s ease;
    
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }

    a {
      display: block;
      height: 100%;
      padding-top: 39px;
    }

    img {
      width: 160px;
      height: 160px;
      margin: 0 auto 22px;
      object-fit: contain;
    }

    .name {
      .ellipsis();
      margin: 0 20px 3px;
      font-size: 14px;
      color: #212121;
      font-weight: 400;
    }

    .desc {
      .ellipsis();
      height: 18px;
      margin: 0 20px 12px;
      font-size: 12px;
      color: #b0b0b0;
    }

    .price {
      margin: 0 10px 14px;
      font-size: 14px;
      color: #ff6709;
      
      del {
        color: #b0b0b0;
        margin-left: 4px;
      }
    }
  }

  // 调整控制按钮样式和位置
  .control-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 60px;
    background: rgba(0,0,0,0.1);
    border: none;
    color: white;
    cursor: pointer;
    z-index: 10;
    transition: background 0.3s;
    
    &:hover {
      background: rgba(0,0,0,0.3);
    }
    
    // 调整按钮位置，避免覆盖轮播项
    &.prev {
      left: 5px; // 增加左侧间距
    }
    
    &.next {
      right: 5px; // 增加右侧间距
    }
  }
}

// 文字截断混入
.ellipsis() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .sale-slide {
    width: 100%;
    margin-left: 0;
    
    &-item {
      flex: 0 0 calc(25% - 11px);
      margin-right: 14px;
    }
  }
}
</style>  