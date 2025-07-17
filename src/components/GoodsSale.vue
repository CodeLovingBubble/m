<template>
  <div class="goods-sale">
    <div class="goods-sale-container">
      <poster :postItem="postItem1"></poster>
      <goods-box :goodsItem="goodsItem1"></goods-box>
      <goods-box :goodsItem="goodsItem3"></goods-box>
      <goods-box :goodsItem="goodsItem7"></goods-box>
      <goods-box :goodsItem="goodsItem2"></goods-box>
      <goods-box :goodsItem="goodsItem4"></goods-box>
      <goods-box :goodsItem="goodsItem5"></goods-box>
      <goods-box :goodsItem="goodsItem6"></goods-box>
      <poster :postItem="postItem7"></poster>  
    </div>
  </div>
</template>

<script>
import Poster from '../parts/Poster'
import GoodsBox from '../parts/GoodsBox'

export default {
  data () {
    return {
      postItem1: {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e9c620dbad5c650b6ff0c573df76e14.jpg?thumb=1&w=1533&h=150&f=webp&q=90', url: 'https://www.mi.com/redminote7pro/'},
      postItem7: {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1533&h=150&f=webp&q=90', url: 'https://item.mi.com/9836.html'},
      goodsItem1: {
        boxTitle: '手机',
        isHot: false,
        vertical: true,
        url: 'https://www.mi.com/a/h/9891.html',
        listData: {
          promo: [{src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/55d2e50dd3783b52244ea3938e9dfca7.png?thumb=1&w=293&h=768&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=10050081'}],
          goods: [
            {value: ' Xiaomi MIX Flip 2', desc: '4.01英寸多功能超大外屏', sub: true, newPrice: '5999元起', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506251658_d1ee9fc2e13ddad3cf6823ce4cbf45b5.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=21423'},
            {value: 'REDMI K80 至尊版', desc: '天玑 9400+|7410mAh超长续航|大师级...', sub: true, newPrice: '2599元起', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181453_d97271f45499e132cbf0b597d5f7e04d.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=21432'},
            {value: ' Xiaomi 15S Pro', desc: '小米 15周年特别设计', sub: false, newPrice: '5499元起', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202505221337_64140259a92b163ab9dc6a7555b31178.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=21305'},
            {value: ' Xiaomi Civi 5 Pro', desc: '徕卡光学 Summilux 高速镜头｜6000...', sub: false, newPrice: '2999元起', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202505201429_30b6018560c07bc7670cc3ac79070a0c.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/redminote7/'},
            {value: 'REDMI Turbo 4 Pro', desc: ' Turbo 4 Pro 好看，更能打！', sub: true, newPrice: '1899元起', oldPrice: '2199元', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251811_93715df0882e43e252843e3c7b775570.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=20982'},
            {value: 'Xiaomi 15 Ultra', desc: '暗夜之眼 徕卡光学', sub: false, newPrice: '6599元起', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/411d540271f6efbdd882fa33daee0de3.jpg', url: 'https://www.mi.com/mix3/'},
            {value: ' REDMI Turbo 4', desc: 'REDMI Turbo 4 好看又能打', sub: true, newPrice: '1699元起', oldPrice: '1999元', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/00eb27ead9512a7f12604ad3469460b6.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=20844'},
            {value: 'Redmi 14C', desc: '【持久续航】5160mAh 大电池', sub: true, newPrice: '469元起', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271148_a4cb76ca76ad26ac81da44ad1a69ebd1.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shop/buy?product_id=20866'}
          ]
        }
      },
      goodsItem2: {
        boxTitle: '家电',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
          {value: '电视音影', type: 'television', url: 'https://www.mi.com/a/h/9819.html'},
          {value: '空调', type: 'kkk', url: 'https://www.mi.com/a/h/9819.html'}
        ],
        listData: {
          promo: [
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/71a8e491a39b9c246246140fe68d256b.jpg?thumb=1&w=293&h=375&f=webp&q=90'},
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/46a738e1b375a08dd691a43bb05767f9.png?thumb=1&w=293&h=375&f=webp&q=90'}
          ],
          hots: [
            {value: '小米电视S Pro Mini LED系列', desc: '288Hz超高刷、4+64G大存储', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e31b35ddb5d2f69def46456ac21df36b.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米电视 S Mini LED 系列', desc: 'Mini LED 高分区背光、1200nits峰值亮度', sub: false, newPrice: '1699', oldPrice: '1799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403131610_4c436d462d84b5109080ccf6b632844c.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Redmi 智能电视 X 2025款', desc: '240Hz竞技模式|4+64GB|全色温双色域...', sub: false, newPrice: '2999', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '巨省电Pro 1.5匹超一级能效 米家空调', desc: '新一代巨省电 Pro新升级', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404040209_2ce9e174c219fb98ce3294307958d210.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '巨省电 小米空调 1.5匹新1级能效', desc: '强劲制冷 | 高效节能 | 智能互联', sub: false, newPrice: '799', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/21429638bdd453e8c1cb5c357ff4835b.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '巨省电Pro 立式3匹 超一级能效 米家空调', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '1999', oldPrice: '2099', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261426_bd208c1dc45f81ca3970374dabb43c6d.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '巨省电 立式3匹新一级能效 米家空调', desc: '超大风量 全屋速冷暖', sub: false, newPrice: '4899', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504221448_9c9166394dd816adddee804e4d2d46e1.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家电烤箱', desc: '', sub: true, newPrice: '4699', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&w=125&h=125&f=webp&q=90'}
          ],
          television: [
            {value: '小米电视4A 32英寸', desc: '人工智能系统，高清液晶屏', sub: false, newPrice: '699', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg', url: 'https://www.mi.com/mitv4A/32/'},
            {value: '小米全面屏电视E55A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '1999', oldPrice: '2099', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg', url: 'https://www.mi.com/mitvall-screen/e55a/'},
            {value: '小米全面屏电视E65A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '2999', oldPrice: '3999', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3317a291b112aa4712059ad93263668.jpg', url: 'https://www.mi.com/mitvall-screen/e65a/'},
            {value: '小米电视4X 43英寸', desc: 'FHD全高清屏，人工智能语音', sub: false, newPrice: '1299', oldPrice: '1499', src: 'https://i8.mifile.cn/b2c-mimall-media/ede227c1f0e3472fb8dcfae980d1e43f.jpg', url: 'https://www.mi.com/mitv4x/43/'},
            {value: '小米电视4C 55英寸', desc: '4K HDR，人工智能系统', sub: false, newPrice: '1699', oldPrice: '1799', src: 'https://i8.mifile.cn/v1/a1/cef8a9c0-2386-5b66-9ed2-6b1d4e4490bf.jpg', url: 'https://www.mi.com/mitv4c/55/'},
            {value: '小米电视4A 65英寸', desc: '4K HDR，人工智能语音系统', sub: false, newPrice: '2699', oldPrice: '2999', src: 'https://i8.mifile.cn/b2c-mimall-media/91b59cc6474e0cd777445b15adb13980.jpg', url: 'https://www.mi.com/mitv4A/65'},
            {value: '小米壁画电视 65英寸', desc: '壁画外观，全面屏，远场语音', sub: false, newPrice: '6999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7eee530e4a103f2f5a0937a14bed53.jpg', url: 'https://www.mi.com/arttv/'},
            {value: '小米盒子4', desc: '', sub: false, newPrice: '299', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/aa8a6ce3b2b1201d74d0197482f3403b.jpg', url: 'https://www.mi.com/mibox4'}
          ]
        }
      },
      goodsItem3: {
        boxTitle: '智能穿戴',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '耳机', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
          {value: '穿戴', type: 'trip', url: ''},
        ],
        listData: {
          promo: [
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/15bd8044e1dbe5cdc05806ef3dc7bdf6.png?thumb=1&w=293&h=768&f=webp&q=90', url: 'https://www.mi.com/camera-360/'},
          ],
          hots: [
            {value: 'Xiaomi 开放式耳机 Pro', desc: '人体工学设计，三点支撑，贴合不压...', sub: true, newPrice: '999', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506261253_8ebd0e7d0f22fc4ff3d7a6baa2fe336a.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/aiteacher-wifi/'},
            {value: 'Xiaomi Buds 5 Pro', desc: '小米首发双功放三单元｜55dB 深度降...', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502261429_9c6e3418562ed4404309aac4038abd2a.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/10025.html'},
            {value: 'REDMI Buds 6 Pro', desc: '小米首发圈瓷同轴三单元 | 55dB深度...', sub: false, newPrice: '99', oldPrice: '169', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261600_4ae42d79b9b21e0727c1bb7a2cddbbf6.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/aispeaker-play/'},
            {value: '小爱音箱万能遥控版', desc: '传统家电秒变智能', sub: false, newPrice: '149', oldPrice: '199', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410112149_8c1b7e0aa8f1aca565ca4da1b3f609e6.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/aispeaker-control/'},
            {value: 'Redmi Buds 6', desc: '旗舰双单元架构 | 49dB深度降噪 | 42h...', sub: false, newPrice: '169', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409252052_478e3626f4c809beb3e6d65cddbcc77b.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shouhuan4/'},
            {value: 'Xiaomi Buds 5', desc: '舒适无感佩戴｜高通全链路无损音频...', sub: false, newPrice: '169', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407172252_14dde1819e157be030514edaddf0ead9.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/shouhuan4/'},
            {value: 'Redmi Buds 6S', desc: '14.2mm超大动圈单元 | 半入耳主动降...', sub: false, newPrice: '999', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ed30ba825d2c0a27f9c9867c6376e02.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/10003.html'},
            {value: 'Redmi Buds 6 活力版', desc: '', sub: false, newPrice: '99', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405161349_af5d2bb2e50bf45ff23d766e49da6cc5.png?thumb=1&w=125&h=125&f=webp&q=90', url: 'https://item.mi.com/9686.html'}
          ],
          trip: [
            {value: '小米米家电动滑板车', desc: '便携折叠，自由穿行', sub: false, newPrice: '1999', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/768992ca-4136-92f1-244a-0194a81a6360.jpg', url: 'https://www.mi.com/scooter2/'},
            {value: '米兔折叠婴儿推车', desc: '出发去向往的地方', sub: false, newPrice: '669', oldPrice: '699', src: 'https://i8.mifile.cn/b2c-mimall-media/18a82e7cda6ecbc22ecee7ac927d6ff9.jpg', url: 'https://www.mi.com/babyfoldingcar/'},
            {value: '米兔遥控小飞机', desc: '迷你酷玩具，溜到飞起', sub: false, newPrice: '399', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/553b5c01820c844565abe64e50bba323.jpg', url: 'https://www.mi.com/minidrone/'},
            {value: '米家车载空气净化器', desc: '高效净化车内空气', sub: false, newPrice: '449', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/cdc5c77b-d7e9-5a42-f848-3ff1808a139a.jpg', url: 'https://www.mi.com/carair/'},
            {value: 'AMAZFIT 运动手表', desc: '扔掉手机去跑步', sub: false, newPrice: '769', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/aaa1593d-9ca7-2944-3b62-380cc3427d82.jpg', url: 'https://www.mi.com/hmwatch/'},
            {value: '九号平衡车 Plus', desc: '一个形影不离的新伙伴', sub: false, newPrice: '3499', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/877d3ce8-68ab-7506-2a78-55a8c0fba946.png', url: 'https://www.mi.com/scooterplus/'},
            {value: '米家车载逆变器', desc: '双USB充电口，国际组合插孔', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/61472c3fcd181959055551e5c73aafec.jpg', url: 'https://item.mi.com/7627.html'},
            {value: '米家充气宝', desc: '', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0294e2f3997bf0cffb7bf48361d03588.jpg', url: 'https://item.mi.com/9613.html'}
          ]
        }
      },
      goodsItem7: {
        boxTitle: '笔记本|平板',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '热门', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
        ],
        listData: {
          promo: [
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/30c42c9f2f0241593acd0b7fe54a7b53.png?thumb=1&w=293&h=768&f=webp&q=90', url: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/30c42c9f2f0241593acd0b7fe54a7b53.png?thumb=1&w=293&h=768&f=webp&q=90'},
          ],
          hots: [
            {value: 'REDMI K Pad', desc: '8.8" 3K LCD 旗舰护眼屏 | 天玑 9400+', sub: true, newPrice: '999', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506251712_086166ad529d2ae8ebc0c15d4ef5c615.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/aiteacher-wifi/'},
            {value: 'Xiaomi Pad 7S Pro 12.5', desc: '玄戒®O1 3nm旗舰处理器 12.5" 高清...', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506260936_df42dabe3674ea1060fd7e5f26c8176e.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi Pad 7 Ultra', desc: '玄戒®O1 3nm旗舰处理器 | 实验室环...', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202505221519_7c288fb8170f9b7578d2629d8e0399ef.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi Pad 7 Pro', desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙...', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281957_cef79555890f4b13bbe6939cb16692e0.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi Pad 7', desc: '11.2英寸3.2K高清高刷屏 | 第三代骁龙...', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410281949_cf5a01c8f94f82f116d95e7d719bba7d.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Redmi Pad Pro系列', desc: '12.1英寸2.5K旗舰机大屏 | 10000mAh...', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5daddaa651568673e87eaf7c15ebd1cb.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'REDMI Book Pro 16 2025', desc: '80W 狂暴性能｜3.1K 165Hz 高刷高亮屏', sub: false, newPrice: '1599', oldPrice: '1699', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502272011_1a23b5bb50358fdfe9c9f88dffb02503.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'REDMI Book 14 锐龙版 2025', desc: '', sub: false, newPrice: '99', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202501020955_68f8eccb35bb474d12e041720fe56d5a.png?thumb=1&w=125&h=125&f=webp&q=90'}
          ]
        }
      },
      goodsItem4: {
        boxTitle: '生活电器',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '风扇扫地机', type: 'hots', url: 'https://www.mi.com/p/3469.html'},
          {value: '扫地机', type: 'earphone', url: 'https://www.mi.com/p/3469.html'},
          {value: '空净', type: 'aaa', url: 'https://www.mi.com/a/h/9819.html'},
          {value: '清洁', type: 'bb', url: 'https://www.mi.com/a/h/9819.html'},
          {value: '环境', type: 'cc', url: 'https://www.mi.com/a/h/9819.html'},
        ],
        listData: {
          promo: [
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c38a15b479e9b8bb25d75c0db70208aa.png?thumb=1&w=293&h=375&f=webp&q=90'},
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9630621f26ac77bfc523e020a10fe09e.jpeg?thumb=1&w=293&h=375&f=webp&q=90'}
          ],
          hots: [
            {value: '米家无雾加湿器3[800]', desc: '水润速达，静享舒适', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409121017_d7578337bdbb9a6c7a1e1f08c903207b.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无雾加湿器3[400]', desc: '纯净健康加湿快，抗菌防霉更安心', sub: false, newPrice: '99', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308171531_9154f16640713d1b4097d3c2a6e2eacf.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无雾加湿器3[1200]', desc: '1200mL/h加湿量｜中家院母婴认证｜UV-C 除菌', sub: false, newPrice: '19.9', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281412_3e563b465aa86e2ce99ef7b4770a6f58.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能除湿机 22L', desc: '强劲除湿，静享干爽', sub: false, newPrice: '39', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411101828_5a91bf92aa15eee71cd608f3a4a3c90e.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能除湿机13L', desc: '小身材大能量，静无止境', sub: false, newPrice: '99', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312211148_2d316b997d5340a051f9d0bbd58b9070.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能变频除湿机 30L', desc: '双变频除湿技术，10分钟还原室内干爽', sub: false, newPrice: '199', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411251423_4d783cbcbce16fb11d4b00ea7a0d7a46.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能除湿机 50L', desc: '专业除湿，百平覆盖', sub: false, newPrice: '49', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411101829_146d1487ff67b8772964479ab932b053.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无雾加湿器 3 Pro', desc: '', sub: false, newPrice: '249', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308181108_d185ff15f837f83b7f01d5f5cf00cd74.png?thumb=1&w=125&h=125&f=webp&q=90'}
          ],
          earphone: [
            {value: '小米双单元半入耳式耳机', desc: '半入耳式舒适佩戴', sub: false, newPrice: '69', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/ddf317f34e47eed06d910ee0ffd6b2fc.jpg', url: 'https://www.mi.com/half-in-ear/'},
            {value: '小米蓝牙项圈耳机', desc: '挂在脖子上的好耳机', sub: false, newPrice: '299', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/838ba427ef55317d8c4911b02c95bb79.jpg', url: 'https://www.mi.com/bluetooth-collar/'},
            {value: '小米圈铁耳机2', desc: '全面升级，让声音更有质感', sub: false, newPrice: '99', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/a0e1b48582e68cecf4b3e32dd1b5549d.jpg', url: 'https://www.mi.com/quantie2/'},
            {value: '小米随身蓝牙音箱', desc: '全金属外壳，内置麦克风', sub: false, newPrice: '69', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/T1hVY_BTdv1RXrhCrK.jpg', url: 'https://www.mi.com/littleaudio/'},
            {value: '小米蓝牙耳机青春版', desc: '6.5 克轻巧，高清通话音质', sub: false, newPrice: '59', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/e4c0f21c-3bd4-323e-673b-a9c1c1c6e294.jpg', url: 'https://www.mi.com/bluetooth-earphone/'},
            {value: '小米运动蓝牙耳机mini', desc: '迷你机身, 小如蚕豆', sub: false, newPrice: '169', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/852c3872-7aca-e565-b8fb-37aa3ce88979.jpg', url: 'https://www.mi.com/sportearphone-mini/'},
            {value: '小米蓝牙耳机AirDots青春版', desc: '雅致简约，收纳充电盒', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg', url: 'https://item.mi.com/9016.html'}
          ],
          aaa: [
            {value: '米家互联网空调C1（一级能效）', desc: '变频节能省电，自清洁', sub: false, newPrice: '2599', oldPrice: '2799', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg', url: 'https://www.mi.com/airconditionc1/v1c1/'},
            {value: '米家空调', desc: '出众静音，快速制冷热', sub: false, newPrice: '1699', oldPrice: '1799', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg', url: 'https://www.mi.com/aircondition/f3w1/'},
            {value: '米家互联网洗烘一体机 Pro 10kg', desc: '智能洗烘，省心省力', sub: false, newPrice: '2999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg', url: 'https://item.mi.com/9963.html'},
            {value: '小米电视4A 32英寸', desc: '人工智能系统，高清液晶屏', sub: false, newPrice: '699', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg', url: 'https://www.mi.com/mitv4A/32/'},
            {value: 'Redmi全自动波轮洗衣机1A 8kg', desc: '一键操作，父母都爱用', sub: false, newPrice: '799', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg', url: 'https://item.mi.com/9509.html'},
            {value: '小米全面屏电视E55A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '1999', oldPrice: '2099', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg', url: 'https://www.mi.com/mitvall-screen/e55a/'},
            {value: '15.6" 四核i7 16G 独显 512G', desc: '全面均衡的国民轻薄本', sub: false, newPrice: '4899', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg', url: 'https://item.mi.com/10253.html'},
            {value: 'Air 13.3" 2019款 ', desc: '', sub: true, newPrice: '4699', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg', url: 'https://item.mi.com/10000142.html'}
          ],
        }
      },
      goodsItem5: {
        boxTitle: '厨房电器',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '净水器', type: 'hots', url: 'https://search.mi.com/search_%E4%BF%9D%E6%8A%A4%E5%A3%B3'},
          {value: '烟灶', type: 'protective', url: 'https://search.mi.com/search_%E4%BF%9D%E6%8A%A4%E5%A3%B3'},
          {value: '电饭煲', type: 'b', url: ''},
          {value: '微蒸烤', type: 'c', url: ''}
        ],
        listData: {
          promo: [
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/499abd2f37095463c677a09f55cb2074.jpg?thumb=1&w=293&h=375&f=webp&q=90', url: 'https://item.mi.com/9016.html'},
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e7310eb9e74b138865f32bf8a35c98e.jpg?thumb=1&w=293&h=375&f=webp&q=90', url: 'https://www.mi.com/dispenser/'}
          ],
          hots: [
            {value: '米家前置过滤器', desc: '简约时尚，多彩三色', sub: false, newPrice: '349', oldPrice: '499', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305191436_605f85cd7d3ffc75af9df18ed0f4780a.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9355.html'},
            {value: '米家即热管线机', desc: '净水好搭档，100度真沸腾', sub: false, newPrice: '49', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309141639_92f3a75834776ec9cbb8877a843d2510.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/10173.html'},
            {value: '米家即热净水器Q1000', desc: '专利即热技术，一分钟1升开水', sub: false, newPrice: '349', oldPrice: '499', src:  '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309041738_36e653df314c55ac3cc74930bfc87767.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9889.html'},
            {value: '米家净水器1000G', desc: '澎湃大水量，5年免换RO滤芯', sub: false, newPrice: '32.9', oldPrice: '69', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc7c9f2277e5181fc3d3ee2320246f26.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9133.html'},
            {value: '米家净水器1000G Pro', desc: '米家净水器1000G Pro', sub: false, newPrice: '59', oldPrice: '69', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305231418_5d6ddd0efe84fa2915540de66848f377.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/chongdianqi4kou'},
            {value: '米家净水器 1200G Pro', desc: '全新零陈水3.0，畅饮母婴级健康水', sub: false, newPrice: '16.9', oldPrice: '19.9', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202408271025_8a63af3978b5d5463b07eeb929957c07.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/4053.html'},
            {value: '米家双核净水器 1200G Pro', desc: '主RO使用寿命8年', sub: true, newPrice: '18.9', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312211522_7eb6e935ebc0c053d48fbf71fd795303.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/10000124.html'},
            {value: '米家净水器', desc: '1600G', sub: false, newPrice: '5', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209201443_41fb0bb47d46874e982822c1b6e14b07.png?thumb=1&w=125&h=125&f=webp&q=90', url: 'https://item.mi.com/3751.html'}
          ],
          protective: [
            {value: '小米CC9&小米CC9美图定制版 标准高透贴膜', desc: '高清透亮，耐磨性强', sub: false, newPrice: '19', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5c200476bc9336d171931cb7ee2e4549.jpg', url: 'https://item.mi.com/10171.html'},
            {value: '小米CC9e 标准高透贴膜', desc: '高清透亮，耐磨性强', sub: false, newPrice: '19', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/24f8b0547a798b69be1b868872ddd80f.jpg', url: 'https://item.mi.com/10172.html'},
            {value: 'Redmi 7A标准高透贴膜', desc: '高清高透，精彩清晰可见', sub: false, newPrice: '19', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/958e872fe9930838e90de8acc9fffc28.jpg', url: 'https://item.mi.com/9891.html'},
            {value: '小仙女心愿手链保护壳', desc: '手链绕于指尖，仙气满满', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e5599ccd40bab44fb0f1722d150fe43f.jpg', url: 'https://item.mi.com/10177.html'},
            {value: '小米CC9 荧光色高透果冻保护壳', desc: '玩转多彩青春色', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0d8a74ade6b1b5fbd0c88b9679c63832.jpg', url: 'https://item.mi.com/10168.html'},
            {value: 'Redmi K20 / K20 Pro 怪力魔王保护壳', desc: '怪力魔王专属定制', sub: false, newPrice: '39', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8fb7f3be403cfcbe98576bee28c7cc25.jpg', url: 'https://item.mi.com/9889.html'},
            {value: '小米9 ARE U OK保护壳', desc: '一个与众不同的保护壳', sub: false, newPrice: '39', oldPrice: '49', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/39a5445afe8c48d9b92b2bf9d6d88a26.jpg', url: 'https://item.mi.com/9720.html'},
            {value: '小米9 RUOK保护壳', desc: '', sub: false, newPrice: '39', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/913e51883bf91da95c2f84b0776b95cf.jpg', url: 'https://item.mi.com/9721.html'}
          ],
          b: [
            {value: '米家互联网空调C1（一级能效）', desc: '变频节能省电，自清洁', sub: false, newPrice: '2599', oldPrice: '2799', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ce424d6fe93dfb74733b5838140b7ee.jpg', url: 'https://www.mi.com/airconditionc1/v1c1/'},
            {value: '米家空调', desc: '出众静音，快速制冷热', sub: false, newPrice: '1699', oldPrice: '1799', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg', url: 'https://www.mi.com/aircondition/f3w1/'},
            {value: '米家互联网洗烘一体机 Pro 10kg', desc: '智能洗烘，省心省力', sub: false, newPrice: '2999', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg', url: 'https://item.mi.com/9963.html'},
            {value: '小米电视4A 32英寸', desc: '人工智能系统，高清液晶屏', sub: false, newPrice: '699', oldPrice: '799', src: 'https://i8.mifile.cn/v1/a1/ef617fac-7489-436d-b74e-c43582f09633.jpg', url: 'https://www.mi.com/mitv4A/32/'},
            {value: 'Redmi全自动波轮洗衣机1A 8kg', desc: '一键操作，父母都爱用', sub: false, newPrice: '799', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg', url: 'https://item.mi.com/9509.html'},
            {value: '小米全面屏电视E55A', desc: '全面屏设计，人工智能语音', sub: false, newPrice: '1999', oldPrice: '2099', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg', url: 'https://www.mi.com/mitvall-screen/e55a/'},
            {value: '15.6" 四核i7 16G 独显 512G', desc: '全面均衡的国民轻薄本', sub: false, newPrice: '4899', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg', url: 'https://item.mi.com/10253.html'},
            {value: 'Air 13.3" 2019款 ', desc: '', sub: true, newPrice: '4699', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg', url: 'https://item.mi.com/10000142.html'}
          ],
          c: [
            {value: 'Redmi充电宝 10000mAh 标准版 白色', desc: '10000mAh大电量', sub: false, newPrice: '59', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg', url: 'https://item.mi.com/10317.html'},
            {value: 'Redmi充电宝 20000mAh 快充版', desc: '大容量，	可上飞机 ', sub: false, newPrice: '99', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg', url: 'https://item.mi.com/10318.html'},
            {value: '小米二合一数据线', desc: '两种接口，支持多种设备', sub: false, newPrice: '19.9', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg', url: 'https://item.mi.com/4833.html'},
            {value: '小米插线板 5孔位', desc: '多重安全保护', sub: false, newPrice: '39', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03.jpg', url: 'https://item.mi.com/5857.html'},
            {value: '小米无线充电器', desc: '快速充电，轻巧便携', sub: false, newPrice: '99', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/d7fd9ecdca3959beae3fb5db59aa9aff.jpg', url: 'https://item.mi.com/9009.html'},
            {value: '小米蓝牙耳机AirDots青春版', desc: '雅致简约，收纳充电盒', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg', url: 'https://item.mi.com/9016.html'},
            {value: '小米小爱蓝牙音箱 随身版', desc: '小巧便携，一键唤醒小爱', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg', url: 'https://www.mi.com/sound-carry/'},
            {value: '小米小爱触屏音箱', desc: '', sub: false, newPrice: '249', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg', url: 'https://www.mi.com/aispeaker-touch/'}
          ]
        }
      },
      goodsItem6: {
        boxTitle: '智能家居',
        isHot: true,
        vertical: false,
        tabList: [
          {value: '小爱音箱', type: 'hots', url: 'https://www.mi.com/p/3484.html'},
          {value: '门锁门铃', type: 'trip', url: ''},
          {value: '路由器', type: 'e', url: ''},
          {value: '智能设备', type: 'f', url: ''}
        ],
        listData: {
          promo: [
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec383d223d9f38f442268df684c526f6.png?thumb=1&w=293&h=375&f=webp&q=90', url: 'https://item.mi.com/10578.html'},
            {src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a272e865889798daea372ad757d814b7.jpg?thumb=1&w=293&h=375&f=webp&q=90', url: 'https://item.mi.com/8621.html'}
          ],
          hots: [
            {value: 'Xiaomi 智能音箱 Pro', desc: '连续指令语控，一句话操作多个智能...', sub: false, newPrice: '199', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502121404_8042622c171f6a496ac0d26fba7de806.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9732.html'},
            {value: 'Xiaomi 智能音箱', desc: '对话连贯自然，问答专业详实', sub: false, newPrice: '9.9', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504171431_a92bf9264ee607ab295190f7b72fb732.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi智能家庭屏Pro 8', desc: 'MIUI Home智能中控｜7500mAh电池长...', sub: false, newPrice: '399', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308031635_25822df375be098087de061a4800c594.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi智能家庭屏 10', desc: 'MIUI Home｜10.1" 高清大屏｜115°超...', sub: false, newPrice: '49', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202204191820_88e1f0fded3b4f05c5bdecf433a868cf.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi Sound Pro', desc: '7单元旗舰声学｜40W震撼低音｜Har...', sub: false, newPrice: '99', oldPrice: '129', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212101232_fd70d0b1df7909b4a38d5158378ef0c9.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米小爱音箱Play 增强版', desc: 'LED时钟显示，语音控制传统家电', sub: false, newPrice: '14.9', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/adce4500b997efaf6e3ff8e8150215f4.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi 智能家庭屏 Mini', desc: '桌面家庭中控｜小巧百搭设计｜小米...', sub: false, newPrice: '39.9', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410311606_918338eeb813ca16fd00866e56c6f80c.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Redmi小爱触屏音箱 8英寸', desc: '', sub: true, newPrice: '1499', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202402281114_456eabb800ebfd5a1d22795dbb563d53.png?thumb=1&w=125&h=125&f=webp&q=90'}
          ],
          trip: [
            {value: '90分框体旅行箱', desc: '专利轻量合金中框，轻盈坚固 ', sub: true, newPrice: '599', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d26d3a80dd1ab0c6a657f13cb234dade.jpg', url: 'https://item.mi.com/10000147.html'},
            {value: '小米商旅多功能双肩包 2', desc: '商务旅行多场景，切换无压力', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47ecc65d37065fde1e71b1b34326e741.jpg', url: 'https://item.mi.com/10181.html'},
            {value: '米家飞行员太阳镜 Pro', desc: '尼龙偏光，轻巧佩戴', sub: false, newPrice: '199', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg', url: 'https://item.mi.com/9732.html'},
            {value: '小米小背包', desc: '小身材大容量， 更精彩！', sub: false, newPrice: '29', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5f4677730c6be3ecab615795fb0e9c7.jpg', url: 'https://item.mi.com/8621.html'},
            {value: 'Free Tie 真皮板鞋 米家定制', desc: '做一双简单的板鞋', sub: false, newPrice: '129', oldPrice: '199', src: 'https://i8.mifile.cn/v1/a1/e2775107-da04-6611-3580-82227ffec369.png', url: 'https://www.mi.com/plateshoes/'},
            {value: '自动折叠伞', desc: '防泼水伞布，轻盈拒水', sub: false, newPrice: '94', oldPrice: '99', src: 'https://i8.mifile.cn/v1/a1/43549b8e-c8cd-0464-17ba-6be26f395ef0.jpg', url: 'https://www.mi.com/umbrella/'},
            {value: '最生活毛巾•青春系列', desc: '3秒吸水，杀菌无刺激', sub: false, newPrice: '19.9', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/1f4c867b5ccb878b43054f640636c872.jpg', url: 'https://item.mi.com/4917.html'},
          ],
          e: [
            {value: 'Redmi充电宝 10000mAh 标准版 白色', desc: '10000mAh大电量', sub: false, newPrice: '59', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg', url: 'https://item.mi.com/10317.html'},
            {value: 'Redmi充电宝 20000mAh 快充版', desc: '大容量，	可上飞机 ', sub: false, newPrice: '99', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg', url: 'https://item.mi.com/10318.html'},
            {value: '小米二合一数据线', desc: '两种接口，支持多种设备', sub: false, newPrice: '19.9', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg', url: 'https://item.mi.com/4833.html'},
            {value: '小米插线板 5孔位', desc: '多重安全保护', sub: false, newPrice: '39', oldPrice: '', src: 'https://i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03.jpg', url: 'https://item.mi.com/5857.html'},
            {value: '小米无线充电器', desc: '快速充电，轻巧便携', sub: false, newPrice: '99', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/d7fd9ecdca3959beae3fb5db59aa9aff.jpg', url: 'https://item.mi.com/9009.html'},
            {value: '小米蓝牙耳机AirDots青春版', desc: '雅致简约，收纳充电盒', sub: false, newPrice: '199', oldPrice: '', src: 'https://i8.mifile.cn/b2c-mimall-media/92af1f21293fabfbf2a112892b864925.jpg', url: 'https://item.mi.com/9016.html'},
            {value: '小米小爱蓝牙音箱 随身版', desc: '小巧便携，一键唤醒小爱', sub: false, newPrice: '49', oldPrice: '', src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg', url: 'https://www.mi.com/sound-carry/'},
            {value: '小米小爱触屏音箱', desc: '', sub: false, newPrice: '249', oldPrice: '', src: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg', url: 'https://www.mi.com/aispeaker-touch/'}
          ],
          f: [
            {value: '米家前置过滤器', desc: '简约时尚，多彩三色', sub: false, newPrice: '349', oldPrice: '499', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305191436_605f85cd7d3ffc75af9df18ed0f4780a.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9355.html'},
            {value: '米家即热管线机', desc: '净水好搭档，100度真沸腾', sub: false, newPrice: '49', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309141639_92f3a75834776ec9cbb8877a843d2510.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/10173.html'},
            {value: '米家即热净水器Q1000', desc: '专利即热技术，一分钟1升开水', sub: false, newPrice: '349', oldPrice: '499', src:  '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309041738_36e653df314c55ac3cc74930bfc87767.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9889.html'},
            {value: '米家净水器1000G', desc: '澎湃大水量，5年免换RO滤芯', sub: false, newPrice: '32.9', oldPrice: '69', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc7c9f2277e5181fc3d3ee2320246f26.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/9133.html'},
            {value: '米家净水器1000G Pro', desc: '米家净水器1000G Pro', sub: false, newPrice: '59', oldPrice: '69', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305231418_5d6ddd0efe84fa2915540de66848f377.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://www.mi.com/chongdianqi4kou'},
            {value: '米家净水器 1200G Pro', desc: '全新零陈水3.0，畅饮母婴级健康水', sub: false, newPrice: '16.9', oldPrice: '19.9', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312211522_7eb6e935ebc0c053d48fbf71fd795303.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/4053.html'},
            {value: '米家双核净水器 1200G Pro', desc: '主RO使用寿命8年', sub: true, newPrice: '18.9', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312211522_7eb6e935ebc0c053d48fbf71fd795303.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/10000124.html'},
            {value: '米家净水器', desc: '1600G', sub: false, newPrice: '5', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312211522_7eb6e935ebc0c053d48fbf71fd795303.png?thumb=1&w=250&h=250&f=webp&q=90', url: 'https://item.mi.com/3751.html'}
          ]
        }
      }
    }
  },
  components: {
    'Poster': Poster,
    'GoodsBox': GoodsBox
  }
}
</script>

<style scoped lang="less">
.goods-sale {
  position: relative;
  width: 100%;          /* 宽度占满全屏 */
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-container {
    width: 1226px; 
    margin: 0 auto;
  }
}
</style>