<template>
  <div class="top-header">
    <div class="top-container">
      <a class="mi-icon" href="#"></a>
      <div class="header-navs-container">
        <div class="divider"></div>
        <ul class="navs">
          <li class="navs-item" v-for="(item, index) in navs" :key="index">
            <a v-if="item.type"
            :data-type="item.type"
            @mouseenter="menusListShow(item.type)"
            @mouseleave="menusListHide()"
            >{{item.value}}</a>
            <a v-else :href="item.url"  target="_blank">{{item.value}}</a>
          </li>
        </ul>
      </div>
      <div class="header-search-container">
        <input
          v-model="searchValue"
          @focus="searchListShow"
          @blur="searchListHide"
          @keyup.enter="handleSearch"
          class="search-input"
          :class="{'active': focusFlag}"
          type="search"
          :placeholder="placeholderWords[currentWordIndex]">
        <label class="search-btn" :class="{'active': focusFlag}" style="border-left: 0;">
          <i class="fa fa-search" aria-hidden="true"></i>
          <div id="kuan">
            <input type="submit" value="" @click="handleSearch">
          </div>
        </label>
        <transition name="list-trans">
          <ul class="search-hots" v-show="hotsListFlag && !focusFlag">
            <li class="hots-item" v-for="(item, index) in hots" :key="index" @click="handleHotItemClick(item)">{{item}}</li>
          </ul>
        </transition>
        <ul class="search-list" v-show="!hotsListFlag && focusFlag">
          <li class="list-item" v-for="(item, index) in searchHistory.concat(searchHot)" :key="index" @click.stop="handleListItemClick(item)">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
    <transition name="menu-trans">
      <div class="menus-list"
      @mouseenter="menusListShow()"
      @mouseleave="menusListHide()"
      v-show="menusListFlag">
        <ul class="menus">
          <li class="menus-item" v-for="(item, index) in menusItemData" :key="index">
            <a :href="item.src">
              <img class="item-img" :src="item.url">
            </a>
            <div class="item-value">{{item.value}}</div>
            <div class="item-type" v-if="item.type">{{item.type}}</div>
            <div class="item-price" v-if="item.price && item.sub">{{item.price}}元起</div>
            <div class="item-price" v-if="item.price && !item.sub">{{item.price}}元</div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menusListFlag: false,
      timer: '',
      menusItemData: this.xiaomi,
      hotsListFlag: true,
      focusFlag: false,
      navs: [
        {value: 'Xiaomi手机', type: 'xiaomi'},
        {value: 'REDMI手机', type: 'redmi'},
        {value: '电视', type: 'tv'},
        {value: '笔记本', type: 'laptop'},
        {value: '平板', type: 'household'},
        {value: '家电', type: 'router'},
        {value: '路由器', type: 'hardware'},
        {value: '服务中心', url: '//www.mi.com/service/'},
        {value: '社区', url: 'http://www.xiaomi.cn'}
      ],
      xiaomi: [
        {value: ' Xiaomi MIX Flip 2', price: '5999', sub: true, src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png?thumb=1&w=200&h=138&f=webp&q=90', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8059e5c1decb3331d95c65b28e016ef5.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi 15S Pro', price: '1899', sub: true, src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png?thumb=1&w=200&h=138&f=webp&q=90', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccb333fb5e8dae8ea011e8e968b05627.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi Civi 5 Pro', price: '2999', sub: false, src: 'https://www.mi.com/xiaomicc9mt/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8998aa3a4673cf5422675301f8506fe.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi 15 Ultra', price: '6499', sub: true, src: 'https://www.mi.com/mi9/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5728efe6a6ca16912c1ed60487a7447.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi 15', price: '3999', sub: false, src: 'https://item.mi.com/10000123.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0acdc0fc97f894fc1c698522e8e1cc9.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi 15 Pro', price: '4999', sub: true, src: 'https://www.mi.com/mix2s/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3fd13de87bcd8755fdbb804bfba467a.png?thumb=1&w=200&h=138&f=webp&q=90'}
      ],
      redmi: [
        {value: 'REDMI K80 至尊版', price: '2599', sub: true, src: 'https://www.mi.com/redmik20pro/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a559a9e5b7bf4364ad78e785c7d3f26a.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI Turbo 4 Pro', price: '1899', sub: true, src: 'https://www.mi.com/redmik20/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/71823969897e947e40c9889a12b96a12.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'RREDMI Turbo 4', price: '1699', sub: false, src: 'https://www.mi.com/redminote7pro/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7b35c6e85b764c6d8b07ca0dc4924af.jpg?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Redmi 14C', price: '469', sub: true, src: 'https://www.mi.com/redmi7a/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07318b6d71b43c8f1093d0ceabe23e7a.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI K80 Pro', price: '2999', sub: true, src: 'https://www.mi.com/redminote7/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/08f9d298aa64bd81b4c01891266e4572.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI K80', price: '2099', sub: true, src: 'https://www.mi.com/redmi7/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f9da01e805c1d61c650bc27b754f173.png?thumb=1&w=200&h=138&f=webp&q=90'}
      ],
      tv: [
        {value: '旗舰系列-S Mini LED 2025', price: '6999', sub: false, src: 'https://www.mi.com/arttv/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ce1e9b7ef43567d80a9a7157b755f3.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '旗舰系列-S Pro Mini LED', price: '1999', sub: false, src: 'https://www.mi.com/mitvall-screen/e55a/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c3e9eafd588b3994ec7f370379ecd2f4.jpg?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '旗舰系列-S Mini LED', price: '699', sub: false, src: 'https://www.mi.com/mitv4A/32/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/300ebd5f0fa66a25a52da567134db676.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '巨幕影院-Redmi MAX', price: '1799', sub: false, src: 'https://www.mi.com/mitv4A/55/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a32280bcf272b9ee7cc03f01ff921db0.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '游戏高刷-REDMI X 2025', price: '2699', sub: false, src: 'https://www.mi.com/mitv4A/65', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ae6882d5145e6b823b6c09040f7722.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '性价比爆款-Redmi A Pro', price: '1599', sub: false, src: 'https://www.mi.com/a/h/9819.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/61d3c019bbee8d3d38eb4f286fd0e9fe.png?thumb=1&w=200&h=138&f=webp&q=90'},
      ],
      laptop: [
        {value: 'REDMI Book 14 锐龙版 2025', price: '3999', sub: true, src: 'https://item.mi.com/10000153.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2705ad0c89bebc151a7dc480c77f64e4.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI Book Pro 16 2025', price: '3599', sub: true, src: 'https://item.mi.com/10000145.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/259137ab3669314d5db646bb10ea874d.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI Book Pro 14 2025', price: '4999', sub: true, src: 'https://item.mi.com/10000142.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f865ec1d50cda194589e084fc6c0647c.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI Book 14 2025', price: '3799', sub: true, src: 'https://item.mi.com/10000141.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2705ad0c89bebc151a7dc480c77f64e4.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'REDMI Book 16 2025', price: '4999', sub: true, src: 'https://item.mi.com/10000144.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1e3e74dfb320c28e0264fd52427a94b3.jpg?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Redmi Book 16 2024', price: '5999', sub: true, src: 'https://item.mi.com/10000113.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f6c0ada0b42c98348d0c222c6e3a844.png?thumb=1&w=200&h=138&f=webp&q=90'}
      ],
      household: [
        {value: 'REDMI K Pad', price: '2299', sub: false, src: 'https://www.mi.com/airconditionc1/v1c1/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c95e989e15ca625b60801d0edfad1a68.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi Pad 7S Pro 12.5', price: '2199', sub: false, src: 'https://www.mi.com/airenergy/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2f5fa6bbae05628add0605f47bc065e.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi Pad 7 Ultra', price: '699', sub: false, src: 'https://item.mi.com/9509.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8046b70263048dc7e3e517f052a2d844.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi Pad 7 Pro', price: '1899', sub: false, src: 'https://www.mi.com/washer-dryer-10/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/db2d3127c6bf5b89488efa8f6fd85ded.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi Pad 7', price: '1999', sub: false, src: 'https://www.mi.com/water2', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a87263f635654280e26c605090caaa16.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Redmi Pad Pro', price: '1499', sub: false, src: 'https://www.mi.com/roomrobot/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dd1013092765f219fb3f90a1076539.png?thumb=1&w=200&h=138&f=webp&q=90'}
      ],
      router: [
        {value: '米家冰箱对开门610L墨羽岩', price: '999', sub: false, src: 'https://www.mi.com/mesh/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/531efbd4fd88b64a94079436851f56f1.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '巨省电Pro 立式3匹 超一级能效 米家空调', price: '149', sub: false, src: 'https://www.mi.com/miwifi4ac/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5bc8371b1e2efb551605cf2eb1baa87.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '小米空调 1.5匹新1级能效', price: '59', sub: false, src: 'https://item.mi.com/8645.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/80416c1c7040aabbafa527a6ea652948.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '米家洗烘一体机 12kg', price: '99', sub: false, src: 'https://www.mi.com/miwifi4a/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/85009f514f7505825899635daeb761b0.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '米家冰柜 203L', price: '399', sub: false, src: 'https://www.mi.com/miwifihd/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b6361cf5069af62f4208ee326bd0e43.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '米家冰箱 十字对开门520L 墨羽岩', price: '2299', sub: false, src: 'https://www.mi.com/a/h/8363.html', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4a1b47991e41609e8989a0fc72ab299.png?thumb=1&w=200&h=138&f=webp&q=90'}
      ],
      hardware: [
        {value: 'Xiaomi路由器AX3000T', price: '189', sub: false, src: 'https://www.mi.com/camera-360/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5de7ae24c438974939453553420f1a0.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi全屋路由 BE3600Pro 套装', price: '489', sub: true, src: 'https://www.mi.com/aiteacher-wifi/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f6ae2a9be0012e6ee477b6aed44c88a3.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi路由器 BE3600', price: '1299', sub: false, src: 'https://www.mi.com/mj-smartlock/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8cc8ccb1c0e8cc58d96b7ec00df6634.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi路由器 BE6500 Pro', price: '299', sub: false, src: 'https://www.mi.com/aispeaker-touch/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2e4e053bd4dd41341ce8950ae1c3896d.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: 'Xiaomi路由器 BE5000', price: '179', sub: false, src: 'https://www.mi.com/aispeaker-control/', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/81f833a72b840274af1cf5931fb516f8.png?thumb=1&w=200&h=138&f=webp&q=90'},
        {value: '查看全部', type: '小米路由器', sub: false, src: 'https://www.mi.com/p/3469.html?client_id=180100041086&masid=17409.0245', url: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2ddc6a2789c5f5ff78fa4ca1402417c8.png?thumb=1&w=200&h=138'}
      ],
      searchHot: ['手机换新','空调', '充电宝', '风扇', 'Redmi K80', '显示器', '路由器', '空气进化器'],
      placeholderWords: [
        '电视',
        '电饭煲',
        '空调',
        '充电宝',
        '风扇',
        'Redmi K80',
        '显示器',
        '路由器',
        '空气净化器',
        '小米手环9pro'
      ],
      currentWordIndex: 0,
      rotateInterval: null,
      searchValue: '',
      searchHistory: []
    }
  },
  mounted() {
    // 启动轮换定时器
    this.startRotation();
  },
  beforeDestroy() {
    // 组件销毁前清除定时器
    clearInterval(this.rotateInterval);
  },
  methods: {
    // 菜单显示区域
    menusListShow (type) {
      if (type) {
        this.menusItemData = this[type];
      }

      this.menusListFlag = true;
      clearTimeout(this.timer);
    },
    menusListHide () {
      this.timer = setTimeout(() => {
        this.menusListFlag = false;
      }, 300);
    },
    // 启动轮换
    startRotation() {
      clearInterval(this.rotateInterval);
      this.rotateInterval = setInterval(() => {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.placeholderWords.length;
      }, 5000);
    },
    
    // 停止轮换
    stopRotation() {
      clearInterval(this.rotateInterval);
    },
    
    // 搜索框获取焦点
    searchListShow() {
      this.hotsListFlag = false;
      this.focusFlag = true;
      this.stopRotation(); // 停止轮换
    },
    
    // 搜索框失去焦点
    searchListHide() {
      this.hotsListFlag = true;
      this.focusFlag = false;
      this.startRotation(); // 重新开始轮换
    },
    
    // 处理下拉词条点击
    handleListItemClick(item) {
      this.searchValue = item;
      this.addToSearchHistory(item);
      
      // 使用$nextTick确保DOM更新完成后再执行后续操作
      this.$nextTick(() => {
        this.hotsListFlag = true;
        this.focusFlag = false;
        this.handleSearch();
      });
    },
    
    // 处理热门词条点击
    handleHotItemClick(item) {
      this.searchValue = item;
      this.addToSearchHistory(item);
      
      // 使用$nextTick确保DOM更新完成后再执行后续操作
      this.$nextTick(() => {
        this.hotsListFlag = true;
        this.focusFlag = false;
        this.handleSearch();
      });
    },
    
    // 添加到搜索历史
    addToSearchHistory(item) {
      // 移除已存在的相同词条
      const index = this.searchHistory.indexOf(item);
      if (index !== -1) {
        this.searchHistory.splice(index, 1);
      }
      // 添加到搜索历史的顶部
      this.searchHistory.unshift(item);
      // 限制历史记录数量
      if (this.searchHistory.length > 5) {
        this.searchHistory.pop();
      }
    },
    
    // 处理搜索提交
    handleSearch() {
      if (this.searchValue.trim()) {
        this.addToSearchHistory(this.searchValue);
        // 这里可以添加实际的搜索逻辑
        console.log('搜索:', this.searchValue);
      }
    }
  }
}
</script>

<style lang="less">
  .top-header {
    width: 100%;
    height: 100px;
    justify-content: center;
    .top-container {
      width: 1226px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .mi-icon {
        display: block;
        width: 55px;
        height: 55px;
        cursor: pointer;
        background: #ff6700 url('../assets/image/home-logo.png') no-repeat;
        background-position: -55px 0;
        transition: all .20s ease;
        border-radius: 20px;
      }

      .header-navs-container {
        width: 820px;
        display: flex;
        height: 100%;
        .divider {
          width: 142px;
          height: 100px;
        }

        .navs {
          display: flex;
          line-height: 100px;
          .navs-item > a {
            cursor: pointer;
            padding: 26px 10px 38px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }

  .header-search-container {
    height: 50px;
    position: relative;
    display: flex;
    cursor: pointer;
    
    .search-input {
      cursor: pointer;
      padding-left: 10px; 
      width: 240px;
      height: 100%;
      outline: none;
      font-size: 15px;
      border: 1px solid #e0e0e0;
      transition: all 0.3s ease;
      
      &:focus {
        border-color: #ff6700;
      }
    }

    #kuan {
      input[type="submit"] {
        height: 50px;
        width: 50px;
        border: 1px solid #e0e0e0;
        border-left: none; /* 移除左侧边框，避免与输入框重叠 */
        background-color: #fff;
        background-image: url('https://i.postimg.cc/G3FQtqGh/image.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 55px;
        color: transparent;
        cursor: pointer;
        
        
        &:hover {
          background-image: url('https://i.postimg.cc/Y0dLgGt8/image.png');
          background-color: #ff6700;
          border-color: #ff6700;
        }
      }
    }

    /* 当输入框聚焦时，同时改变输入框和按钮的边框颜色 */
    .search-input:focus + .search-btn,
    .search-input:focus + .search-btn + #kuan input[type="submit"] {
      border-color: #ff6700;
    }

    .search-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 49px;
      border: 1px solid #e0e0e0;
      border-left: none;
      background: #fff;
      transition: all 0.3s ease;
      
      i {
        font-size: 19px;
        color: #616161;
        
        &:hover {
          color: #fff;
        }
      }
      
      &:hover {
        background: #ff6700;
        border-color: #ff6700;
      }
    }

        .active {
          transition: all .20s ease;
          border: 1px solid #ff6700;
        }



        .search-list {
          position: absolute;
          width: 240px;
          top: 35px;
          height: auto;
          border: 1px solid #ff6700;
          border-top: 0;
          text-align: left;
          z-index: 16;
          .list-item {
            cursor: pointer;
            padding: 6px 15px;
            font-size: 12px;
            background: #fff;
            color: #424242;
            &:hover {
              background: #fafafa;
            }
          }
        }
      }
    }


    .menus-list {
      position: absolute;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center; 
      left: 0;
      top: 140px;
      width: 100%;
      height: 230px;
      background: #fff;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 3px 4px rgba(0, 0, 0, .18);
      overflow: hidden;
      z-index: 15;
      .menus {
        padding: 30px 0 30px 200px;
        min-width: 1500px;
        display: flex;
        .menus-item {
          a {
            display: block;
				    padding: 0 20px;
				    border-right: 1px solid #ccc;
          }

          &:nth-last-child(1) {
            a {
              border: 0;
            }
          }

          .item-img {
            width: 100%;
            width: 160px;
            height: 110px;
          }

          .item-value {
            width: 100%;
            height: 16px;
            margin-top: 16px;
            font-size: 12px;
            text-align: center;
          }

          .item-type {
            width: 100%;
            height: 16px;
            margin: 4px 0 4px;
            font-size: 12px;
            text-align: center;
          }

          .item-price {
            width: 100%;
            height: 14px;
            line-height: 14px;
            margin: 5px 0 5px;
            font-size: 10px;
            text-align: center;
            color: #ff6700;
          }
        }
      }
    }
  }

  // 菜单选项
  .menu-trans-enter-active, .menu-trans-leave-active {
    transition: all .30s ease-in;
    height: 230px;
  }

  .menu-trans-enter, .menu-trans-leave-to {
    height: 0;
  }

  .menu-trans-enter-to, .menu-trans-leave {
    height: 230px;
  }

  // 搜索热点
  .list-trans-enter-active, .list-trans-leave-active {
    transition: all .10s ease-in;
    opacity: 1;
  }

  .list-trans-enter, .list-trans-leave-to {
      opacity: 0;
    }

  .list-trans-enter-to, .list-trans-leave {
    opacity: 1;
  }
</style>