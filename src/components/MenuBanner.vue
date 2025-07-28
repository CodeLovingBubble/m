<template>
  <div class="menu-banner">
    <div class="menu-container" @mouseleave="bannerMenuHide()">
      <ul class="menu-list">
        <li class="list-item"
        v-for="(item, index) in menus"
        :key="index"
        @mouseenter="bannerMenuShow(item.type)">
          <a :href="item.url" target="blank">{{item.value.replace(/\s+>$/, '')}}</a>
          <div class="angle-bracket">></div>
          <i class="fa fa-angle-right"></i>
        </li>
      </ul>
    </div>
    <div class="menu-info"
    v-show="bannerMenuFlag"
    @mouseleave="bannerMenuHide()"
    @mouseenter="bannerMenuShow()">
        <ul class="menu-info-list"
        v-for="(list, key) in menuListMatch"
        :key="key"
        :data-key="key">
          <li class="info-list-item"
          v-for="(item, index) in list"
          :key="index"
          :data-index="index">
            <a :href="item.url">
              <img :src="item.src" :alt="item.name" />
              <span class="">{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
    <banner :banners="banners"></banner> <!-- 轮播图组件 -->
  </div>
</template>

<script>
import Banner from '../parts/Banner'

export default {
  data () {
    return {
      bannerMenuFlag: false,// 控制二级菜单显示/隐藏的开关（true：显示；false：隐藏）
      menuTimer: '',// 延迟隐藏定时器（用于解决鼠标快速切换时菜单闪烁问题）
      listInfoData: [],// 当前显示的二级菜单数据
      menus: [
        {value: '手机', url: 'https://www.mi.com/p/1915.html', type: 'phone'},
        {value: '电视', url: 'https://www.mi.com/a/h/9819.html', type: 'tv'},
        {value: '家电', url: 'https://www.mi.com/a/h/7529.html', type: 'laptop'},
        {value: '笔记本 平板 显示器', url: 'https://www.mi.com/p/9285.html', type: 'household'},
        {value: '出行 穿戴', url: 'https://www.mi.com/p/9289.html', type: 'wear'},
        {value: '智能 路由器', url: 'https://www.mi.com/a/h/8363.html', type: 'router'},
        {value: '电源 配件', url: 'https://www.mi.com/p/9290.html', type: 'power'},
        {value: '健康 儿童', url: 'https://www.mi.com/p/9291.html', type: 'health'},
        {value: '耳机 音箱', url: 'https://www.mi.com/p/9292.html', type: 'pods'},
        {value: '生活 箱包', url: 'https://www.mi.com/p/9293.html', type: 'life'}
      ],
      banners: [
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a25b54b7b8072cbb2a058e58c6e1765.jpg?w=2452&h=920', url: 'https://www.mi.com/redminote7/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/59b14ddb52b5745c97467c8229d8b795.jpg?thumb=1&w=1533&h=575&f=webp&q=90', url: 'https://www.mi.com/a/h/11251.html'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/da0e79745d648488a84c37772c29c08f.jpg?thumb=1&w=1533&h=575&f=webp&q=90', url: 'https://www.mi.com/mitvall-screen/e55c/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c9726653e156360c02c9640a20e9c5f.jpg?thumb=1&w=1533&h=575&f=webp&q=90', url: 'https://www.mi.com/washer-dryer-10/'},
        {src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e3f9630cd04bb2e4d37d1b136b4fae9.jpg?thumb=1&w=1533&h=575&f=webp&q=90', url: 'https://www.mi.com/a/h/11117.html'}
      ],
      phone: [
        {name:'Xiaomi 数字旗舰', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/182d59037498cad87202c36e1a8ea23c.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'http://www.mi.com/redminote8pro'},
        {name:'Xiaomi MIX系列', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb9e4a367f854221b60bb7b3b05e0173.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'http://www.mi.com/redminote8'},
        {name: 'Xiaomi Civi系列', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8baabd4fc4255a2cf81636335b4cf0c1.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/micc9/'},
        {name: 'Redmi K系列', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/55b0ecc7cc8ab3714f311cc5df3bd0ae.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/xiaomicc9mt'},
        {name: 'Redmi Turbo系列', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/86eb53bd70dbe20d9d4e8ec187a92dcc.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/micc9e'},
        {name: 'Redmi Note系列', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a57303e8ac0d52a8b714a078cc35bfa1.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mi9/'},
        {name: 'Redmi 数字系列', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a3d1b4e8bf2af17e6b5ad5559cfcb.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mi9se/'}
      ],
      tv: [
        {name: '旗舰系列-S Mini LED 2025', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e831b62c0f720a7b038bff519ab29676.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E6%BF%80%E5%85%89%E6%8A%95%E5%BD%B1%E7%94%B5%E8%A7%86'},
        {name: '旗舰系列-S Pro Mini LED', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/026fb3c3542d5ea80824efb94e52f895.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/arttv/'},
        {name: '旗舰系列-S Mini LED', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fb29bd1fdc24747f29a1391842e7249b.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E5%85%A8%E9%9D%A2%E5%B1%8F%E7%94%B5%E8%A7%86'},
        {name: '巨幕影院-Redmi MAX', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/30508961963af8937ead2013b77b97fe.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mitv4A/32/'},
        {name: '游戏高刷-REDMI X 2025', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3d02613c3057fa79fd3aa46624eaa362.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mitv4A/43y'},
        {name: '性价比爆款-Redmi A Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7255d4c770a75efc5d96dd92dfc6ec49.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mitv4A/49/'},
        {name: '性价比爆款-Redmi A 2025', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d5d10c3aa7cd62086fc39716f687449.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mitv4A/50'},
      ],
      laptop: [
        {name: '壁挂空调', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/630b9e523bb2e1387ce6c7be1edaca18.png?thumb=1&w=50&h=50', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2013.3'},
        {name: '立式空调', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20e478a62b19d36ff05e92763fe7396f.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2013.3'},
        {name: '中央空调Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/afcf69ccc6c889edb4ceeca205799d23.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%2012.5'},
        {name: '冰箱', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e6fe32cdaf14e104013384d89100f9c6.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/redmibook14/'},
        {name: '滚筒洗衣机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f23bac0cfa0082b79230350b87d27eea.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%E6%B8%B8%E6%88%8F%E6%9C%AC'},
        {name: '波轮洗衣机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/fd480335781b6c6d6c0ba586c5bb209c.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://www.mi.com/mipad4/'},
        {name: '电暖器', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6aa1871d84aaae98cd676f5e2cf5c2f2.jpg?thumb=1&w=50&h=50', url: 'https://search.mi.com/search_%E9%94%AE%E7%9B%98'},
        {name: '除湿机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce2cb16bdc44b5336c90e2d788d6c8e2.png?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E9%BC%A0%E6%A0%87'},
        {name: '洗地机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/00d73a63bf8fb50cb0cf071d903333b2.jpg?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E8%BD%AC%E6%8E%A5%E5%99%A8'},
        {name: '净水器', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=50&h=50'},
        {name: '微蒸烤', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7dcbb8c268574041ce0b4b98e591cf1.jpg?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%B9%B3%E6%9D%BF%E9%85%8D%E4%BB%B6'},
        {name: '烟灶', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf07e32a082098cc81a433fe360811c8.gif?thumb=1&w=50&h=50&f=webp&q=90', url: 'https://search.mi.com/search_%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%8F%8C%E8%82%A9%E5%8C%85'},
        {name: '洗碗机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/91ccbb3270bcfd72a3c3ae98f15aed9d.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '扫地机器人', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d068f740ef433d49ba1304b0c70e39e3.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '吸尘器', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26deda5474eb7eb7e5b34547c58b9893.jpg?thumb=1&w=50&h=50'},
        {name: '加湿器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3630f1d92e44f1518b982020986ee953.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '空气净化器', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=50&h=50'},
        {name: '电饭煲', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/390e15818dd103b2f96f4ac742d47379.jpg?thumb=1&w=50&h=50'},
        {name: '电磁炉', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d93e6a98403262a506c9e9b22293cdae.jpg?thumb=1&w=50&h=50'},
        {name: '水壶', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/39c8ccbebd08687bc6780373b7ef2a95.jpg?thumb=1&w=50&h=50'},
        {name: '落地风扇', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a3e4238b70ef8db89ae77f8a3762fc8.png?thumb=1&w=50&h=50'},
        {name: '投影仪', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c12fd1da9fed662842d6f5c57d7737c9.png?thumb=1&w=50&h=50'},
        {name: '灯具', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c0a6b523433a492dbf32035b2983d98e.jpg?thumb=1&w=50&h=50'},
        {name: '除螨仪', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b611c8e68c0b9424e66857646c4b264.png?thumb=1&w=50&h=50&f=webp&q=90'}
      ],
      household: [
        {name: 'REDMI K Pad', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/56f19f81d311fe83e8b5aba1074bde66.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Pad 7S Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0419051658e56e3983e52d4e88160d8.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Pad 7 Ultra', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9c24da8091a1a930cfaf9fafce4658f.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Pad 7 Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/63710378af101deacce8b4986fdef250.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Pad 7', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/194b27f9a5698e7f2d651f0c0635453a.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Book 14 锐龙版', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c78e72d1a4280bb907f22e60bed5f62a.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Book Pro 14', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5cb4d9647492cf51a86df9c73e8a87ba.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Book Pro 16', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/455295a749de8a10288257f43cdb98ce.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi 平板', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/627ca9afd92d4efa4e29dce497c7bf8b.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi 平板', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/01093ece938a05e0e6e6b64299eb89ae.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Book 14 2025', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c78e72d1a4280bb907f22e60bed5f62a.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Book 16 2025', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f63964384cfe7c6e041b5f9961522920.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '办公娱乐显示器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/721960abfd3ba99426d74595124c0820.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '游戏电竞显示器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/722dcf898f2db1e5689a6df08e87b525.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi 显示器 G34WQ', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2ac4fd34e03041586d6507444d0a24ca.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi G Pro27', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/722dcf898f2db1e5689a6df08e87b525.png?thumb=1&w=50&h=50&f=webp&q=90'},
      ],
      wear: [
        {name: '小米AI眼镜', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e1c48ffa70da75f0404743772fae89c3.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小米手环10', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cdd27b674f412cbe75fffa9e5ff72727.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小米手环10 NFC版', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/14caaa0bde26184e29c9f8c988dafc32.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Watch S4 41mm', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8166a5f1edff6019eb16bddc0d08846a.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Watch S4', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f1a142b30ae28479510eab9b048580b.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Watch 5', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f3f4fad1bc8ef497b9023dffedbe338.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小米手环9 Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/20f93242663fc6d005deabc1252aca67.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Watch S4Sport', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/879fbf4ec88f1c27835f7f895546fd27.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi 手环 3', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3f017abd91eaeb1df17d9e2efec5cc5c.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小米车载充电器快充版1A1C 100W', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/46bbc5d5750f6af3f505c029ee6f1ba4.png?thumb=1&w=50&h=50&f=webp&q=90'},
      ],
      router: [
        {name: 'Xiaomi Buds 5 Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f39eb03f586be89abccfc715f4133db1.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi 开放式耳机 Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e7b34cc5c43c0ba3137b6bde7d8276c.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Buds 5', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c70bc9b94595d8a434a75e138fce7bca.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Buds 6 Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4fa45caa44d39037cd57c189e6bb69f8.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi Buds 6', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f56084f0a9adc67bd4866876b29a38c3.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'REDMI Buds 7S', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b430c0701ca1832b8b6a962fd1adf25e.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi Buds 6	青春版', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfd8124c484dc3fcc1186d39e27c7827.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi Buds 6 活力版', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2acd6de4ca7d7997a62eb1f9fb91a23.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi 智能音箱 Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/def6f846649f6bd1f4182973370d253e.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小爱音箱Play 增强版', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/df7c5b83fa173824052ca7929dbb0c37.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi 智能家庭屏 Mini', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ffd02ff2d1572fd545d5bf9c8e73cdb1.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi Sound Pro', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/daeb40550103b72449ee783eabb45b0d.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小米小爱音箱 Play', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3d5963e212402fa5ebd2e71dd10c426c.jpg?thumb=1&w=50&h=50'},
        {name: '小米小爱触屏音箱Pro 8', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9177af7098efadcaac278e2f9c6f113a.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi 蓝牙音箱 Mini', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa861ad93e69c69c7b2d1d21fd6946cd.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi智能音箱', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3374a34421fad5466b98ea715f7d072c.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: ' Xiaomi智能家庭屏Pro 8', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/007308d07c93d959c1ca8c8d62853914.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi智能家庭屏 6', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15d918d05a777f119f4b794503ce5c98.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Xiaomi智能家庭屏 10', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3080f7634a71b9863966ff0b10ad1a53.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小米AI音箱', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/db89d422ef877cf7290616fef515e413.jpg?thumb=1&w=50&h=50'},
        {name: 'Xiaomi 胶囊耳机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5232ef2eeeef67dee0fc7687b667b631.png?thumb=1&w=50&h=50&f=webp&q=90'},
      ],
      power: [
        {name: '洗手机', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=50&h=50'},
        {name: '剃须刀', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=50&h=50'},
        {name: '修剪器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96b5d738ce5926e3a6969ad68fa1521d.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '牙刷', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=50&h=50'},
        {name: '吹风机', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=50&h=50'},
        {name: '体重秤', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=50&h=50'},
        {name: '体脂秤', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6166ca2026008abb86bc67dfd8211d.jpg?thumb=1&w=50&h=50'},
        {name: '米家跑步机', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e04107f99edded4a64b7e92ae25641d.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '米家动感单车', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/84ca0dbb3d7b8debc2e531109d7c2b58.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '走步机', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb1fee7e2f2963baae34d3611a2b7e9f.jpg?thumb=1&w=50&h=50'},
        {name: '益智积木', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9d211ae20e700690ce9eec644ac3f31.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '儿童手表', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0b3a592784632760a7ef25de50147a7.jpg?thumb=1&w=50&h=50'},
        {name: '儿童滑板车', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9f6a34ed8071b821ee5aa8d32a7be95d.jpg?thumb=1&w=50&h=50'},
        {name: '婴儿推车', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12235daeb49fd45e709e68c7dacd3336.jpg?thumb=1&w=50&h=50'},
        {name: '理发器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c4568ec9535a8707cea88dcd0148dda8.jpeg?thumb=1&w=50&h=50&f=webp&q=90'},
      ],
      health: [
        {name: '小背包', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '双肩包', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=50&h=50'},
        {name: '胸包', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2846c64ffd97969c639979da9bb97974.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '旅行箱', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '收纳袋', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/77aa97808ebf4965cf823fd2199433ec.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '运动鞋', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=50&h=50'},
        {name: '服饰', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c6b6895044b55858102f72d87a6c39f.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '眼镜', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d521bd58668f66c50562b8fa8949f67c.jpg?thumb=1&w=50&h=50'},
        {name: '床垫', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/aba45662667dceaf4ba0e5b08f44d3a7.jpg?thumb=1&w=50&h=50'},
        {name: '枕头', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/744306b95df4d130bdfc346ff2b3c871.png?thumb=1&w=50&h=50'},
        {name: '螺丝刀', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/458169c8138413666feb860068ce1a56.jpg?thumb=1&w=50&h=50'},
        {name: '水杯', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/813d173eff50a83abb8abd5abde5f5a6.jpg?thumb=1&w=50&h=50'},
        {name: '驱蚊器', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/59d3a701ac0bbb78f1b1d0ea7ebc7505.jpg?thumb=1&w=50&h=50'},
        {name: '毛巾/浴巾', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21c3ec8638dd75f5c54f1a69864a1cc9.jpg?thumb=1&w=50&h=50'},
        {name: '笔', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c9279a17e9399958420af64e449e3214.jpg?thumb=1&w=50&h=50'},
      ],
      pods: [
        {name: 'MIJIA K歌麦克风', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/435f8b56d41de210d1c4598f4f00fa50.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '打印机', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5ef6c2d63df78e140afab6ac3c088fac.jpg?thumb=1&w=50&h=50'},
        {name: '小米路由器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: 'Redmi路由器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/399b717a9d27252f21e32a981403c1c0.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '智能家庭', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa7c5302bf6c8e040b084dee50fa699f.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '对讲机', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/21fedf7ba9019bce59cbc4856f907076.jpg?thumb=1&w=50&h=50'},
        {name: '摄像机', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/067f4a6f0ffb264ed40734a97deae52d.jpg?thumb=1&w=50&h=50'},
        {name: '智能门锁', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4fb7885d49255b93f7245aa53501294c.jpg?thumb=1&w=50&h=50'},
        {name: '门铃/猫眼', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b2f1afe3f26a673a736c0927fefe238a.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '小爱音箱', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3374a34421fad5466b98ea715f7d072c.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '家庭屏', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7242436b36197a81d73b67ce6a5f26f5.png?thumb=1&w=50&h=50&f=webp&q=90'},
      ],
      life: [
        {name: '插座插排', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/458adc268050c17312da7c12328395e8.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '移动电源', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '数据线', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=50&h=50'},
        {name: '穿戴配件', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9027b032a6afc6ba9d4d2acb962cb220.jpg?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '平板配件', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/49f1917ed50c197e7b27407a10256fa3.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '充电器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/864bcd18999a7b0fe22365f7ea7909e0.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '电池', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=50&h=50'},
        {name: '自拍杆', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=50&h=50'},
        {name: '手机壳', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=50&h=50'},
        {name: '手机贴膜', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=50&h=50'},
        {name: '无线充电器', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=50&h=50&f=webp&q=90'},
        {name: '其他配件', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/57d9989807dbc15c1a82bc49acc1f06f.jpg?thumb=1&w=50&h=50'},
      ]
    }
  },
  methods: {
    bannerMenuHide () {
      this.menuTimer = setTimeout(() => {
        this.bannerMenuFlag = false;
      }, 300);
    },
    bannerMenuShow (type) {
      if (type) {// 若传入type（从主菜单点击触发），则加载对应分类的二级菜单数据
        this.listInfoData = this[type];
      }

      this.bannerMenuFlag = true;
      clearTimeout(this.menuTimer);
    }
  },
  computed: {
    menuListMatch () {//二维数组
      if (this.listInfoData && this.listInfoData.length) {
        const matchData = [];
        for (let i = 0; i < this.listInfoData.length; i += 6) {// 遍历数据，每6项切分一次
          matchData.push(this.listInfoData.slice(i, i + 6));
        }
        return matchData;
      }
    }
  },
  components: {
    'Banner': Banner
  }
}
</script>

<style scoped lang="less">
.menu-banner {
  position: relative;
  width: 1226px;
  height: auto;
  margin: 0 auto;
  
  .menu-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 235px;
    height: auto;
    background: rgb(172, 170, 170);
    z-index: 1;
  }

  .menu-list {
    padding: 20px 0;
    height: 388px;
    
    .list-item {
      display: flex;
      padding-left: 30px;
      position: relative;
      
      &:hover {
        background-color: #ff6700;
      }

      a {
        position: relative;
        display: inline-block;
        width: 170px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        text-align: left;
        background-color: transparent;
      }

      .angle-bracket {
        position: absolute;
        right: 40px;
        line-height: 42px;
        color: #fff;
      }

      i {
        font-size: 22px;
        color: #e0e0e0;
        line-height: 42px;
      }
    }
  }

  .menu-info {
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    left: 235px;
    top: 0;
    z-index: 11;
    border: 1px solid #e0e0e0;
    box-shadow: 3px 8px 16px rgba(0, 0, 0, 0.18);
    
    .menu-info-list {
      width: 260px;
      height: 458px;
      margin: 0;
      padding: 0;
      list-style: none;
      background: #fff;
      
      a {
        display: flex;
        padding: 18px 20px;
        line-height: 40px;
        color: #333;
        
        img {
          width: 40px;
          height: 40px;
          margin-right: 12px;
          vertical-align: middle;
        }

        span {
          width: 172px;
          line-height: 40px;
          font-size: 14px;
          text-align: start;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &:hover {
          span {
            color: #ff6700;
          }
        }
      }
    }
  }
}
</style>