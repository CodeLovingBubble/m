<template>
    <div class="phone-list-container">
        <div class="shou">
            <p @click="$router.push('/')">首页</p>
            <p>></p>
            <p @click="$router.go(0)" style="cursor:pointer">全部结果</p>
        </div>

        <!-- 筛选标签栏 -->
        <div class="filter-tags">
            <div class="container">
                <div class="tag-item active" @click="toggleAllFilters">全部</div>
                <div class="tag-item" v-for="(tag, i) in tags" :key="i" @click="toggleFilter(tag.value)">
                    {{ tag.name }}
                </div>
            </div>
        </div>

        <!-- 筛选面板 -->
        <div class="filter-panel" v-if="showFilters">
            <div class="container">
                <!-- 使用filter-container包装每个筛选组 -->
                <div class="filter-container" v-for="(group, index) in filterGroups" :key="index">
                    <!-- 高级选项组（带二级选项卡） -->
                    <template v-if="group.name === '高级选项'">
                        <div class="filter-group" @mouseenter="showSubPanel(index)" @mouseleave="hideSubPanel(index)"
                            @mousemove="handleOptionHover(group, index, $event)">

                            <div class="filter-title">{{ group.name }}</div>

                            <div class="filter-options">
                                <!-- 普通选项 -->
                                <div class="filter-option" v-for="(option, i) in group.options" :key="i"
                                    :class="{ 'has-sub': option.subOptions }">
                                    {{ option.name }}
                                </div>

                                <!-- "更多" 按钮 -->
                                <div class="filter-option more" :class="{ 'expanded': group.isExpanded }"
                                    v-if="group.moreOptions.length > 0 && group.allowExpand !== false"
                                    @click.stop="toggleMoreOptions(index)">
                                    更多
                                </div>

                                <!-- 更多选项 -->
                                <div class="more-options-container" v-if="group.isExpanded">
                                    <div class="filter-option" v-for="(option, i) in group.moreOptions"
                                        :key="'more-' + i" :class="{ 'has-sub': option.subOptions }">
                                        {{ option.name }}
                                    </div>
                                </div>
                            </div>

                            <!-- 二级选项面板 -->
                            <div class="sub-options-panel"
                                v-if="group.showSubPanel && group.activeOptionIndex !== null && getActiveSubOptions(group).length">
                                <div class="sub-option" v-for="(subOpt, j) in getActiveSubOptions(group)" :key="j"
                                    @click="selectSubOption(group, index, subOpt)">
                                    {{ subOpt }}
                                </div>
                            </div>
                        </div>
                    </template>

                    <!-- 其他筛选组（保持原样） -->
                    <template v-else>
                        <div class="filter-group">
                            <div class="filter-title">{{ group.name }}</div>
                            <div class="filter-options">
                                <!-- 普通选项 -->
                                <div class="filter-option" v-for="(option, i) in group.options" :key="i">
                                    {{ option }}
                                </div>

                                <!-- "更多" 按钮 -->
                                <div class="filter-option more" :class="{ 'expanded': group.isExpanded }"
                                    v-if="group.moreOptions.length > 0 && group.allowExpand !== false"
                                    @click="toggleMoreOptions(index)">
                                    更多
                                </div>

                                <!-- 更多选项 -->
                                <div class="more-options-container" v-if="group.isExpanded">
                                    <div class="filter-option" v-for="(option, i) in group.moreOptions" :key="'more-' + i">
                                        {{ option }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- 排序栏（包含收货地址和筛选选项） -->
        <div class="sort-bar">
            <div class="container">
                <div class="sort-options">
                    <div class="sort-item" :class="{ active: sortType === 'default' }" @click="changeSort('default')">
                        综合
                        <i :class="sortType === 'default' ? (sortAsc ? 'asc' : 'desc') : ''"></i>
                    </div>
                    <div class="sort-item" :class="{ active: sortType === 'sales' }" @click="changeSort('sales')">
                        销量
                        <i :class="sortType === 'sales' ? (sortAsc ? 'asc' : 'desc') : ''"></i>
                    </div>
                    <div class="sort-item" :class="{ active: sortType === 'price' }" @click="changeSort('price')">
                        价格
                        <i :class="sortType === 'price' ? (sortAsc ? 'asc' : 'desc') : ''"></i>
                    </div>
                </div>

                <!-- 右侧筛选控件（收货地址和复选框） -->
                <div class="filter-controls">
                    <div class="location">
                        <label class="location-label">收货地</label>
                        <select class="location-select">
                            <option value="beijing">北京 北京市</option>
                            <option value="shanghai">上海 上海市</option>
                            <!-- 可继续扩展其他地址 -->
                        </select>
                    </div>
                    <div class="checkbox-group">
                        <label class="checkbox-item">
                            <input type="checkbox" />
                            促销
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" />
                            分期
                        </label>
                        <label class="checkbox-item">
                            <input type="checkbox" />
                            仅看有货
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- 商品列表 -->
        <div class="goods-grid">
            <div class="container">
                <div class="goods-item" v-for="(item, i) in paginatedGoods" :key="i">
                    <a :href="item.url" class="goods-link">
                        <img :src="item.img" :alt="item.name" class="goods-img">
                        <div class="goods-tag" v-if="item.tag">{{ item.tag }}</div>
                        <h3 class="goods-name">{{ item.name }}</h3>
                        <p class="goods-desc">{{ item.desc }}</p>
                        <div class="goods-price">
                            <span class="new-price">{{ item.price }}</span>
                            <span class="old-price" v-if="item.oldPrice">{{ item.oldPrice }}</span>
                        </div>
                        <button class="add-cart">加入购物车</button>
                    </a>
                </div>
            </div>
        </div>
        <!-- 分页导航 -->
        <div class="pagination">
            <div class="container">
                <!-- 仅保留上一页（改为<）和下一页（改为>） -->
                <button @click="currentPage--" :disabled="currentPage === 1" class="prev-next-btn">
                    &lt;
                </button>
                <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                    :class="{ active: currentPage === page }">
                    {{ page }}
                </button>
                <button @click="currentPage++" :disabled="currentPage === totalPages" class="prev-next-btn">
                    &gt;
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 筛选标签
const tags = [
    { name: '红米手机', value: 'redmi' },
    { name: '小米手机', value: 'xiaomi' }
]
const activeTag = ref('all')

// 筛选面板控制
const showFilters = ref(false)
const toggleFilter = (tagValue) => {
    activeTag.value = tagValue
    showFilters.value = true
}
const toggleAllFilters = () => {
    activeTag.value = 'all'
    showFilters.value = !showFilters.value
}

// 筛选组数据
const filterGroups = ref([
    {
        name: '拍照像素',
        options: ['四摄像头', '三摄像头', '双摄像头', '高清拍摄'],
        moreOptions: [], // 无更多选项
        allowExpand: false // 禁止展开（隐藏更多按钮）
    },
    {
        name: '屏幕大小',
        options: [
            '外屏：4.01英寸|内屏…',
            '外屏：6.56英寸|内屏…',
            '外屏：6.56英寸｜内…',
            '6.36英寸',
            '6.55英寸',
            '6.67英寸',
            '6.67 英寸'
        ],
        moreOptions: [
            '6.73英寸', '6.74英寸', '6.79英寸',
            '6.83英寸', '6.88英寸', '7.92英寸'
        ],
        isExpanded: false
    },
    {
        name: '运行内存',
        options: [
            '最高6GB', '最高8GB', '最高12GB',
            '最高16GB', '最高24GB', '最高24（K70 至尊冠…', '12GB'
        ],
        moreOptions: [], // 无更多选项
        allowExpand: false // 禁止展开（隐藏更多按钮）
    },
    {
        name: '电池续航',
        options: [
            '4050mAh', '4500mAh', '4610mAh',
            '4700mAh', '4780mAh', '4800mAh', '4880mAh'
        ],
        moreOptions: [
            '5000mAh', '5030mAh', '5100mAh', '5110mAh',
            '5160mAh', '5165mAh', '5300mAh', '5400mAh',
            '5500mAh', '6000mAh', '6100mAh', '6200mAh',
            '6550mAh', '7410mAh', '7550mAh'
        ],
        isExpanded: false
    },
    {
        name: '高级选项',
        options: [
            {
                name: 'CPU型号',
                subOptions: [
                    '天玑7025-Ultra', '天玑 6100+', '第三代骁龙®8s移动平台', '第三代骁龙®8s', 
                    '第二代骁龙4 领先版', '天玑 9300+', '第三代骁龙®8移动平台', '第二代骁龙®4',
                    '天玑7300-Ultra', '第三代骁龙7s', '第三代骁龙8', '骁龙8至尊版',
                    '骁龙8至尊版移动平台', '天玑 8400-Ultra', 'MediaTek Helio G81-Ultra',
                    '骁龙8至尊', '第四代骁龙8s','第四代骁龙®8s移动平台','玄戒O1',
                    '骁龙8至尊版移动平台','天玑 8300-Ultra','骁龙855+','骁龙7',
                    '第二代骁龙 7s','第二代骁龙8','天玑8200-Ultra','第二代骁龙8 领先版',
                    '天玑 6080','天玑9400+'
                ]
            },
            {
                name: 'CPU主频',
                subOptions: [
                    '最高2.2GHz', '最高3.9GHz', '最高3.21GHz','最高主频 2.0GHz',
                    '最高3.25GHz','最高4.32GHz','最高主频 3.4GHz','最高2.3GHz',
                    '最高主频 3.35GHz','最高主频 3.3GHz','最高主频 3.19GHz','最高3.3GHz',
                    '最高3.36GHz','最高3.0GHz','最高3.1GHz','最高3.19GHz',
                    '最高2.4GHz','最高2.5GHz','最高3.73GHz','4.32GHz',
                ]
            },
            {
                name: '前置摄像头',
                subOptions: [
                    '外屏：2000万像素丨内屏：2000万像素', '500万像素', '800万像素','1600万像素',
                    '2000万像素','3200万像素','3200万像素+3200万像素','5000万像素',
                ]
            },
            {
                name: '屏幕',
                subOptions: [
                    'OLED', 'AMOLED', 'LCD','外屏：柔性AMOLED丨内屏：Pol-less Plus',
                    '第二代 1.5K 高光护眼屏','第二代高端 2K 中国屏','第二代高端2K 中国屏','全等深微曲屏',
                    '全新 1.5K 旗舰护眼直屏','OLED柔性直屏','柔性OLED','1.5K 高亮高刷屏',
                ]
            },
            {
                name: '屏幕分辨率',
                subOptions: [
                    '外屏：2520×1080丨内屏：2160×1916', '外屏：1392×1208|内屏：2912×1224', '外屏：2520×1080|内屏2488×2224','1600x720',
                    '1640x720','2088×2250','2400×1080','2400x1080',
                    '2400*1080','2460x1080','2670×1200','2712*1220',
                    '2712 x 1220','2712x1220','2750×1236','2750*1236',
                    '2772x1280','2772*1280','3200*1440','3200x1440',
                    '3200×1440',
                ]
            },
            {
                name: '存储容量',
                subOptions: [
                    '最高256GB', '最高128GB', '最高512GB','最高1024GB',
                    '512GB'
                ]
            },
            {
                name: 'NFC',
                subOptions: ['支持', '不支持']
            }
        ],
        moreOptions: [
            {
                name: '红外遥控',
                subOptions: [
                    '支持', '不支持',
                ]
            },
            {
                name: '指纹识别',
                subOptions: [
                    '侧边指纹', '屏下指纹','光学屏下指纹','支持',
                    '超声波指纹','屏下超声波指纹识别','3D超声波指纹',
                ]
            },
            {
                name: '机身厚度',
                subOptions: ['普通厚度', '薄', ]
            },
            {
                name: '网络类型',
                subOptions: ['双模5G全网通', '4G','5G全网通','5G双卡']
            },
            {
                name: '网络模式',
                subOptions: ['双卡双待', '双卡双通']
            },
            {
                name: '数据接口',
                subOptions: ['Type-C']
            },
        ],
        isExpanded: false,
        showSubPanel: false,
        activeOptionIndex: null
    }
])

// 展开/收起更多选项
const toggleMoreOptions = (index) => {
    filterGroups.value[index].isExpanded = !filterGroups.value[index].isExpanded
}

// 排序
const sortType = ref('default')
const sortAsc = ref(true)
const changeSort = (type) => {
    sortAsc.value = sortType.value === type ? !sortAsc.value : true
    sortType.value = type
}

// 商品数据
const goods = ref([
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'REDMI K80 至尊版 16GB+1TB',
        price: '3799元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506181452_ce2eba75cade661512ab800dce621fcd.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi MIX Flip 2 16GB+1TB',
        price: '7299元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202506241705_f730bbbf84b8b6273f48edfc685682d7.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Xiaomi 15 Ultra 16GB+512GB',
        price: '6999元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202502251810_1d343647c6a9639566f7b4d0ff498f3b.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 5G 6GB+128GB',
        price: '1149元',
        oldPrice: '1499元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240943_7ba20a442ea9a8786ae33f96e10ff7f3.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Xiaomi 14 12GB+256GB',
        price: '3699元',
        oldPrice: '3999元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202310251934_a644b98586dc18c0b207d8055049b608.png',
        tag: '',
        category: 'xiaomi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '1299元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409251505_c4aec8745a9e568289a2f36dce9e32c4.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 14 Pro 8GB+256GB',
        price: '569元',
        oldPrice: '',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271139_b2ddfb1fc7ac3713b308d96f9ceaf63d.png',
        tag: '',
        category: 'redmi'
    },
    {
        name: 'Redmi Note 13 Pro 16GB+512GB',
        price: '1149元',
        oldPrice: '1599元',
        img: 'https://cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200030_e23db78cea56f2fbe339bc8eb9fdf86e.png',
        tag: '',
        category: 'redmi'
    }
])
// 分页相关变量
const currentPage = ref(1)
const pageSize = ref(20) // 每页20条

