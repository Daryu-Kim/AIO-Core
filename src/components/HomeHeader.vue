<template>
  <div class="header">
    <div class="header-mobile">
      <router-link to="/" class="header-mobile-logo">
        <i class="fa-solid fa-store gradient-color"></i>
        <p class="audiowide header-logo bold">AIO</p>
        <p class="audiowide header-logo medium">Core</p>
      </router-link>
      <div class="header-mobile-right-box">
        <div class="header-mobile-search-box" ref="SEARCH_MOBILE_BOX">
          <input
            type="text"
            class="header-search-input"
            placeholder="스토어 검색"
            @focus="searchMobileFocusIn"
            @blur="searchMobileFocusOut"
            @keyup.enter="headerMobileSearchClick"
            ref="HEADER_MOBILE_SEARCH_INPUT"
          />
          <i
            class="fa-solid fa-magnifying-glass gradient-color"
            @click="headerMobileSearchClick"
          ></i>
        </div>
        <i class="fa-solid fa-bars gradient-color" @click="menuClick"></i>
      </div>
    </div>
    <div class="header-desktop">
      <div class="header-desktop-left-box">
        <router-link class="header-logo-box" to="/">
          <i class="fa-solid fa-store gradient-color"></i>
          <p class="audiowide header-logo bold">AIO</p>
          <p class="audiowide header-logo medium">Core</p>
        </router-link>
        <div class="header-search-box" ref="SEARCH_BOX">
          <input
            type="text"
            class="header-search-input"
            placeholder="스토어 검색"
            @focus="searchFocusIn"
            @blur="searchFocusOut"
            @keyup.enter="headerSearchClick"
            ref="HEADER_SEARCH_INPUT"
          />
          <i
            class="fa-solid fa-magnifying-glass gradient-color"
            @click="headerSearchClick"
          ></i>
        </div>
      </div>
      <div class="header-desktop-right-box">
        <p class="header-username gradient-color" @click="developerClick">
          Developer
        </p>
        <i class="fa-solid fa-bars gradient-color" @click="menuClick"></i>
      </div>
    </div>
  </div>
  <div class="overlay" ref="OVERLAY" @click="overlayClick"></div>
  <div class="overlay-menu" ref="OVERLAY_MENU">
    <div class="overlay-menu-header">
      <div class="header-mobile-logo" @click="goHome">
        <i class="fa-solid fa-store gradient-color"></i>
        <p class="audiowide header-logo bold">AIO</p>
        <p class="audiowide header-logo medium">Core</p>
      </div>
      <i class="fa-solid fa-x gradient-color" @click="overlayClick"></i>
    </div>
    <div class="overlay-menu-box">
      <p class="overlay-menu-title bold">앱</p>
      <hr class="overlay-menu-hr" />
      <div class="overlay-menu-list">
        <div
          class="overlay-menu-item"
          v-for="(item, index) in app_category"
          :key="index"
          @click="categoryClick(item)"
        >
          <p class="overlay-menu-item-title gradient-color medium">
            {{ item }}
          </p>
          <i class="fa-solid fa-chevron-right gradient-color"></i>
        </div>
      </div>
    </div>
    <div class="overlay-menu-box">
      <p class="overlay-menu-title bold">게임</p>
      <hr class="overlay-menu-hr" />
      <div class="overlay-menu-list">
        <div
          class="overlay-menu-item"
          v-for="(item, index) in game_category"
          :key="index"
          @click="categoryClick(item)"
        >
          <p class="overlay-menu-item-title gradient-color medium">
            {{ item }}
          </p>
          <i class="fa-solid fa-chevron-right gradient-color"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="@/script/components/HomeHeader.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/css/components/HomeHeader.css" />
