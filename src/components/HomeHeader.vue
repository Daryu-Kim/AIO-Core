<template>
  <div class="header">
    <router-link class="header-mobile" to="/">
      <i class="fa-solid fa-store gradient-color"></i>
      <p class="audiowide header-logo bold">AIO</p>
      <p class="audiowide header-logo medium">Core</p>
    </router-link>
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
  <div class="overlay-menu" ref="OVERLAY_MENU"></div>
</template>

<script src="@/script/components/HomeHeader.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/css/components/HomeHeader.css" />