// 计算总页数
const totalPages = computed(() => {
    return Math.ceil(filteredGoods.value.length / pageSize.value)
})

// 分页后的商品数据
const paginatedGoods = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return filteredGoods.value.slice(start, end)
})

// 修改原来的filteredGoods计算属性
const filteredGoods = computed(() => {
    let result = [...goods.value]

    if (activeTag.value !== 'all') {
        result = result.filter(item => item.category === activeTag.value)
    }

    result.sort((a, b) => {
        if (sortType.value === 'price') {
            const priceA = Number(a.price.replace(/\D/g, ''))
            const priceB = Number(b.price.replace(/\D/g, ''))
            return sortAsc.value ? priceA - priceB : priceB - priceA
        }
        return 0
    })

    return result
})

// 显示二级面板（仅高级选项）
const showSubPanel = (groupIndex) => {
    if (filterGroups.value[groupIndex].name === '高级选项') {
        filterGroups.value[groupIndex].showSubPanel = true
    }
}

// 隐藏二级面板（仅高级选项）
const hideSubPanel = (groupIndex) => {
    if (filterGroups.value[groupIndex].name === '高级选项') {
        filterGroups.value[groupIndex].showSubPanel = false
        filterGroups.value[groupIndex].activeOptionIndex = null
    }
}

