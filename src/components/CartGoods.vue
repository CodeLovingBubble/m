<template>
    <div class="full">
        <div class="box">
            <div class="tt">
                <h2 class="title">为您推荐</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.full{
    background-color: #f5f5f5;
}
.box {
    width: 1226px;
    height: 50px;
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
</style>