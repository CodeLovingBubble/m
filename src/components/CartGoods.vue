<template>
    <div class="full">
        <div class="box">
            <div class="tt">
                <h2 class="title">为您推荐</h2>
            </div>
            <div class="product-container">
                <div v-for="(product, index) in products" :key="index" class="product-item">
                    <div class="product-card">
                        <img :src="product.image" alt="商品图片" class="product-image">
                        <h3 class="product-name">{{ product.name }}</h3>
                        <p class="product-price">{{ product.price }}</p>
                        <div class="desc-container">
                            <p class="product-desc">{{ product.desc }}</p>
                            <button class="add-to-cart">加入购物车</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.full{
    background-color: #f5f5f5;
    padding: 20px 0;
}
.box {
    width: 1226px;
    margin: 0 auto;
    position: relative;
}

.tt {
    height: 50px;
    border-top: 1px solid #e0e0e0;
    position: relative;
}

.title {
    position: absolute;
    left: 50%;
    margin-top: -20px;
    transform: translateX(-50%);
    width: 482px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f5f5f5;
    font-size: 30px;
    font-weight: 400;
    color: #757575;
    z-index: 100;
}

.product-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    justify-content: flex-start;
}

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
}

.product-desc {
    height: 18px;
    margin: 0 10px 15px;
    font-size: 12px;
    color: #b0b0b0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.add-to-cart {
    background-color: #fff;
    color: #ff6700;
    border: 1px solid #ff6700;
    width: 120px;
    height: 30px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.4s;
}

.add-to-cart:hover {
    background-color: #ff6700;
    color: #fff;
}
.desc-container {
    position: relative;
    height: 36px;
    margin: 0 10px 15px;
    overflow: hidden;
}

.product-desc {
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
</style>

<script>
export default {
    data() {
        return {
            products: [
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309281055_6ca7721ad4d7b055f9250f08d97fa0ea.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '米家体脂秤 S400',
                    price: '99元',
                    desc: '75.7万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202407051250_d090bb20c3256111ecd01bea6b9150a0.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '米家方框偏光太阳镜',
                    price: '99元',
                    desc: '11.4万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202412271148_a4cb76ca76ad26ac81da44ad1a69ebd1.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Redmi 14C',
                    price: '469元',
                    desc: '18万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411281957_3fb2420c3e3732c5630ca9a03a64ea3c.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'REDMI K80',
                    price: '2299元',
                    desc: '160.4万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202209272045_85684d18fdff42c5dae66e0831908ad3.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '米家电动剃须刀S101 快刀客',
                    price: '99元',
                    desc: '100.3万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202309200032_5beee8420f9734b24d538e68e5c655ac.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Redmi Note 13 5G',
                    price: '1099元',
                    desc: '96.5万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410282150_089128152bd814096a99249a487e383d.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Xiaomi 15',
                    price: '4199元',
                    desc: '203.2万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/625fc3450a2cbb9392fd1fa127e178f8.jpg?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '小米巨能写多彩中性笔',
                    price: '9.99元',
                    desc: '99.6万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307121748_07588ba60539b403be129694d3434290.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '日常元素防蛀护龈牙膏',
                    price: '12.9元',
                    desc: '33.4万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202212201813_c414208e4ac7d8aac9a417a18060d663.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '米家太阳镜 Luke 青苔灰',
                    price: '99元',
                    desc: '6.6万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504011609_747477d23f22328d44d877577b1c032b.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '5号彩虹电池（10粒）',
                    price: '13.9元',
                    desc: '653.7万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202304071506_62b21cfe9c12a8a3f243e0feb9a3f1ee.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '米家偏光太阳镜套镜',
                    price: '99元',
                    desc: '18.2万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202411261459_d47c23aa207b6cb0e2e6feee7d9888c5.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'REDMI Watch 5',
                    price: '599元',
                    desc: '67.2万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202410112149_8c1b7e0aa8f1aca565ca4da1b3f609e6.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Redmi Buds 6 青春版',
                    price: '139元',
                    desc: '52.9万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202507161031_d8787bc0ca4294af012764cb3a19ab8e.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '小米手环10 NFC版（含陶瓷版）',
                    price: '319元',
                    desc: '6.9万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202504011609_b90fde62ac13744d3a6349c95f2145ed.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '小米巨能写中性笔10支装',
                    price: '9.99元',
                    desc: '506.3万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202312261045_ddb143f8b7f29c65526180981f54a147.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Redmi 13C 5G',
                    price: '799元',
                    desc: '32.8万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202409240944_6555bdef52151a0d587d24ccb80f9412.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Redmi Note 14 5G',
                    price: '1199元',
                    desc: '58.6万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202501021450_dc7a4a7002ce739b57ed44715892e9c6.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: 'Redmi Note 14 Pro',
                    price: '1499元',
                    desc: '116.6万人好评'
                },
                {
                    image: '//cdn.cnbj1.fds.api.mi-img.com/nr-pub/202307071533_9cb7fe7f795ff88f428d9c9d6420b1a6.png?thumb=1&w=225&h=225&f=webp&q=90',
                    name: '小米智能摄像机2 云台版',
                    price: '169元',
                    desc: '123.7万人好评'
                }
            ]
        }
    }
}
</script>