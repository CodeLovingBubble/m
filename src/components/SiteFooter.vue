<template>
  <div class="site-footer">
    <ul class="site-service">
      <li class="service-item" v-for="(item, index) in serviceInfo" :key="index">
        <a :href="item.url" target="_blank">
          <i :class="item.font"></i>
          <span>{{ item.value }}</span>
        </a>
      </li>
    </ul>
    <div class="site-link">
      <div class="links">
        <div class="link-container" v-for="(list, key) in serviceLink" :key="key">
          <span class="link-title">{{ list.value }}</span>
          <ul class="link-list">
            <li class="link-item" v-for="(item, index) in list.subLinks" :key="index">
              <a :href="item.url" @click="showWindow" v-if="item.value === '官方微信'">
                {{ item.value }}
              </a>
              <a :href="item.url" target="_blank" v-else>
                {{ item.value }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="contact-column">
        <div class="link-contact">
          <p class="phone">950816</p>
          <p class="desc">8:00-18:00（仅收市话费）</p>
          <a href="https://support.kefu.mi.com/" target="_blank">
            <i class="iconfont icon-icon-test1"></i>
            <span>人工客服</span>
          </a>
        </div>
        <div class="link-contact">
          <p class="phone">950816</p>
          <p class="desc">8:00-18:00（仅收市话费）</p>
          <p class="desc1">手机适用于：Xiaomi MIX Fold系列、</p>
          <p class="desc2">MIX Flip系列、数字12系列及以上</p>
          <p class="desc3">电视适用于：98寸、100寸电视</p>
          <a href="https://support.kefu.mi.com/" target="_blank">
            <i class="iconfont icon-icon-test1"></i>
            <span>人工客服</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义数据
const serviceInfo = ref([
  { value: '预约维修服务', font: 'iconfont icon-buoumaotubiao46', url: 'https://www.mi.com/static/fast/' },
  { value: '7天无理由退货', font: 'iconfont icon-7tianwuliyoutuihuo', url: 'https://www.mi.com/service/exchange#back' },
  { value: '15天免费换货', font: 'iconfont icon-15tianwuliyoutuihuo', url: 'https://www.mi.com/service/exchange#back' },
  { value: '满69元包邮', font: 'iconfont icon-liwu', url: 'https://www.mi.com/service/buy/postage/' },
  { value: '1100余家售后网点', font: 'iconfont icon-icon-test', url: 'https://www.mi.com/static/maintainlocation/' }
])

const serviceLink = ref([
  {
    value: '选购指南', subLinks: [
      { value: '手机', url: 'https://www.mi.com/service/account/Account%20registration/' },
      { value: '电视', url: 'https://www.mi.com/service/buy/SalesTime/' },
      { value: '平板', url: 'https://www.mi.com/service/order/sendprogress/' },
      { value: '穿戴', url: 'https://www.mi.com/service/order/sendprogress/' },
      { value: '耳机', url: 'https://www.mi.com/service/order/sendprogress/' },
      { value: '家电', url: 'https://www.mi.com/service/order/sendprogress/' },
      { value: '路由器', url: 'https://www.mi.com/service/order/sendprogress/' },
      { value: '音箱', url: 'https://www.mi.com/service/order/sendprogress/' },
      { value: '配件', url: 'https://www.mi.com/service/order/sendprogress/' },
    ]
  },
  {
    value: '服务中心', subLinks: [
      { value: '申请售后', url: 'https://www.mi.com/service/exchange' },
      { value: '售后政策', url: 'https://www.mi.com/service/exchange' },
      { value: '服务价格', url: 'https://www.mi.com/service/' },
      { value: '订单查询', url: 'https://www.mi.com/c/service/download/' },
      { value: '以旧换新', url: 'https://order.mi.com/service/imei' },
      { value: '保障服务', url: 'https://order.mi.com/service/imei' },
      { value: '防伪查询', url: 'https://order.mi.com/service/imei' },
      { value: 'F 码通道', url: 'https://www.mi.com/order/fcode' }
    ]
  },
  {
    value: '线下门店', subLinks: [
      { value: '小米之家', url: 'https://www.mi.com/c/xiaomizhijia/' },
      { value: '服务网点', url: 'https://www.mi.com/static/maintainlocation/' },
      { value: '授权体验店/专区', url: 'https://www.mi.com/static/familyLocation/' }
    ]
  },
  {
    value: '关于小米', subLinks: [
      { value: '了解小米', url: 'https://www.mi.com/about/' },
      { value: '加入小米', url: 'https://hr.xiaomi.com/' },
      { value: '投资者关系', url: 'https://company.mi.com/zh-cn/ir/indexContent/index.html' },
      { value: 'ESG与可持续发展', url: 'https://hr.xiaomi.com/' },
      { value: '廉洁举报', url: 'https://hr.xiaomi.com/' }
    ]
  },
  {
    value: '关注我们', subLinks: [
      { value: '新浪微博', url: 'https://weibo.com/xiaomishangcheng' },
      { value: '官方微信', url: 'javascript:void(0);' },
      { value: '联系我们', url: 'https://www.mi.com/about/contact/' },
      { value: '公益基金会', url: 'https://www.mi.com/about/contact/' }
    ]
  }
])

</script>

<style scoped lang="less">
.site-footer {
  position: relative;
  width: 1226px;
  height: 450px;
  margin: 0 auto;

  .site-service {
    display: flex;
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;

    .service-item {
      width: 19.8%;
      height: 25px;
      border-left: 1px solid #e0e0e0;
      font-size: 16px;
      line-height: 25px;
      text-align: center;

      &:first-child {
        border-left: none;
      }

      a {
        color: #616161;
        transition: color .2s;

        &:hover {
          color: #ff6709;
        }

        i {
          margin-right: 6px;
          font-size: 24px;
          line-height: 24px;
          vertical-align: -4px;
        }

        span {
          font-size: 16px;
          line-height: 25px;
        }
      }
    }
  }

  .site-link {
    display: flex;
    padding: 40px 0;

    .links {
      display: flex;
      margin-left: 140px;
      flex: 1;

      .link-container {
        width: 160px;
        height: 112px;
        margin: 0;
        text-align: left;

        .link-title {
          display: block;
          margin: -1px 0 26px;
          font-size: 14px;
          line-height: 1.25;
          color: #424242;
        }

        .link-list,
        .link-item {
          margin: 10px 0 0;
          font-size: 12px;

          a {
            color: #757575;
            transition: color .2s;

            &:hover {
              color: #ff6709;
            }
          }
        }
      }
    }

    .contact-column {
      display: flex;
      flex-direction: column;/* 改为竖直方向 */
      width: 256px;
      margin-left: 20px;

      .link-contact {
        width: 100%;
        height: auto;
        text-align: center;
        color: #616161;
        padding: 10px 0;

        &:first-child {
          border-left: 1px solid #e0e0e0;
        }

        &:last-child {
          border-left: none;
        }

        .phone {
          margin: 0 0 5px;
          margin-bottom: 10px;
          font-size: 22px;
          line-height: 1;
          color: #ff6700;
        }

        .desc {

          &,
          &1,
          &2,
          &3 {
            margin: 0 0 16px;
            font-size: 12px;
            white-space: nowrap;
            line-height: 5px;
          }

          &1 {
            margin-left: 50px;
          }

          &2 {
            margin-left: 35px;
          }

          &3 {
            margin-left: 25px;
          }
        }

        a {
          font-weight: normal;
          display: inline-flex;
          justify-content: center;
          width: 118px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          border: 1px solid #ff6700;
          background: #fff;
          color: #ff6700;
          transition: all .4s;

          &:hover {
            color: #fff;
            background-color: #f25807;
            border-color: #f25807;
          }
        }
      }
    }
  }
}
</style>