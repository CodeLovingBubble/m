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
        boxTitle: '手机',// 分类标题
        isHot: false,// 非热门分类（头部显示"查看更多"）
        vertical: true,//是否显示浏览更多卡片
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
            {value: '小米电视S Pro Mini LED系列', desc: '288Hz超高刷、4+64G大存储', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410141638_887088ef2eca3b0838b03fb1f900f8e2.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米电视 S Mini LED系列（55...', desc: 'Mini LED 高分区背光、1200nits峰值亮度', sub: false, newPrice: '1999', oldPrice: '2099', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403221733_1c185c56d12ee1dd5b07d5ea08205f1a.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Redmi 电视MAX系列', desc: '高刷大内存，疾速超大屏', sub: false, newPrice: '2999', oldPrice: '3999', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404081014_8c291e7e7ef8568fc5fd7d23f9656e88.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: ' Redmi智能电视 X 2025款（55/...', desc: 'FHD全高清屏，人工智能语音', sub: false, newPrice: '1299', oldPrice: '1499', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410231741_f45f1f572f2896f6bf2920c26ca41267.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: ' Redmi智能电视 A Pro系列', desc: '高清原色画质|智能流畅体验', sub: false, newPrice: '1699', oldPrice: '1799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409051432_82b3c7307d56a4cdc831598ad69e1d7f.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Redmi A系列电视 2025款', desc: '品质全面屏', sub: false, newPrice: '2699', oldPrice: '2999', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404081016_2731f0bbbc26d20088666c3bdca063e4.png?thumb=1&w=250&h=250&f=webp&q=90'},
          ],
          kkk: [
            {value: '巨省电 小米空调 1.5匹新1级能效 ', desc: '强劲制冷 | 高效节能 | 智能互联', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1664285178.54196051.jpg?thumb=1&w=250&h=250'},
            {value: 'alt="巨省电 小米空调 大1匹新1级能效"', desc: '温湿双控 | 全直流变频 | 宽温域运行', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1656418637.39296454.jpg?thumb=1&w=250&h=250'},
            {value: '巨省电Pro 1.5匹超一级能效 米家空调', desc: '新一代巨省电 Pro新升级', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404040209_2ce9e174c219fb98ce3294307958d210.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家新风空调 1.5匹新1级能效 2023', desc: '打造室内天然氧吧|4重深度净化', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310081508_18b8d7deaaca3515a957de09c1e18703.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '巨省电Pro 立式3匹 超一级能效 米家空调', desc: '硬核飓风 智能省电', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261426_bd208c1dc45f81ca3970374dabb43c6d.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '上出风Pro 1.5匹超一级能效（冰晶白）米家空调', desc: 'Pro 上出风 1.5匹超一级能效 冰晶白...', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412191843_6fb83cbc9c22ffb8d1bd8b55dd9c770a.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '巨省电 小米空调 立式3匹新1级能效', desc: '高效节能 | 立体送风 | 智能互联', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1605536123.55818348.jpg?thumb=1&w=250&h=250'},
            {value: '巨省电 2匹 新1级 米家空调', desc: '巨省电 2匹 新1级 米家空调', sub: false, newPrice: '699', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209221935_9f4dbcd4bacd914a9990170260a9775d.png?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
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
            {value: '小米手环10', desc: '2.0mm超窄四等边，满屏高光|睡眠健...', sub: false, newPrice: '1999', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506261228_d3694357fe29fdac9e23250e61a73972.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米手环10 NFC版', desc: '2.0mm超窄四等边，满屏高光|睡眠健...', sub: false, newPrice: '1999', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506261228_d3694357fe29fdac9e23250e61a73972.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi Watch S4 41mm', desc: '41mm时尚小表径', sub: false, newPrice: '399', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506261217_297643bbade97128b0291d539114c486.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米AI眼镜', desc: '经典D型镜框设计，潮流百搭|电致变...', sub: false, newPrice: '449', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506261447_ac99f8d16c58477d25a4b9856ca36561.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'REDMI Watch 5', desc: '2.07英寸高刷高亮大屏 | 24天超长续航...', sub: false, newPrice: '769', oldPrice: '799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi Watch S4', desc: '百变表圈 | 旋转表冠', sub: false, newPrice: '3499', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410291552_19d4f0c5cf4b4cedc7443bb2963b9ffc.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米手环9 Pro', desc: '超窄四等边大屏 | 金属机身 | 21天超长...', sub: false, newPrice: '199', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410291455_6a011d078acca2c8d21b5ece4e680206.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Redmi 手环 3', desc: '', sub: false, newPrice: '199', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410241417_9ef2404939fdf794fda9cd16953dd28c.png?thumb=1&w=125&h=125&f=webp&q=90'}
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
            {value: '米家扫拖机器人 M40', desc: '双机械臂深度扫拖，12000Pa防缠绕除尘', sub: false, newPrice: '69', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409231912_25d33be2da277d1a496108e26bd7dbd3.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家扫拖机器人 H40', desc: '实时毛发防缠绕，边扫边集尘更轻巧', sub: false, newPrice: '299', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202408221046_bb4ae5a1810a48da403a0032494c0b37.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家全能扫拖机器人 M30 S', desc: '机械臂贴边清洁，毛发实时防缠绕', sub: false, newPrice: '299', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403221728_bb09314672ebb191d2a6eee63dcb09b1.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家全能扫拖机器人M30 Pro', desc: '创新「毛发切割」，AI高能扫拖清洁', sub: false, newPrice: '299', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311251129_94eabb38d397de731c90cd014b104afd.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家全能扫拖机器人2', desc: '托管式智能扫拖，一机包揽全屋地面...', sub: false, newPrice: '299', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307260056_e9953630b3f39fa0825313bfd5bef057.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家扫拖机器人 3C增强版', desc: '家庭地面清洁优选', sub: false, newPrice: '299', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307211847_1c77463c39e656ec5478b8af16fdac5d.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家扫拖机器人3', desc: '强吸尘强擦地，清洁再升级', sub: false, newPrice: '299', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308221138_8be174f9f068341d55b43aea9372a2db.png?thumb=1&w=250&h=250&f=webp&q=90'},
          ],
          aaa: [
            {value: '米家空气净化器 5 Pro', desc: '双风机强动力，大户型专属空净', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411291711_f3aec768e1f8c905c047b0c8c35aff35.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家空气净化器 5S', desc: '可监测可去除，超能除醛专家', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403251650_b8232ba4d92cf2448bcf6b833789a8f4.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家空气净化器 5', desc: '超强除敏，深度杀菌，长效使用', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407291920_57ed408080247c8466c2a00352b25602.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家空气净化器 4 Pro', desc: '除醛抗菌升级', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202501211521_11e9ccb49866c30bd5af3e2b8d0ce635.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家全效空气净化器', desc: '分解式除醛，超能净化旗舰', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304101504_22b0ebf11c5a60a76ba6de0a1c7fd2d5.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家全效空气净化器  Ultra 增强版', desc: '专业、全能的旗舰空净', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407080947_1fcb0286dd86d512996d86c85d65f06a.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家宠物空气净化器', desc: '专业净味除毛除敏，一机解决养宠空...', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202503311746_9013806068a87372508b44a16a74c8d5.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家空气净化器 4 Lite', desc: '', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202501211512_0a6d9a580c0af976881ff284b0e5e2d5.png?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
          bb: [
            {value: '米家无线洗地机4 Pro', desc: '21000Pa强悍大吸力，水渍快干防缠毛', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504221030_8508d74a1c44b5618257f3d1a9eca348.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家有线吸尘器', desc: '一机洁净全屋 畅享快净体验', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202501021517_8c986cb26ee198726017cc76f5fc1172.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无线吸尘器 3 基站版', desc: '创新智能集尘基站，260AW暴风吸力', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202503261634_4d49c9af83301fab0078adbf277c4a23.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无线洗地机3 Max', desc: '180°躺平杀菌洗烘，五合一全屋吸尘除螨*', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405161450_80a6da4faf22104ca9ba7f47ff1b43e4.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无线吸尘器 3', desc: '260AW强效大吸力，深度除尘防缠毛', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504151650_5656e1e67af3aadc09fa77949b52dc6b.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家随手吸尘器', desc: '干净随手吸', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdd9d216b401933efaa304b64901c087.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家除螨仪2 Pro', desc: '双杯过滤持久畅吸，高效尘螨清洁', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504141540_edce402ceaa3705660373a4057b12977.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无线洗地机3 Pro', desc: '', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202403291113_d944f7fc0589038389838a7516849655.png?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
          cc: [
            {value: '米家无雾加湿器3[800]', desc: '水润速达，静享舒适', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409121017_d7578337bdbb9a6c7a1e1f08c903207b.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无雾加湿器3[400]', desc: '纯净健康加湿快，抗菌防霉更安心', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308171531_9154f16640713d1b4097d3c2a6e2eacf.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无雾加湿器3[1200]', desc: '1200mL/h加湿量｜中家院母婴认证｜UV-C 除菌', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281412_3e563b465aa86e2ce99ef7b4770a6f58.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能除湿机 22L', desc: '强劲除湿，静享干爽', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411101828_5a91bf92aa15eee71cd608f3a4a3c90e.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能除湿机13L', desc: '小身材大能量，静无止境', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312211148_2d316b997d5340a051f9d0bbd58b9070.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能变频除湿机 30L', desc: '双变频除湿技术，10分钟还原室内干爽', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411251423_4d783cbcbce16fb11d4b00ea7a0d7a46.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能除湿机 50L', desc: '专业除湿，百平覆盖', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411101829_146d1487ff67b8772964479ab932b053.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家无雾加湿器 3 Pro', desc: '', sub: false, newPrice: '2599', oldPrice: '2799', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308181108_d185ff15f837f83b7f01d5f5cf00cd74.png?thumb=1&w=125&h=125&f=webp&q=90'},
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
            {value: '米家智能燃气灶S2 5200W/4800W', desc: '5200W/4800W猛火 | 双环聚能火焰 | 可调节', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404191516_902bcc04fce7b28e7f1dfca16b2b978e.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能定时灶S2 5200W /4800W', desc: '5200W/4800W爆炒大火才够味 | 68%超高热效', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202404191616_fe7ae22b9461ef93ba2f201cf5556c34.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能平嵌侧吸油烟机S1', desc: '小巧机身 | 25立方大吸力 | 烟灶联动', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202402281947_86bee5b59f9545b877f439dc19bc33e2.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能顶侧双吸油烟机S2', desc: '25m³/min大风量 | 1000Pa大静压', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409051611_5018d2d969fbae18669ff190adb9c5fb.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能欧式烟机S2', desc: '23m³/min大吸力｜500pa静压｜智能干洗', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202311281743_e6a0c14843e90f84645acee681242573.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能净烟机S2 白色', desc: '下厨不留味｜无油网免拆洗｜真白不惧黄', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202401051753_cdbe1f33237f37949209a05fdaa386f5.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能净烟机P1', desc: '高速气旋强锁烟， 劲速气流高效净吸，无油网设计免拆洗', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208111035_1430e125873d6ffe9615d0551ef8a136.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能净烟机P2', desc: '', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412121641_490cb62e3ab734571249db2204ee6234.png?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
          b: [
            {value: '米家智能电饭煲 微压版 3L', desc: '看得见的真微压', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b5e7b8356420596e2116ca901e11cb7b.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能电压力锅5L', desc: '一锅双胆，9挡调节口感', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d96feb0267ddea24666b32a28984a83b.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家电饭煲C1', desc: '快慢收放自如，小巧身材内有乾坤', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cb309bfab923dd888a569e1b62e44ba.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能电压力锅2.5L', desc: '煮饭快，焖炖煲煮一机多能', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9f6b78a4e55001a0dffed85c099bfb0.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能压力IH电饭煲1S 3L', desc: '压力IH加热 智能烹饪 ', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/07390d2d89220f2e3f06710360ec1077.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家透明蒸汽电饭煲 4L', desc: '可视化烹饪 | 无涂层玻璃内胆 | 沥汤蒸饭&慢炖', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209261417_25cc1c7fffc0d1d81e4db1b641db76ca.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能小饭煲 2', desc: '28分钟超快饭 体积更小', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202205201909_0c600f8b38a0c5de1354c613dffa28b4.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能快煮电饭煲5L', desc: '', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202208301420_72bbba99dfeac7f5c818a63e0e5f24e4.jpg?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
          c: [
            {value: '米家智能蒸烤箱', desc: '30L大容积， 蒸烤烘炸炖一机多用', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0fabb6c16cbadaf300da4a2c2ffb9afa.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家微波炉', desc: 'APP操控，精选食谱', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b6a47f33993a59ff3a5c1112d484eed.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家电烤箱', desc: '全能烘焙体验', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1612c93ad4756215774a0dbec7a81bb2.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能微烤一体机', desc: '能烧烤的微波炉', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb1e375d2beca06b684650de635520df.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能嵌入式蒸烤一体机 S1', desc: '蒸烤炸一机多能，释放更多厨房空间', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d13eee83c8e9487256ad14befc4f7d46.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家智能空气炸烤箱 30L', desc: '30L超大容量 | 健康空气炸 | 专业烘焙烤 ', sub: false, newPrice: '19', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209161102_f850e222a57495748e195022188597a3.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
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
            {value: '小米智能门锁M30 掌静脉版', desc: '全新掌静脉识别技术，回家伸手秒...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409131048_fbe02a2c27954550f5d1afd6fc92e6a4.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁M30 人脸识别版', desc: '3D结构光人脸识别技术，刷脸开锁不...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409131048_fbe02a2c27954550f5d1afd6fc92e6a4.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁2 指静脉版', desc: '指纹、指静脉双生物识别 | 全...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202406061153_4f45dbf4c5405c2af01b93f5aba42d79.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁2 人脸识别版', desc: '3D结构光人脸识别技术，回家刷脸秒...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407081357_dc2a1e3322e3a9ae0de59e91908b5bf9.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁E30', desc: '指纹识别开锁，告别钥匙畅享便捷', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409231837_2760b40af32af2170132062f4cc66c95.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁E30 大屏猫眼版', desc: '指纹、密码、NFC等9种开锁方式，告...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410211526_1980c2a43dd8cb4520966121a76b585c.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁2 Pro', desc: '3D结构光人脸识别技术，刷脸秒开不', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202408121007_5bc7d95f980a406792ab43cd5bbc34fe.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能门锁M30 Pro', desc: '', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407021417_504b38c0bd56bfca006929d5bf60a3d7.png?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
          e: [
            {value: 'Xiaomi路由器AX3000T', desc: '3000兆级无线速率，高性能信号放大器', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202308231437_b16fa069a2e0f6a1919d8c3e32ec5775.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi全屋路由 BE3600Pro 套装', desc: '内置小米中枢网关，出厂预配对，智...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410101700_eba27222907804ddd11de184baca2269.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi路由器 BE6500 Pro', desc: '6500兆级 | 全2.5G网口 | 内置中枢网关', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310230948_703865651de2f6642bac93a3290c0081.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi全屋路由 BE3600Pro', desc: '全屋覆盖，智能连接，内置蓝牙网关', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410101704_49fda1a1f6c3583774e754d97cbeed6b.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi路由器 BE3600 2.5G版', desc: '全新高通4核处理器', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202401261857_b006b4767997446995533a8a2dcaa2b5.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家洗烘套装Pro 双区洗 热泵烘 10kg+10kg', desc: '创新形态双滚筒，同洗同烘', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202505071039_20c2b23648d794e1af0b1bfe5f97a833.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi万兆路由器', desc: '三频分立，高速并发 | 全链路万兆网络...', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202211301015_c2046f07522a47c70604dae66eee064a.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: 'Xiaomi路由器 BE7000', desc: '', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202305041011_3fad843a46ce34c500f105203ee88735.png?thumb=1&w=125&h=125&f=webp&q=90'},
          ],
          f: [
            {value: '小米智能家庭面板', desc: '智能生活，一屏掌控', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407171918_606b1f09ea31cb2567dd799d8f251804.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能开关', desc: '单火零火皆适配，点亮智能新生活 ', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202505071058_43a9ac0562428cdf99c833d262c3435e.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能墙壁插座Pro', desc: '双协议快充 传统家电秒变智能', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310071112_93d23f830ed0bc71505f44da01286eb1.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米天然气卫士', desc: '小米天然气卫士', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0130f299091fff0d471720d9a6d3319f.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米中枢网关', desc: '智能家居连接控制中枢', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6380a8e45f350049e4b26188ab6911e.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '米家空调伴侣2', desc: '传统空调轻松智能化', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74f5975a77c6d9fcf67e294c47561994.jpg?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米智能开关Pro', desc: '单零火兼容设计 摆脱布线束缚', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407171920_b9ff4876b9dbd6bd3b40e60e77741fec.png?thumb=1&w=250&h=250&f=webp&q=90'},
            {value: '小米人在传感器', desc: '', sub: false, newPrice: '59', oldPrice: '', src: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202405101023_c11ab8c843aceede738c9c7f0f3a989d.png?thumb=1&w=125&h=125&f=webp&q=90'},
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