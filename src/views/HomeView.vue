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
          :space-between="6"
          :slidesPerView="1"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="recent"
          :breakpoints="{
            '480': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 3,
            },
          }"
          class="content-app-list"
        >
          <swiper-slide
            v-for="(item, index) in chartList"
            :key="index"
            @click="appOnClick(item.id)"
            class="app-item"
          >
            <video :src="item.thumbnail" class="app-thumbnail"></video>
            <div class="app-box">
              <img :src="item.icon" alt="" class="app-icon" />
              <div class="app-text-box">
                <p class="app-title bold">
                  {{ item.name }}
                </p>
                <p class="app-author">
                  {{ item.author }}
                </p>
                <p class="app-download">💾{{ item.download }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="content-app-box filter">
        <div class="content-flex-box">
          <p class="content-title bold">최신 순위</p>
          <p class="content-des gradient-color">좌우로 스와이프</p>
        </div>
        <hr class="content-hr" />
        <swiper
          :space-between="6"
          :slidesPerView="1"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="recent"
          :breakpoints="{
            '480': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 3,
            },
          }"
          class="content-app-list"
        >
          <swiper-slide
            v-for="(item, index) in recentList"
            :key="index"
            class="app-item"
            @click="appOnClick(item.id)"
          >
            <video :src="item.thumbnail" class="app-thumbnail"></video>
            <div class="app-box">
              <img :src="item.icon" alt="" class="app-icon" />
              <div class="app-text-box">
                <p class="app-title bold">
                  {{ item.name }}
                </p>
                <p class="app-author">
                  {{ item.author }}
                </p>
                <p class="app-timestamp">
                  {{ item.upload_at.toDate().getFullYear() }}.
                  {{ item.upload_at.toDate().getMonth() + 1 }}.
                  {{ item.upload_at.toDate().getDate() }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="content-app-box filter">
        <div class="content-flex-box">
          <p class="content-title bold">업데이트 순위</p>
          <p class="content-des gradient-color">좌우로 스와이프</p>
        </div>
        <hr class="content-hr" />
        <swiper
          :space-between="6"
          :slidesPerView="1"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :modules="recent"
          :breakpoints="{
            '480': {
              slidesPerView: 2,
            },
            '768': {
              slidesPerView: 3,
            },
          }"
          class="content-app-list"
        >
          <swiper-slide
            v-for="(item, index) in updateList"
            :key="index"
            class="app-item"
            @click="appOnClick(item.id)"
          >
            <video :src="item.thumbnail" class="app-thumbnail"></video>
            <div class="app-box">
              <img :src="item.icon" alt="" class="app-icon" />
              <div class="app-text-box">
                <p class="app-title bold">
                  {{ item.name }}
                </p>
                <p class="app-author">
                  {{ item.author }}
                </p>
                <p class="app-timestamp">
                  {{ item.update_at.toDate().getFullYear() }}.
                  {{ item.update_at.toDate().getMonth() + 1 }}.
                  {{ item.update_at.toDate().getDate() }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<style scoped src="@/css/views/HomeView.css" />

<script src="@/script/views/HomeScript.js" />
