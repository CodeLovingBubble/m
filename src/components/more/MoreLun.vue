<template>
    <div class="full">
        <div class="product-carousel">
            <!-- 使用transform实现水平滑动 -->
                <div class="carousel-wrapper"
                    :style="{ transform: `translateX(-${currentPage * 100}%)`, transition: 'transform 0.5s ease-in-out' }">
                    <div class="carousel-page" v-for="(page, pageIndex) in paginatedProducts" :key="pageIndex">
                        <div class="product-item" v-for="(product, index) in page" :key="index">
                            <div class="product-card">
                                <img :src="product.image" alt="product" class="product-image" />
                                <h3 class="product-name">{{ product.title }}</h3>
                                <p class="product-price">¥{{ product.price }}</p>
                                <div class="desc-container">
                                    <p class="product-desc">{{ product.rating }}万人好评</p>
                                    <button class="add-to-cart">加入购物车</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const products = ref([
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271148_a4cb76ca76ad26ac81da44ad1a69ebd1.png?thumb=1&w=225&h=225&f=webp&q=90', title: 'Redmi 14C', price: 469, rating: 18.1 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309281055_6ca7721ad4d7b055f9250f08d97fa0ea.png?thumb=1&w=225&h=225&f=webp&q=90', title: '米家体脂秤 S400', price: 99, rating: 75.7 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407051250_d090bb20c3256111ecd01bea6b9150a0.png?thumb=1&w=225&h=225&f=webp&q=90', title: '米家方框偏光太阳镜', price: 99, rating: 11.4 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209272045_85684d18fdff42c5dae66e0831908ad3.png?thumb=1&w=225&h=225&f=webp&q=90', title: '米家电动剃须刀S101 快刀客', price: 99, rating: 100.3 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=225&h=225&f=webp&q=90', title: 'REDMI Watch 5', price: 599, rating: 67.3 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411281957_3fb2420c3e3732c5630ca9a03a64ea3c.png?thumb=1&w=225&h=225&f=webp&q=90', title: '商品6', price: 199, rating: 20.2 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200032_5beee8420f9734b24d538e68e5c655ac.png?thumb=1&w=225&h=225&f=webp&q=90', title: '商品7', price: 299, rating: 30.5 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410282150_089128152bd814096a99249a487e383d.png?thumb=1&w=225&h=225&f=webp&q=90', title: '商品8', price: 399, rating: 40.1 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307121748_07588ba60539b403be129694d3434290.png?thumb=1&w=225&h=225&f=webp&q=90', title: '商品9', price: 499, rating: 50.3 },
    { image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/625fc3450a2cbb9392fd1fa127e178f8.jpg?thumb=1&w=225&h=225&f=webp&q=90', title: '小米巨能写多彩中性笔', price: 9.99, rating: 60.7 }
])

const currentPage = ref(0)
const paginatedProducts = ref([])

// 分页处理
const paginateProducts = () => {
    const pageSize = 5// 每页显示5个商品
    paginatedProducts.value = []// 清空分页结果数组
    // 遍历商品数组，按每页5个进行分组
    for (let i = 0; i < products.value.length; i += pageSize) {
        paginatedProducts.value.push(products.value.slice(i, i + pageSize))
    }
}

// 自动轮播
let interval = null
const startAutoPlay = () => {
    interval = setInterval(() => {
        currentPage.value = (currentPage.value + 1) % paginatedProducts.value.length    //控制当前显示哪一页
    }, 5000)
}

onMounted(() => {
    paginateProducts()
    startAutoPlay()
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>

<style scoped>
.full{
    background-color: #f5f5f5;
}
.product-carousel {
    width: 1226px;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    padding: 20px 0;
    
}

.carousel-wrapper {
    display: flex;
    width: 100%;
}

.carousel-page {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-shrink: 0;
    margin-top: 20px;
}

/* 商品卡片样式 - 与模板保持一致 */
.product-item {
    width: calc((100% - 70px) / 5); /* 5个商品平均分配宽度，减去总边距 */
    margin: 0 14px 35px 0;
}

.product-item:nth-child(5n) {
    margin-right: 0; /* 每行第5个商品去掉右边距 */
}

.product-card {
    background-color: #fff;
    text-align: center;
    padding: 20px 0 0;
    position: relative;
    transition: all 0.2s linear;
    height: 100%;
}

.product-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.product-image {
    width: 160px;
    height: 160px;
    margin: 0 auto 18px;
    object-fit: contain;
}

.product-name {
    margin: 0 10px 2px;
    font-size: 14px;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.product-price {
    margin: 0 10px 10px;
    color: #ff6700;
    font-size: 16px;
}

/* 好评和加入购物车按钮的容器及动画 */
.desc-container {
    position: relative;
    height: 36px;
    margin: 0 10px 15px;
    overflow: hidden;
}

.product-desc {
    height: 18px;
    margin: 0 10px 15px;
    font-size: 12px;
    color: #b0b0b0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    transition: all 0.3s;
}

.add-to-cart {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    color: #ff6700;
    border: 1px solid #ff6700;
    width: 120px;
    height: 30px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0;
    margin-top: 0px;
}

.desc-container:hover .product-desc {
    transform: translateY(-100%);
}

.desc-container:hover .add-to-cart {
    top: 0;
    opacity: 1;
}

.add-to-cart:hover {
    background-color: #ff6700;
    color: #fff;
}
</style>