<template>
  <div class="wrapper">
    <div class="content">
      <div class="content-logo-box">
        <p class="content-register-title bold gradient-color">Create Account</p>
      </div>
      <div class="content-form-box">
        <div class="content-form-input-box" ref="NAME_BOX">
          <i class="fa-solid fa-user"></i>
          <input
            type="text"
            ref="NAME"
            class="content-form-input regular"
            @focus="nameFocus"
            @blur="nameBlur"
            @keyup.enter="registerClick"
            placeholder="이름"
          />
        </div>
        <div class="content-form-input-box" ref="PHONE_BOX">
          <i class="fa-solid fa-phone"></i>
          <input
            type="phone"
            ref="PHONE"
            class="content-form-input regular"
            @focus="phoneFocus"
            @blur="phoneBlur"
            @keyup.enter="registerClick"
            placeholder="휴대폰 번호 (숫자만 입력)"
          />
        </div>
        <div class="content-form-input-box" ref="ID_BOX">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            ref="ID"
            class="content-form-input regular"
            @focus="idFocus"
            @blur="idBlur"
            @keyup.enter="registerClick"
            placeholder="이메일"
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
            @keyup.enter="registerClick"
            placeholder="비밀번호"
          />
        </div>
        <div class="content-form-input-box" ref="PW_RE_BOX">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            ref="PW_RE"
            class="content-form-input regular"
            @focus="pwReFocus"
            @blur="pwReBlur"
            @keyup.enter="registerClick"
            placeholder="비밀번호 확인"
          />
        </div>
        <div class="content-form-func-box">
          <p class="content-form-func-text medium" @click="loginClick">
            이미 계정이 있으신가요?
          </p>
        </div>
      </div>
      <p class="content-login-btn gradient-bg bold" @click="registerClick">
        회원가입
      </p>
    </div>
  </div>
</template>

<style scoped src="@/css/views/UserRegister.css" />

<script src="@/script/views/UserRegister.js" />
