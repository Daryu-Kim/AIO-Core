<template>
  <div class="header">
    <div class="header-mobile">
      <i class="fa-solid fa-store gradient-color"></i>
      <p class="audiowide header-logo bold">AIO</p>
      <p class="audiowide header-logo medium">Core</p>
    </div>
    <div class="header-desktop">
      <div class="header-desktop-left-box">
        <div class="header-logo-box">
          <i class="fa-solid fa-store gradient-color"></i>
          <p class="audiowide header-logo bold">AIO</p>
          <p class="audiowide header-logo medium">Core</p>
        </div>
        <div class="header-category-box">
          <input
            type="radio"
            name="category"
            id="0"
            class="header-category-radio"
            checked
          />
          <label for="0" class="header-category-item gradient-color bold">
            앱
          </label>
          <input
            type="radio"
            name="category"
            id="1"
            class="header-category-radio"
          />
          <label for="1" class="header-category-item gradient-color bold">
            게임
          </label>
        </div>
        <div class="header-search-box" ref="SEARCH_BOX">
          <input
            type="text"
            class="header-search-input"
            placeholder="스토어 검색"
            @focus="searchFocusIn"
            @blur="searchFocusOut"
          />
          <i class="fa-solid fa-magnifying-glass gradient-color"></i>
        </div>
      </div>
      <div class="header-desktop-right-box">
        <p class="header-username gradient-color">Log in</p>
        <i class="fa-solid fa-bars gradient-color"></i>
      </div>
    </div>
  </div>
</template>

<script src="@/script/components/HomeHeader.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/css/components/HomeHeader.css" />