// 处理鼠标悬停选项（仅高级选项）
const handleOptionHover = (group, groupIndex, event) => {
    if (group.name !== '高级选项' || !group.showSubPanel) return

    const options = [...group.options, ...(group.isExpanded ? group.moreOptions : [])]
    const optionElements = Array.from(event.currentTarget.querySelectorAll('.filter-option'))
    
    // 过滤掉"更多"按钮元素
    const validOptions = optionElements.filter(el => !el.classList.contains('more'))
    
    validOptions.forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        if (event.clientX >= rect.left && event.clientX <= rect.right &&
            event.clientY >= rect.top && event.clientY <= rect.bottom) {
            if (options[i]?.subOptions) {
                filterGroups.value[groupIndex].activeOptionIndex = i
            } else {
                filterGroups.value[groupIndex].activeOptionIndex = null
            }
        }
    })
}

// 获取当前激活的子选项
const getActiveSubOptions = (group) => {
    if (group.activeOptionIndex === null) return []

    const options = [...group.options, ...(group.isExpanded ? group.moreOptions : [])]
    return options[group.activeOptionIndex]?.subOptions || []
}

// 选择子选项
const selectSubOption = (group, groupIndex, subOpt) => {
    console.log('选择了:', subOpt)
    // 这里可以添加实际的选择逻辑
    filterGroups.value[groupIndex].showSubPanel = false
}

