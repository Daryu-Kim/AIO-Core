import router from "@/router";
import { toast } from "vue3-toastify";
import { loginWithEmail } from "../modules/Firebase";

export default {
  name: "UserLogin",
  data() {
    return {};
  },
  mounted() {},
  methods: {
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
    loginClick: function () {
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
            loginWithEmail(this.$refs.ID.value, this.$refs.PW.value);
          }
        }
      }
    },
    registerClick: function () {
      router.push("/register");
    },
    forgotPasswordClick: function () {
      toast.info("관리자에게 문의하세요", {
        autoClose: 2000,
        theme: "colored",
      });
    },
  },
};
