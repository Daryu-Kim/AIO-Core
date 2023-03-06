import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import { db } from "../modules/Firebase";
import {
  getDocs,
  query,
  collection,
  where,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import router from "@/router";

// @ is an alias to /src
export default {
  name: "Developer",
  components: {
    HomeHeader,
    HomeFooter,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      uid: localStorage.getItem("uid"),
      myServices: [],
      documentID: "",
    };
  },
  mounted() {
    getDocs(
      query(
        collection(db, "Apps"),
        where("author_uid", "==", this.uid),
        orderBy("upload_at", "desc")
      )
    ).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          this.myServices.push(doc.data());
        }
      });
    });

    console.log(this.myServices);
  },
  methods: {
    addClick() {
      console.log("add");
    },
    viewClick() {
      localStorage.setItem("APP_DOC_TEMP", this.myServices[0].id);
      router.push("/details");
    },
    modifyClick() {
      localStorage.setItem("MODIFIED_SERVICE", this.myServices[0].id);
      router.push("/modify");
    },
    removeClick(id, name) {
      this.documentID = id;
      this.$refs.OVERLAY.classList.add("display");
      this.$refs.OVERLAY_REMOVE.classList.add("display");
      this.$refs.REMOVE_TITLE.innerHTML = `"${name}"<br/>서비스를 제거하시겠습니까?`;
    },
    cancelClick() {
      this.$refs.OVERLAY.classList.remove("display");
      this.$refs.OVERLAY_REMOVE.classList.remove("display");
    },
    async acceptClick() {
      var temp = doc(db, "Apps", this.documentID);
      console.log(this.documentID);
      await deleteDoc(temp)
        .then(() => {
          console.log("Deleted!");
        })
        .catch((error) => {
          console.log(error);
        });
      router.go(0);
    },
  },
  setup() {
    return {
      my: [Navigation, Pagination],
    };
  },
};
