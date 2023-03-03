<template>
  <div class="wrapper">
    <div class="content">
      <div class="content-logo-box">
        <p class="content-login-title bold gradient-color">User Login</p>
      </div>
      <div class="content-form-box">
        <div class="content-form-input-box" ref="ID_BOX">
          <i class="fa-solid fa-user"></i>
          <input
            type="email"
            ref="ID"
            class="content-form-input regular"
            @focus="idFocus"
            @blur="idBlur"
            @keyup.enter="loginClick"
          />
        </div>
        <div class="content-form-input-box" ref="PW_BOX">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            ref="PW"
            class="content-form-input regular"
            @focus="pwFocus"
            @blur="pwBlur"
            @keyup.enter="loginClick"
          />
        </div>
        <div class="content-form-func-box">
          <p class="content-form-func-text medium" @click="registerClick">
            회원가입
          </p>
          <p class="content-form-func-text medium" @click="forgotPasswordClick">
            비밀번호를 잊으셨나요?
          </p>
        </div>
      </div>
      <p class="content-login-btn gradient-bg bold" @click="loginClick">
        로그인
      </p>
    </div>
  </div>
</template>

<style scoped src="@/css/views/UserLogin.css" />

<script src="@/script/views/UserLogin.js" />
