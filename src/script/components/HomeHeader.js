import router from "@/router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "HomeHeader",
  props: {
    msg: String,
  },
  methods: {
    searchFocusIn: function () {
      this.$refs.SEARCH_BOX.classList.add("gradient-border");
    },
    searchFocusOut: function () {
      this.$refs.SEARCH_BOX.classList.remove("gradient-border");
    },
    headerSearchClick: function () {
      if (this.$refs.HEADER_SEARCH_INPUT.value) {
        localStorage.setItem("search", this.$refs.HEADER_SEARCH_INPUT.value);
        if (router.currentRoute.value.fullPath != "/search") {
          router.push("search");
        } else {
          router.go(router.currentRoute);
        }
      } else {
        toast.error("검색어를 입력해주세요!", {
          autoClose: 3000,
          theme: "colored",
        });
      }
    },
    menuClick: function () {
      this.$refs.OVERLAY.style.display = "block";
      this.$refs.OVERLAY_MENU.classList.add("open");
    },
    overlayClick: function () {
      this.$refs.OVERLAY.style.display = "none";
      this.$refs.OVERLAY_MENU.classList.remove("open");
    },
    developerClick: function () {
      const uid = localStorage.getItem("uid");
      if (!uid) {
        router.push("/login");
      } else {
        router.push("/developer");
      }
    },
  },
};
