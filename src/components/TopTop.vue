<template>
    <div class="back">
        <div class="left">
            <a href="//www.mi.com/">小米官网</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/shop">小米商城</a>
            <span class="sep">|</span>
            <a href="//hyperos.mi.com/"target="_blank">小米澎湃OS</a>
            <span class="sep">|</span>
            <a href="//www.xiaomiev.com/"target="_blank">小米汽车</a>
            <span class="sep">|</span>
            <a href="//i.mi.com/"target="_blank">云服务</a>
            <span class="sep">|</span>
            <a href="//iot.mi.com"target="_blank">IoT</a>
            <span class="sep">|</span>
            <a href="//youpin.mi.com/"target="_blank">有品</a>
            <span class="sep">|</span>
            <a href="//xiaoai.mi.com/"target="_blank">小爱开放平台</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/aptitude/list/?id=88"target="_blank">资质证照</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/aptitude/list/"target="_blank">协议规则</a>
            <span class="sep">|</span>
            <a href="//www.mi.com/appdownload/" target="_blank">
                下载app
                <span class="appcode">
                    <img src="//i1.mifile.cn/f/i/17/appdownload/download.png?1" alt="小米商城" width="90" height="90">
                    小米商城APP
                </span>
            </a>
            <span class="sep">|</span>
            <a href="javascript:;">Select Location</a>
        </div>
        <div class="right">
            <div>
                <a href="">登录</a>
                <span class="sep">|</span>
                <a href="">注册</a>
                <span class="sep">|</span>
                <a href="">消息通知</a>
            </div>
        </div>
    </div>
</template>

<style>
.back{
    /* position: relative; */
    z-index: 30;
    height: 40px;
    width: auto;
    font-size: 12px;
    color: #b0b0b0;
    background: #333;
    display: flex;
    justify-content: space-evenly;
}
.left{
    line-height: 40px;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; 
}
.left a{
    color: #b0b0b0;
    line-height: 40px;
    margin-right: 3px;
    margin-left: 3px;
    display: inline-block;
}
.sep{
    margin: 0 .3em;
    color: #424242;
}
.appcode{
    position: absolute;
    top: 40px;
    left: 50%;
    width: 124px;
    height: 0;
    background: #fff;
    margin-left: -55px;
    -webkit-box-shadow: #aaa 0 1px 5px;
    box-shadow: 0 1px 5px #aaa;
    text-align: center;
    font-size: 14px;
    color: #333;
    line-height: 1;
    overflow: hidden;
    -webkit-transition: height .3s;
    transition: height .3s;
}
.appcode img{
    display: block;
    margin: 18px auto 12px;
}

.right{
    line-height: 40px;
    display: flex;

    justify-content: center; /* 水平居中 */
    align-items: center; 
}
.right a{
    color: #b0b0b0;
    line-height: 40px;
    margin-right: 3px;
    margin-left: 3px;
    display: inline-block;
}
</style>