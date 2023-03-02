<template>
  <div class="footer">
    <div class="footer-desktop-box">
      <p class="footer-logo audiowide gradient-color">AIO-Core</p>
      <ul class="footer-nav">
        <li class="footer-nav-item">이용약관</li>
        <li class="footer-nav-item">개인정보 처리방침</li>
        <li class="footer-nav-item">고객센터</li>
      </ul>
      <p class="footer-copyright">
        Copyright 2023. Daryu-Kim all rights reserved.
      </p>
    </div>
    <div class="footer-general-box">
      <i class="fa-brands fa-twitter gradient-color"></i>
      <i class="fa-brands fa-facebook gradient-color"></i>
      <i class="fa-brands fa-instagram gradient-color"></i>
      <i class="fa-brands fa-telegram gradient-color"></i>
      <hr v-if="defferedPrompt" />
      <i
        class="fa-solid fa-download gradient-color"
        v-if="defferedPrompt"
        @click="install"
      ></i>
    </div>
    <div class="footer-mobile-box">
      <ul class="footer-nav">
        <li class="footer-nav-item">이용약관</li>
        <li class="footer-nav-item">개인정보 처리방침</li>
        <li class="footer-nav-item">고객센터</li>
      </ul>
      <p class="footer-copyright">
        Copyright 2023. Daryu-Kim all rights reserved.
      </p>
    </div>
  </div>
</template>

<script src="@/script/components/HomeFooter.js" />

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/css/components/HomeFooter.css" />
