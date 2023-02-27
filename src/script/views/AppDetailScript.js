import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Autoplay, Navigation, Pagination } from "swiper";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../modules/Firebase";

// @ is an alias to /src
export default {
  name: "AppDetailView",
  components: {
    HomeHeader,
    HomeFooter,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      app_data: [],
      app_doc_temp: localStorage.getItem("APP_DOC_TEMP"),
      app_link: "",
      img_list: [1, 2, 3],
    };
  },
  mounted() {
    this.app_data.push(this.getData(this.app_doc_temp));
    Promise.all(this.app_data).then((result) => {
      var update = result[0].update_at.toDate();
      this.app_link = result[0].link;
      this.img_list = result[0].img;

      this.$refs.APP_ICON.src = result[0].icon;
      this.$refs.APP_TITLE.innerHTML = result[0].name;
      this.$refs.APP_AUTHOR.innerHTML = result[0].author;
      this.$refs.APP_REVIEW.innerHTML = `${result[0].review}★`;
      this.$refs.APP_DOWNLOAD.innerHTML = result[0].download;
      this.$refs.APP_VIEW.innerHTML = result[0].view;
      this.$refs.APP_THUMBNAIL.src = result[0].thumbnail;
      this.$refs.APP_UPDATE_AT.innerHTML = `${update.getFullYear()}. ${update.getMonth()}. ${update.getDate()}`;
      this.reviewProgress(result[0].review);
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
    appInstallClick() {
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
    reviewProgress(percent) {
      var RADIUS = 53.5;
      var CIRCUMFERENCE = 1 * Math.PI * RADIUS;
      var progress = percent / 50;
      var dash_offset = CIRCUMFERENCE * (1 - progress);

      console.log(dash_offset);

      this.$refs.REVIEW.innerHTML = percent / 10;
      this.$refs.BAR.style.strokeDashoffset = dash_offset;
      this.$refs.BAR.style.strokeDasharray = CIRCUMFERENCE;
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
