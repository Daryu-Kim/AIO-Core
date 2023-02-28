<template>
  <div class="wrapper">
    <HomeHeader />
    <div class="content">
      <swiper
        :slides-per-view="1"
        :navigation="true"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: false,
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        class="content-banner-box"
      >
        <swiper-slide class="content-banner-item"></swiper-slide>
        <swiper-slide class="content-banner-item"></swiper-slide>
        <swiper-slide class="content-banner-item"></swiper-slide>
        <swiper-slide class="content-banner-item"></swiper-slide>
        <swiper-slide class="content-banner-item"></swiper-slide>
      </swiper>
      <div class="content-app-box filter">
        <div class="content-flex-box">
          <p class="content-title bold">인기 순위</p>
          <p class="content-des gradient-color">좌우로 스와이프</p>
        </div>
        <hr class="content-hr" />
        <swiper
          :space-between="8"
          :slidesPerView="2"
          :grid="{
            rows: 3,
          }"
          :breakpoints="{
            '1024': {
              slidesPerView: 3,
            },
          }"
          :modules="popular"
          class="content-popular-list"
          ref="POPULAR_LIST"
        >
          <swiper-slide
            class="popular-item"
            v-for="(item, index) in chartList"
            :key="index"
            id="popular-item"
            @click="appOnClick(item.id)"
          >
            <p class="popular-item-index">{{ index + 1 }}</p>
            <img :src="item.icon" alt="" class="popular-item-img" />
            <div class="popular-item-box">
              <p class="popular-item-title bold">{{ item.name }}</p>
              <p class="popular-item-category medium">{{ item.category[0] }}</p>
              <p class="popular-item-star regular">💾 {{ item.download }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="content-app-box filter">
        <div class="content-flex-box">
          <p class="content-title bold">App</p>
          <p class="content-des gradient-color">더보기</p>
        </div>
        <hr class="content-hr" />
        <div class="content-grid-box">
          <div class="content-app">
            <div class="app-top-box">
              <p class="app-lang bold">Vue</p>
              <div class="app-icon"></div>
            </div>
            .app
          </div>
          <div class="content-app"></div>
          <div class="content-app"></div>
          <div class="content-app"></div>
        </div>
      </div>
      <div class="content-game-box filter">
        <p class="content-title bold">Game</p>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<style scoped src="@/css/views/HomeView.css" />

<script src="@/script/views/HomeScript.js" />
