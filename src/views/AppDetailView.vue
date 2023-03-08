<template>
  <div class="wrapper">
    <HomeHeader />
    <div class="content" ref="CONTENT">
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
            이동
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
      <div class="content-inf-box">
        <p class="content-inf-title bold">앱 정보</p>
        <p class="content-inf-des" ref="APP_INF">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi
          velit praesentium obcaecati voluptatem cupiditate dolore, saepe
          officiis eius autem, natus laudantium fugit architecto nesciunt
          necessitatibus consequuntur. Aperiam, dolorem molestiae?
        </p>
      </div>
      <div class="content-review-box">
        <p class="content-review-title bold">평가</p>
        <div class="content-review-flex-box">
          <div class="content-review-circle-box">
            <circle-progress
              class="content-review-circle"
              :is-gradient="true"
              :gradient="{
                angle: 90,
                startColor: '#b721ff',
                stopColor: '#21d4fd',
              }"
              :border-bg-width="circle_width"
              :border-width="circle_width"
              :size="circle_size"
              :percent="app_aio_percent"
            />
            <p class="content-review-circle-value bold" ref="APP_AIO_REVIEW">
              0.0
            </p>
          </div>
          <div class="content-review-circle-box">
            <circle-progress
              class="content-review-circle"
              :is-gradient="true"
              :gradient="{
                angle: 90,
                startColor: '#b721ff',
                stopColor: '#21d4fd',
              }"
              :border-bg-width="circle_width"
              :border-width="circle_width"
              :size="circle_size"
              :percent="app_func_percent"
            />
            <p class="content-review-circle-value bold" ref="APP_FUNC_REVIEW">
              0.0
            </p>
          </div>
          <div class="content-review-circle-box">
            <circle-progress
              class="content-review-circle"
              :is-gradient="true"
              :gradient="{
                angle: 90,
                startColor: '#b721ff',
                stopColor: '#21d4fd',
              }"
              :border-bg-width="circle_width"
              :border-width="circle_width"
              :size="circle_size"
              :percent="app_user_percent"
            />
            <p class="content-review-circle-value bold" ref="APP_USER_REVIEW">
              0.0
            </p>
          </div>
        </div>
      </div>
      <div class="content-update-box">
        <p class="content-update-title bold">업데이트 날짜</p>
        <p class="content-update-des" ref="APP_UPDATE_AT">0000. 0. 00.</p>
      </div>
      <div class="content-upload-box">
        <p class="content-upload-title bold">최초 게시일</p>
        <p class="content-upload-des" ref="APP_UPLOAD_AT">0000. 0. 00</p>
      </div>
      <div class="content-category-box">
        <p
          class="content-category-item"
          ref="CATEGORY_ITEM"
          @click="categoryClick(app_category)"
        >
          {{ app_category }}
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
              <p class="bold">웹사이트</p>
              <p ref="CONTACT_WEB">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div class="content-contact-item-box">
            <i class="fa-solid fa-envelope"></i>
            <div class="content-contact-item-text-box">
              <p class="bold">이메일</p>
              <p ref="CONTACT_EMAIL">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div class="content-contact-item-box">
            <i class="fa-solid fa-location-dot"></i>
            <div class="content-contact-item-text-box">
              <p class="bold">주소</p>
              <p ref="CONTACT_ADDRESS">Lorem ipsum dolor sit.</p>
            </div>
          </div>
          <div class="content-contact-item-box">
            <i class="fa-solid fa-shield-halved"></i>
            <div class="content-contact-item-text-box">
              <p class="bold">개인정보처리방침</p>
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
