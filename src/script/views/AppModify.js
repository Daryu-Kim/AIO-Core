import HomeHeader from "@/components/HomeHeader.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import { db, storage } from "../modules/Firebase";
import {
  addDoc,
  collection,
  // getDocs,
  // query,
  // collection,
  // where,
  // orderBy,
  doc,
  getDoc,
  Timestamp,
  updateDoc,
  // deleteDoc,
} from "firebase/firestore";
import { toast } from "vue3-toastify";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
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
      search_tag: [],
      selected_category: "",
      selected_lang: "",
      selected_lang_color: "",
      selected_thumbnail: "",
      selected_img: [],
      contact_list: [],
      doc_id: "",
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
      if (this.$refs.INPUT_SEARCH.value) {
        this.search_tag.push(this.$refs.INPUT_SEARCH.value);
        this.$refs.INPUT_SEARCH.value = "";
      }
    },
    searchRemove(index) {
      this.search_tag.splice(index, 1);
      console.log("click");
    },
    linkFocus() {
      if (!this.$refs.INPUT_LINK.value) {
        this.$refs.INPUT_LINK.value = "https://";
      }
    },
    async submitClick() {
      const img = new File(localStorage.getItem("selected_image"), "icon.png");
      console.log(img);
      console.log(localStorage.getItem("selected_image"));
      if (!this.$refs.INPUT_NAME.value) {
        this.toastError("서비스 이름을 입력해주세요!");
        this.$refs.INPUT_NAME.focus();
      } else if (!this.$refs.INPUT_INF.value) {
        this.toastError("서비스 설명을 입력해주세요!");
        this.$refs.INPUT_INF.focus();
      } else if (!this.selected_category) {
        this.toastError("서비스 카테고리를 선택해주세요!");
      } else if (!localStorage.getItem("selected_icon")) {
        this.toastError("서비스 아이콘을 업로드해주세요!");
      } else if (!this.selected_thumbnail) {
        this.toastError("서비스 썸네일을 업로드해주세요!");
      } else if (!this.selected_img) {
        this.toastError("서비스 이미지를 업로드해주세요!");
      } else if (!this.search_tag.length) {
        this.toastError("서비스 태그를 입력해주세요!");
        this.$refs.INPUT_SEARCH.focus();
      } else if (!this.selected_lang) {
        this.toastError("서비스 개발 언어를 선택해주세요!");
      } else if (!this.$refs.INPUT_LINK.value) {
        this.toastError("서비스 이동 링크를 입력해주세요!");
        this.$refs.INPUT_LINK.focus();
      } else if (
        !this.$refs.INPUT_CONTACT_WEB.value ||
        !this.$refs.INPUT_CONTACT_EMAIL.value ||
        !this.$refs.INPUT_CONTACT_ADDRESS.value ||
        !this.$refs.INPUT_CONTACT_PRIVACY.value
      ) {
        this.toastError("개발자 연락처를 입력해주세요!");
      } else {
        var icon_url,
          thumbnail_url,
          img_urls = [];

        this.contact_list.push(this.$refs.INPUT_CONTACT_WEB.value);
        this.contact_list.push(this.$refs.INPUT_CONTACT_EMAIL.value);
        this.contact_list.push(this.$refs.INPUT_CONTACT_ADDRESS.value);
        this.contact_list.push(this.$refs.INPUT_CONTACT_PRIVACY.value);

        await addDoc(collection(db, "Apps"), {
          aio_review: 0,
          author: localStorage.getItem("username"),
          author_uid: localStorage.getItem("uid"),
          download: 0,
          func_review: 0,
          update_at: Timestamp.fromDate(new Date()),
          upload_at: Timestamp.fromDate(new Date()),
          user_review: 0,
          view: 0,
          category: this.selected_category,
          contact: this.contact_list,
          inf: this.$refs.INPUT_INF.value,
          lang: this.selected_lang,
          lang_color: this.selected_lang_color,
          link: this.$refs.INPUT_LINK.value,
          name: this.$refs.INPUT_NAME.value,
          search: this.search_tag,
        }).then(function (docRef) {
          this.doc_id = docRef.id;
        });

        icon_url = this.uploadImage(localStorage.getItem("selected_icon"));
        thumbnail_url = this.uploadImage(this.selected_thumbnail);
        img_urls = this.uploadImages(this.selected_img);

        await updateDoc(doc(db, "cities", this.doc_id), {
          id: this.doc_id,
          icon: icon_url,
          img: img_urls,
          thumbnail: thumbnail_url,
        });
      }
    },
    async uploadImage(image) {
      const storageRef = ref(storage, `${this.doc_id}/${image.name}`);
      const response = await uploadBytes(storageRef, image);
      const url = await getDownloadURL(response.ref);
      return url;
    },
    async uploadImages(images) {
      const image_promises = Array.from(images, (image) =>
        this.uploadImage(image)
      );
      const image_res = await Promise.all(image_promises);
      return image_res;
    },
    categoryChange(event) {
      this.selected_category = event.target.value;
    },
    langChange(event) {
      var value = event.target.value;
      var fixed_value = value.split(",");
      this.selected_lang = fixed_value[0];
      this.selected_lang_color = fixed_value[1];
    },
    iconChange(event) {
      console.log(event.target.files[0]);
      if (event.target.files && event.target.files[0]) {
        var width, height;
        var reader = new FileReader();
        var image = new Image();
        reader.onload = function (e) {
          localStorage.setItem("asdf", e.target.result);
          image.src = e.target.result;
        };

        image.onload = function () {
          width = this.width;
          height = this.height;
          if (width != height) {
            toast.error("1:1 비율의 아이콘만 등록 가능합니다!", {
              autoClose: 2000,
              theme: "colored",
            });
            event.target.value = "";
            localStorage.removeItem("selected_icon");
          } else if (width > 512 || height > 512) {
            toast.error("512px x 512px 이하의 아이콘만 등록 가능합니다!", {
              autoClose: 2000,
              theme: "colored",
            });
            event.target.value = "";
            localStorage.removeItem("selected_icon");
          } else {
            // localStorage.setItem("selected_icon", event.target.files[0]);
            console.log(localStorage.getItem("selected_icon"));
          }
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    },
    thumbnailChange(event) {
      const preview = document.querySelector(".content-preview");
      console.log(event.target.files[0]);
      if (event.target.files && event.target.files[0]) {
        var width, height, duration;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          var url = reader.result;
          preview.src = url;

          preview.addEventListener("loadedmetadata", function (e) {
            width = preview.videoWidth;
            height = preview.videoHeight;
            duration = preview.duration;

            if (width > 1920 || height > 1080) {
              toast.error("1920 x 1080 이하의 영상만 등록 가능합니다!", {
                autoClose: 2000,
                theme: "colored",
              });
              event.target.value = "";
              this.selected_thumbnail = "";
            } else if (event.target.files[0].size > 31457280) {
              toast.error("30mb 이하의 영상만 등록 가능합니다!", {
                autoClose: 2000,
                theme: "colored",
              });
              event.target.value = "";
              this.selected_thumbnail = "";
            } else if (duration > 60) {
              toast.error("1분 이하의 영상만 등록 가능합니다!", {
                autoClose: 2000,
                theme: "colored",
              });
              event.target.value = "";
              this.selected_thumbnail = "";
            } else {
              this.selected_thumbnail = event.target.files[0];
            }
          });
        });

        reader.readAsDataURL(event.target.files[0]);
      }
    },
    imageChange(event) {
      if (event.target.files && event.target.files[0]) {
        this.selected_img = [];
        Array.from(event.target.files).forEach((element) => {
          this.selected_img.push(element);
        });
        console.log(`selected_img: ${this.selected_img}`);
      }
    },
    toastError(msg) {
      toast.error(msg, {
        autoClose: 2000,
        theme: "colored",
      });
    },
  },
};
