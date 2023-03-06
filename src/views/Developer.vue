<template>
  <div class="wrapper">
    <HomeHeader />
    <div class="content">
      <div class="content-title-box">
        <p class="content-title-text bold">내 서비스</p>
        <p class="content-title-add-btn gradient-bg bold" @click="addClick">
          Add
        </p>
      </div>
      <hr class="content-hr" />
      <swiper
        :space-between="6"
        :slidesPerView="1"
        :navigation="true"
        :pagination="{
          clickable: true,
        }"
        :modules="my"
        :breakpoints="{
          '480': {
            slidesPerView: 2,
          },
          '960': {
            slidesPerView: 3,
          },
        }"
        class="content-app-list"
      >
        <swiper-slide
          v-for="(item, index) in myServices"
          :key="index"
          class="app-item"
        >
          <video :src="item.thumbnail" class="app-thumbnail"></video>
          <div class="app-box">
            <img :src="item.icon" alt="" class="app-icon" />
            <div class="app-text-box">
              <p class="app-title bold">
                {{ item.name }}
              </p>
              <p class="app-view">👀{{ item.view }}</p>
              <p class="app-download">💾{{ item.download }}</p>
            </div>
          </div>
          <div class="app-control-box">
            <p class="app-control-btn bold view" @click="viewClick">보기</p>
            <p class="app-control-btn bold modify" @click="modifyClick">수정</p>
            <p
              class="app-control-btn bold remove"
              @click="removeClick(item.id, item.name)"
            >
              제거
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <HomeFooter />
    <div class="overlay" ref="OVERLAY"></div>
    <div class="overlay-remove" ref="OVERLAY_REMOVE">
      <p class="remove-title bold" ref="REMOVE_TITLE"></p>
      <div class="remove-control-box">
        <p class="remove-btn yes bold" @click="acceptClick">삭제</p>
        <p class="remove-btn no bold" @click="cancelClick">취소</p>
      </div>
    </div>
  </div>
</template>

<style scoped src="@/css/views/Developer.css" />

<script src="@/script/views/Developer.js" />
