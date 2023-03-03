import router from "@/router";
import { toast } from "vue3-toastify";
import { registerWithEmail } from "../modules/Firebase";

export default {
  name: "UserRegister",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    nameFocus: function () {
      this.$refs.NAME_BOX.classList.add("focused");
    },
    nameBlur: function () {
      this.$refs.NAME_BOX.classList.remove("focused");
    },
    phoneFocus: function () {
      this.$refs.PHONE_BOX.classList.add("focused");
    },
    phoneBlur: function () {
      this.$refs.PHONE_BOX.classList.remove("focused");
    },
    idFocus: function () {
      this.$refs.ID_BOX.classList.add("focused");
    },
    idBlur: function () {
      this.$refs.ID_BOX.classList.remove("focused");
    },
    pwFocus: function () {
      this.$refs.PW_BOX.classList.add("focused");
    },
    pwBlur: function () {
      this.$refs.PW_BOX.classList.remove("focused");
    },
    pwReFocus: function () {
      this.$refs.PW_RE_BOX.classList.add("focused");
    },
    pwReBlur: function () {
      this.$refs.PW_RE_BOX.classList.remove("focused");
    },
    nameCheck: function (name) {
      var reg_name = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\s|]+$/;
      if (!reg_name.test(name)) {
        return false;
      } else {
        return true;
      }
    },
    phoneCheck: function (num) {
      var reg_phone = /^[0-9]+$/;
      if (!reg_phone.test(num)) {
        return false;
      } else {
        return true;
      }
    },
    emailCheck: function (str) {
      var reg_email =
        // eslint-disable-next-line
        /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
      if (!reg_email.test(str)) {
        return false;
      } else {
        return true;
      }
    },
    errorToast: function (msg) {
      toast.error(msg, {
        autoClose: 2000,
        theme: "colored",
      });
    },
    registerClick: function () {
      if (!this.$refs.NAME.value) {
        this.errorToast("이름을 입력해주세요!");
        this.$refs.NAME.focus();
      } else {
        if (!this.nameCheck(this.$refs.NAME.value)) {
          this.errorToast("이름 형식이 잘못되었습니다!");
          this.$refs.NAME.focus();
        } else {
          if (!this.$refs.PHONE.value) {
            this.errorToast("휴대폰 번호를 입력해주세요!");
            this.$refs.PHONE.focus();
          } else {
            if (
              !this.phoneCheck(this.$refs.PHONE.value) ||
              this.$refs.PHONE.value.length != 11
            ) {
              this.errorToast("휴대폰 번호 형식이 잘못되었습니다!");
              this.$refs.PHONE.focus();
            } else {
              if (!this.$refs.ID.value) {
                this.errorToast("이메일을 입력해주세요!");
                this.$refs.ID.focus();
              } else {
                if (!this.emailCheck(this.$refs.ID.value)) {
                  this.errorToast("이메일 형식이 잘못되었습니다!");
                  this.$refs.ID.focus();
                } else {
                  if (!this.$refs.PW.value) {
                    this.errorToast("비밀번호를 입력해주세요!");
                    this.$refs.PW.focus();
                  } else {
                    if (!this.$refs.PW.value.length >= 10) {
                      this.errorToast("비밀번호를 10자 이상으로 입력해주세요!");
                      this.$refs.PW.focus();
                    } else {
                      if (!this.$refs.PW_RE.value) {
                        this.errorToast("비밀번호를 다시 한번 입력해주세요!");
                        this.$refs.PW_RE.focus();
                      } else {
                        if (this.$refs.PW.value != this.$refs.PW_RE.value) {
                          this.errorToast("비밀번호가 서로 일치하지 않습니다!");
                          this.$refs.PW.focus();
                        } else {
                          registerWithEmail(
                            this.$refs.ID.value,
                            this.$refs.PW.value,
                            this.$refs.NAME.value,
                            this.$refs.PHONE.value
                          );
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    loginClick: function () {
      router.push("/login");
    },
  },
};
