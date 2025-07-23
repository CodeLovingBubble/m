<template>
    <div class="authorization-container">
        <div class="title-container">
            <h3 class="section-title">
                <span class="vertical-line"></span>{{ localeStore.t('authorization') }}
            </h3>
            <p class="authorization-desc">{{ localeStore.t('authorizationDescription') }}</p>
        </div>
        
        <div class="empty-wrap">
            <div class="empty-icon">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABxCAMAAADVoLziAAAAtFBMVEUAAAD/9/H/79X/9/H/9vH/4sz/3Mj/9/H/7t3/5dD/4s3/9vH/8OT/8eX/8+T/48//7+L/7uH/+PL/9Ov/7+P/9OL/9/D/4s3/483/8un/8eX/7uD/7uP/9vH/5M//8+z/6df/7+X/9vH/7+P/49D/9vH/7+H/7uD/8OP/69v/7+T/4s3/7uL/483/9/H/9/H/4s3/9/H/7eD/4cz/9vD/////8eX/9Ov//Pr/6Nf/7uD/+fVR/Xd8AAAAM3RSTlMAyBmOk4sM4QZHqKD5Nw/47siGUysT9fHDr0pAI7d7amDz7ubm0LuqZlne3NaTfHLPpp9+VunRAAACzUlEQVRo3u3aa2+yMBTAcS0OyxRRECd43eb9riBY/P7f6yHmiZ2XFdsdyFz6T3y35JdTQc8MOXZYf2kODI+rwVjLiaa2p8vm/I0PJMZCaWFBsd1vnjhOMlgodVUIrPQ3MSgglme7lgiItVfDExJjUtEEDtZezj0xMW624z9Ytd4UG/Eklmf8VyzSNp7wjDH5qbgqayAbXad358Liqc8x42ArrZ5ZKF3m1N6Exf9TOu53nt4rdYbF66qGGEiCM7mz1PugOWz4N4WRJzrjuaqjV25BVd8WYxBUpFOOrFtRXxUpAyRSsjq2rqfEk3wDSqTvI606uj7YukJB0BkpOcUXorX10xWD9/HU/iquOmmJlKxpX0kzDyySGzGo1voqFZV8ejPSKZ0+wpmKQbnmooxEerATOz0xukeWRxOEUxK96D65sBCXKD4kvUl6CIuI4mR51GurKYnfkYspAhepea/4owADi5S8n9Gt8Igk8ZXcC3pcJFEQsgsiUJEE/vHA7hhGkGJ02Cd2CAmkuH9A9J9cPGZ9qiR64coh0HdHQhHA3cGbFKUoRSlK8TeLp++O8NHivyVpfj+y9yzxzYo3H2DP4RRJ1uKRZH2q4bNdOfT/jkdvD/J8nwBSlKIUpShF8M2KI5DNKsx6szruOTuE3rPtOc+wWfk//bXzt29W9PddfpGafC+5y0lRilKU4t8UbZZIPPi6KkMMUhDfujmGGBJ4sNmnYiZv5GCps0Q/IOAjtipUzODaMZpdhKmYOmkMNt16DLLEmAwiMHH+6rZj8CSyyYjwN3i9bvky0RCmT3Yx0TDg7b021S5r6ej8bNe64ycV8lYsIfUqTJ/Sc0s+eMNVhfXwr/kBLjqWyhCx1YEmP9Yox6reGzZAwWIp4SF93C4MAadsFB03HjGB7HU+4ECzZeNcElm3zG0nD5FTWOs2y6JjumtTKfw0ZTXR1STrHzqm3/HXSvOkAAAAAElFTkSuQmCC" :alt="localeStore.t('emptyIconAlt')">
            </div>
            <p class="empty-text">{{ localeStore.t('noAuthorizedApps') }}</p>
        </div>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()
</script>

<style scoped>
.authorization-container {
    background-color: #fff;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.title-container {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.section-title {
    font-size: 19px;
    color: #333;
    font-weight: 500;
    position: relative;
    padding-left: 12px;
    margin: 0;
    white-space: nowrap;
}

.vertical-line {
    position: absolute;
    left: 0;
    top: 3px;
    width: 3px;
    height: 18px;
    background-color: #ff6700;
    border-radius: 2px;
}

.authorization-desc {
    font-size: 16px;
    color: #666;
    margin: 0 0 0 20px;
    line-height: 1.6;
    white-space: nowrap;
}

.empty-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 140px;
}

.empty-icon {
    width: 60px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
}

.empty-icon img{
    width: 60px;
}

.empty-text {
    font-size: 14px;
    color: #999;
    margin: 0;
}
</style>