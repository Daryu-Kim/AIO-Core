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
      app_category: [],
      app_review_percent: 0,
      app_download: 0,
      app_view: 0,
    };
  },
  mounted() {
    this.app_data.push(this.getData(this.app_doc_temp));
    Promise.all(this.app_data).then(async (result) => {
      var update = result[0].update_at.toDate();
      var upload = result[0].upload_at.toDate();
      var review = (result[0].review / 10).toFixed(1);
      this.app_view = result[0].view;
      this.app_download = result[0].download;
      this.app_link = result[0].link;
      this.img_list = result[0].img;
      this.app_category = result[0].category;
      this.app_review_percent = result[0].review;

      this.$refs.APP_ICON.src = result[0].icon;
      this.$refs.APP_TITLE.innerHTML = result[0].name;
      this.$refs.APP_AUTHOR.innerHTML = result[0].author;
      this.$refs.APP_REVIEW.innerHTML = review;
      this.$refs.APP_DOWNLOAD.innerHTML = this.app_download + 1;
      this.$refs.APP_VIEW.innerHTML = this.app_view + 1;
      this.$refs.APP_THUMBNAIL.src = result[0].thumbnail;
      this.$refs.APP_PATCH.innerHTML = result[0].patch;
      this.$refs.APP_INF.innerHTML = result[0].inf;
      this.$refs.APP_UPDATE_AT.innerHTML = `${update.getFullYear()}. ${update.getMonth()}. ${update.getDate()}`;
      this.$refs.APP_UPLOAD_AT.innerHTML = `${upload.getFullYear()}. ${upload.getMonth()}. ${upload.getDate()}`;
      this.$refs.CONTACT_WEB.innerHTML = result[0].contact[0];
      this.$refs.CONTACT_EMAIL.innerHTML = result[0].contact[1];
      this.$refs.CONTACT_ADDRESS.innerHTML = result[0].contact[2];
      this.$refs.CONTACT_PRIVACY.innerHTML = result[0].contact[3];
      this.$refs.APP_CIRCLE_REVIEW.innerHTML = review;
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
