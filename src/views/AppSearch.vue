<template>
  <div class="wrapper">
    <HomeHeader />
    <div class="content">
      <p class="content-title bold">
        "{{ search }}"에 대한 검색 결과 "{{ search_data.length }}건"
      </p>
      <div class="content-item-box">
        <div
          v-for="(item, index) in search_data"
          :key="index"
          class="content-item"
          @click="appOnClick(item.id)"
        >
          <video :src="item.thumbnail" class="content-item-thumbnail"></video>
          <div class="content-item-detail-box">
            <img :src="item.icon" alt="" class="content-item-detail-icon" />
            <div class="content-item-detail-text-box">
              <p class="content-item-detail-text-title bold">{{ item.name }}</p>
              <p class="content-item-detail-text-author">{{ item.author }}</p>
              <p class="content-item-detail-text-download">
                {{ item.download }}💾
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<style scoped src="@/css/views/AppSearch.css" />

<script src="@/script/views/AppSearch.js" />
