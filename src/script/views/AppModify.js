import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import { db } from "../modules/Firebase";
import {
  // getDocs,
  // query,
  // collection,
  // where,
  // orderBy,
  doc,
  getDoc,
  // deleteDoc,
} from "firebase/firestore";
// import router from "@/router";

// @ is an alias to /src
export default {
  name: "AppModify",
  components: {
    HomeHeader,
    HomeFooter,
  },
  data() {
    return {
      uid: localStorage.getItem("uid"),
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
    searchAdd() {
      console.log("Enter");
    },
  },
};
