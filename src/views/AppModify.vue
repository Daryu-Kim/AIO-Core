<template>
  <div class="wrapper">
    <HomeHeader />
    <div class="content">
      <div class="content-box">
        <p class="content-title bold">서비스 이름</p>
        <hr class="content-hr" />
        <input
          class="content-input"
          type="text"
          ref="INPUT_NAME"
          maxlength="50"
          placeholder="50자 이내로 입력하시오"
        />
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 설명</p>
        <hr class="content-hr" />
        <textarea
          class="content-input gradient-color"
          type="text"
          ref="INPUT_INF"
          placeholder="500자 이내로 입력하시오"
          maxlength="500"
        ></textarea>
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 카테고리</p>
        <hr class="content-hr" />
        <p class="content-subtitle bold">App 카테고리</p>
        <div class="content-radio-box">
          <div
            class="content-radio-list"
            v-for="(item, index) in app_category"
            :key="index"
          >
            <input
              type="radio"
              name="category"
              :id="item"
              ref="INPUT_CATEGORY"
              @change="categoryChange($event)"
              :value="item"
            />
            <label :for="item" class="content-label">{{ item }}</label>
          </div>
        </div>
        <p class="content-subtitle bold margin">Game 카테고리</p>
        <div class="content-radio-box">
          <div
            class="content-radio-list"
            v-for="(item, index) in game_category"
            :key="index"
          >
            <input
              type="radio"
              name="category"
              :id="item"
              ref="INPUT_CATEGORY"
              @change="categoryChange($event)"
              :value="item"
            />
            <label :for="item" class="content-label">{{ item }}</label>
          </div>
        </div>
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 아이콘</p>
        <hr class="content-hr" />
        <input
          type="file"
          accept="image/*"
          @change="iconChange($event)"
          ref="INPUT_ICON"
        />
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 썸네일</p>
        <hr class="content-hr" />
        <input
          type="file"
          accept="video/*"
          @change="thumbnailChange($event)"
          ref="INPUT_THUMBNAIL"
        />
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 이미지</p>
        <hr class="content-hr" />
        <input type="file" accept="image/*" multiple ref="INPUT_IMG" />
        <video class="content-preview" ref="INPUT_THUMBNAIL_PREVIEW"></video>
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 태그</p>
        <hr class="content-hr" />
        <input
          class="content-input"
          type="text"
          ref="INPUT_SEARCH"
          placeholder="Enter로 태그 추가"
          @keyup.enter="searchAdd"
        />
        <div class="content-p-list">
          <p
            class="content-p-item"
            v-for="(item, index) in search_tag"
            :key="index"
            @click="searchRemove(index)"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="content-box lang">
        <p class="content-title bold">서비스 개발언어</p>
        <hr class="content-hr" />
        <div class="content-p-list">
          <input
            type="radio"
            name="lang"
            id="vanilla"
            @change="langChange($event)"
            value="Vanilla,#F7DF1E"
          />
          <label for="vanilla" class="content-label vanilla">Vanilla JS</label>
          <input
            type="radio"
            name="lang"
            id="angular"
            @change="langChange($event)"
            value="Angular,#DD0031"
          />
          <label for="angular" class="content-label angular">Angular</label>
          <input
            type="radio"
            name="lang"
            id="react"
            @change="langChange($event)"
            value="React,#61DAFB"
          />
          <label for="react" class="content-label react">React</label>
          <input
            type="radio"
            name="lang"
            id="vue"
            @change="langChange($event)"
            value="Vue,#4FC08D"
          />
          <label for="vue" class="content-label vue">Vue</label>
          <input
            type="radio"
            name="lang"
            id="polymer"
            @change="langChange($event)"
            value="Polymer,#FF4470"
          />
          <label for="polymer" class="content-label polymer">Polymer</label>
          <input
            type="radio"
            name="lang"
            id="ionic"
            @change="langChange($event)"
            value="Ionic,#3880FF"
          />
          <label for="ionic" class="content-label ionic">Ionic</label>
        </div>
      </div>
      <div class="content-box">
        <p class="content-title bold">서비스 이동 링크</p>
        <hr class="content-hr" />
        <input
          class="content-input"
          type="text"
          placeholder="https://"
          ref="INPUT_LINK"
          @focus="linkFocus"
        />
      </div>
      <div class="content-box contact">
        <p class="content-title bold">개발자 연락처</p>
        <hr class="content-hr" />
        <input
          class="content-input"
          type="text"
          placeholder="웹사이트"
          ref="INPUT_CONTACT_WEB"
        />
        <input
          class="content-input"
          type="text"
          placeholder="이메일"
          ref="INPUT_CONTACT_EMAIL"
        />
        <input
          class="content-input"
          type="text"
          placeholder="주소"
          ref="INPUT_CONTACT_ADDRESS"
        />
        <input
          class="content-input"
          type="text"
          placeholder="개인정보 처리방침"
          ref="INPUT_CONTACT_PRIVACY"
        />
      </div>
      <p class="content-submit-btn gradient-bg bold" @click="submitClick">
        제출
      </p>
    </div>
    <HomeFooter />
  </div>
</template>

<style scoped src="@/css/views/AppModify.css" />

<script src="@/script/views/AppModify.js" />