</script>

<style scoped>
.phone-list-container {
    margin-top: 0px;
    height: 2300px;
    background: #f5f5f5;
}

.container {
    width: 1246px;
    margin: 0 auto;
    padding: 0 15px;
}

.shou {
    display: flex;
    align-items: center;
    padding: 15px 0;
    margin-left: 20%;
}

.shou p {
    margin: 0 8px 0 0;
    cursor: pointer;
    color: #757575;
    font-size: 12px;
    line-height: 40px;
}

.shou p:nth-child(2) {
    cursor: default;
}

/* 筛选标签 */
.filter-tags {
    padding: 15px 0;
    background: #fff;
    border-bottom: 1px solid #eee;
}

.tag-item {
    display: inline-block;
    padding: 5px 15px;
    margin-right: 30px;
    cursor: pointer;
}

.tag-item.active {
    background: #ff6700;
    color: #fff;
}

/* 筛选面板 */
.filter-panel {
    background: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
}

/* 筛选容器样式 */
.filter-container {
    margin-bottom: 20px;
}

/* 筛选组样式 */
.filter-group {
    display: flex;
}

/* 筛选标题样式优化 */
.filter-title {
    width: 80px;
    font-weight: bold;
    color: #b0b0b0;
    font-size: 14px;
    line-height: 30px;
    margin-right: 12px;
    flex-shrink: 0;
}

