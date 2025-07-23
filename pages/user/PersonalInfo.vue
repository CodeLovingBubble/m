<template>
    <div class="personal-info">
        <h3 class="section-title">
            <span class="vertical-line"></span>{{ localeStore.t('personalInformation') }}
        </h3>

        <div class="info-item">
            <label class="item-label">{{ localeStore.t('avatar') }}</label>
            <div class="avatar-container">
                <img class="avatar-img"
                    src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/avatar.d443cc57.svg"
                    :alt="localeStore.t('userAvatar')">
            </div>
        </div>

        <div class="info-item">
            <label class="item-label">{{ localeStore.t('nickname') }}</label>
            <div class="item-content">
                <span class="item-value orange">{{ localeStore.t('setNickname') }}</span>
                <button class="edit-icon"></button>
            </div>
        </div>

        <div class="info-item">
            <label class="item-label">{{ localeStore.t('gender') }}</label>
            <div class="item-content">
                <span class="item-value">{{ localeStore.t('notSet') }}</span>
                <button class="edit-icon"></button>
            </div>
        </div>

        <div class="info-item">
            <label class="item-label">{{ localeStore.t('xiaomiID') }}</label>
            <span class="item-value">3100475286</span>
        </div>

        <div class="info-item">
            <label class="item-label">{{ localeStore.t('countryRegion') }}</label>
            <span class="item-value">{{ localeStore.t('china') }}</span>
        </div>

        <div class="info-item">
            <label class="item-label">{{ localeStore.t('birthDate') }}</label>
            <div class="item-content">
                <span class="item-value">{{ localeStore.t('notSet') }}</span>
                <button class="edit-icon"></button>
            </div>
        </div>

        <!-- 添加的编辑按钮 -->
        <div class="edit-button-container">
            <button class="edit-button">{{ localeStore.t('edit') }}</button>
        </div>
    </div>
</template>

<script setup>
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()
</script>

<style scoped>
.personal-info {
    background-color: #fff;
    max-width: 800px;
    margin: 0 auto;
}

.section-title {
    font-size: 19px;
    color: #333;
    font-weight: 500;
    position: relative;
    padding-left: 12px;
    margin-bottom: 40px; /* 增大标题下方间距 */
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

.info-item {
    display: flex;
    align-items: center;
    margin-bottom: 35px; /* 增大行间距 */
    padding-bottom: 15px;
    min-height: 30px; /* 确保每行有足够高度 */
}

.item-label {
    width: 120px; /* 稍微加宽标签区域 */
    color: #333;
    font-size: 17px;
    margin-right: 40px; /* 增大标签与内容的间距 */
    text-align: right;
}

.item-content {
    display: flex;
    align-items: center;
    flex-grow: 1;
}

.item-value {
    color: #333;
    font-size: 16px; /* 稍微增大字体 */
    line-height: 1.6; /* 增加行高 */
}

.orange {
    color: #ff6700;
}

.avatar-container {
    display: flex;
    align-items: center;
    gap: 20px;
}

.avatar-img {
    width: 70px; /* 稍微增大头像 */
    height: 70px;
    border-radius: 50%;
    border: 1px solid #eee;
}

.edit-icon {
    width: 18px; /* 稍微增大编辑图标 */
    height: 18px;
    margin-left: 15px; /* 增大图标与文字的间距 */
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="%23999" d="M832 512v320H192V192h320v-64H128v768h768V512h-64zM576 128v64h155.52l-457.6 457.6-45.248-45.248L686.272 192H576zM320 512l256-256 45.248 45.248-256 256H320v-45.248z"/></svg>') no-repeat center;
    background-size: contain;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.edit-icon:hover {
    opacity: 1;
}

/* 新增的编辑按钮样式 */
.edit-button-container {
    display: flex;
    margin-left: 40px;
    margin-top: 50px; /* 与上方内容的间距 */
    padding-top: 20px;
}

.edit-button {
    padding: 20px 150px;
    background-color: #ff6700;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.edit-button:hover {
    background-color: #ff8533;
}
</style>