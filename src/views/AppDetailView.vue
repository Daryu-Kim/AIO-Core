<template>
  <div class="wrapper">
    <HomeHeader />
    <div class="content">
      <div class="content-install-box">
        <video
          class="content-install-thumbnail"
          ref="APP_THUMBNAIL"
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          autoplay
          muted
          loop
        ></video>
        <div class="content-install-fw-box">
          <div class="content-install-app-box">
            <img ref="APP_ICON" alt="" class="content-install-app-img" />
            <div class="content-install-app-text-box">
              <p class="content-install-app-title" ref="APP_TITLE"></p>
              <p class="content-install-app-author" ref="APP_AUTHOR"></p>
            </div>
          </div>
          <div class="content-install-detail-box">
            <div class="review-box">
              <p class="content-install-detail-value bold" ref="APP_REVIEW"></p>
              <p class="content-install-detail-title regular">평점</p>
            </div>
            <hr class="detail-hr" />
            <div class="download-box">
              <p
                class="content-install-detail-value bold"
                ref="APP_DOWNLOAD"
              ></p>
              <p class="content-install-detail-title regular">다운로드</p>
            </div>
            <hr class="detail-hr" />
            <div class="view-box">
              <p class="content-install-detail-value bold" ref="APP_VIEW"></p>
              <p class="content-install-detail-title regular">조회수</p>
            </div>
          </div>
          <p
            class="content-install-btn bold gradient-bg"
            @click="appInstallClick"
            value="asdf"
          >
            설치
          </p>
        </div>
        <div class="content-install-overlay"></div>
      </div>
      <swiper
        :space-between="12"
        :slidesPerView="'auto'"
        :navigation="true"
        :modules="popular"
        class="content-app-img-list"
        ref="APP_IMG_LIST"
      >
        <swiper-slide
          class="app-img-item"
          v-for="item in img_list"
          :key="item"
          ref="APP_IMG_ITEM"
          @click="appOnClick(item.id)"
        >
          <img :src="item" alt="" class="app-img" />
        </swiper-slide>
      </swiper>
      <div class="content-updated-box">
        <p class="content-updated-title bold">패치 노트</p>
        <p class="content-updated-des" ref="UPDATED">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      <div class="content-review-box">
        <p class="content-review-title bold">리뷰</p>
        <div class="content-review-circle-box">
          <svg class="circle-progress" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="gradient" y1="0" y2="0">
                <stop stop-color="#b721ff" offset="0" />
                <stop stop-color="#21d4fd" offset="1" />
              </linearGradient>
            </defs>
            <circle class="frame" cx="60" cy="60" r="54" stroke-width="12" />
            <circle
              ref="BAR"
              class="bar"
              cx="60"
              cy="60"
              r="54"
              stroke-width="12"
            />
          </svg>
          <p class="content-review-circle-value bold" ref="REVIEW">1.0</p>
        </div>
      </div>
      <div class="content-update-box">
        <p class="content-update-title bold">업데이트 날짜</p>
        <p class="content-update-des" ref="APP_UPDATE_AT">0000. 0. 00.</p>
      </div>
      <div class="content-category-box">
        <p
          class="content-category-item"
          v-for="(item, index) in 2"
          :key="index"
          ref="CATEGORY_ITEM"
        >
          Lorem, ipsum.
        </p>
      </div>
      <div class="content-contact-box">
        <label
          for="contact"
          class="content-contact-label"
          @click="contactLabelClick"
        >
          <p class="content-contact-label-title bold">개발자 연락처</p>
          <i
            ref="CONTACT_NAV"
            class="fa-solid fa-chevron-down contact-navigate"
          ></i>
        </label>
        <input
          ref="CONTACT_CHECKBOX"
          type="checkbox"
          id="contact"
          class="content-contact-checkbox"
        />
        <div class="content-contact-detail-box">
          <div class="content-contact-item-box">
            <i class="fa-solid fa-earth-asia"></i>
            <div class="content-contact-item-text-box">
              <p>웹사이트</p>
              <p ref="CONTACT_WEB">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div class="content-contact-item-box">
            <i class="fa-solid fa-envelope"></i>
            <div class="content-contact-item-text-box">
              <p>이메일</p>
              <p ref="CONTACT_EMAIL">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div class="content-contact-item-box">
            <i class="fa-solid fa-location-dot"></i>
            <div class="content-contact-item-text-box">
              <p>주소</p>
              <p ref="CONTACT_ADDRESS">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div class="content-contact-item-box">
            <i class="fa-solid fa-shield-halved"></i>
            <div class="content-contact-item-text-box">
              <p>개인정보처리방침</p>
              <p ref="CONTACT_PRIVACY">Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>

<style scoped src="@/css/views/AppDetailView.css" />

<script src="@/script/views/AppDetailScript.js" />