/* 筛选选项容器样式优化 */
.filter-options {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 35px;
    width: calc(100% - 80px);
    border-bottom: 1px solid #ededed;
    padding-bottom: 10px;
}

/* 普通选项样式优化 */
.filter-option {
    padding: 5px 0px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.4;
    transition: all 0.2s;
    text-align: center;
    background-color: #fff;
}

/* 选项悬停效果 */
.filter-option:hover {
    border-color: #ff6700;
    color: #ff6700;
}

/* 更多按钮样式优化 */
.filter-option.more {
    color: #757575;
    background: transparent;
    padding: 5px 15px;
    margin-left: auto;
    border-radius: 4px;
    position: relative;
    padding-right: 30px;
}

/* 更多按钮箭头 - 初始状态（向下） */
.filter-option.more::after {
    content: "▼";
    font-size: 10px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
}

/* 展开状态（向上） */
.filter-options .filter-option.more.expanded::after {
    content: "▲" !important;
}

/* 更多选项容器样式优化 */
.more-options-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 35px;
    align-items: center;
}

/* 高级选项组特殊样式 */
.filter-group {
    position: relative;
}

/* 二级选项面板 */
.sub-options-panel {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 0 0 4px 4px;
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 100;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: -1px;
}

.sub-option {
    padding: 5px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
}

