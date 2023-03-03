import router from "@/router";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../modules/Firebase";

export default {
  name: "HomeHeader",
  props: {
    msg: String,
  },
  data() {
    return {
      app_category: [],
      game_category: [],
    };
  },
  async mounted() {
    const docSnap = await getDoc(doc(db, "AIO", "info"));

    if (docSnap.exists()) {
      console.log("Document Read Complete!");
      console.log(docSnap.data());
      this.app_category = docSnap.data().app_category;
      this.game_category = docSnap.data().game_category;
    } else {
      console.log("No Such Document!");
    }
  },
  methods: {
    searchFocusIn: function () {
      this.$refs.SEARCH_BOX.classList.add("gradient-border");
    },
    searchFocusOut: function () {
      this.$refs.SEARCH_BOX.classList.remove("gradient-border");
    },
    searchMobileFocusIn: function () {
      this.$refs.SEARCH_MOBILE_BOX.classList.add("gradient-border");
    },
    searchMobileFocusOut: function () {
      this.$refs.SEARCH_MOBILE_BOX.classList.remove("gradient-border");
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
          autoClose: 2000,
          theme: "colored",
        });
      }
    },
    headerMobileSearchClick: function () {
      if (this.$refs.HEADER_MOBILE_SEARCH_INPUT.value) {
        localStorage.setItem(
          "search",
          this.$refs.HEADER_MOBILE_SEARCH_INPUT.value
        );
        if (router.currentRoute.value.fullPath != "/search") {
          router.push("search");
        } else {
          router.go(router.currentRoute);
        }
      } else {
        toast.error("검색어를 입력해주세요!", {
          autoClose: 2000,
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
    categoryClick: function (category) {
      localStorage.setItem("category", category);
      if (router.currentRoute.value.fullPath != "/category") {
        router.push("/category");
      } else {
        router.go(router.currentRoute);
      }
    },
    goHome: function () {
      if (router.currentRoute.value.fullPath != "/") {
        router.push("/");
      } else {
        router.go(router.currentRoute);
      }
    },
  },
};
