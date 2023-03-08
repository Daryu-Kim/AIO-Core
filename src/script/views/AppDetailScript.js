import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Autoplay, Navigation, Pagination } from "swiper";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../modules/Firebase";

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import router from "@/router";

// @ is an alias to /src
export default {
  name: "AppDetailView",
  components: {
    HomeHeader,
    HomeFooter,
    Swiper,
    SwiperSlide,
    CircleProgress,
  },
  data() {
    return {
      app_data: [],
      app_doc_temp: localStorage.getItem("APP_DOC_TEMP"),
      app_link: "",
      img_list: [1, 2, 3],
      app_category: "",
      app_user_percent: 0,
      app_func_percent: 0,
      app_aio_percent: 0,
      app_download: 0,
      app_view: 0,
      circle_size: 0,
      circle_width: 0,
    };
  },
  created() {
    this.circle_size = window.innerWidth / 5;
    if (this.circle_size >= 180) this.circle_size = 180;

    this.circle_width = window.innerWidth / 75;
    if (this.circle_width >= 16) this.circle_width = 16;
  },
  mounted() {
    this.app_data.push(this.getData(this.app_doc_temp));
    Promise.all(this.app_data).then(async (result) => {
      var update = result[0].update_at.toDate();
      var upload = result[0].upload_at.toDate();
      var user_review = (result[0].user_review / 10).toFixed(1);
      var func_review = (result[0].func_review / 10).toFixed(1);
      var aio_review = (result[0].aio_review / 10).toFixed(1);
      var all_review = (
        (Number(user_review) + Number(func_review) + Number(aio_review)) /
        3
      ).toFixed(1);
      console.log(all_review);
      this.app_view = result[0].view;
      this.app_download = result[0].download;
      this.app_link = result[0].link;
      this.img_list = result[0].img;
      this.app_category = result[0].category;
      this.app_user_percent = result[0].user_review;
      this.app_func_percent = result[0].func_review;
      this.app_aio_percent = result[0].aio_review;

      this.$refs.APP_ICON.src = result[0].icon;
      this.$refs.APP_TITLE.innerHTML = result[0].name;
      this.$refs.APP_AUTHOR.innerHTML = result[0].author;
      this.$refs.APP_REVIEW.innerHTML = all_review;
      this.$refs.APP_DOWNLOAD.innerHTML = this.app_download + 1;
      this.$refs.APP_VIEW.innerHTML = this.app_view + 1;
      this.$refs.APP_THUMBNAIL.src = result[0].thumbnail;
      this.$refs.APP_INF.innerHTML = result[0].inf;
      this.$refs.APP_UPDATE_AT.innerHTML = `${update.getFullYear()}.
        ${update.getMonth() + 1}.
        ${update.getDate()}`;
      this.$refs.APP_UPLOAD_AT.innerHTML = `${upload.getFullYear()}.
        ${upload.getMonth() + 1}.
        ${upload.getDate()}`;
      this.$refs.CONTACT_WEB.innerHTML = result[0].contact[0];
      this.$refs.CONTACT_EMAIL.innerHTML = result[0].contact[1];
      this.$refs.CONTACT_ADDRESS.innerHTML = result[0].contact[2];
      this.$refs.CONTACT_PRIVACY.innerHTML = result[0].contact[3];
      this.$refs.APP_AIO_REVIEW.innerHTML = `AIO<br/>${aio_review}`;
      this.$refs.APP_FUNC_REVIEW.innerHTML = `기능<br/>${func_review}`;
      this.$refs.APP_USER_REVIEW.innerHTML = `유저<br/>${user_review}`;
      await updateDoc(doc(db, "Apps", this.app_doc_temp), {
        view: this.app_view + 1,
      });
    });
  },
  methods: {
    getData: async (id) => {
      const docSnap = await getDoc(doc(db, "Apps", id));

      if (docSnap.exists()) {
        console.log("Document Read Complete!");
        console.log(docSnap.data());
        return docSnap.data();
      } else {
        console.log("No Such Document!");
        return undefined;
      }
    },
    async appInstallClick() {
      await updateDoc(doc(db, "Apps", this.app_doc_temp), {
        download: this.app_download + 1,
      });
      window.open(this.app_link, "_blank");
    },
    contactLabelClick() {
      if (!this.$refs.CONTACT_CHECKBOX.checked) {
        this.$refs.CONTACT_NAV.classList.remove("fa-chevron-down");
        this.$refs.CONTACT_NAV.classList.add("fa-chevron-up");
      } else {
        this.$refs.CONTACT_NAV.classList.remove("fa-chevron-up");
        this.$refs.CONTACT_NAV.classList.add("fa-chevron-down");
      }
    },
    categoryClick(category) {
      localStorage.setItem("category", category);
      router.push("/category");
    },
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("Slide Changed");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Autoplay, Grid],
      popular: [Navigation, Grid],
    };
  },
};