.sub-option:hover {
    border-color: #ff6700;
    color: #ff6700;
}

/* 有子选项的标记 */
.filter-option.has-sub {
    position: relative;
}

.filter-option.has-sub::after {
    content: "▼";
    margin-left: 5px;
    font-size: 7px;
    color: #999;
}

/* 排序栏（包含收货地址和筛选选项） */
.sort-bar {
    padding: 10px 0;
    background: #f5f5f5;
}

.sort-bar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sort-options {
    display: flex;
}

.sort-item {
    display: inline-block;
    padding: 5px 15px;
    margin-right: 20px;
    cursor: pointer;
    position: relative;
}

.sort-item.active {
    color: #ff6700;
}

.sort-item i {
    position: absolute;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    right: 0;
    top: 50%;
}

.sort-item i.asc {
    border-bottom-color: #ff6700;
    margin-top: -8px;
}

.sort-item i.desc {
    border-top-color: #ff6700;
    margin-top: -2px;
}

/* 右侧筛选控件样式 */
.filter-controls {
    display: flex;
    align-items: center;
}

.location {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.location-label {
    color: #333;
    font-size: 14px;
    margin-right: 8px;
}

.location-select {
    padding: 5px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
}

.checkbox-group {
    display: flex;
    align-items: center;
}

.checkbox-item {
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
}

.checkbox-item input[type="checkbox"] {
    margin-right: 5px;
    width: 16px;
    height: 16px;
    cursor: pointer;
}

/* 商品列表 */
.goods-grid {
    padding: 20px 0;
    background: #f5f5f5;
}

.goods-item {
    width: 296px;
    height: 383px;
    float: left;
    margin: 0 14px 14px 0;
    background: #fff;
}

.goods-link {
    display: block;
    padding: 20px 0;
    text-align: center;
}

.goods-img {
    width: 160px;
    height: 160px;
    margin: 0 auto 15px;
}

.goods-tag {
    display: inline-block;
    padding: 2px 8px;
    background: #ff6700;
    color: #fff;
    font-size: 12px;
    margin-bottom: 10px;
}

.goods-name {
    font-size: 14px;
    color: #333;
    margin: 0 10px 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.goods-desc {
    font-size: 12px;
    color: #999;
    margin: 0 10px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.goods-price {
    margin-bottom: 15px;
}

.new-price {
    color: #ff6700;
    font-weight: bold;
}

.old-price {
    color: #999;
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 5px;
}

.add-cart {
    padding: 8px 20px;
    background: #fff;
    border: 1px solid #ff6700;
    color: #ff6700;
    cursor: pointer;
    transition: all 0.3s;
}

.add-cart:hover {
    background: #ff6700;
    color: #fff;
}

/* 分页样式 */
.pagination {
    padding: 30px 0 50px;
    text-align: center;
    background: #f5f5f5;
    clear: both;
}

.pagination button {
    width: 38px;
    height: 38px;
    margin: 0 4px;
    border: 1px solid #e0e0e0;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
}

/* 首页/末页按钮 */
.pagination button:first-child,
.pagination button:last-child {
    width: auto;
    padding: 0 12px;
}

/* 上一页/下一页按钮（符号版） */
.prev-next-btn {
    font-size: 30px !important;
    font-weight: bold !important;
    width: 44px !important;
    background: none !important;
    border: none !important;
    color: #757575;
}

.prev-next-btn:not(:disabled):hover {
    color: #ff6700 !important;
}

.prev-next-btn:disabled {
    color: #e0e0e0 !important;
}

.pagination button.active {
    background: #ff6700;
    color: #fff;
    border-color: #ff6700;
}

.pagination button:hover:not(.active) {
    border-color: #ff6700;
    color: #ff6700;
}

.pagination button:disabled {
    color: #b0b0b0;
    border-color: #e0e0e0;
    cursor: not-allowed;
}

.pagination button:disabled:hover {
    color: #b0b0b0;
    border-color: #e0e0e0;
}
</style>    