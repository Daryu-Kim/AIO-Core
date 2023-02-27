import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Autoplay, Navigation, Pagination } from "swiper";

import { db, storage } from "../modules/Firebase";
import { getDocs, orderBy, limit, query, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import router from "@/router";

// @ is an alias to /src
export default {
  name: "HomeView",
  components: {
    HomeHeader,
    HomeFooter,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      chartList: [],
    };
  },
  mounted() {
    // Setting to Popular
    // const icon_url = ref(storage, this.chartList[1].icon);
    getDocs(
      query(collection(db, "Apps"), limit(45), orderBy("download", "desc"))
    ).then((querySnapshot) => {
      querySnapshot.forEach((doc, index) => {
        console.log(doc.data());
        this.chartList.push(doc.data());

        const icon_url = ref(storage, doc.data().icon);
        getDownloadURL(icon_url).then((url) => {
          this.$refs.APP_ICON[index].src = url;
        });
      });
    });
  },
  methods: {
    appOnClick: (id) => {
      localStorage.setItem("APP_DOC_TEMP", id);
      router.push("/details");
      alert(id);
      return 0;
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
