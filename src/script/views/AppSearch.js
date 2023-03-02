import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Autoplay, Navigation, Pagination } from "swiper";
import { collection, getDocs, orderBy, where, query } from "firebase/firestore";
import { db } from "../modules/Firebase";
import router from "@/router";

// @ is an alias to /src
export default {
  name: "AppSearch",
  components: {
    HomeHeader,
    HomeFooter,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      search: localStorage.getItem("search"),
      search_data: [],
    };
  },
  mounted() {
    getDocs(
      query(
        collection(db, "Apps"),
        where("search", "array-contains", this.search),
        orderBy("download", "desc")
      )
    ).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          this.search_data.push(doc.data());
        }
      });
    });
  },
  methods: {
    appOnClick(id) {
      localStorage.setItem("APP_DOC_TEMP", id);
      router.push("/details");
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
