import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import { db, storage } from "../modules/Firebase";
import {
  getDocs,
  query,
  collection,
  where,
  orderBy,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import router from "@/router";
import { toast } from "vue3-toastify/dist";
import { deleteObject, ref } from "firebase/storage";

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
    toast.clearAll();
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
    viewClick(index) {
      localStorage.setItem("APP_DOC_TEMP", this.myServices[index].id);
      router.push("/details");
    },
    modifyClick() {
      router.push("/modify");
    },
    reClick() {
      toast.info("관리자에게 문의해주세요!", {
        autoClose: 2000,
        theme: "colored",
      });
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
    isDarkMode() {
      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    },
    async acceptClick() {
      var is_dark;
      var temp = doc(db, "Apps", this.documentID);
      var file_ref = [];
      console.log(this.documentID);
      this.isDarkMode() ? (is_dark = "dark") : (is_dark = "light");
      toast.loading("서비스 제거중입니다!", {
        theme: is_dark,
      });

      const docSnap = await getDoc(doc(db, "Apps", this.documentID));

      if (docSnap.exists()) {
        file_ref.push(ref(storage, docSnap.data().icon));
        file_ref.push(ref(storage, docSnap.data().thumbnail));
        docSnap.data().img.forEach((el) => {
          file_ref.push(ref(storage, el));
        });
      } else {
        console.log("No Such Document!");
      }

      await deleteDoc(temp)
        .then(() => {
          console.log("Deleted!");
        })
        .catch((error) => {
          console.log(error);
        });

      file_ref.forEach(async (el) => {
        await deleteObject(el).then(() => {
          console.log("삭제");
        });
      });
      toast.clearAll();
      router.go(0);
    },
  },
  setup() {
    return {
      my: [Navigation, Pagination],
    };
  },
};
