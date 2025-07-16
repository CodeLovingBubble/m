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
                <div class="tag-item active" @click="activeTag = 'all'">全部</div>
                <div class="tag-item" v-for="(tag, i) in tags" :key="i" @click="activeTag = tag.value">
                    {{ tag.name }}
                </div>
            </div>
        </div>

        <!-- 排序栏 -->
        <div class="sort-bar">
            <div class="container">
                <div class="sort-item" :class="{ active: sortType === 'default' }" @click="changeSort('default')">
                    默认
                    <i :class="sortType === 'default' ? (sortAsc ? 'asc' : 'desc') : ''"></i>
                </div>
                <div class="sort-item" :class="{ active: sortType === 'price' }" @click="changeSort('price')">
                    价格
                    <i :class="sortType === 'price' ? (sortAsc ? 'asc' : 'desc') : ''"></i>
                </div>
                <div class="sort-item" :class="{ active: sortType === 'sales' }" @click="changeSort('sales')">
                    销量
                    <i :class="sortType === 'sales' ? (sortAsc ? 'asc' : 'desc') : ''"></i>
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
    { name: '小米手机', value: 'xiaomi' },
    { name: '红米手机', value: 'redmi' }
]
const activeTag = ref('all')

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
// 分页相关
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

// 修改原来的filteredGoods计算属性，移除slice分页
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
    /* 调整间距 */
    cursor: pointer;
    /* 首页和全部结果添加点击光标 */
    color: #757575;
    font-size: 12px;
    line-height: 40px;
}

.shou p:nth-child(2) {
    cursor: default;
    /* ">"符号不需要点击效果 */
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
    margin-right: 10px;
    cursor: pointer;
}

.tag-item.active {
    background: #ff6700;
    color: #fff;
}

/* 排序栏 */
.sort-bar {
    padding: 10px 0;
    background: #f5f5f5;
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
    font-size: 30px !important; /* 放大箭头符号 */
    font-weight: bold !important; /* 加粗箭头符号 */
    width: 44px !important;
    background: none !important; /* 移除背景色 */
    border: none !important; /* 移除边框 */
    color: #757575; /* 设置文字颜色 */
}

/* 激活状态 */
.prev-next-btn:not(:disabled):hover {
    color: #ff6700 !important; /* 鼠标悬停时的颜色 */
}

/* 禁用状态 */
.prev-next-btn:disabled {
    color: #e0e0e0 !important; /* 禁用时的颜色 */
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

/* 禁用状态（当在第一页/最后一页时） */
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